/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { aboutAnswersContent } from "@/screens/about/about-data";
import { contactAnswersContent } from "@/screens/contact/contact-data";
import { emergencyAnswersContent } from "@/screens/emergency/emergency-data";
import { locationAnswersContent } from "@/screens/location/location-data";
import { servicesAnswersContent } from "@/screens/services/services-data";
import { socialMediaAnswersContent } from "@/screens/social-media/social-media-data";
import { PageAnswersSection } from "./PageAnswersSection";

const PAGE_ANSWERS = [
  servicesAnswersContent,
  aboutAnswersContent,
  socialMediaAnswersContent,
  locationAnswersContent,
  emergencyAnswersContent,
  contactAnswersContent,
] as const;

describe("page answer sections", () => {
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

  it.each(PAGE_ANSWERS)(
    "renders $path answers visibly and mirrors them in structured data",
    (content) => {
      const { container } = render(<PageAnswersSection content={content} />);
      const quickAnswerSection = screen.getByRole("region", {
        name: content.heading,
      });
      const faqSection = screen.getByRole("region", {
        name: "Frequently Asked Questions.",
      });
      const quickAnswer = within(quickAnswerSection).getByRole("article", {
        name: content.quickAnswer.question,
      });
      const script = container.querySelector('script[type="application/ld+json"]');

      expect(quickAnswerSection).toHaveAttribute("id", content.id);
      expect(faqSection).toHaveAttribute("id", `${content.id}-faqs`);
      expect(quickAnswer).toHaveTextContent(content.quickAnswer.answer);
      expect(within(faqSection).getAllByRole("article")).toHaveLength(
        content.faqs.length,
      );
      expect(script).not.toBeNull();

      const firstQuestion = within(faqSection).getByRole("button", {
        name: content.faqs[0].question,
      });
      const firstAnswer = container.querySelector(
        `#${content.id}-faq-answer-0`,
      );

      expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
      expect(firstAnswer).not.toBeNull();
      expect(firstAnswer).toHaveAttribute("aria-hidden", "true");
      fireEvent.click(firstQuestion);
      expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
      expect(firstAnswer).toHaveAttribute("aria-hidden", "false");
      expect(firstAnswer).toHaveTextContent(content.faqs[0].answer);

      const structuredData = JSON.parse(script?.textContent ?? "{}");
      expect(structuredData).toMatchObject({
        "@type": "FAQPage",
        url: `https://utahonecall.com${content.path}`,
      });
      expect(structuredData.mainEntity).toHaveLength(content.faqs.length + 1);
      expect(structuredData.mainEntity[0]).toMatchObject({
        name: content.quickAnswer.question,
        acceptedAnswer: { text: content.quickAnswer.answer },
      });
    },
  );

  it("keeps every page question unique", () => {
    const questions = PAGE_ANSWERS.flatMap((content) => [
      content.quickAnswer.question,
      ...content.faqs.map(({ question }) => question),
    ]);

    expect(new Set(questions).size).toBe(questions.length);
  });
});
