
export const values = [
  {
    icon: "phone",
    title: "Owner on the Phone",
    copy: "Call (801) 864-2045 and Jesse picks up — not a call center, not a voicemail loop. You describe the problem to the person who will diagnose it.",
  },
  {
    icon: "check",
    title: "Diagnose First",
    copy: "The system gets tested before anything is quoted. If it needs a part, you hear which one and why. No one tells you the unit is done without showing you the proof.",
  },
  {
    icon: "clock",
    title: "Real 24/7",
    copy: "Furnace fails on a 12° January night or AC dies during a 102° July afternoon — same-day response, even on weekends.",
  },
  {
    icon: "pin",
    title: "Local Means Local",
    copy: "One crew. No subcontractor hand-offs. Brigham City based, with regular routes from Salt Lake County to the Idaho border.",
  },
  {
    icon: "layers",
    title: "Right Equipment",
    copy: "SEER2-compliant central AC. Cold-climate heat pumps where they make sense. 96% AFUE furnaces. Equipment is spec'd for what survives Utah — not the cheapest box on the truck.",
  },
  {
    icon: "shield",
    title: "Licensed and Insured",
    copy: "Utah HVAC license. General liability insurance on every job and every truck. Permits pulled on every install.",
  },
] as const;

export const serviceAreas = [
  ["Brigham City", "Headquarters"],
  ["Salt Lake City", "Salt Lake County"],
  ["Sandy", "Salt Lake County"],
  ["Murray", "Salt Lake County"],
  ["West Jordan", "Salt Lake County"],
  ["Holladay", "Salt Lake County"],
  ["Bountiful", "Davis County"],
  ["Farmington", "Davis County"],
  ["Kaysville", "Davis County"],
  ["Layton", "Davis County"],
  ["Clearfield", "Davis County"],
  ["Syracuse", "Davis County"],
  ["Morgan", "Morgan County"],
  ["Roy", "Weber County"],
  ["Riverdale", "Weber County"],
  ["Ogden", "Weber County"],
  ["North Ogden", "Weber County"],
  ["Pleasant View", "Weber County"],
  ["Tremonton", "Box Elder County"],
  ["Perry", "Box Elder County"],
  ["Willard", "Box Elder County"],
  ["Logan", "Cache County"],
  ["Smithfield", "Cache County"],
  ["Hyrum", "Cache County"],
  ["Garden City", "Rich County"],
] as const;

export const aboutKeywordContent = {
  id: "local-hvac-company",
  eyebrow: "Brigham City Roots",
  heading: "Brigham City Roots. Direct Answers. One Accountable Crew.",
  introduction:
    "One owner and one crew keep the conversation, diagnosis, quote, and work connected from the first call through the final walkthrough.",
  items: [
    {
      title: "Owner-operated service",
      description:
        "You talk to the person who does the work. Jesse answers the phone, walks the system, and explains what he finds — so heating and cooling recommendations come from the same person who is accountable for the result.",
    },
    {
      title: "Diagnosis before the quote",
      description:
        "Whether the call is an AC repair, a furnace that won't light, a heat pump question, or routine maintenance — the visit starts with identifying what the equipment is actually doing, not what's most profitable to replace.",
    },
    {
      title: "Local routes across northern Utah",
      description:
        "The crew is based in Brigham City and serves communities from Salt Lake County to the Idaho border, with address-level scheduling confirmed before the visit.",
    },
  ],
  links: [
    { href: LOCATION_ROUTE, label: "Explore the Service Area" },
    { href: CONTACT_ROUTE, label: "Talk With One Call" },
  ],
} as const satisfies KeywordContentDefinition;
import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import { ABOUT_ROUTE, CONTACT_ROUTE, LOCATION_ROUTE } from "@/config/site";

export const aboutAnswersContent = {
  id: "about-answers",
  path: ABOUT_ROUTE,
  eyebrow: "Company Questions",
  heading: "Direct Answers About One Call.",
  introduction:
    "These answers explain who handles the work, where the crew operates, and how recommendations are made.",
  quickAnswer: {
    question: "Who owns and operates One Call Heating & Air?",
    answer:
      "Jesse owns and operates One Call Heating & Air from Brigham City, Utah. He answers the phone, leads diagnostics and installations, and remains the accountable point of contact for the work.",
  },
  faqs: [
    {
      question: "Who answers when I call One Call?",
      answer:
        "Jesse answers the owner-operated phone line directly, including emergency calls. There is no corporate call center or dispatcher between the customer and the person responsible for the work.",
    },
    {
      question: "Where is One Call based?",
      answer:
        "Brigham City, Utah. Jesse runs routes across seven northern Utah counties, from Salt Lake County to the Idaho border. The full list of all 41 served communities is on the Service Area page.",
    },
    {
      question: "How does One Call decide what to recommend?",
      answer:
        "The crew tests the equipment at the property before recommending anything. If a capacitor is failing, the recommendation is a capacitor — not a new unit. If the heat exchanger is cracked, you see the evidence and hear why repair is or is not practical. The quote comes after the diagnosis, and work does not start until you approve it.",
    },
    {
      question: "Is One Call licensed and insured?",
      answer:
        "One Call publishes that it holds a Utah HVAC license, carries general liability insurance for its work and trucks, and pulls permits for installations.",
    },
  ],
} as const satisfies PageAnswersDefinition;
