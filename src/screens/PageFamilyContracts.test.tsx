/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { type ReactElement, type ReactNode } from "react";
import { cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import EmergencyPage from "./EmergencyPage";
import HomePage from "./HomePage";
import LocationPage from "./LocationPage";
import ServicesPage from "./ServicesPage";
import SocialMediaPage from "./SocialMediaPage";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("@/components/SectionReveal", () => ({
  SectionReveal: ({ children }: { children: ReactNode }) => children,
}));

const PAGE_FAMILIES: ReadonlyArray<[string, ReactElement]> = [
  ["home", <HomePage key="home" />],
  ["services", <ServicesPage key="services" />],
  ["about", <AboutPage key="about" />],
  ["social media", <SocialMediaPage key="social-media" />],
  ["location", <LocationPage key="location" />],
  ["emergency", <EmergencyPage key="emergency" />],
  ["contact", <ContactPage key="contact" />],
];

const PAGES_WITH_RELATED_LINKS: ReadonlyArray<[string, ReactElement]> = [
  ["services", <ServicesPage key="services-related" />],
  ["about", <AboutPage key="about-related" />],
  ["social media", <SocialMediaPage key="social-media-related" />],
  ["location", <LocationPage key="location-related" />],
  ["emergency", <EmergencyPage key="emergency-related" />],
  ["contact", <ContactPage key="contact-related" />],
];

describe("completed page-family semantics", () => {
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

  it.each(PAGE_FAMILIES)(
    "%s renders one main landmark, one H1, and unique IDs",
    (_name, page) => {
      const { container } = render(page);
      const ids = Array.from(container.querySelectorAll("[id]"), (element) =>
        element.getAttribute("id"),
      ).filter((id): id is string => Boolean(id));

      expect(container.querySelectorAll("main")).toHaveLength(1);
      expect(container.querySelectorAll("h1")).toHaveLength(1);
      expect(new Set(ids).size).toBe(ids.length);
      expect(
        container.querySelector('meta[name="viewport"][content*="user-scalable=no"]'),
      ).toBeNull();
    },
  );

  it.each(PAGE_FAMILIES)(
    "%s includes separate Quick Answer and FAQ sections",
    (name, page) => {
      const { container } = render(page);
      const quickAnswer =
        name === "home"
          ? container.querySelector("#home-quick-answer")
          : container.querySelector(".site-page-answers");
      const faqs =
        name === "home"
          ? container.querySelector("#faq")
          : container.querySelector(".site-page-faqs");

      expect(quickAnswer).not.toBeNull();
      expect(quickAnswer).toHaveTextContent("Quick Answer");
      expect(faqs).not.toBeNull();
      expect(faqs).toHaveTextContent(
        name === "home" ? "Common Questions" : "Frequently Asked Questions.",
      );
    },
  );

  it.each(PAGES_WITH_RELATED_LINKS)(
    "%s ends with Quick Answer, FAQs, and Related Pages",
    (_name, page) => {
      const { container } = render(page);
      const mainChildren = Array.from(
        container.querySelector("main")?.children ?? [],
      );
      const answersIndex = mainChildren.findIndex(
        (child) =>
          child.matches(".site-page-answers") ||
          child.querySelector(".site-page-answers"),
      );
      const faqIndex = mainChildren.findIndex(
        (child) =>
          child.matches(".site-page-faqs") ||
          child.querySelector(".site-page-faqs"),
      );
      const relatedPagesIndex = mainChildren.findIndex(
        (child) =>
          child.matches(".site-related-pages") ||
          child.querySelector(".site-related-pages"),
      );

      expect(answersIndex).toBe(relatedPagesIndex - 2);
      expect(faqIndex).toBe(relatedPagesIndex - 1);
      expect(relatedPagesIndex).toBe(mainChildren.length - 1);
    },
  );

  it("ends the homepage with separate Quick Answer and FAQ sections", () => {
    const { container } = render(<HomePage />);
    const mainChildren = Array.from(
      container.querySelector("main")?.children ?? [],
    );

    const quickAnswerSection = mainChildren.at(-2);
    const faqSection = mainChildren.at(-1);

    expect(
      quickAnswerSection?.matches("#home-quick-answer") ||
        Boolean(quickAnswerSection?.querySelector("#home-quick-answer")),
    ).toBe(true);
    expect(
      faqSection?.matches("#faq") || Boolean(faqSection?.querySelector("#faq")),
    ).toBe(true);
  });
});
