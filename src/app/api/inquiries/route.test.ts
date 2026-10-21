import { describe, expect, it } from "vitest";

import { POST } from "./route";

function createRequest(body: unknown) {
  return new Request("https://utahonecall.com/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/inquiries", () => {
  it("rejects invalid inquiry data before attempting delivery", async () => {
    const response = await POST(createRequest({ termsAccepted: true }));
    const body = (await response.json()) as {
      error: string;
      fields: Record<string, string>;
    };

    expect(response.status).toBe(400);
    expect(body.error).toBe("Please correct the highlighted fields.");
    expect(body.fields).toMatchObject({
      name: expect.any(String),
      phone: expect.any(String),
      email: expect.any(String),
      service: expect.any(String),
    });
  });

  it("silently accepts honeypot submissions without sending email", async () => {
    const response = await POST(createRequest({ website: "spam.example" }));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      data: { customerConfirmationSent: false },
    });
  });
});
