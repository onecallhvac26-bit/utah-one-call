/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { GOOGLE_SERVICE_AREA_MAP_EMBED_URL } from "@/config/service-area-map";
import { ServiceAreaSection } from "./ServiceAreaSection";

describe("ServiceAreaSection", () => {
  let desktopMatches = false;

  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation(() => ({
      matches: desktopMatches,
      media: "(min-width: 721px)",
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => cleanup());

  it("embeds the configured Google My Maps service-area map on desktop", async () => {
    desktopMatches = true;
    render(<ServiceAreaSection />);

    expect(
      await screen.findByTitle(
        "Google map of One Call Heating and Air's northern Utah service area",
      ),
    ).toHaveAttribute("src", GOOGLE_SERVICE_AREA_MAP_EMBED_URL);
    expect(
      screen.queryByRole("img", {
        name: "One Call Heating and Air service area across northern Utah",
      }),
    ).not.toBeInTheDocument();
  });

  it("provides the static mobile map and a link to the interactive map", () => {
    desktopMatches = false;
    render(<ServiceAreaSection />);

    expect(
      screen.getByRole("img", {
        name: "One Call Heating and Air service area across northern Utah",
      }),
    ).toHaveAttribute("src", expect.stringContaining("%2Fpics%2Fimage.png"));
    expect(
      screen.getByRole("link", {
        name: "View the interactive service-area map",
      }),
    ).toHaveAttribute("href", GOOGLE_SERVICE_AREA_MAP_EMBED_URL);
    expect(
      screen.queryByTitle(
        "Google map of One Call Heating and Air's northern Utah service area",
      ),
    ).not.toBeInTheDocument();
  });
});
