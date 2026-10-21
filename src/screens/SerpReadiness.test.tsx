/* @vitest-environment jsdom */

import "@testing-library/jest-dom/vitest";

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PAGE_METADATA } from "@/config/page-metadata";
import { FaqSection } from "./home/FaqSection";
import { HomeQuickAnswerSection } from "./home/HomeQuickAnswerSection";
import { hvacQuickAnswer } from "./home/home-data";

describe("SERP-ready page content", () => {
  it("keeps every public route title and description unique and useful", () => {
    const pages = Object.values(PAGE_METADATA);

    expect(new Set(pages.map(({ title }) => title)).size).toBe(pages.length);
    expect(new Set(pages.map(({ description }) => description)).size).toBe(
      pages.length,
    );

    pages.forEach(({ title, description }) => {
      expect(title.trim().length).toBeGreaterThanOrEqual(30);
      expect(description.trim().length).toBeGreaterThanOrEqual(50);
    });
  });

  it("renders an always-visible concise HVAC answer and matching FAQ data", () => {
    const { container } = render(
      <>
        <HomeQuickAnswerSection />
        <FaqSection />
      </>,
    );

    const summary = screen.getByRole("article", {
      name: hvacQuickAnswer.question,
    });

    expect(summary).toHaveTextContent(hvacQuickAnswer.answer);
    expect(summary).toHaveTextContent("Services");
    expect(summary).toHaveTextContent("Equipment");
    expect(summary).toHaveTextContent("Service area");
    expect(within(summary).getAllByRole("term")).toHaveLength(3);
    expect(within(summary).getAllByRole("definition")).toHaveLength(3);

    const script = container.querySelector('script[type="application/ld+json"]');
    const structuredData = JSON.parse(script?.textContent ?? "{}");

    expect(structuredData).toMatchObject({
      "@type": "FAQPage",
      url: "https://utahonecall.com/",
    });
    expect(structuredData.mainEntity).toHaveLength(7);
    expect(structuredData.mainEntity[0]).toMatchObject({
      name: hvacQuickAnswer.question,
      acceptedAnswer: { text: hvacQuickAnswer.answer },
    });
  });
});
