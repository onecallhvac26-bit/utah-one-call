import { ROUTE_PATHS } from "@/config/route-paths";
import { SITE_DESCRIPTION } from "@/config/site";

type PageMetadataDefinition = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  targetKeywords: readonly string[];
  indexable?: boolean;
};

export const PAGE_METADATA = {
  home: {
    title: "HVAC Contractor in Northern Utah | One Call Heating & Air",
    description: "Need a trusted HVAC contractor in Northern Utah? One Call Heating & Air provides furnace and AC repairs, installations, and 24/7 emergency service. Call today!",
    path: ROUTE_PATHS.home,
    targetKeywords: [
      "northern Utah HVAC service",
      "hvac contractor",
      "Brigham City HVAC",
      "HVAC contractor northern Utah",
      "heating and cooling northern Utah",
    ],
  },
  services: {
    title: "HVAC Repair & Installation Services | One Call Heating & Air",
    description: "Expert HVAC services in Northern Utah. Get furnace, AC, heat pump, and mini-split installation, repairs, and maintenance. Schedule your service today!",
    path: ROUTE_PATHS.services,
    targetKeywords: [
      "air conditioning repair",
      "HVAC repair near me",
      "furnace repair",
      "AC tune up",
      "heat pump installation",
      "mini split installation",
      "hvac services",
    ],
  },
  about: {
    title: "Local HVAC Company in Brigham City | One Call Heating & Air",
    description:
      "Meet One Call Heating & Air, your owner-operated HVAC company in Brigham City, Utah. Get honest recommendations, upfront pricing, and dependable service.",
    path: ROUTE_PATHS.about,
    targetKeywords: [
      "Brigham City HVAC company",
      "owner-operated HVAC company",
      "local hvac company",
      "local HVAC company",
    ],
  },
  socialMedia: {
    title: "Seasonal HVAC Tips for Utah Homes | One Call Heating & Air",
    description:
      "Seasonal HVAC tips for northern Utah homes: when to change filters, book a tune-up, and prep your furnace before the first freeze, plus project notes. Read now!",
    path: ROUTE_PATHS.socialMedia,
    targetKeywords: [
      "One Call Heating & Air social media",
      "One Call Heating & Air project updates",
      "northern Utah HVAC tips",
      "hvac tips",
    ],
  },
  location: {
    title: "Northern Utah HVAC Service Areas | One Call Heating & Air",
    description:
      "Looking for HVAC services in Northern Utah? We serve Ogden, Logan, Layton, Brigham City, and surrounding communities. Find your location and schedule service.",
    path: ROUTE_PATHS.location,
    targetKeywords: [
      "northern Utah HVAC service area",
      "HVAC service near me",
      "HVAC service Salt Lake County",
      "HVAC service Davis County",
      "hvac utah",
      "HVAC service Weber County",
    ],
  },
  emergency: {
    title: "Emergency HVAC Repair 24/7 in Utah | One Call Heating & Air",
    description:
      "Need emergency HVAC repair in Northern Utah? Get 24/7 help for furnace and AC breakdowns from One Call Heating & Air. Call (801) 864-2045 for service.",
    path: ROUTE_PATHS.emergency,
    targetKeywords: [
      "same day heating and air",
      "24 hour heating and air",
      "same day HVAC service",
      "24 hour AC repair",
      "emergency furnace repair northern Utah",
      "emergency hvac repair",
      "emergency AC repair northern Utah",
    ],
  },
  contact: {
    title: "Request HVAC Service & Estimates | One Call Heating & Air",
    description:
      "Free HVAC estimates on new furnace, AC, and heat pump installs. Repairs start with an $89 diagnostic that's waived when you book the fix. Get your free quote!",
    path: ROUTE_PATHS.contact,
    targetKeywords: [
      "request HVAC service northern Utah",
      "schedule HVAC service northern Utah",
      "HVAC estimate northern Utah",
      "AC repair service request",
      "hvac estimate",
      "furnace repair service request",
    ],
  },
} as const satisfies Record<string, PageMetadataDefinition>;
