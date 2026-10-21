import { describe, expect, it } from "vitest";

import { PAGE_METADATA } from "@/config/page-metadata";
import { createPageMetadata } from "@/lib/metadata";

const PUBLIC_METADATA = Object.values(PAGE_METADATA);
const SUBPAGE_TITLE_SUFFIX = " | One Call Heating & Air";

describe("page metadata definitions", () => {
  it("owns one unique definition for every public content route", () => {
    expect(PUBLIC_METADATA).toHaveLength(7);
    expect(new Set(PUBLIC_METADATA.map(({ path }) => path)).size).toBe(7);
    expect(new Set(PUBLIC_METADATA.map(({ title }) => title)).size).toBe(7);
    expect(new Set(PUBLIC_METADATA.map(({ description }) => description)).size).toBe(7);
  });

  it("uses the shared brand suffix for every subpage title", () => {
    for (const page of PUBLIC_METADATA.filter(({ path }) => path !== "/")) {
      expect(page.title.endsWith(SUBPAGE_TITLE_SUFFIX)).toBe(true);
    }
  });

  it("keeps each route keyword list within bounds and free of duplicates", () => {
    for (const page of PUBLIC_METADATA) {
      expect(page.targetKeywords.length).toBeGreaterThanOrEqual(2);
      expect(page.targetKeywords.length).toBeLessThanOrEqual(6);
      expect(new Set(page.targetKeywords).size).toBe(page.targetKeywords.length);

      expect(createPageMetadata(page).keywords).toBeUndefined();
    }
  });

  it("keeps every completed marketing page indexable", () => {
    for (const page of PUBLIC_METADATA) {
      expect("indexable" in page && page.indexable === false).toBe(false);
    }
  });

  it("preserves the configured service and emergency keywords", () => {
    expect(PAGE_METADATA.services.targetKeywords).toEqual([
      "air conditioning repair",
      "HVAC repair near me",
      "furnace repair",
      "AC tune up",
      "heat pump installation",
      "mini split installation",
    ]);
    expect(PAGE_METADATA.emergency.targetKeywords).toContain(
      "same day heating and air",
    );
    expect(PUBLIC_METADATA.map(({ path }) => path)).toHaveLength(7);
  });
});
