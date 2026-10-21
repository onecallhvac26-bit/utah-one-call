/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { PeopleSection } from "./about/PeopleSection";
import { CompanyFactSheetSection } from "./about/CompanyFactSheetSection";
import { FaqSection } from "./home/FaqSection";
import { PricingSection } from "./home/PricingSection";

describe("content depth sections", () => {
  afterEach(() => cleanup());

  it("provides a named target for published pricing", () => {
    render(<PricingSection />);

    const region = screen.getByRole("region", {
      name: "No Hidden Fees. Pricing You'll See.",
    });

    expect(region).toHaveAttribute("id", "pricing");
    expect(region).toHaveAttribute("aria-labelledby", "home-pricing-heading");
  });

  it("explains why the local operating model fits northern Utah", () => {
    render(<PeopleSection />);

    expect(
      screen.getByRole("region", { name: "Why It's Built This Way." }),
    ).toHaveTextContent("local HVAC company");
  });

  it("provides a named target for common questions", () => {
    render(<FaqSection />);

    expect(
      screen.getByRole("region", { name: "What People Ask Us." }),
    ).toHaveAttribute("id", "faq");
  });

  it("publishes a sourced company fact sheet from shared values", () => {
    render(<CompanyFactSheetSection />);

    const region = screen.getByRole("region", { name: "One Call Fact Sheet." });

    expect(region).toHaveTextContent("One Call Heating & Air");
    expect(region).toHaveTextContent(
      "41 communities across 7 northern Utah counties",
    );
    expect(screen.getByRole("link", { name: "View Service Area" }))
      .toHaveAttribute("href", "/location");
    expect(region.querySelector("time")).toHaveAttribute(
      "datetime",
      "2026-08-06",
    );
  });
});
