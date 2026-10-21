import { describe, expect, it } from "vitest";

import { createPageMetadata } from "@/lib/metadata";

describe("createPageMetadata", () => {
  it("keeps route titles and canonical paths together", () => {
    expect(
      createPageMetadata({
        title: "Services | One Call",
        description: "Service description",
        path: "/services",
      }),
    ).toMatchObject({
      title: { absolute: "Services | One Call" },
      description: "Service description",
      alternates: { canonical: "/services" },
      openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "One Call Heating & Air",
        title: "Services | One Call",
        description: "Service description",
        url: "/services",
        images: [
          {
            url: "https://utahonecall.com/onecall-heating-and-air/hero-cooling-summer.jpg",
            width: 1672,
            height: 941,
            alt: "Northern Utah home with outdoor air conditioning equipment",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Services | One Call",
        description: "Service description",
        images: [
          {
            url: "https://utahonecall.com/onecall-heating-and-air/hero-cooling-summer.jpg",
            alt: "Northern Utah home with outdoor air conditioning equipment",
            width: 1672,
            height: 941,
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      },
    });
  });

  it("supports a reviewed noindex policy while allowing link discovery", () => {
    const metadata = createPageMetadata({
      title: "Reviewed Draft | One Call Heating & Air",
      description: "A reviewed draft page that is not ready for indexing.",
      path: "/reviewed-draft",
      indexable: false,
    });

    expect(metadata.robots).toEqual({
      index: false,
      follow: true,
    });
  });
});
