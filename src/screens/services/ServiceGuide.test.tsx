/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { ServiceBlock } from "./ServiceBlock";
import { ServiceDecisionSection } from "./ServiceDecisionSection";
import { ServicePlanningResourceSection } from "./ServicePlanningResourceSection";
import { ServiceToc } from "./ServiceToc";
import { serviceSections } from "./services-data";

describe("services answer structure", () => {
  afterEach(() => cleanup());

  it("maps common situations to each service option", () => {
    render(<ServiceToc />);

    expect(
      screen.getByRole("heading", {
        name: "Which HVAC service fits your situation?",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Install.*too old.*undersized/i }))
      .toHaveAttribute("href", "#install");
    expect(screen.getByRole("link", { name: /Repair.*Something is not working/i }))
      .toHaveAttribute("href", "#repair");
  });

  it("names a service section from its visible heading", () => {
    render(<ServiceBlock id="install" service={serviceSections.install} />);

    expect(screen.getByRole("region", { name: "Install." })).toContainElement(
      screen.getByRole("heading", { name: "Install." }),
    );
    expect(screen.getByText("Best fit when")).toBeInTheDocument();
    expect(screen.getByText("What to expect")).toBeInTheDocument();
  });

  it("gives visitors approval questions and clear next steps", () => {
    render(<ServiceDecisionSection />);

    expect(
      screen.getByRole("region", { name: "Know What You're Approving." }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What was tested?" }))
      .toBeInTheDocument();
    expect(screen.getByRole("link", { name: "See Published Pricing" }))
      .toHaveAttribute("href", "/#pricing");
    expect(screen.getByRole("link", { name: "Request Service" }))
      .toHaveAttribute("href", "/contact");
    expect(screen.getByRole("link", { name: "Use Planning Checklist" }))
      .toHaveAttribute("href", "/services#service-planning-checklist");
  });

  it("provides a stable, sourced service-planning reference", () => {
    render(<ServicePlanningResourceSection />);

    const region = screen.getByRole("region", {
      name: "HVAC Service Planning Checklist.",
    });

    expect(region).toHaveAttribute("id", "service-planning-checklist");
    expect(screen.getByText("Install", { selector: "dt" })).toBeInTheDocument();
    expect(screen.getByText(/Details to gather before you call/i))
      .toBeInTheDocument();
    expect(screen.getByText(/not a remote diagnosis/i)).toBeInTheDocument();
    expect(region.querySelector("time")).toHaveAttribute(
      "datetime",
      "2026-08-06",
    );
  });
});
