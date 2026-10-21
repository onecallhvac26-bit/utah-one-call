export const ROUTE_PATHS = {
  home: "/",
  services: "/services",
  about: "/about",
  socialMedia: "/about/social-media",
  location: "/location",
  emergency: "/emergency",
  contact: "/contact",
} as const;

export type PublicPageId = keyof typeof ROUTE_PATHS;
export type PublicPagePath = (typeof ROUTE_PATHS)[PublicPageId];

export const UTILITY_ROUTE_PATHS = {
  explicitNotFound: "/404",
} as const;

export const OPERATIONAL_ROUTE_PATHS = {
  inquiriesApi: "/api/inquiries",
  robots: "/robots.txt",
  sitemap: "/sitemap.xml",
} as const;

export const ROUTE_FRAGMENTS = {
  faq: "#faq",
  pricing: "#pricing",
  install: "#install",
  repair: "#repair",
  service: "#service",
  maintenance: "#maintenance",
  servicePlanningChecklist: "#service-planning-checklist",
} as const;

export const ROUTE_DESTINATIONS = {
  faq: `${ROUTE_PATHS.home}${ROUTE_FRAGMENTS.faq}`,
  pricing: `${ROUTE_PATHS.home}${ROUTE_FRAGMENTS.pricing}`,
  servicePlanning: `${ROUTE_PATHS.services}${ROUTE_FRAGMENTS.servicePlanningChecklist}`,
} as const;
