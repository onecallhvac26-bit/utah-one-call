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
    title: "HVAC Repair & Installation in Northern Utah | One Call",
    description: "Need furnace repair, AC service, or a new HVAC system? Call One Call Heating & Air in Brigham City for honest diagnostics and 24/7 service across northern Utah.",
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
    title: "HVAC Installation, Repair & Maintenance | One Call Heating & Air",
    description: "One Call Heating & Air handles heating and cooling in northern Utah. Get HVAC repairs, installations, and tune-ups from a local crew with straight answers.",
    path: ROUTE_PATHS.services,
    targetKeywords: [
      "air conditioning repair",
      "HVAC repair near me",
      "AC tune up",
      "heat pump installation",
      "mini split installation",
      "hvac services",
    ],
  },
  furnaceRepair: {
    title: "Furnace Repair in Northern Utah | One Call Heating & Air",
    description:
      "One Call Heating & Air handles 24/7 furnace repair across northern Utah. Our local crew diagnoses the problem, explains the repair, and gives an up-front quote.",
    path: ROUTE_PATHS.furnaceRepair,
    targetKeywords: [
      "furnace repair",
      "furnace repair northern Utah",
      "furnace repair Brigham City",
      "emergency furnace repair",
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
