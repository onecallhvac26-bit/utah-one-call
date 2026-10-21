/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { EMAIL, LOCATION_ROUTE } from "@/config/site";
import { ServiceAreaSection as AboutServiceAreaSection } from "./about/ServiceAreaSection";
import { OneCrewSection } from "./about/OneCrewSection";
import { ContactHeroSection } from "./contact/ContactHeroSection";
import { ServiceAreaSection as ContactServiceAreaSection } from "./contact/ServiceAreaSection";
import { FooterShell } from "./home/FooterShell";
import { ServicesHeroSection } from "./services/ServicesHeroSection";

describe("cross-page search journeys", () => {
  afterEach(() => cleanup());

  it.each([
    ["Services", <ServicesHeroSection key="services" />],
    ["About", <OneCrewSection key="about" />],
    ["Contact", <ContactHeroSection key="contact" />],
  ])("provides a semantic breadcrumb on %s", (currentPage, component) => {
    render(component);

    const breadcrumb = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(breadcrumb).toHaveTextContent(`Home/${currentPage}`);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("connects partial coverage summaries to the complete directory", () => {
    render(
      <>
        <AboutServiceAreaSection />
        <ContactServiceAreaSection />
      </>,
    );

    const directoryLinks = screen.getAllByRole("link", {
      name: "View all 41 communities",
    });

    expect(directoryLinks).toHaveLength(2);
    directoryLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", LOCATION_ROUTE);
    });
  });

  it("renders the configured public email in the homepage footer", () => {
    render(<FooterShell />);

    expect(screen.getByRole("link", { name: EMAIL })).toHaveAttribute(
      "href",
      `mailto:${EMAIL}`,
    );
  });
});
