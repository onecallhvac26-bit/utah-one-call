import type { KeywordContentDefinition } from "@/components/KeywordContentSection";
import type { PageAnswersDefinition } from "@/components/PageAnswersSection";
import {
  CONTACT_ROUTE,
  SERVICES_ROUTE,
  SOCIAL_MEDIA_ROUTE,
} from "@/config/site";

export const socialMediaKeywordContent: KeywordContentDefinition = {
  id: "one-call-project-updates",
  eyebrow: "Project Notes",
  heading: "What We Post and Why.",
  introduction:
    "One Call Heating & Air social media and project content falls into three categories. Each one is tied to something you can check, prepare for, or act on.",
  items: [
    {
      title: "Seasonal tips",
      description:
        "When to change the filter. When to schedule a tune-up. What to check yourself before calling a tech. Timed to northern Utah's heating and cooling calendar — fall furnace prep before the first freeze, spring AC checks before the first 90° week.",
    },
    {
      title: "Project walkthroughs",
      description:
        "Notes from actual furnace, AC, heat pump, mini-split, thermostat, and airflow work on northern Utah properties. What the crew found, why a specific recommendation was made, and what the homeowner needed to know before approving the job.",
    },
    {
      title: "Community and service-area updates",
      description:
        "Seasonal conditions, scheduling notes, and preparation relevant to the communities One Call serves — from Salt Lake County through Cache Valley.",
    },
  ],
  links: [
    { href: SERVICES_ROUTE, label: "Explore HVAC Services" },
    { href: CONTACT_ROUTE, label: "Contact One Call" },
  ],
};

export const socialContentTopics = [
  {
    label: "Seasonal notes",
    title: "Prepare before the weather turns",
    description:
      "Use spring and fall reminders to check filters, confirm thermostat operation, clear the outdoor unit, and schedule service before peak demand hits.",
  },
  {
    label: "Project notes",
    title: "Understand what the crew is evaluating",
    description:
      "One Call project updates focus on equipment condition, airflow, system sizing, and symptoms — the practical reasoning behind a recommendation, explained without jargon.",
  },
  {
    label: "Direct help",
    title: "Know when to call instead",
    description:
      "A tip or project post cannot diagnose your specific equipment. If the system is making noise, leaking, blowing warm air, or will not turn on — call (801) 864-2045. Jesse can answer questions about your system directly, which no post can replace.",
  },
] as const;

export const homeownerUpdateChecklist = [
  "Save the equipment brand and model number.",
  "Photograph the thermostat display and any visible error code.",
  "Note when the symptom started and whether it is constant or intermittent.",
  "Share the property city so the crew can confirm routing.",
] as const;

export const socialMediaAnswersContent = {
  id: "social-media-answers",
  path: SOCIAL_MEDIA_ROUTE,
  eyebrow: "Update Questions",
  heading: "Quick Answers Before You Use an Update.",
  introduction:
    "Project posts and seasonal tips are useful preparation, but they do not replace an onsite diagnosis for your equipment.",
  quickAnswer: {
    question: "What will I find on One Call's social media page?",
    answer:
      "The page organizes northern Utah HVAC tips, project walkthroughs, and community or service-area updates around practical actions homeowners can take before scheduling work.",
  },
  faqs: [
    {
      question: "Can a project post diagnose my HVAC system?",
      answer:
        "No. A post can explain common symptoms and project decisions, but it cannot test your specific equipment. Call One Call when a system is leaking, making a new noise, blowing the wrong temperature, or failing to start.",
    },
    {
      question: "How are the tips different from a sales pitch?",
      answer:
        "Tips and project notes focus on what you can check, prepare for, or ask about — not on selling a specific brand or upgrade. When a post covers a project, it explains the reasoning behind the recommendation so you know what to look for if you face a similar situation.",
    },
    {
      question: "What kinds of projects do the updates cover?",
      answer:
        "Real work on northern Utah properties — furnaces, central air conditioners, heat pumps, ductless mini-splits, thermostats, and airflow. Each note typically explains what the crew found, why a specific recommendation was made, and what the homeowner needed to decide before the work started.",
    },
    {
      question: "Does One Call post on a set schedule?",
      answer:
        "There is no fixed posting schedule. Tips and project notes are published when there is something useful to share — usually around seasonal transitions or after a project that illustrates a common homeowner decision.",
    },
  ],
} as const satisfies PageAnswersDefinition;
