import { describe, expect, it } from "vitest";

import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  EMERGENCY_ROUTE,
  FAQ_ROUTE,
  LOCATION_ROUTE,
  PRICING_ROUTE,
  SERVICES_ROUTE,
  SOCIAL_MEDIA_ROUTE,
} from "@/config/site";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
  PAGE_BREADCRUMBS,
  PAGE_JOURNEYS,
  type PageJourneyKey,
} from "@/config/site-navigation";

describe("shared footer navigation", () => {
  it("keeps service anchors centralized and unique", () => {
    const hrefs = FOOTER_SERVICE_LINKS.map(([, href]) => href);

    expect(new Set(hrefs).size).toBe(hrefs.length);
    expect(hrefs).toEqual([
      "/services#install",
      "/services#repair",
      "/services#service",
      "/services#maintenance",
    ]);
  });

  it("links every footer family to the completed service-area page", () => {
    expect(FOOTER_COMPANY_LINKS).toContainEqual([
      "Service Area",
      LOCATION_ROUTE,
    ]);
  });

  it("maps each completed leaf page to three unique supporting destinations", () => {
    const ownRoutes: Record<PageJourneyKey, string> = {
      services: SERVICES_ROUTE,
      about: ABOUT_ROUTE,
      socialMedia: SOCIAL_MEDIA_ROUTE,
      location: LOCATION_ROUTE,
      emergency: EMERGENCY_ROUTE,
      contact: CONTACT_ROUTE,
    };

    for (const page of Object.keys(PAGE_JOURNEYS) as PageJourneyKey[]) {
      const hrefs = PAGE_JOURNEYS[page].links.map((link) => link.href);

      expect(hrefs).toHaveLength(3);
      expect(new Set(hrefs).size).toBe(hrefs.length);
      expect(hrefs).not.toContain(ownRoutes[page]);
    }
  });

  it("uses stable homepage anchors for FAQ and published pricing support", () => {
    expect(FAQ_ROUTE).toBe("/#faq");
    expect(PRICING_ROUTE).toBe("/#pricing");
    expect(PAGE_JOURNEYS.services.links.some(({ href }) => href === FAQ_ROUTE)).toBe(true);
    expect(PAGE_JOURNEYS.contact.links.some(({ href }) => href === PRICING_ROUTE)).toBe(true);
  });

  it("owns the visible and structured-data breadcrumb contract", () => {
    expect(PAGE_BREADCRUMBS).toEqual({
      services: { path: SERVICES_ROUTE, label: "Services" },
      about: { path: ABOUT_ROUTE, label: "About" },
      location: { path: LOCATION_ROUTE, label: "Service Area" },
      contact: { path: CONTACT_ROUTE, label: "Contact" },
    });
  });
});
