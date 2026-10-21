/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { LocationHeroSection } from "./LocationHeroSection";

describe("LocationHeroSection", () => {
  afterEach(() => cleanup());

  it("provides a breadcrumb back to the homepage", () => {
    render(<LocationHeroSection />);

    const breadcrumb = screen.getByRole("navigation", {
      name: "Breadcrumb",
    });

    expect(breadcrumb).toHaveTextContent(/Home.*Service Area/);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/",
    );
  });
});
