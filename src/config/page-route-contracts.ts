import { PAGE_METADATA } from "@/config/page-metadata";
import {
  INDEXABLE_PAGE_PATHS,
  PUBLIC_PAGE_ROUTES,
} from "@/config/route-catalog";
import { ROUTE_PATHS, type PublicPageId } from "@/config/route-paths";
import {
  PAGE_JOURNEYS,
  type PageJourneyKey,
} from "@/config/site-navigation";

export type PageRouteContractIssue = {
  code: string;
  message: string;
  routeId?: PublicPageId;
};

function normalizedKeyword(keyword: string) {
  return keyword.trim().toLocaleLowerCase("en-US");
}

function publicPathFromHref(href: string) {
  return href.split("#", 1)[0] || "/";
}

/**
 * Reports every route-contract mismatch in one pass so failures point to the
 * affected route instead of stopping at the first drifted collection.
 */
export function collectPageRouteContractIssues(): PageRouteContractIssue[] {
  const issues: PageRouteContractIssue[] = [];
  const routeIds = PUBLIC_PAGE_ROUTES.map(({ id }) => id);
  const routePaths = PUBLIC_PAGE_ROUTES.map(({ path }) => path);
  const knownPaths = new Set<string>(routePaths);
  const keywordOwners = new Map<string, PublicPageId>();

  if (new Set(routeIds).size !== routeIds.length) {
    issues.push({
      code: "duplicate-route-id",
      message: "Public route IDs must be unique.",
    });
  }

  if (new Set(routePaths).size !== routePaths.length) {
    issues.push({
      code: "duplicate-route-path",
      message: "Public canonical paths must be unique.",
    });
  }

  for (const route of PUBLIC_PAGE_ROUTES) {
    const metadata = PAGE_METADATA[route.id];
    const targetKeywords: readonly string[] = metadata.targetKeywords;

    if (route.path !== ROUTE_PATHS[route.id] || route.path !== metadata.path) {
      issues.push({
        code: "route-path-mismatch",
        routeId: route.id,
        message: `${route.id}: catalog, route-path, and metadata paths must match.`,
      });
    }

    if (
      route.path !== "/" &&
      (!route.path.startsWith("/") ||
        route.path.endsWith("/") ||
        route.path !== route.path.toLocaleLowerCase("en-US"))
    ) {
      issues.push({
        code: "invalid-route-path",
        routeId: route.id,
        message: `${route.id}: path must be lowercase, root-relative, and omit a trailing slash.`,
      });
    }

    if (route.contentState === "complete" && route.indexability !== "index") {
      issues.push({
        code: "complete-route-noindex",
        routeId: route.id,
        message: `${route.id}: a completed marketing page cannot be noindex without a reviewed exception.`,
      });
    }

    if (!metadata.title.trim() || !metadata.description.trim()) {
      issues.push({
        code: "missing-metadata-copy",
        routeId: route.id,
        message: `${route.id}: title and description are required.`,
      });
    }

    if (targetKeywords.length === 0) {
      issues.push({
        code: "missing-keyword-strategy",
        routeId: route.id,
        message: `${route.id}: at least one route-owned keyword is required.`,
      });
    }

    const routeKeywords = new Set<string>();
    for (const keyword of targetKeywords) {
      const normalized = normalizedKeyword(keyword);
      const existingOwner = keywordOwners.get(normalized);

      if (!normalized || routeKeywords.has(normalized)) {
        issues.push({
          code: "duplicate-route-keyword",
          routeId: route.id,
          message: `${route.id}: keyword entries must be nonempty and unique within the route.`,
        });
      } else if (existingOwner && existingOwner !== route.id) {
        issues.push({
          code: "keyword-owner-conflict",
          routeId: route.id,
          message: `${route.id}: keyword "${keyword}" is already owned by ${existingOwner}.`,
        });
      }

      routeKeywords.add(normalized);
      keywordOwners.set(normalized, route.id);
    }
  }

  const indexablePaths = PUBLIC_PAGE_ROUTES.filter(
    ({ indexability }) => indexability === "index",
  ).map(({ path }) => path);

  if (
    indexablePaths.length !== INDEXABLE_PAGE_PATHS.length ||
    indexablePaths.some((path, index) => path !== INDEXABLE_PAGE_PATHS[index])
  ) {
    issues.push({
      code: "sitemap-policy-mismatch",
      message: "Indexable catalog routes and sitemap source paths must match.",
    });
  }

  const expectedJourneyIds = routeIds.filter(
    (id): id is PageJourneyKey => id !== "home",
  );
  const journeyIds = Object.keys(PAGE_JOURNEYS) as PageJourneyKey[];

  for (const routeId of expectedJourneyIds) {
    const journey = PAGE_JOURNEYS[routeId];

    if (!journey) {
      issues.push({
        code: "missing-page-journey",
        routeId,
        message: `${routeId}: completed non-home routes require a related-page journey.`,
      });
      continue;
    }

    const ownPath = ROUTE_PATHS[routeId];
    const linkTargets = new Set<string>();

    for (const link of journey.links) {
      const targetPath = publicPathFromHref(link.href);

      if (!knownPaths.has(targetPath)) {
        issues.push({
          code: "unknown-journey-target",
          routeId,
          message: `${routeId}: journey target "${link.href}" does not resolve to a public route.`,
        });
      }

      if (targetPath === ownPath) {
        issues.push({
          code: "self-journey-target",
          routeId,
          message: `${routeId}: journey links must not target their own page.`,
        });
      }

      if (linkTargets.has(link.href)) {
        issues.push({
          code: "duplicate-journey-target",
          routeId,
          message: `${routeId}: journey destinations must be unique.`,
        });
      }

      linkTargets.add(link.href);
    }
  }

  for (const journeyId of journeyIds) {
    if (!expectedJourneyIds.includes(journeyId)) {
      issues.push({
        code: "orphan-page-journey",
        routeId: journeyId,
        message: `${journeyId}: journey has no completed non-home route owner.`,
      });
    }
  }

  return issues;
}
