
export const serviceAreas = [
  "Salt Lake City",
  "Sandy",
  "Murray",
  "West Jordan",
  "South Jordan",
  "Cottonwood Heights",
  "Holladay",
  "Draper",
  "Bountiful",
  "Centerville",
  "Farmington",
  "Kaysville",
  "Layton",
  "Clearfield",
  "Syracuse",
  "Morgan",
  "Roy",
  "Riverdale",
  "South Ogden",
  "Ogden",
  "North Ogden",
  "Pleasant View",
  "Plain City",
  "Brigham City",
  "Perry",
  "Willard",
  "Mantua",
  "Corinne",
  "Tremonton",
  "Garland",
  "Honeyville",
  "Bear River City",
  "Logan",
  "North Logan",
  "Smithfield",
  "Hyrum",
  "Providence",
  "Wellsville",
  "Richmond",
  "Garden City",
  "Randolph",
] as const;

export const contactKeywordContent = {
  id: "request-hvac-service",
  eyebrow: "Request HVAC Service",
  heading: "Tell Us What You Need — Repair, Maintenance, or Installation.",
  introduction:
    "Start a northern Utah HVAC service request by choosing the category that fits. The more detail you include, the faster the crew can prepare before calling you back.",
  items: [
    {
      title: "Repair — something is broken or not working right",
      description:
        "For an AC repair request, note whether the unit is blowing warm air, leaking, cycling on and off, making unusual noise, or not turning on at all. For a furnace repair request, check for error codes or flashing lights and note whether the blower runs without producing heat. Include when the symptom started and whether it is constant or intermittent. If you smell gas or a carbon-monoxide alarm sounds, leave the property and call 911 or the gas utility from outside — do not use this form for immediate danger.",
    },
    {
      title: "Maintenance — tune-up or recurring service",
      description:
        "To schedule northern Utah HVAC service, identify the equipment — furnace, AC, heat pump, or mini-split — and your preferred scheduling window. If you know when the system was last serviced, include that. It helps the crew decide what to prioritize during the visit.",
    },
    {
      title: "Installation — replacement or new system",
      description:
        "For a free HVAC estimate northern Utah, share the property address, current equipment if any, comfort goals, and the best way to reach you. Every project is reviewed before installation is scheduled.",
    },
  ],
  links: [
    { href: "#free-quote-form", label: "Start Your Service Request" },
    { href: PHONE_HREF, label: "Call for Urgent Help" },
    { href: SERVICES_ROUTE, label: "Review HVAC Services" },
  ],
} as const satisfies KeywordContentDefinition;
import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import {
  CONTACT_ROUTE,
  PHONE_HREF,
  SERVICES_ROUTE,
} from "@/config/site";

export const contactAnswersContent = {
  id: "contact-answers",
  path: CONTACT_ROUTE,
  eyebrow: "Request Questions",
  heading: "Quick Answers Before You Send a Request.",
  introduction:
    "Choose the contact method that matches the urgency, then include the details the crew needs to prepare for the conversation.",
  quickAnswer: {
    question: "How do I request HVAC service from One Call?",
    answer:
      "Call, text, email, or submit the free-quote form with the service type and contact information. For an active no-heat or no-cool emergency, call (801) 864-2045 rather than waiting for a form response.",
  },
  faqs: [
    {
      question: "What information should I include in the form?",
      answer:
        "Include the equipment type, symptoms, when the problem started, the property address or city, and the best phone number and email for follow-up. Adding error codes, thermostat photos, or access details helps the crew prepare before calling you back.",
    },
    {
      question: "What does One Call charge for estimates and diagnostics?",
      answer:
        "New installation estimates are free. Repair visits have an $89 diagnostic fee that is waived when the repair is booked with One Call. Gold Members receive the published $0 member diagnostic rate.",
    },
    {
      question: "What are the regular and emergency contact hours?",
      answer:
        "Published regular hours are Monday through Friday from 7:00 AM to 7:00 PM, Saturday from 8:00 AM to 5:00 PM, and Sunday by appointment. The direct emergency HVAC line is available 24/7 for active no-heat or no-cool problems.",
    },
    {
      question: "What happens after I submit the form?",
      answer:
        "Most form requests are answered within 24 hours. Jesse or the crew will call or text the number you provided to confirm the details, verify the property is on an active route, and schedule the visit. For an active emergency, call (801) 864-2045 instead of waiting for a form response.",
    },
  ],
} as const satisfies PageAnswersDefinition;
