/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { PAGE_JOURNEYS, type PageJourneyKey } from "@/config/site-navigation";
import { RelatedPagesSection } from "./RelatedPagesSection";

describe("related page journeys", () => {
  afterEach(() => cleanup());

  it.each(Object.keys(PAGE_JOURNEYS) as PageJourneyKey[])(
    "renders the configured links for %s",
    (page) => {
      const journey = PAGE_JOURNEYS[page];
      render(<RelatedPagesSection page={page} />);

      const region = screen.getByRole("region", { name: journey.heading });
      const navigation = within(region).getByRole("navigation", {
        name: `${journey.eyebrow} links`,
      });
      const links = within(navigation).getAllByRole("link");

      expect(links).toHaveLength(journey.links.length);
      journey.links.forEach((link) => {
        expect(within(navigation).getByRole("link", { name: new RegExp(link.label) })).toHaveAttribute(
          "href",
          link.href,
        );
      });
    },
  );
});
