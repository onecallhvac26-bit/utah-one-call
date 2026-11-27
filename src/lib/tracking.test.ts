// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";

import { toE164UsPhone, trackPhoneClick, trackQuoteFormSuccess } from "./tracking";

afterEach(() => {
  delete window.dataLayer;
});

describe("tracking", () => {
  it("formats US phone numbers as E.164", () => {
    expect(toE164UsPhone("8015551234")).toBe("+18015551234");
    expect(toE164UsPhone("1 (801) 555-1234")).toBe("+18015551234");
    expect(toE164UsPhone("555")).toBe("");
  });

  it("pushes quote_form_success with normalized user data", () => {
    trackQuoteFormSuccess({
      email: " Jane@Example.com ",
      phone: "8015551234",
      service: "Furnace repair",
    });

    expect(window.dataLayer).toEqual([
      {
        event: "quote_form_success",
        form_service: "Furnace repair",
        user_data: { email: "jane@example.com", phone_number: "+18015551234" },
      },
    ]);
  });

  it("pushes phone_click with the link and page", () => {
    trackPhoneClick("tel:+18018642045", "/furnace-repair");

    expect(window.dataLayer).toEqual([
      { event: "phone_click", phone_href: "tel:+18018642045", click_page: "/furnace-repair" },
    ]);
  });
});
