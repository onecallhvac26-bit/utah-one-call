import type { Metadata } from "next";

import {
  SITE_NAME,
  SITE_OPEN_GRAPH_LOCALE,
  SITE_PREVIEW_IMAGE_ALT,
  SITE_PREVIEW_IMAGE_HEIGHT,
  SITE_PREVIEW_IMAGE_URL,
  SITE_PREVIEW_IMAGE_WIDTH,
} from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  indexable?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  indexable = true,
}: PageMetadataInput): Metadata {
  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: SITE_OPEN_GRAPH_LOCALE,
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [
        {
          url: SITE_PREVIEW_IMAGE_URL,
          width: SITE_PREVIEW_IMAGE_WIDTH,
          height: SITE_PREVIEW_IMAGE_HEIGHT,
          alt: SITE_PREVIEW_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: SITE_PREVIEW_IMAGE_URL,
          alt: SITE_PREVIEW_IMAGE_ALT,
          width: SITE_PREVIEW_IMAGE_WIDTH,
          height: SITE_PREVIEW_IMAGE_HEIGHT,
        },
      ],
    },
    robots: indexable
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        }
      : {
          index: false,
          follow: true,
        },
  };
}
