/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { type ReactNode } from "react";
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import EmergencyPage from "./EmergencyPage";
import SocialMediaPage from "./SocialMediaPage";

vi.mock("next/navigation", () => ({
  usePathname: () => "/emergency",
}));

vi.mock("@/components/SectionReveal", () => ({
  SectionReveal: ({ children }: { children: ReactNode }) => children,
}));

describe("completed emergency and social-media pages", () => {
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

  it("renders the emergency page as complete urgent-service guidance", () => {
    render(<EmergencyPage />);

    const hero = screen.getByRole("region", { name: "System down? Call One Call." });

    expect(within(hero).getByRole("heading", { level: 1, name: "System down? Call One Call." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "If Any of These Are Happening, Call Now." })).toBeInTheDocument();
    expect(within(hero).getByRole("link", { name: "Call (801) 864-2045" })).toHaveAttribute("href", "tel:+18018642045");
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
  });

  it("renders the social-media route as a useful project-update page", () => {
    render(<SocialMediaPage />);

    const hero = screen.getByRole("region", { name: "Useful updates. No noise." });

    expect(within(hero).getByRole("heading", { level: 1, name: "Useful updates. No noise." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How to Use What You Find Here." })).toBeInTheDocument();
    expect(within(hero).getByRole("link", { name: "Explore Services" })).toHaveAttribute("href", "/services");
    expect(screen.queryByText(/coming soon/i)).not.toBeInTheDocument();
  });

  it.each([
    ["emergency", <EmergencyPage key="emergency" />, 3],
    ["social media", <SocialMediaPage key="social-media" />, 1],
  ])("places reviews in the intended %s page position", (_label, page, expectedIndex) => {
    const { container } = render(page);
    const mainChildren = Array.from(container.querySelector("main")?.children ?? []);
    const reviewIndex = mainChildren.findIndex(
      (child) => child.matches(".oc-google-reviews") || child.querySelector(".oc-google-reviews"),
    );

    expect(mainChildren[0]?.querySelector("h1")).not.toBeNull();
    expect(reviewIndex).toBe(expectedIndex);
  });
});
