/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { HeroSection } from "./HeroSection";

describe("HeroSection background carousel", () => {
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

  it("only prioritizes the initially visible background", () => {
    const { container } = render(<HeroSection />);
    const backgroundImages = container.querySelectorAll(
      "[data-hero-background] img",
    );

    expect(backgroundImages).toHaveLength(3);
    expect(backgroundImages[0]).not.toHaveAttribute("loading", "lazy");
    expect(backgroundImages[1]).toHaveAttribute("loading", "lazy");
    expect(backgroundImages[2]).toHaveAttribute("loading", "lazy");
  });

  it("changes the active background with the selected content slide", async () => {
    const user = userEvent.setup();
    const { container } = render(<HeroSection />);
    const backgrounds = container.querySelectorAll("[data-hero-background]");

    expect(backgrounds).toHaveLength(3);
    expect(backgrounds[0]).toHaveAttribute("data-active", "true");

    await user.click(
      screen.getByRole("button", { name: "Heating service" }),
    );

    await waitFor(() => {
      expect(backgrounds[0]).toHaveAttribute("data-active", "false");
      expect(backgrounds[1]).toHaveAttribute("data-active", "true");
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        /Heat When\s*It Counts\./,
      );
    });
  });

  it("exposes a persistent motion pause control", () => {
    render(<HeroSection />);

    const pauseButton = screen.getByRole("button", { name: "Pause motion" });
    expect(pauseButton).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(pauseButton);

    expect(
      screen.getByRole("button", { name: "Resume motion" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(
      screen.getByRole("button", { name: "Owner-operated HVAC overview" }),
    ).toHaveAttribute("aria-current", "true");
  });
});
