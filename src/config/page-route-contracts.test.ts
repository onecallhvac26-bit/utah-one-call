import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { PAGE_METADATA } from "@/config/page-metadata";
import { collectPageRouteContractIssues } from "@/config/page-route-contracts";
import { PUBLIC_PAGE_ROUTES, UTILITY_ROUTES } from "@/config/route-catalog";
import { SITE_PREVIEW_IMAGE_PATH } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

function discoverAppPagePaths(
  directory: string,
  segments: string[] = [],
): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith("_") || entry.name.startsWith("(")) {
      return [];
    }

    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      return discoverAppPagePaths(entryPath, [...segments, entry.name]);
    }

    if (entry.name !== "page.tsx") {
      return [];
    }

    return [`/${segments.join("/")}`.replace(/\/$/, "/")];
  });
}

describe("page and route contracts", () => {
  it("reports no cross-collection route contract drift", () => {
    expect(collectPageRouteContractIssues()).toEqual([]);
  });

  it("reconciles the App Router page tree with public and utility catalogs", () => {
    const appDirectory = path.join(process.cwd(), "src/app");
    const discoveredPaths = discoverAppPagePaths(appDirectory).sort();
    const expectedPaths = [
      ...PUBLIC_PAGE_ROUTES.map(({ path }) => path),
      ...UTILITY_ROUTES.map(({ path }) => path),
    ].sort();

    expect(discoveredPaths).toEqual(expectedPaths);
  });

  it("keeps the shared social preview fallback on disk", () => {
    expect(
      existsSync(
        path.join(process.cwd(), "public", SITE_PREVIEW_IMAGE_PATH.slice(1)),
      ),
    ).toBe(true);
  });

  it("builds aligned canonical, robots, and image metadata for every page", () => {
    for (const route of PUBLIC_PAGE_ROUTES) {
      const definition = PAGE_METADATA[route.id];
      const metadata = createPageMetadata(definition);

      expect(metadata, route.id).toMatchObject({
        title: { absolute: definition.title },
        description: definition.description,
        alternates: { canonical: route.path },
        openGraph: {
          url: route.path,
          images: [{ url: expect.stringContaining(SITE_PREVIEW_IMAGE_PATH) }],
        },
        twitter: {
          images: [{ url: expect.stringContaining(SITE_PREVIEW_IMAGE_PATH) }],
        },
        robots: {
          index: true,
          follow: true,
        },
      });
    }
  });
});
