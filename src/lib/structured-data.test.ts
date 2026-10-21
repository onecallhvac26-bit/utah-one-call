import { describe, expect, it } from "vitest";

import {
  createBreadcrumbStructuredData,
  createFaqStructuredData,
  createServiceAreaStructuredData,
  createSiteStructuredData,
} from "@/lib/structured-data";
import { countyServiceAreas } from "@/screens/location/location-data";

describe("structured data builders", () => {
  it("publishes only verified site and organization facts", () => {
    expect(createSiteStructuredData(countyServiceAreas)).toEqual({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://utahonecall.com/#website",
          url: "https://utahonecall.com/",
          name: "One Call Heating & Air",
          inLanguage: "en-US",
          publisher: {
            "@id": "https://utahonecall.com/#organization",
          },
        },
        {
          "@type": "Organization",
          "@id": "https://utahonecall.com/#organization",
          name: "One Call Heating & Air",
          url: "https://utahonecall.com/",
        description:
          "Owner-operated HVAC from Brigham City across northern Utah. Furnace and AC install, 24/7 repair, tune-ups, and maintenance plans. (801) 864-2045.",
          logo: {
            "@type": "ImageObject",
            "@id": "https://utahonecall.com/#logo",
            url: "https://utahonecall.com/onecall-heating-and-air/logo.png",
            contentUrl:
              "https://utahonecall.com/onecall-heating-and-air/logo.png",
            width: 1051,
            height: 718,
          },
          telephone: "+18018642045",
          email: "brownzowl4626@gmail.com",
          areaServed: countyServiceAreas.map(({ county }) => ({
            "@type": "AdministrativeArea",
            name: `${county}, Utah`,
          })),
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+18018642045",
            email: "brownzowl4626@gmail.com",
            areaServed: "Northern Utah",
            availableLanguage: "English",
          },
        },
      ],
    });
  });

  it("connects the location page to the verified county and city coverage", () => {
    const structuredData = createServiceAreaStructuredData(countyServiceAreas);

    expect(structuredData).toMatchObject({
      "@type": "Service",
      "@id": "https://utahonecall.com/location#service-area",
      name: "Northern Utah HVAC service area",
      url: "https://utahonecall.com/location",
      provider: {
        "@id": "https://utahonecall.com/#organization",
      },
      availableChannel: {
        serviceUrl: "https://utahonecall.com/contact",
        servicePhone: {
          telephone: "+18018642045",
        },
      },
    });
    expect(structuredData.areaServed).toHaveLength(7);
    expect(
      structuredData.areaServed.flatMap(({ containsPlace }) => containsPlace),
    ).toHaveLength(41);
  });

  it("excludes unsupported or unverified rich-result claims", () => {
    const serializedData = JSON.stringify({
      site: createSiteStructuredData(countyServiceAreas),
      serviceArea: createServiceAreaStructuredData(countyServiceAreas),
    });

    expect(serializedData).not.toContain("PostalAddress");
    expect(serializedData).not.toContain("streetAddress");
    expect(serializedData).not.toContain("LocalBusiness");
    expect(serializedData).not.toContain("GeoCoordinates");
    expect(serializedData).not.toContain('"@type":"Review"');
    expect(serializedData).not.toContain("AggregateRating");
    expect(serializedData).not.toContain("FAQPage");
    expect(serializedData).not.toContain("Article");
    expect(serializedData).not.toContain("SearchAction");
  });

  it("matches a visible two-level page breadcrumb", () => {
    expect(
      createBreadcrumbStructuredData({
        name: "Service Area",
        path: "/location",
      }),
    ).toMatchObject({
      "@type": "BreadcrumbList",
      "@id": "https://utahonecall.com/location#breadcrumb",
      itemListElement: [
        {
          position: 1,
          name: "Home",
          item: "https://utahonecall.com/",
        },
        {
          position: 2,
          name: "Service Area",
          item: "https://utahonecall.com/location",
        },
      ],
    });
  });

  it("maps visible questions and answers into route-owned FAQ data", () => {
    expect(
      createFaqStructuredData({
        path: "/emergency",
        questions: [
          {
            question: "How should I request emergency HVAC help?",
            answer: "Call the direct emergency line.",
          },
        ],
      }),
    ).toEqual({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://utahonecall.com/emergency#faq",
      url: "https://utahonecall.com/emergency",
      mainEntity: [
        {
          "@type": "Question",
          name: "How should I request emergency HVAC help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Call the direct emergency line.",
          },
        },
      ],
    });
  });
});
