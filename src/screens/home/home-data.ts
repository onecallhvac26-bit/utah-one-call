import { SERVICES_ROUTE } from "@/config/site";

export const services = [
  {
    number: "Service 01",
    title: "Install",
    icon: "home",
    description:
      "New furnace, AC, heat pump, or mini-split — right-sized to your home, properly ducted, and commissioned to spec. Eligible for federal 25C tax credits where applicable.",
    link: "See Install",
    href: `${SERVICES_ROUTE}#install`,
    featured: true,
  },
  {
    number: "Service 02",
    title: "Repair",
    icon: "wrench",
    description:
      "System down? We answer 24/7. Diagnose first, quote second, fix third. If it just needs cleaning, we'll say so — no pressure to replace what still works.",
    link: "See Repair",
    href: `${SERVICES_ROUTE}#repair`,
    featured: false,
  },
  {
    number: "Service 03",
    title: "Service",
    icon: "clock",
    description:
      "Spring AC tune-up. Fall furnace check. Filter changes, coil cleans, refrigerant top-offs, and electrical checks. Catch the small stuff before it becomes the midnight phone call.",
    link: "See Service",
    href: `${SERVICES_ROUTE}#service`,
    featured: false,
  },
  {
    number: "Service 04",
    title: "Maintenance",
    icon: "check-circle",
    description:
      "Twice-a-year maintenance plans that keep furnaces, ACs, and heat pumps running at full efficiency. Priority scheduling, discounted parts, and we know your system before we walk in.",
    link: "See Plans",
    href: `${SERVICES_ROUTE}#maintenance`,
    featured: false,
  },
] as const;

export const whyCards = [
  {
    number: "01",
    title: "You Talk to the Owner",
    description:
      'Call (801) 864-2045 and Jesse picks up — not an offshore phone bank, not a "we\'ll call you back." You describe the problem to the person who will diagnose it.',
  },
  {
    number: "02",
    title: "The System Gets Tested First",
    description:
      "We arrive with diagnostic tools and test the system before quoting anything. If it needs a part, we tell you which one and why. No one tells you your unit is done without showing you the proof.",
  },
  {
    number: "03",
    title: "The Quote Is the Price",
    description:
      "Parts, labor, and disposal — itemized in writing. The number we quote is the number you pay. No surprise add-ons after the truck shows up.",
  },
  {
    number: "04",
    title: "24/7 Means Tonight",
    description:
      "Furnace dies on a 12° January night or AC quits in July — you get a real tech, fast. Not a voicemail. Not a 48-hour hold queue.",
  },
] as const;

export const stats = [
  ["24/7", "Emergency Calls", "cool"],
  ["7", "Counties Covered", "warm"],
  ["100%", "Local & Owner-Operated", "cool"],
  ["$0", "Diagnostic with Repair", "warm"],
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Call",
    description:
      "Tell us what's going on. Owner picks up — same day in most cases, even on weekends and holidays.",
  },
  {
    number: "02",
    title: "Diagnose",
    description:
      "A tech arrives with the tools to test the system at your home — no guessing. You get a straight answer about what's wrong before any quote.",
  },
  {
    number: "03",
    title: "Quote",
    description:
      "You see every line item and approve the price before work starts. Financing options on installs.",
  },
  {
    number: "04",
    title: "Done",
    description:
      "If we have the part on the truck, the repair happens that visit. Most calls finish in one visit. Walk-through and warranty on every job.",
  },
] as const;

export const hvacQuickAnswer = {
  question: "What HVAC services does One Call provide?",
  answer:
    "One Call Heating & Air installs, repairs, tunes up, and maintains furnaces, central air conditioners, heat pumps, and ductless mini-splits across northern Utah.",
  facts: [
    {
      term: "Services",
      detail: "Installation, repair, seasonal tune-ups, and maintenance plans",
    },
    {
      term: "Equipment",
      detail: "Furnaces, central AC, heat pumps, and ductless mini-splits",
    },
    {
      term: "Service area",
      detail: "41 communities across seven northern Utah counties",
    },
  ],
} as const;

export const faqs = [
  {
    question: "My furnace just quit on a 10° night. Are you really 24/7?",
    answer:
      "Yes, really. Call (801) 864-2045 — Jesse answers, including nights and weekends. Most emergency calls along the Wasatch Front get a same-night response. We carry the common parts (igniters, capacitors, blower motors, gas valves) on the truck so most no-heat calls are fixed on the first visit.",
  },
  {
    question: "How much is a new furnace or AC install?",
    answer:
      "Depends on size, brand, and what's behind the wall. We quote installs in writing, itemized, with no surprise add-ons. Most full furnace replacements run $4,500–$8,500; full AC swaps $4,000–$7,500; full heat pump systems $9,000–$14,000 — minus federal 25C tax credits up to $2,000 and any active Utah HEEHRA rebates.",
  },
  {
    question: "Should I replace my old furnace with a heat pump?",
    answer:
      "For most northern Utah homes, a cold-climate heat pump is worth considering. It handles heating and cooling in one unit, works down to single-digit temperatures, and qualifies for federal tax credits up to $2,000. Summer cooling costs typically drop because heat pumps move heat rather than generate it. We size the system to the home so you don't over-buy or under-buy.",
  },
  {
    question: "Do you charge a diagnostic fee?",
    answer:
      "$89 flat diagnostic fee. Waived if you book the repair with us. Gold Members pay $0. We'll never tell you your unit is done without showing you exactly why.",
  },
  {
    question: "What's a maintenance plan and is it worth it?",
    answer:
      "Our Gold Membership is $99/year and includes two free seasonal tune-ups, priority scheduling, $0 diagnostic fees, 15% off parts and labor, and a tech who already knows your system. The two tune-ups, $0 diagnostics, and 15% discount all apply for the full year — so any service call during that time costs less than it would without the membership.",
  },
  {
    question: "Do you do mini-splits / ductless?",
    answer:
      "Yes — ductless mini-splits are great for additions, garages, basements, shop spaces, and older homes without ductwork. We install single- and multi-zone systems.",
  },
] as const;

export const equipment = [
  "Trane",
  "Lennox",
  "Carrier",
  "Mitsubishi Hyper-Heat",
  "Bosch IDS",
  "Goodman",
  "Rheem",
  "ecobee · Nest Smart Thermostats",
  "SEER2 Compliant",
  "96% AFUE Furnaces",
  "25C Tax Credit Eligible",
] as const;

export const heroSlides = [
  {
    label: "Owner-operated HVAC overview",
    backgroundImage: "hero-technician.jpg",
    title: "One Call.",
    accent: "Done.",
    descriptionBefore: "Owner-operated northern Utah HVAC service — ",
    descriptionStrong: "Salt Lake to the Idaho border.",
    descriptionAfter:
      " Furnace and AC install, 24/7 repair, seasonal tune-ups, and maintenance plans across all seven northern counties. No call centers. No runaround. Jesse answers the phone.",
  },
  {
    label: "Heating service",
    backgroundImage: "hero-heating-winter.jpg",
    title: "Heat When",
    accent: "It Counts.",
    descriptionBefore: "Furnace install, replacement, and ",
    descriptionStrong: "24/7 emergency repair",
    descriptionAfter:
      " across all seven northern counties. Single-digit nights are no problem — same-day diagnostics, fair quotes, and Jesse on the truck. We arrive when your heat dies, even at 2am.",
  },
  {
    label: "Cooling service",
    backgroundImage: "hero-cooling-summer.jpg",
    title: "Cool When",
    accent: "It’s 100°.",
    descriptionBefore:
      "Central AC, mini-splits, and seasonal tune-ups built for ",
    descriptionStrong: "Utah summers.",
    descriptionAfter:
      " Diagnostic-first calls — we fix what is broken, not what is profitable. Sized right and installed right the first time, with workmanship guaranteed.",
  },
] as const;
