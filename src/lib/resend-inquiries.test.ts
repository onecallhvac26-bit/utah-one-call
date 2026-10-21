import { describe, expect, it, vi } from "vitest";

import {
  buildInquiryPayload,
  EMPTY_QUOTE_FORM_VALUES,
  HVAC_SERVICE_OPTIONS,
} from "./free-quote";
import {
  createOwnerInquiryEmail,
  deliverInquiry,
  type ResendConfig,
} from "./resend-inquiries";

const CONFIG: ResendConfig = {
  apiKey: "re_test",
  fromEmail: "One Call <quotes@send.utahonecall.com>",
  toEmail: "service@utahonecall.com",
};

const INQUIRY = buildInquiryPayload(
  {
    ...EMPTY_QUOTE_FORM_VALUES,
    name: "Alex Morgan",
    phone: "8015551212",
    email: "alex@example.com",
    service: HVAC_SERVICE_OPTIONS[1],
    details: "Furnace shows <code 12> & stops.",
  },
  true,
);

describe("Resend inquiry delivery", () => {
  it("escapes customer-provided HTML in the owner email", () => {
    const email = createOwnerInquiryEmail(INQUIRY, CONFIG);

    expect(email.reply_to).toBe("alex@example.com");
    expect(email.html).toContain("&lt;code 12&gt; &amp; stops.");
    expect(email.html).not.toContain("<code 12>");
  });

  it("sends the owner notification before the customer confirmation", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ id: "owner-email" }), { status: 200 }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ id: "customer-email" }), { status: 200 }),
      );

    const result = await deliverInquiry(INQUIRY, CONFIG, fetcher);

    expect(result).toEqual({
      inquiryEmailId: "owner-email",
      customerConfirmationSent: true,
    });
    expect(fetcher).toHaveBeenCalledTimes(2);
    expect(JSON.parse(String(fetcher.mock.calls[0]?.[1]?.body))).toMatchObject({
      to: [CONFIG.toEmail],
      reply_to: INQUIRY.email,
    });
    expect(JSON.parse(String(fetcher.mock.calls[1]?.[1]?.body))).toMatchObject({
      to: [INQUIRY.email],
      reply_to: CONFIG.toEmail,
    });
  });
});
