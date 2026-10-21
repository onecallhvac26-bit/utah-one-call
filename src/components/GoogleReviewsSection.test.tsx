/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { GoogleReviewsSection } from "./GoogleReviewsSection";

describe("GoogleReviewsSection carousel", () => {
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

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("automatically advances while the carousel is idle", () => {
    vi.useFakeTimers();

    render(<GoogleReviewsSection />);

    expect(
      screen.getByText("Showing reviews 1–3 of 6 featured reviews"),
    ).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(6_000));

    expect(
      screen.getByText("Showing reviews 4–6 of 6 featured reviews"),
    ).toBeInTheDocument();
  });

  it("shows the supplied total and advances to the next review page", async () => {
    const user = userEvent.setup();

    render(<GoogleReviewsSection />);

    expect(screen.getByText("33 Google reviews")).toBeInTheDocument();
    expect(screen.getByText("Amy Ogilvie")).toBeInTheDocument();
    expect(screen.queryByText("Becca Curran")).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Show next reviews" }),
    );

    expect(
      screen.getByText("Showing reviews 4–6 of 6 featured reviews"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Show review page 2 of 2" }),
    ).toHaveAttribute("aria-current", "true");
  });

  it("keeps automatic advance paused until the user resumes it", () => {
    vi.useFakeTimers();
    render(<GoogleReviewsSection />);

    const pauseButton = screen.getByRole("button", { name: "Pause reviews" });
    fireEvent.click(pauseButton);

    expect(pauseButton).toHaveAttribute("aria-pressed", "true");
    act(() => vi.advanceTimersByTime(12_000));
    expect(
      screen.getByText("Showing reviews 1–3 of 6 featured reviews"),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Resume reviews" }));
    act(() => vi.advanceTimersByTime(6_000));
    expect(
      screen.getByText("Showing reviews 4–6 of 6 featured reviews"),
    ).toBeInTheDocument();
  });
});
