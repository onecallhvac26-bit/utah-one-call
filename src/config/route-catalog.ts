import { PAGE_METADATA } from "@/config/page-metadata";
import {
  OPERATIONAL_ROUTE_PATHS,
  ROUTE_PATHS,
  UTILITY_ROUTE_PATHS,
  type PublicPageId,
  type PublicPagePath,
} from "@/config/route-paths";

type PublicPageFamily =
  | "home"
  | "services"
  | "about"
  | "social-media"
  | "location"
  | "emergency"
  | "contact";

export type PublicPageRoute = {
  id: PublicPageId;
  path: PublicPagePath;
  kind: "page";
  family: PublicPageFamily;
  lifecycle: "active";
  contentState: "complete";
  indexability: "index" | "noindex-follow";
  testProfile: "core" | "contract-only";
};

const ROUTE_FAMILIES = {
  home: "home",
  services: "services",
  about: "about",
  socialMedia: "social-media",
  location: "location",
  emergency: "emergency",
  contact: "contact",
} as const satisfies Record<PublicPageId, PublicPageFamily>;

function createPublicPageRoute(id: PublicPageId): PublicPageRoute {
  const metadata = PAGE_METADATA[id];
  const isIndexable = !("indexable" in metadata) || metadata.indexable !== false;

  return {
    id,
    path: ROUTE_PATHS[id],
    kind: "page",
    family: ROUTE_FAMILIES[id],
    lifecycle: "active",
    contentState: "complete",
    indexability: isIndexable ? "index" : "noindex-follow",
    testProfile: isIndexable ? "core" : "contract-only",
  };
}

export const PUBLIC_PAGE_ROUTES = (
  Object.keys(ROUTE_PATHS) as PublicPageId[]
).map(createPublicPageRoute);

export const INDEXABLE_PUBLIC_ROUTES = PUBLIC_PAGE_ROUTES.filter(
  ({ indexability }) => indexability === "index",
);

export const INDEXABLE_PAGE_PATHS = INDEXABLE_PUBLIC_ROUTES.map(
  ({ path }) => path,
);

export const UTILITY_ROUTES = [
  {
    id: "explicit-404",
    path: UTILITY_ROUTE_PATHS.explicitNotFound,
    kind: "error-page",
    lifecycle: "active",
    indexability: "noindex-nofollow",
    testProfile: "contract-only",
  },
] as const;

export const OPERATIONAL_ROUTES = [
  {
    id: "inquiries-api",
    path: OPERATIONAL_ROUTE_PATHS.inquiriesApi,
    kind: "api",
    lifecycle: "active",
    testProfile: "core",
  },
  {
    id: "robots",
    path: OPERATIONAL_ROUTE_PATHS.robots,
    kind: "metadata-route",
    lifecycle: "active",
    testProfile: "contract-only",
  },
  {
    id: "sitemap",
    path: OPERATIONAL_ROUTE_PATHS.sitemap,
    kind: "metadata-route",
    lifecycle: "active",
    testProfile: "contract-only",
  },
] as const;

export function getPublicPageRoute(id: PublicPageId) {
  const route = PUBLIC_PAGE_ROUTES.find((candidate) => candidate.id === id);

  if (!route) {
    throw new Error(`Unknown public page route: ${id}`);
  }

  return route;
}
