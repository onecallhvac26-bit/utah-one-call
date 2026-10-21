import { describe, expect, it } from "vitest";

import { PAGE_METADATA } from "@/config/page-metadata";
import {
  INDEXABLE_PAGE_PATHS,
  OPERATIONAL_ROUTES,
  PUBLIC_PAGE_ROUTES,
  UTILITY_ROUTES,
} from "@/config/route-catalog";
import {
  OPERATIONAL_ROUTE_PATHS,
  ROUTE_FRAGMENTS,
  ROUTE_PATHS,
} from "@/config/route-paths";

describe("route catalog", () => {
  it("maps every metadata definition to one unique stable public path", () => {
    expect(PUBLIC_PAGE_ROUTES).toHaveLength(Object.keys(PAGE_METADATA).length);
    expect(new Set(PUBLIC_PAGE_ROUTES.map(({ path }) => path)).size).toBe(
      PUBLIC_PAGE_ROUTES.length,
    );

    for (const route of PUBLIC_PAGE_ROUTES) {
      expect(route.path).toBe(ROUTE_PATHS[route.id]);
      expect(route.path).toBe(PAGE_METADATA[route.id].path);
      expect(route.path).not.toMatch(/[?#]/);
      expect(route.path === "/" || !route.path.endsWith("/")).toBe(true);
    }
  });

  it("keeps all seven completed marketing pages indexable", () => {
    expect(INDEXABLE_PAGE_PATHS).toEqual([
      "/",
      "/services",
      "/about",
      "/about/social-media",
      "/location",
      "/emergency",
      "/contact",
    ]);

    expect(
      PUBLIC_PAGE_ROUTES.every(
        ({ contentState }) => contentState === "complete",
      ),
    ).toBe(true);
  });

  it("keeps utility and operational routes out of public sitemap policy", () => {
    const nonContentPaths = [
      ...UTILITY_ROUTES.map(({ path }) => path),
      ...OPERATIONAL_ROUTES.map(({ path }) => path),
    ];

    expect(nonContentPaths).toContain(OPERATIONAL_ROUTE_PATHS.inquiriesApi);
    expect(
      nonContentPaths.some((path) =>
        (INDEXABLE_PAGE_PATHS as readonly string[]).includes(path),
      ),
    ).toBe(false);
  });

  it("keeps named fragments separate from page identities", () => {
    expect(Object.values(ROUTE_FRAGMENTS).every((fragment) => fragment.startsWith("#"))).toBe(true);
    expect(PUBLIC_PAGE_ROUTES.every(({ path }) => !path.includes("#"))).toBe(true);
  });
});
