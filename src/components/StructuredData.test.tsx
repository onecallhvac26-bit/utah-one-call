import { describe, expect, it } from "vitest";

import { serializeStructuredData } from "@/components/StructuredData";

describe("serializeStructuredData", () => {
  it("escapes opening angle brackets before embedding JSON-LD in HTML", () => {
    expect(serializeStructuredData({ value: "</script>" })).toBe(
      '{"value":"\\u003c/script>"}',
    );
  });
});
