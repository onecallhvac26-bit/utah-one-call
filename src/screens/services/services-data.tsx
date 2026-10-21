import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import {
  CONTACT_ROUTE,
  LOCATION_ROUTE,
  PHONE_NUMBER,
  SERVICES_ROUTE,
} from "@/config/site";

export const serviceLinks = [
  ["Install", "#install", "The current system is too old, undersized, or beyond cost-effective repair — or the space has never had heating or cooling."],
  ["Repair", "#repair", "Something is not working: no heat, no cool, strange noise, error code, or inconsistent performance."],
  ["Service", "#service", "The system is running but is due for a seasonal check, cleaning, or safety inspection."],
  ["Maintenance", "#maintenance", "You want recurring seasonal visits and member benefits instead of booking each tune-up on its own."],
] as const;

export const serviceTermDefinitions = [
  ["Install", "A new or replacement HVAC system."],
  ["Repair", "A system that has stopped working correctly."],
  ["Service", "A seasonal tune-up or safety check."],
  ["Maintenance", "Recurring tune-ups and member benefits."],
] as const;

export const serviceSections = {
  install: {
    number: "Service 01",
    title: "Install.",
    description:
      "New furnace, AC, heat pump, or mini-split — sized to your home with a Manual J load calculation, ducted correctly, and commissioned to spec. Permits are pulled, warranties registered with the manufacturer, and the system is walked through with you before the crew leaves. Federal 25C tax credits up to $2,000 on qualifying heat pump installation projects.",
    supportingDescription:
      "For additions, garages, basements, shop spaces, and older homes without existing ductwork, ductless mini-split installation is available in single-zone and multi-zone configurations.",
    bestFor:
      "Replacing an existing system, adding heating or cooling to a space, or planning HVAC equipment for new construction.",
    whatToExpect:
      "Share the property address, current equipment, and comfort goals. The crew inspects the site, evaluates ductwork and electrical capacity, explains the recommended scope, and provides a written quote before installation is scheduled.",
    features: [
      "Furnace replacement (96% AFUE)",
      "Central AC swap-outs",
      "Cold-climate heat pumps",
      "Ductless mini-splits",
      "New construction systems",
      "Smart thermostat install",
      "Manual J load calc",
      "25C credit eligible",
    ],
    icon: "home",
    visualTitle: (
      <>
        New Furnace.
        <br />
        <em>New AC.</em>
        <br />
        <em>New Heat Pump.</em>
      </>
    ),
    chips: ["Trane", "Lennox", "Mitsubishi", "Bosch IDS"],
    primaryCta: "Get Install Quote",
    primaryHref: CONTACT_ROUTE,
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: true,
    visualFirst: true,
  },
  repair: {
    number: "Service 02 · 24/7",
    title: "Repair.",
    description:
      "When the furnace dies on a 12° January night or the AC quits in July, you need a real tech — fast. We carry the common parts on the truck (igniters, capacitors, blower motors, gas valves, contactors) so most no-heat / no-cool calls get fixed on the first visit.",
    supportingDescription:
      "Every AC repair or furnace repair call starts the same way: test the system, explain what is actually wrong, and quote the work before touching anything.",
    bestFor:
      "A system that has stopped working, is heating or cooling inconsistently, is making a new noise, or is showing a fault or error code.",
    whatToExpect:
      "Call for an active no-heat or no-cool problem. The visit starts with diagnosis, followed by an explanation of the findings and a quote before repair work is approved.",
    features: [
      "24/7 emergency response",
      "Furnace no-heat calls",
      "AC compressor / capacitor",
      "Heat pump diagnostics",
      "Refrigerant leaks & recharge",
      "Thermostat & control board",
      "Ductwork & airflow",
      "$89 diagnostic · $0 for Gold members",
    ],
    icon: "wrench",
    visualTitle: (
      <>
        Diagnose
        <br />
        <em>First.</em>
        <br />
        Fix Same Day.
      </>
    ),
    chips: ["24/7", "Truck-Stocked Parts", "$89 Diagnostic"],
    tag: "Emergency",
    primaryCta: "Call Now · 24/7",
    primaryHref: "tel:+18018642045",
    secondaryCta: "Schedule Online",
    secondaryHref: CONTACT_ROUTE,
    dark: false,
    visualFirst: false,
  },
  service: {
    number: "Service 03",
    title: "Service.",
    description:
      "Spring AC tune-up. Fall furnace check. Coil cleans, filter changes, refrigerant checks, electrical and gas pressure tests, safety inspection. Catches the small stuff before it becomes a 2 a.m. phone call — and keeps your system running at full efficiency.",
    supportingDescription:
      "A seasonal cooling service or furnace inspection typically takes one visit. The tech works through every check on the scope, explains anything that needs attention, and leaves a written health report.",
    bestFor:
      "A system that is operating but is due for a seasonal check, safety inspection, cleaning, or performance review.",
    whatToExpect:
      "Tell us which system is involved and any symptoms you have noticed. We confirm the visit scope, complete the scheduled checks, and review the findings afterward.",
    features: [
      "Spring AC service",
      "Fall furnace inspection",
      "Coil & condenser cleaning",
      "Filter replacement",
      "Refrigerant level check",
      "Electrical & gas safety",
      "CO & combustion check",
      "Written health report",
    ],
    icon: "clock",
    visualTitle: (
      <>
        Spring & Fall
        <br />
        <em>Tune-Ups.</em>
      </>
    ),
    chips: ["21-Point Inspection", "Same-Week Booking"],
    primaryCta: "Book a Tune-Up",
    primaryHref: CONTACT_ROUTE,
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: true,
    visualFirst: true,
  },
  maintenance: {
    number: "Service 04 · Gold Membership",
    title: "Gold Membership.",
    description:
      "$99 a year. Includes 2 free seasonal tune-ups (spring AC + fall furnace), priority emergency response, $0 diagnostic fees, and 15% off any parts and labor for the entire year. The cheapest insurance you can buy against a 14° night with no heat.",
    bestFor:
      "Homeowners who want recurring seasonal visits and member benefits instead of booking each tune-up separately.",
    whatToExpect:
      "Request the Gold Membership, confirm which systems are covered, and schedule the seasonal visits that fit the property.",
    features: [
      "2 free tune-ups every year",
      "Priority emergency response",
      "$0 diagnostic fees",
      "15% off parts & labor",
      "Filter delivery option",
      "21-point seasonal inspection",
      "Multi-system discounts",
      "Transferable on home sale",
    ],
    icon: "star",
    visualTitle: (
      <>
        $99/year.
        <br />
        Two Free
        <br />
        <em>Tune-Ups.</em>
      </>
    ),
    chips: ["$0 Diagnostic", "15% Off Repairs", "Priority Booking"],
    tag: "Best Value",
    primaryCta: "Join Gold · $99/yr",
    primaryHref: CONTACT_ROUTE,
    secondaryCta: PHONE_NUMBER,
    secondaryHref: "tel:+18018642045",
    dark: false,
    visualFirst: false,
  },
} as const;

export type ServiceData = (typeof serviceSections)[keyof typeof serviceSections];

export const servicesKeywordContent = {
  id: "northern-utah-hvac-services",
  eyebrow: "Northern Utah HVAC Services",
  heading:
    "Heating and Cooling Work for the System You Have — or the One You Need Next.",
  introduction:
    "One Call covers repair and diagnostics, seasonal tune-ups, and complete system upgrades. Start with the kind of work your equipment needs today.",
  items: [
    {
      title: "Repair and diagnostics",
      description:
        "Call when an air conditioner stops cooling, runs inconsistently, or will not start. Air conditioning repair visits begin with onsite testing so the recommended work matches the actual problem — not the most expensive option. Furnace repair and heat pump service follow the same diagnostic-first approach: test the system, explain the findings, and quote the work before anything starts.",
    },
    {
      title: "Seasonal tune-ups",
      description:
        "A spring AC tune-up and a fall furnace inspection catch worn parts, dirty coils, and low refrigerant before the system fails under peak-season demand. Gold Membership wraps both visits into a $99/year plan with priority scheduling and member pricing.",
    },
    {
      title: "Installation and system upgrades",
      description:
        "Installation covers furnaces, central air conditioners, heat pumps, ductless mini-splits, smart thermostats, and related airflow or ductwork improvements — sized to the property and commissioned to spec.",
    },
  ],
  links: [
    { href: CONTACT_ROUTE, label: "Request HVAC Service" },
    { href: LOCATION_ROUTE, label: "Check Your Service Area" },
  ],
} as const satisfies KeywordContentDefinition;

export const servicesAnswersContent = {
  id: "services-answers",
  path: SERVICES_ROUTE,
  eyebrow: "Service Questions",
  heading: "Straight Answers About HVAC Service.",
  introduction:
    "Use these answers to identify the right service lane and understand what happens before any work is approved.",
  quickAnswer: {
    question: "What HVAC work can One Call handle?",
    answer:
      "One Call Heating & Air installs, repairs, services, and maintains furnaces, central air conditioners, heat pumps, ductless mini-splits, thermostats, ductwork, and airflow systems across northern Utah.",
  },
  faqs: [
    {
      question: "Which service should I request?",
      answer:
        "Choose Repair when something is not working — no heat, no cool, strange noise, or error code. Choose Service when the system runs fine but is due for a seasonal check or cleaning. Choose Install when you are replacing an aging system or adding heating or cooling to a new space. Choose Maintenance when you want recurring seasonal visits and Gold Membership benefits instead of booking each tune-up separately. If you are not sure, describe the situation in the form or on the phone and the crew will route it.",
    },
    {
      question: "How does One Call approach repair versus replacement?",
      answer:
        "Every repair visit starts with testing the system. If the equipment can be fixed, you get the repair scope and price. If the failure is severe enough that replacement is also practical — or if repair costs approach replacement value — the crew explains both options separately: what each one covers, how long each is expected to last, and what each costs. You compare and decide before any work starts.",
    },
    {
      question: "What should I expect when planning an HVAC installation?",
      answer:
        "Share the property address, current equipment, and comfort goals. The crew inspects the space, runs a Manual J load calculation to determine the right system size, and checks ductwork and electrical capacity. You receive a written, itemized quote before installation is scheduled. The published process includes pulling permits, registering warranties with the manufacturer, commissioning the system to spec, and walking you through the controls before the crew leaves.",
    },
    {
      question: "What does a seasonal tune-up actually check?",
      answer:
        "The specific checks depend on the system and season. A spring AC tune-up typically covers coil and condenser cleaning, refrigerant levels, electrical connections, thermostat calibration, and airflow. A fall furnace inspection covers the heat exchanger, ignition system, gas pressure, CO and combustion safety, and filters. Both visits end with a written health report of the findings.",
    },
    {
      question: "Can I bundle multiple services into one visit?",
      answer:
        "Yes. A common example is a new installation plus a Gold Membership, or a repair call plus a tune-up on a second system. Multi-service jobs get combined pricing and a single-crew schedule. Ask Jesse when you call.",
    },
  ],
} as const satisfies PageAnswersDefinition;
