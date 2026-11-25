import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_ROUTE, SERVICES_ROUTE } from "@/config/site";
import { HeaderShell } from "@/screens/home/HeaderShell";
import { LandingFaq } from "./LandingFaq";
import {
  CALL,
  ComparisonTable,
  CountyTable,
  InfoCardGrid,
  LandingCta,
  LandingFooter,
  LandingHero,
  LandingSection,
  ServiceCardGrid,
  StepRows,
} from "./LandingParts";
import { FURNACE_REPAIR_ROUTE, LANDING_FOOTER_COLUMNS } from "./landing-routes";

export const SERVICES_REWRITE_FAQS = [
  {
    question: "Why does my furnace keep turning on and off?",
    answer:
      "If your furnace shuts off before reaching the temperature on your thermostat, something could be interrupting the heating cycle. Restricted airflow sometimes trips a safety limit switch, while a dirty flame sensor might shut down the burners. We'll check the system to find out what's causing the problem.",
  },
  {
    question: "Why is my AC running but not cooling the house?",
    answer:
      "If your AC runs constantly but the house stays warm, the system isn't removing heat the way it should. A dirty condenser coil or a refrigerant leak could explain the problem. We'll check the cooling system and track down the issue before recommending a repair.",
  },
  {
    question: "What should I check before calling for HVAC repair?",
    answer:
      "Start with your thermostat and make sure it's set to the right mode. Check your air filter for heavy dirt buildup, too. If the system still won't run properly, give us a call. Don't keep resetting a breaker that trips repeatedly, as that indicates an electrical problem that needs attention.",
  },
  {
    question: "Why does one room stay hotter or colder than the rest of my house?",
    answer:
      "Uneven temperatures usually point to an airflow issue or differences in how your home gains and loses heat. The ductwork might not deliver enough air to that room, or the space might need better insulation. We'll look at how air moves through your home before recommending changes.",
  },
  {
    question: "Do I need new ductwork when replacing my HVAC system?",
    answer:
      "Not necessarily. If your existing ductwork is in good condition and delivers the right amount of airflow, there's no reason to replace it only because you're getting new equipment. We'll inspect the ductwork and check whether it supports the new system before recommending any changes.",
  },
  {
    question: "Why is ice forming on my air conditioner?",
    answer:
      "Ice on your AC's refrigerant lines or indoor coil usually indicates an airflow restriction or a refrigerant problem. Turn off the cooling system and let the ice thaw. Continuing to run it risks damaging the compressor. We'll find out what's causing the freezing before getting the system running again.",
  },
  {
    question: "Why has my heating bill increased even though my furnace still works?",
    answer:
      "A furnace doesn't have to break down completely to start costing you extra money. Restricted airflow or a dirty filter forces the system to work harder. If you've noticed longer heating cycles or higher energy use without a clear reason, we'll check how efficiently your equipment is operating.",
  },
  {
    question: "How often do I need to change my HVAC air filter?",
    answer:
      "Check your filter every month, especially during northern Utah's hottest and coldest months. How frequently you replace it depends on the filter type and how much dust your system collects. Homes with pets usually need closer attention. A clean filter helps maintain proper airflow and reduces unnecessary strain on your equipment.",
  },
] as const;

export default function ServicesRewritePage({ path }: { path: `/${string}` }) {
  return (
    <div className="one-call-page ocl-page">
      <HeaderShell />
      <main>
        <LandingHero
          eyebrow="HVAC services | Brigham City & Northern Utah"
          title="One Call for All Your"
          accent="Heating and Cooling Needs"
          body="When your heating or cooling system needs attention, you want a crew that knows the equipment and gives you a straight answer. We handle everything from HVAC repairs to new installations and routine maintenance throughout northern Utah. We're owner-operated out of Brigham City, and we believe in doing the job right. We'll take a look at your system and explain what we find so you know exactly what you're paying for before the work starts."
          primary={CALL}
          secondary={{ label: "Get a Free Estimate", href: CONTACT_ROUTE }}
          image="hero-technician.jpg"
        />

        <SectionReveal index={1}>
          <LandingSection
            id="how-we-help"
            eyebrow="How we help"
            title="What does your heating"
            accent="or cooling system need?"
            description="Whether your system has stopped working or you're looking to replace old equipment, we'll help you figure out the next step. Tell us what's going on, and we'll take it from there."
          >
            <InfoCardGrid
              cards={[
                {
                  eyebrow: "No heat",
                  title: "Furnace quit?",
                  body: "If your furnace blows cold air or keeps shutting off, we'll get to the bottom of it. Our crew will inspect your heating system to determine the cause of the issue before recommending a repair.",
                },
                {
                  eyebrow: "No cooling",
                  title: "AC not keeping up?",
                  body: "If your AC runs but your house stays hot, something isn't working right. We'll check the system to find out what's affecting its cooling performance and explain what it'll take to fix it.",
                },
                {
                  eyebrow: "New equipment",
                  title: "Ready for a new system?",
                  body: "Replacing your heating or cooling system starts with choosing the right equipment for your home. We'll evaluate your heating and cooling needs before recommending a system that fits.",
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={2}>
          <LandingSection
            id="what-we-do"
            tone="soft"
            eyebrow="What we do"
            title="Our heating and"
            accent="cooling services"
            description="From new HVAC installations to repairs and routine maintenance, our crew handles your heating and cooling needs throughout northern Utah."
          >
            <ServiceCardGrid
              columns={3}
              items={[
                {
                  title: "HVAC installation",
                  anchor: "install",
                  icon: "home",
                  body: "New furnaces, central AC, cold-climate heat pumps, and ductless mini-splits. We size the equipment and install it to spec.",
                  cta: { label: "Explore Installation", href: `${SERVICES_ROUTE}#install` },
                },
                {
                  title: "Furnace repair",
                  anchor: "repair",
                  icon: "warm",
                  body: "If your furnace stops heating or keeps shutting off, we'll track down the problem. Our crew checks the system to find out what's wrong and gives you a clear repair quote before starting the work.",
                  cta: { label: "Get Repair Service", href: FURNACE_REPAIR_ROUTE },
                },
                {
                  title: "Seasonal Tune-Ups",
                  anchor: "service",
                  icon: "clock",
                  body: "Spring AC checks and fall furnace service, including electrical tests and equipment cleaning.",
                  cta: { label: "Book a Tune-Up", href: CONTACT_ROUTE },
                },
                {
                  title: "Heat Pumps",
                  icon: "snow",
                  body: "Heating and cooling equipment for whole homes, additions, and rooms without ductwork.",
                  cta: { label: "Talk About Heat Pumps", href: `${SERVICES_ROUTE}#install` },
                },
                {
                  title: "AC repair",
                  icon: "wrench",
                  body: "If your AC runs but won't cool the house or keeps shutting off, we'll find out what's causing the trouble. Our crew will diagnose the problem and explain what it'll take to get your system cooling again.",
                  cta: { label: "Request AC Repair", href: `${SERVICES_ROUTE}#repair` },
                },
                {
                  title: "24/7 emergency HVAC repair",
                  icon: "phone",
                  body: "When your furnace quits in the middle of a cold night or your AC goes down during a summer heat wave, give us a call. Our crew handles emergency heating and cooling repairs throughout northern Utah.",
                  cta: { label: "Call for emergency repair", href: CONTACT_ROUTE },
                },
                {
                  title: "Gold Membership",
                  anchor: "maintenance",
                  icon: "check-circle",
                  featured: true,
                  wide: true,
                  body: "Stay on top of your heating and cooling maintenance with two seasonal tune-ups each year. For $99 annually, our Gold Membership also includes priority response and exclusive member savings when your system needs attention.",
                  cta: { label: "See Gold Membership", href: CONTACT_ROUTE },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={3}>
          <LandingSection id="what-to-expect" eyebrow="What to expect" title="What to expect" accent="when you call us" centered>
            <span id="service-planning-checklist" aria-hidden="true" />
            <StepRows
              steps={[
                {
                  step: "01",
                  title: "Call",
                  body: "Tell us what's going on with your heating or cooling system. We'll ask a few questions about the problem and help you schedule a service visit.",
                  cta: CALL,
                  screen: { kind: "call" },
                },
                {
                  step: "02",
                  title: "Diagnose",
                  body: "Our crew will inspect your equipment and run the necessary tests to track down the issue. We take the time to figure out what's actually wrong before recommending a repair.",
                  screen: {
                    kind: "checklist",
                    title: "Equipment tests",
                    items: ["Thermostat & controls", "Airflow & filter", "Electrical checks", "Heating / cooling cycle", "Issue found"],
                  },
                },
                {
                  step: "03",
                  title: "Quote",
                  body: "Once we find the problem, we'll explain what's going on and walk you through your options. You'll get a clear quote and have the chance to ask questions before approving any work.",
                  screen: {
                    kind: "quote",
                    title: "Your options",
                    lines: [
                      ["Repair scope", "Explained"],
                      ["Parts & labor", "Itemized"],
                      ["Your approval", "Required"],
                    ],
                    note: "Ask questions before approving any work.",
                  },
                },
                {
                  step: "04",
                  title: "Finish",
                  body: "Once you approve the work, our crew will get to it. We'll test the system after the repair or installation and explain what we did before wrapping up the visit.",
                  screen: {
                    kind: "done",
                    title: "Visit wrap-up",
                    items: ["Work completed", "System tested", "Work explained"],
                  },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={4}>
          <LandingSection
            id="why-one-call"
            tone="soft"
            eyebrow="Why Northern Utah chooses One Call"
            title="Real HVAC work with"
            accent="straight answers"
            description="We're a local, owner-operated crew that believes in doing the work right and giving people straight answers. When you call One Call, you'll deal with the people who actually work on your equipment. We'll take the time to find the problem and explain what needs to happen before we get started."
          >
            <InfoCardGrid
              numbered
              cards={[
                { eyebrow: "01", title: "Talk directly to the owner", body: "When you call One Call, you get Jesse, the owner, on the phone. You'll deal directly with the guy running the business instead of going through a call center." },
                { eyebrow: "02", title: "Diagnosis first", body: "We take the time to check your equipment and find out what's actually wrong. You'll know the cause of the problem before we recommend a repair." },
                { eyebrow: "03", title: "Clear pricing from the start", body: "We'll explain what the work involves and give you a clear quote before we start. You'll know what you're paying for, with no surprise charges." },
                { eyebrow: "04", title: "Ready to get to work", body: "Our trucks carry common HVAC replacement parts, so we're ready to tackle many heating and cooling problems during the first visit." },
                { eyebrow: "05", title: "Installed to spec", body: "We take equipment sizing seriously and follow manufacturer specifications during installation. Before we wrap up, we test the system to make sure everything runs as it should." },
                { eyebrow: "06", title: "Local to northern Utah", body: "We're based in Brigham City and serve homeowners across seven northern Utah counties. We know what local winters demand from a furnace and how hard an AC works through the summer." },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={5}>
          <LandingSection
            id="service-options"
            eyebrow="Service options"
            title="Why choose our"
            accent="Gold Membership"
            description="A one-time visit handles the issue in front of you. Gold adds scheduled upkeep and member benefits throughout the year."
          >
            <ComparisonTable
              caption="One-time service compared with Gold Membership"
              columns={["What you get", "One-time service", "Gold Membership"]}
              highlight={2}
              rows={[
                ["Price", "$89 diagnostic; repairs quoted", "$99/year"],
                ["Diagnosis", "On-site testing and findings", "$0 diagnostic fee for members"],
                ["Scheduled tune-ups", "Book visits as needed", "Two seasonal tune-ups annually"],
                ["Repair costs", "Approved written quote", "15% off parts and labor"],
                ["Emergency requests", "24/7 emergency calls", "Priority emergency response"],
                ["Who it fits", "One repair or specific equipment issue", "Ongoing maintenance and member savings"],
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={6}>
          <GoogleReviewsSection
            eyebrow="Reviews"
            title="What our customers"
            accent="are saying"
            description="See what northern Utah homeowners share about working directly with One Call Heating & Air."
          />
        </SectionReveal>

        <SectionReveal index={7}>
          <LandingFaq id="services-rewrite-faq" path={path} eyebrow="Common questions" title="FAQ" faqs={SERVICES_REWRITE_FAQS} />
        </SectionReveal>

        <SectionReveal index={8}>
          <LandingSection
            id="service-area"
            eyebrow="Northern Utah HVAC"
            title="Serving Brigham City"
            accent="and northern Utah"
            description="We work from Brigham City through Ogden and Logan, with routes south toward Salt Lake City and north to the Idaho border. Our service area covers Salt Lake, Davis, Morgan, Weber, Box Elder, Cache, and Rich counties. Tell us where you're located when you call, and we'll check the route."
          >
            <CountyTable />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={9}>
          <LandingCta
            eyebrow="Ready when you are"
            title="Ready to get your heating or cooling"
            accent="taken care of?"
            body="Tell us what's going on with your heating or cooling. We'll help you book the right visit, talk through the cost, and get the work moving without the runaround."
            banner={["Call (801) 864-2045", "24/7 emergency HVAC", "Request service"]}
            primary={CALL}
            secondary={{ label: "Request a Free Estimate", href: CONTACT_ROUTE }}
          />
        </SectionReveal>
      </main>
      <LandingFooter
        brandLine="One Call Heating & Air | Owner-operated HVAC based in Brigham City, Utah. Serving seven northern Utah counties."
        columns={LANDING_FOOTER_COLUMNS}
        areaLine="Salt Lake to the Idaho border — Salt Lake · Davis · Morgan · Weber · Box Elder · Cache · Rich counties"
        trustLine="Licensed & insured · Local crew · Owner: Jesse"
      />
    </div>
  );
}
