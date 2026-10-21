import { describe, expect, it } from "vitest";

import {
  GOOGLE_REVIEWS_DATA,
  MANUAL_GOOGLE_REVIEWS,
} from "@/lib/google-reviews";

describe("manual Google reviews", () => {
  it("contains the six supplied five-star reviews", () => {
    expect(MANUAL_GOOGLE_REVIEWS).toHaveLength(6);
    expect(MANUAL_GOOGLE_REVIEWS.every((review) => review.rating === 5)).toBe(true);
    expect(MANUAL_GOOGLE_REVIEWS.map((review) => review.authorName)).toEqual([
      "Amy Ogilvie",
      "Brady McMahon",
      "Mitch Scorsone",
      "Becca Curran",
      "Janica Johnson",
      "Jose Tapia",
    ]);
  });

  it("keeps unique identifiers and nonempty review copy", () => {
    const ids = MANUAL_GOOGLE_REVIEWS.map((review) => review.id);

    expect(new Set(ids).size).toBe(MANUAL_GOOGLE_REVIEWS.length);
    expect(MANUAL_GOOGLE_REVIEWS.every((review) => review.text.length > 0)).toBe(true);
    expect(GOOGLE_REVIEWS_DATA.totalReviewCount).toBe(33);
    expect(GOOGLE_REVIEWS_DATA.mapsUrl).toContain("google.com/maps/search");
  });
});
