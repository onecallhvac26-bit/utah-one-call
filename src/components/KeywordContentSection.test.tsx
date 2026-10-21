/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { aboutKeywordContent } from "@/screens/about/about-data";
import { contactKeywordContent } from "@/screens/contact/contact-data";
import { emergencyKeywordContent } from "@/screens/emergency/emergency-data";
import { locationKeywordContent } from "@/screens/location/location-data";
import { servicesKeywordContent } from "@/screens/services/services-data";
import { socialMediaKeywordContent } from "@/screens/social-media/social-media-data";
import { KeywordContentSection } from "./KeywordContentSection";

const CONTENT_DEFINITIONS = [
  servicesKeywordContent,
  aboutKeywordContent,
  locationKeywordContent,
  contactKeywordContent,
  emergencyKeywordContent,
  socialMediaKeywordContent,
] as const;

describe("keyword content sections", () => {
  afterEach(() => cleanup());

  it.each(CONTENT_DEFINITIONS)(
    "renders $id as useful linked content",
    (content) => {
      render(<KeywordContentSection content={content} />);

      const section = screen.getByRole("region", { name: content.heading });

      expect(section).toHaveAttribute("id", content.id);
      expect(within(section).getAllByRole("article")).toHaveLength(3);
      expect(within(section).getAllByRole("link").length).toBeGreaterThanOrEqual(
        2,
      );
      expect(section).toHaveTextContent(content.introduction);
    },
  );

  it("renders the configured service phrases and links", () => {
    render(<KeywordContentSection content={servicesKeywordContent} />);

    const section = screen.getByRole("region", {
      name: servicesKeywordContent.heading,
    });

    expect(section).toHaveTextContent(/air conditioning repair/i);
    expect(section).toHaveTextContent(/furnace repair/i);
    expect(section).toHaveTextContent("heat pump");
    expect(section).toHaveTextContent("mini-splits");
  });
});
