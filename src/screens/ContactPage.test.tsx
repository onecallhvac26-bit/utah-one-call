/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { type ReactNode } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ContactPage from "./ContactPage";

vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

vi.mock("@/components/SectionReveal", () => ({
  SectionReveal: ({ children }: { children: ReactNode }) => children,
}));

describe("ContactPage section order", () => {
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

  it("places Google reviews after the quote form", () => {
    render(<ContactPage />);

    const quoteSection = screen.getByRole("region", {
      name: "Request a free HVAC quote",
    });
    const reviewSection = screen.getByRole("region", {
      name: "Local Work. Public Feedback.",
    });

    const relationship = quoteSection.compareDocumentPosition(reviewSection);

    expect(relationship & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
