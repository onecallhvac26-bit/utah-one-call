/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { HeaderShell } from "./HeaderShell";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("HeaderShell mobile navigation", () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
  });

  afterEach(() => cleanup());

  it("keeps the closed drawer inert and links the trigger to it", () => {
    render(<HeaderShell />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    const drawer = document.querySelector("#home-mobile-navigation");

    expect(trigger).toHaveAttribute("aria-controls", "home-mobile-navigation");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(drawer).toHaveAttribute("aria-hidden", "true");
    expect(drawer).toHaveAttribute("inert");
  });

  it("renders the tablet actions in call, text, estimate, menu order", () => {
    render(<HeaderShell />);

    const actions = document.querySelector(".site-header-actions");
    const responsiveActions = actions?.querySelectorAll(
      ".site-header-contact-action, .site-header-cta, .oc-menu-button",
    );

    expect(
      Array.from(responsiveActions ?? []).map((action) =>
        action.getAttribute("aria-label") ?? action.textContent?.trim(),
      ),
    ).toEqual([
      "Call (801) 864-2045",
      "Text (801) 864-2045",
      "Free Estimate",
      "Open menu",
    ]);
  });

  it("moves focus into the drawer and returns it after Escape", async () => {
    const user = userEvent.setup();
    render(<HeaderShell />);

    const trigger = screen.getByRole("button", { name: "Open menu" });
    await user.click(trigger);

    const closeButton = screen.getByRole("button", { name: "Close menu" });
    await waitFor(() => expect(closeButton).toHaveFocus());
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.keyDown(document, { key: "Escape" });

    await waitFor(() => {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(trigger).toHaveFocus();
    });
  });
});
