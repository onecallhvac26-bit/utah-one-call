import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQ_ROUTE,
  LOCATION_ROUTE,
  PRICING_ROUTE,
  SERVICES_ROUTE,
} from "@/config/site";

export type PageBreadcrumbDefinition = {
  path: Exclude<
    | typeof SERVICES_ROUTE
    | typeof ABOUT_ROUTE
    | typeof LOCATION_ROUTE
    | typeof CONTACT_ROUTE,
    "/"
  >;
  label: string;
};

export const PAGE_BREADCRUMBS = {
  services: { path: SERVICES_ROUTE, label: "Services" },
  about: { path: ABOUT_ROUTE, label: "About" },
  location: { path: LOCATION_ROUTE, label: "Service Area" },
  contact: { path: CONTACT_ROUTE, label: "Contact" },
} as const satisfies Record<string, PageBreadcrumbDefinition>;

export const FOOTER_SERVICE_LINKS = [
  ["Install", `${SERVICES_ROUTE}#install`],
  ["Repair", `${SERVICES_ROUTE}#repair`],
  ["Service & Tune-Ups", `${SERVICES_ROUTE}#service`],
  ["Gold Membership", `${SERVICES_ROUTE}#maintenance`],
] as const;

export const FOOTER_COMPANY_LINKS = [
  ["About Us", ABOUT_ROUTE],
  ["Service Area", LOCATION_ROUTE],
  ["All Services", SERVICES_ROUTE],
  ["Free Estimate", CONTACT_ROUTE],
] as const;

export type PageJourneyKey =
  | "services"
  | "about"
  | "socialMedia"
  | "location"
  | "emergency"
  | "contact";

type PageJourney = {
  eyebrow: string;
  heading: string;
  description: string;
  links: ReadonlyArray<{
    label: string;
    description: string;
    href: string;
  }>;
};

export const PAGE_JOURNEYS = {
  services: {
    eyebrow: "Keep Planning",
    heading: "Answer the Next Question.",
    description:
      "Use these supporting pages to check common questions, confirm coverage, or learn who will answer your call.",
    links: [
      {
        label: "Common HVAC Questions",
        description: "Review practical answers about scheduling, repairs, estimates, and maintenance.",
        href: FAQ_ROUTE,
      },
      {
        label: "Check the Service Area",
        description: "Browse all listed northern Utah communities, organized by county.",
        href: LOCATION_ROUTE,
      },
      {
        label: "Meet the One Call Crew",
        description: "Learn how the owner-operated team approaches HVAC work and communication.",
        href: ABOUT_ROUTE,
      },
    ],
  },
  about: {
    eyebrow: "Next Steps",
    heading: "Turn Context Into a Plan.",
    description:
      "After learning who One Call is, compare the work, confirm your location, or start a request.",
    links: [
      {
        label: "Compare HVAC Services",
        description: "Find the service lane that best matches your equipment and situation.",
        href: SERVICES_ROUTE,
      },
      {
        label: "Check the Service Area",
        description: "See the complete county-by-county list of communities served.",
        href: LOCATION_ROUTE,
      },
      {
        label: "Request Service",
        description: "Send the details One Call needs to follow up about your project or repair.",
        href: CONTACT_ROUTE,
      },
    ],
  },
  socialMedia: {
    eyebrow: "Keep Exploring",
    heading: "Turn an Update Into a Next Step.",
    description:
      "Compare the available work, confirm your service location, or send the details behind a heating or cooling question.",
    links: [
      {
        label: "Explore HVAC Services",
        description: "Compare installation, repair, tune-up, and maintenance options.",
        href: SERVICES_ROUTE,
      },
      {
        label: "Check the Service Area",
        description: "Browse all 41 listed communities across seven northern Utah counties.",
        href: LOCATION_ROUTE,
      },
      {
        label: "Ask One Call",
        description: "Share the system, symptoms, property, and best way to reach you.",
        href: CONTACT_ROUTE,
      },
    ],
  },
  location: {
    eyebrow: "Coverage Confirmed",
    heading: "Choose What Happens Next.",
    description:
      "If your community is listed, compare the available work, review common questions, or confirm scheduling.",
    links: [
      {
        label: "Compare HVAC Services",
        description: "Review installation, repair, tune-up, and maintenance options.",
        href: SERVICES_ROUTE,
      },
      {
        label: "Read Common Questions",
        description: "Get quick answers about estimates, service calls, and maintenance.",
        href: FAQ_ROUTE,
      },
      {
        label: "Confirm Scheduling",
        description: "Share your address and service need so the crew can confirm the route.",
        href: CONTACT_ROUTE,
      },
    ],
  },
  emergency: {
    eyebrow: "After the Urgent Call",
    heading: "Keep the Next Decision Clear.",
    description:
      "Confirm the service area, compare repair and replacement work, or send non-urgent details through the quote form.",
    links: [
      {
        label: "Compare HVAC Services",
        description: "Review repair, installation, tune-up, and maintenance scopes.",
        href: SERVICES_ROUTE,
      },
      {
        label: "Check the Service Area",
        description: "Confirm whether the property is inside the regular northern Utah route.",
        href: LOCATION_ROUTE,
      },
      {
        label: "Send a Non-Urgent Request",
        description: "Use the quote form when the system is not in an active emergency state.",
        href: CONTACT_ROUTE,
      },
    ],
  },
  contact: {
    eyebrow: "Before You Send",
    heading: "Prepare With the Details You Need.",
    description:
      "You can compare service scopes, review published pricing, or double-check coverage before submitting a request.",
    links: [
      {
        label: "Compare HVAC Services",
        description: "Choose the closest service lane before describing your request.",
        href: SERVICES_ROUTE,
      },
      {
        label: "Review Published Pricing",
        description: "See the diagnostic and maintenance-plan prices published on the homepage.",
        href: PRICING_ROUTE,
      },
      {
        label: "Check the Service Area",
        description: "Browse the complete list of northern Utah communities by county.",
        href: LOCATION_ROUTE,
      },
    ],
  },
} as const satisfies Record<PageJourneyKey, PageJourney>;
