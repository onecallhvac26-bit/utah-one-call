import { ABOUT_ROUTE, CONTACT_ROUTE, FURNACE_REPAIR_ROUTE, HOME_ROUTE, SERVICES_ROUTE } from "@/config/site";
import type { FooterColumn } from "./LandingParts";

export { FURNACE_REPAIR_ROUTE };

/*
 * The copy docs reference /ac-repair, /hvac-installation and /heat-pump-installation,
 * which do not exist yet. Those links point at the matching service cards on
 * /services (#install, #repair, #service, #maintenance); swap them when those pages are built.
 */
export const LANDING_FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    heading: "Services",
    links: [
      ["Furnace Repair", FURNACE_REPAIR_ROUTE],
      ["AC Repair", `${SERVICES_ROUTE}#repair`],
      ["HVAC Installation", `${SERVICES_ROUTE}#install`],
      ["Heat Pumps & Mini-Splits", `${SERVICES_ROUTE}#install`],
      ["Service & Tune-Ups", `${SERVICES_ROUTE}#service`],
      ["Gold Membership", `${SERVICES_ROUTE}#maintenance`],
    ],
  },
  {
    heading: "Company",
    links: [
      ["Home", HOME_ROUTE],
      ["All Services", SERVICES_ROUTE],
      ["About One Call", ABOUT_ROUTE],
      ["Contact", CONTACT_ROUTE],
      ["Free Estimate", CONTACT_ROUTE],
    ],
  },
];
