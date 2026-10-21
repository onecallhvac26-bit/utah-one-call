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
    title: "One Call Heating & Air | Northern Utah HVAC Service",
    description: SITE_DESCRIPTION,
    path: ROUTE_PATHS.home,
    targetKeywords: [
      "northern Utah HVAC service",
      "Brigham City HVAC",
      "HVAC contractor northern Utah",
      "heating and cooling northern Utah",
    ],
  },
  services: {
    title: "HVAC Installation & Repair | One Call Heating & Air",
    description:
      "Compare furnace, AC, heat pump, and mini-split installation, repair, tune-up, and maintenance services across northern Utah.",
    path: ROUTE_PATHS.services,
    targetKeywords: [
      "air conditioning repair",
      "HVAC repair near me",
      "furnace repair",
      "AC tune up",
      "heat pump installation",
      "mini split installation",
    ],
  },
  about: {
    title: "About Our Brigham City HVAC Company | One Call Heating & Air",
    description:
      "One Call Heating & Air — owner-operated HVAC in Brigham City serving seven northern Utah counties. Jesse answers the phone. (801) 864-2045.",
    path: ROUTE_PATHS.about,
    targetKeywords: [
      "Brigham City HVAC company",
      "owner-operated HVAC company",
      "local HVAC company",
    ],
  },
  socialMedia: {
    title: "HVAC Tips & Project Updates | One Call Heating & Air",
    description:
      "Seasonal HVAC tips, project walkthroughs, and local updates from One Call Heating & Air in Brigham City. Practical info, no filler.",
    path: ROUTE_PATHS.socialMedia,
    targetKeywords: [
      "One Call Heating & Air social media",
      "One Call Heating & Air project updates",
      "northern Utah HVAC tips",
    ],
  },
  location: {
    title: "Northern Utah Service Area | One Call Heating & Air",
    description:
      "One Call Heating & Air serves 41 communities across seven northern Utah counties. Find your city and confirm service. (801) 864-2045.",
    path: ROUTE_PATHS.location,
    targetKeywords: [
      "northern Utah HVAC service area",
      "HVAC service near me",
      "HVAC service Salt Lake County",
      "HVAC service Davis County",
      "HVAC service Weber County",
    ],
  },
  emergency: {
    title: "24/7 Emergency HVAC | One Call Heating & Air",
    description:
      "Furnace or AC down? Call (801) 864-2045 for 24/7 emergency HVAC help across northern Utah. Owner answers, same-day routing.",
    path: ROUTE_PATHS.emergency,
    targetKeywords: [
      "same day heating and air",
      "24 hour heating and air",
      "same day HVAC service",
      "24 hour AC repair",
      "emergency furnace repair northern Utah",
      "emergency AC repair northern Utah",
    ],
  },
  contact: {
    title: "Request HVAC Service | One Call Heating & Air",
    description:
      "Request furnace, AC, heat pump, or mini-split service from One Call Heating & Air. Call (801) 864-2045 for emergencies.",
    path: ROUTE_PATHS.contact,
    targetKeywords: [
      "request HVAC service northern Utah",
      "schedule HVAC service northern Utah",
      "HVAC estimate northern Utah",
      "AC repair service request",
      "furnace repair service request",
    ],
  },
} as const satisfies Record<string, PageMetadataDefinition>;
