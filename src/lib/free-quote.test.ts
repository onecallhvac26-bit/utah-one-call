import { describe, expect, it } from "vitest";

import {
  buildInquiryPayload,
  EMPTY_QUOTE_FORM_VALUES,
  HVAC_SERVICE_OPTIONS,
  isHoneypotSubmission,
  parseInquiryPayload,
  sanitizeQuoteField,
  validateQuoteForm,
} from "./free-quote";

const VALID_VALUES = {
  ...EMPTY_QUOTE_FORM_VALUES,
  name: "Alex Morgan",
  phone: "8015551212",
  email: "alex@example.com",
  service: HVAC_SERVICE_OPTIONS[0],
};

describe("free quote validation", () => {
  it("sanitizes phone numbers and validates required fields", () => {
    expect(sanitizeQuoteField("phone", "(801) 555-1212")).toBe("8015551212");
    expect(validateQuoteForm(VALID_VALUES)).toEqual({});
    expect(validateQuoteForm(EMPTY_QUOTE_FORM_VALUES)).toMatchObject({
      name: expect.any(String),
      phone: expect.any(String),
      email: expect.any(String),
      service: expect.any(String),
    });
  });

  it("parses and normalizes valid server payloads", () => {
    const result = parseInquiryPayload({
      ...buildInquiryPayload(VALID_VALUES, true),
      email: "  ALEX@EXAMPLE.COM ",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("alex@example.com");
      expect(result.data.state).toBe("Utah");
    }
  });

  it("rejects missing consent and detects the honeypot", () => {
    const result = parseInquiryPayload(buildInquiryPayload(VALID_VALUES, false));

    expect(result).toMatchObject({
      success: false,
      message: "Consent is required before submitting.",
    });
    expect(isHoneypotSubmission({ website: "spam.example" })).toBe(true);
  });
});
