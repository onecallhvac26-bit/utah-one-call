/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LOCATION_ROUTE, SERVICES_ROUTE } from "@/config/site";
import { PrimaryNavigation } from "./PrimaryNavigation";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("PrimaryNavigation search anchors", () => {
  afterEach(() => cleanup());

  it.each([false, true])(
    "labels the location directory as Service Area (mobile: %s)",
    (mobile) => {
      render(
        <nav>
          <PrimaryNavigation mobile={mobile} />
        </nav>,
      );

      expect(
        screen.getByRole("link", { name: "Service Area" }),
      ).toHaveAttribute("href", LOCATION_ROUTE);
      expect(
        screen.queryByRole("link", { name: "Location" }),
      ).not.toBeInTheDocument();
    },
  );

  it.each([false, true])(
    "labels the services route as HVAC Services (mobile: %s)",
    (mobile) => {
      render(
        <nav>
          <PrimaryNavigation mobile={mobile} />
        </nav>,
      );

      expect(
        screen.getByRole("link", { name: "HVAC Services" }),
      ).toHaveAttribute("href", SERVICES_ROUTE);
      expect(
        screen.queryByRole("link", { name: "Services" }),
      ).not.toBeInTheDocument();
    },
  );
});
