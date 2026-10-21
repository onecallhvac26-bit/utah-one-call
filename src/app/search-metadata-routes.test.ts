import { describe, expect, it } from "vitest";

import { PAGE_METADATA } from "@/config/page-metadata";
import { INDEXABLE_PAGE_PATHS } from "@/config/route-catalog";
import { SITE_URL } from "@/config/site";
import robots from "./robots";
import sitemap from "./sitemap";

describe("search metadata routes", () => {
  it("publishes the sitemap and keeps API routes out of crawl", () => {
    expect(robots()).toEqual({
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/api/",
        },
        {
          userAgent: "OAI-SearchBot",
          allow: "/",
          disallow: "/api/",
        },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
      host: SITE_URL,
    });
  });

  it("includes every completed public page", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toEqual(
      INDEXABLE_PAGE_PATHS.map((path) => new URL(path, SITE_URL).toString()),
    );
    expect(urls).toEqual([
      `${SITE_URL}/`,
      `${SITE_URL}/services`,
      `${SITE_URL}/about`,
      `${SITE_URL}/about/social-media`,
      `${SITE_URL}/location`,
      `${SITE_URL}/emergency`,
      `${SITE_URL}/contact`,
    ]);
  });

  it("derives sitemap inclusion from the same metadata indexability policy", () => {
    const sitemapPaths = sitemap().map(({ url }) => new URL(url).pathname);
    const noindexPaths = Object.values(PAGE_METADATA)
      .filter((page) => "indexable" in page && page.indexable === false)
      .map(({ path }) => path);

    expect(sitemapPaths).toEqual(INDEXABLE_PAGE_PATHS);
    for (const path of noindexPaths) {
      expect(sitemapPaths).not.toContain(path);
    }
  });

  it("keeps sitemap entries limited to supported canonical URL data", () => {
    expect(sitemap()).toEqual(
      INDEXABLE_PAGE_PATHS.map((path) => ({
        url: new URL(path, SITE_URL).toString(),
      })),
    );
  });
});
