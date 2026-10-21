import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import {
  CONTACT_ROUTE,
  EMERGENCY_ROUTE,
  LOCATION_ROUTE,
  PHONE_HREF,
  SERVICES_ROUTE,
} from "@/config/site";

export const emergencyKeywordContent: KeywordContentDefinition = {
  id: "emergency-hvac-help",
  eyebrow: "Emergency HVAC Help",
  heading: "Same day heating and air help starts with one call.",
  introduction:
    "For an urgent no-heat or no-cool problem, call One Call directly with the system, symptoms, property address, and any immediate safety conditions.",
  items: [
    {
      title: "Furnace or heat pump emergency",
      description:
        "If the furnace stops producing heat, shuts down repeatedly, or shows a fault code during cold weather — call and describe what the system is doing before attempting repeated resets. One Call handles emergency furnace repair northern Utah homeowners can reach by calling (801) 864-2045 directly.",
    },
    {
      title: "AC emergency",
      description:
        "For a complete cooling failure during hot weather, tell the crew whether the indoor fan and outdoor unit are running and whether any breakers tripped or error codes appeared. For 24 hour AC repair, call the same number — nights and weekends included.",
    },
    {
      title: "Same day HVAC service routing",
      description:
        "Whether the crew can respond the same day depends on the problem and property location. One Call confirms the route directly on the phone instead of placing the request into an unattended online queue.",
    },
  ],
  links: [
    { href: PHONE_HREF, label: "Call for Emergency Help" },
    { href: LOCATION_ROUTE, label: "Check the Service Area" },
  ],
};

export const emergencySituations = [
  {
    number: "01",
    title: "No heat",
    description:
      "The furnace or heat pump is running without producing warm air, cycling off before the home reaches temperature, or not starting at all during cold weather.",
  },
  {
    number: "02",
    title: "No cooling",
    description:
      "The air conditioner is not running, is blowing warm air, or cannot hold the home at a safe temperature during hot weather.",
  },
  {
    number: "03",
    title: "Electrical or equipment warning",
    description:
      "A breaker trips repeatedly when the system starts, the equipment makes a new harsh or grinding noise, or there is a burning smell near the furnace or air handler.",
  },
  {
    number: "04",
    title: "Active leak or shutdown",
    description:
      "Water is collecting around the equipment, a condensate line is overflowing, or the system has shut itself down and will not restart.",
  },
] as const;

export const emergencyResponseSteps = [
  {
    title: "Call the owner-operated line",
    description:
      "Call (801) 864-2045. Jesse picks up for active emergencies. The web form is available for non-urgent follow-up requests.",
  },
  {
    title: "Describe the system and symptoms",
    description:
      "Share the equipment type — furnace, AC, heat pump, or mini-split — what changed, any visible code or flashing light, and whether the system is completely down or intermittent.",
  },
  {
    title: "Confirm the address",
    description:
      "One Call confirms whether the property is inside the active route and explains the next available response. Northern Utah emergency AC repair is routed from Salt Lake County to the Idaho border.",
  },
] as const;

export const emergencyActions = {
  phone: PHONE_HREF,
  contact: CONTACT_ROUTE,
  services: SERVICES_ROUTE,
} as const;

export const emergencyAnswersContent = {
  id: "emergency-answers",
  path: EMERGENCY_ROUTE,
  eyebrow: "Emergency Questions",
  heading: "Quick Answers for an HVAC Emergency.",
  introduction:
    "Use the direct phone line for an active HVAC failure. Immediate fire, gas, or carbon-monoxide danger must go to emergency responders first.",
  quickAnswer: {
    question: "When should I call One Call for emergency HVAC help?",
    answer:
      "Call for an active no-heat or no-cool failure, repeated equipment shutdown, a new electrical or equipment warning, or an HVAC leak that requires prompt routing. Jesse confirms the next response directly from the system details and property address.",
  },
  faqs: [
    {
      question: "How should I contact One Call during an HVAC emergency?",
      answer:
        "Call (801) 864-2045 instead of waiting on the online form. The form remains available for non-urgent follow-up, maintenance, estimates, and other requests that do not need an immediate response.",
    },
    {
      question: "What information should I have ready when I call?",
      answer:
        "Share the equipment type, what changed, any visible error code or flashing light, whether the failure is constant or intermittent, and the complete property address so the route can be checked.",
    },
    {
      question: "What should I do if I smell gas or a carbon-monoxide alarm sounds?",
      answer:
        "Leave the property immediately. For a carbon-monoxide alarm, call 911 or emergency services from outside and do not reenter until responders give permission. If you smell or hear gas leaking, contact the local gas authority from outside before arranging HVAC repair.",
    },
    {
      question: "Does emergency service guarantee a same-day arrival?",
      answer:
        "No specific arrival time is guaranteed on the page. Response depends on the problem, current calls, and property location. One Call confirms the next available route directly by phone.",
    },
  ],
} as const satisfies PageAnswersDefinition;
