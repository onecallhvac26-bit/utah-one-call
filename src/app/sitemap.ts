import type { MetadataRoute } from "next";

import { INDEXABLE_PAGE_PATHS } from "@/config/route-catalog";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PAGE_PATHS.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
  }));
}
