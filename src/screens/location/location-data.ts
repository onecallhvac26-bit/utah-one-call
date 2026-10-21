export const majorServiceCities = [
  { city: "Salt Lake City" },
  { city: "West Jordan" },
  { city: "Sandy" },
  { city: "Ogden" },
  { city: "South Jordan" },
  { city: "Layton" },
  { city: "Logan" },
  { city: "Murray" },
  { city: "Draper" },
  { city: "Bountiful" },
] as const;

export const countyServiceAreas = [
  {
    county: "Cache County",
    description: "Seven communities in northern Utah's Cache Valley.",
    cities: [
      "Logan",
      "North Logan",
      "Smithfield",
      "Hyrum",
      "Providence",
      "Wellsville",
      "Richmond",
    ],
  },
  {
    county: "Box Elder County",
    description: "Nine communities anchored by One Call's Brigham City home base.",
    cities: [
      "Brigham City",
      "Perry",
      "Willard",
      "Mantua",
      "Corinne",
      "Tremonton",
      "Garland",
      "Honeyville",
      "Bear River City",
    ],
  },
  {
    county: "Weber County",
    description: "Weber County HVAC service covers seven communities from Ogden through Plain City.",
    cities: [
      "Ogden",
      "Roy",
      "Riverdale",
      "South Ogden",
      "North Ogden",
      "Pleasant View",
      "Plain City",
    ],
  },
  {
    county: "Davis County",
    description: "Davis County HVAC service runs through seven communities between Salt Lake and Weber counties.",
    cities: [
      "Bountiful",
      "Centerville",
      "Farmington",
      "Kaysville",
      "Layton",
      "Clearfield",
      "Syracuse",
    ],
  },
  {
    county: "Salt Lake County",
    description: "Salt Lake County HVAC service reaches eight communities along the southern Wasatch Front.",
    cities: [
      "Salt Lake City",
      "West Jordan",
      "Sandy",
      "Murray",
      "South Jordan",
      "Cottonwood Heights",
      "Holladay",
      "Draper",
    ],
  },
  {
    county: "Rich County",
    description: "Two communities in Utah's northeast corner.",
    cities: ["Garden City", "Randolph"],
  },
  {
    county: "Morgan County",
    description: "One listed community in the Morgan Valley corridor.",
    cities: ["Morgan"],
  },
] as const;

export const serviceAreaCityCount = countyServiceAreas.reduce(
  (total, county) => total + county.cities.length,
  0,
);

export const locationKeywordContent = {
  id: "northern-utah-service-area",
  eyebrow: "Northern Utah HVAC Service Area",
  heading: "Heating and Cooling Service Across Seven Northern Utah Counties.",
  introduction:
    "Use the county and community directory below to check One Call's regular service footprint, then confirm scheduling for your specific address.",
  items: [
    {
      title: "AC repair and cooling service",
      description:
        "Cooling routes cover Salt Lake, Davis, Weber, Box Elder, Cache, Morgan, and Rich counties. Contact One Call to confirm the next available AC repair or tune-up visit for your address.",
    },
    {
      title: "Furnace repair and heat pump service",
      description:
        "Northern Utah heating service includes furnace diagnostics, seasonal inspections, heat pump service, and replacement planning for homes and businesses in the listed communities.",
    },
    {
      title: "How address confirmation works",
      description:
        "The city names below show the regular service footprint. Your property address confirms routing and timing. When you call or submit a request, One Call will tell you whether the crew can reach your location and when.",
    },
  ],
  links: [
    { href: SERVICES_ROUTE, label: "Compare HVAC Services" },
    { href: CONTACT_ROUTE, label: "Confirm Your Address" },
  ],
} as const satisfies KeywordContentDefinition;
import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import {
  CONTACT_ROUTE,
  LOCATION_ROUTE,
  SERVICES_ROUTE,
} from "@/config/site";

export const locationAnswersContent = {
  id: "location-answers",
  path: LOCATION_ROUTE,
  eyebrow: "Coverage Questions",
  heading: "Quick Answers About Service Coverage.",
  introduction:
    "The city directory shows the regular footprint; the property address determines the actual route and scheduling window.",
  quickAnswer: {
    question: "What area does One Call Heating & Air serve?",
    answer:
      "One Call is based in Brigham City and lists HVAC service for 41 communities across seven northern Utah counties, from Salt Lake County through the Wasatch Front and Cache Valley to the Idaho border.",
  },
  faqs: [
    {
      question: "Which northern Utah counties are in the service area?",
      answer:
        "The published service area includes Salt Lake, Davis, Morgan, Weber, Box Elder, Cache, and Rich counties.",
    },
    {
      question: "How do I confirm service for my address?",
      answer:
        "Find your city in the county directory, then call or submit the service form with the property address. One Call confirms whether the address fits the active route and explains the available scheduling window.",
    },
    {
      question: "What if my city is not listed?",
      answer:
        "Call (801) 864-2045 and ask. The published list shows regular routes, but One Call will confirm directly whether an unlisted location can be added to the schedule.",
    },
    {
      question: "Does the service area cover both homes and businesses?",
      answer:
        "Yes. The published northern Utah service area applies to residential and business HVAC requests, with the exact property and project reviewed before scheduling.",
    },
  ],
} as const satisfies PageAnswersDefinition;
