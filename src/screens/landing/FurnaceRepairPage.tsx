import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Link } from "@/components/Link";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_ROUTE } from "@/config/site";
import { HeaderShell } from "@/screens/home/HeaderShell";
import { Icon } from "@/screens/home/Icon";
import { LandingFaq } from "./LandingFaq";
import {
  CALL,
  ComparisonTable,
  CountyTable,
  DecisionColumns,
  InfoCardGrid,
  LandingCta,
  LandingFooter,
  LandingHero,
  LandingSection,
  StepRows,
} from "./LandingParts";
import { LANDING_FOOTER_COLUMNS } from "./landing-routes";

export const FURNACE_REPAIR_FAQS = [
  {
    question: "What should I check before calling for furnace repair?",
    answer:
      "Start with your thermostat. Make sure it's set to heat, and the temperature is set above the current room temperature. Check the furnace filter for heavy dust buildup and look for a tripped circuit breaker. If those checks don't solve the problem, give us a call.",
  },
  {
    question: "What does the blinking light on my furnace mean?",
    answer:
      "Many furnaces use a flashing LED light to show fault codes. The number and pattern of flashes help identify problems with ignition, airflow, or other components. Each manufacturer uses different codes, so take a picture or count the flashes before calling. That information gives us a useful starting point when we inspect your furnace.",
  },
  {
    question: "Why does my furnace make a loud banging or squealing noise?",
    answer:
      "A banging sound might come from expanding ductwork, while squealing or grinding often indicates trouble with the blower motor or another moving component. A loud bang during ignition also deserves immediate attention. If you hear a new or unusually loud noise, shut the furnace off and have us take a look before running it again.",
  },
  {
    question: "Why are some rooms colder than others when my furnace runs?",
    answer:
      "If some rooms stay cold while others heat up normally, the problem could be in your ductwork rather than the furnace. Leaky ducts or blocked return vents restrict airflow and keep warm air from reaching certain areas. We'll check the airflow throughout your home to find out what's causing the temperature differences.",
  },
  {
    question: "Why is there water leaking around my furnace?",
    answer:
      "High-efficiency furnaces produce condensation as part of the heating process. A clogged condensate drain or failing condensate pump might cause water to collect around the equipment. A nearby humidifier could also be responsible. We'll trace the source of the leak and check the affected components before recommending repairs.",
  },
  {
    question: "How often should I have my furnace serviced?",
    answer:
      "We recommend having your furnace checked once a year, preferably before winter hits. During a tune-up, we'll inspect the burners, check the electrical components, test the safety controls, and make sure everything is running like it should. Regular maintenance helps catch worn parts and other issues before they leave you without heat.",
  },
  {
    question: "Why does my furnace keep running after the thermostat reaches the right temperature?",
    answer:
      'Your furnace blower normally runs for a short time after the burners shut off to move the remaining heat through your ductwork. If the fan never stops, check whether your thermostat fan setting is set to "On" instead of "Auto." A faulty fan control or another electrical issue could also keep the blower running.',
  },
  {
    question: "Why does my furnace keep tripping the circuit breaker?",
    answer:
      "A furnace that repeatedly trips its breaker could have an electrical short or a blower motor drawing too much current. Don't keep resetting the breaker to force the system to run. Leave it off and have us inspect the electrical components to find out what's causing the problem.",
  },
  {
    question: "How should I prepare for a furnace repair appointment?",
    answer:
      "Before we arrive, clear any boxes or other items that block access to your furnace, and make sure we can reach the thermostat. If the system has been making strange noises or showing error codes, let our technician know. That information helps us narrow down the problem while we inspect the equipment.",
  },
] as const;

export default function FurnaceRepairPage({ path }: { path: `/${string}` }) {
  return (
    <div className="one-call-page ocl-page">
      <HeaderShell />
      <main>
        <LandingHero
          eyebrow="24/7 Furnace repair | Brigham City & Northern Utah"
          title="Let's Get Your Heat"
          accent="Back Where It Belongs"
          body="When your furnace quits during a northern Utah winter, you need someone who knows how to fix it. At One Call Heating & Air, we get to the bottom of the problem before recommending repairs. Our crew checks the system, explains what's wrong, and gives you an honest quote before starting work. We also carry common replacement parts on the truck to help get your heat running again on the first visit."
          primary={CALL}
          secondary={{ label: "Request Furnace Service", href: CONTACT_ROUTE }}
          image="hero-heating-winter.jpg"
        />

        <SectionReveal index={1}>
          <LandingSection
            id="furnace-signs"
            eyebrow="What is your furnace doing?"
            title="We'll find out what's"
            accent="wrong with your furnace"
            description="A furnace that won't heat properly usually gives you a few signs that something's wrong. Let us know what you've noticed, and we'll check the system to find out what's causing the trouble."
          >
            <InfoCardGrid
              cards={[
                {
                  title: "Your furnace isn't blowing warm air",
                  body: "Your thermostat calls for heat, but the house stays cold. We'll check the ignition system and heating components to find out what's keeping the furnace from doing its job.",
                },
                {
                  title: "Your furnace keeps shutting off",
                  body: "If your furnace starts up and shuts down before the house gets warm, something's interrupting the heating cycle. We'll check the flame sensor and airflow to find out why.",
                },
                {
                  title: "Your furnace has weak airflow",
                  body: "Your furnace runs, but barely any air reaches the rooms. We'll inspect the blower motor and check for restrictions that keep warm air from moving through the house.",
                },
              ]}
            />
            <div className="ocl-section-cta">
              <Link href={CONTACT_ROUTE} className="oc-button oc-button-amber oc-button-large">
                Get a Furnace Diagnostic
                <Icon name="arrow" />
              </Link>
            </div>
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={2}>
          <LandingSection
            id="what-we-fix"
            tone="soft"
            eyebrow="What we fix"
            title="From a bad igniter"
            accent="to a failed blower."
            description="We handle the parts and problems that keep a furnace from doing its job."
          >
            <InfoCardGrid
              numbered
              cards={[
                { eyebrow: "01", title: "Igniters and flame sensors", body: "If the burners won't light or the flame drops out, we'll test the ignition parts and replace the failed component." },
                { eyebrow: "02", title: "Gas valves and pressure", body: "We check gas delivery and valve operation as part of the diagnosis, with combustion safety at the center of the work." },
                { eyebrow: "03", title: "Blower motors", body: "If the burner runs but warm air won't move, we'll inspect the motor and the electrical parts that control it." },
                { eyebrow: "04", title: "Control boards and thermostats", body: "We'll trace the signals that tell the furnace when to start and stop, rather than replacing the controls on a hunch." },
                { eyebrow: "05", title: "Short cycling", body: "We look at overheating limits, flame sensing, and airflow to find out why the furnace keeps cutting the cycle short." },
                { eyebrow: "06", title: "Airflow and safety checks", body: "We inspect filters and airflow restrictions, then check combustion safety before we call the repair finished." },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={3}>
          <LandingSection
            id="how-furnace-repair-works"
            eyebrow="How furnace repair works"
            title="Here’s how we get your"
            accent="furnace running again"
            description="You'll know what we found and what the repair costs before we get to work."
            centered
          >
            <StepRows
              steps={[
                {
                  step: "01",
                  title: "Give us a call",
                  body: "Tell us if the furnace isn't starting, blows cold air, or keeps shutting off. For a no-heat emergency, call the phone number directly instead of waiting on a form.",
                  cta: CALL,
                  screen: { kind: "call" },
                },
                {
                  step: "02",
                  title: "We test the furnace",
                  body: "We inspect the system in person, follow the heating cycle, and test the components tied to the failure. We don't order parts based on a guess.",
                  screen: {
                    kind: "checklist",
                    title: "Furnace test",
                    items: ["Igniter & flame sensor", "Gas valve operation", "Blower motor", "Control board signals", "Airflow & filter"],
                  },
                },
                {
                  step: "03",
                  title: "We explain the quote",
                  body: "We'll tell you what failed and walk through the repair cost. You approve the work before we install parts or start the fix.",
                  screen: {
                    kind: "quote",
                    title: "Repair quote",
                    lines: [
                      ["What failed", "Explained"],
                      ["Repair cost", "Itemized"],
                      ["Your approval", "Before work"],
                    ],
                    note: "You approve the work before we install parts or start the fix.",
                  },
                },
                {
                  step: "04",
                  title: "We repair and check it",
                  body: "When we have the right part on the truck, we repair and run the furnace through its heating cycle. We check operation and safety before we leave.",
                  screen: {
                    kind: "done",
                    title: "Heat restored",
                    items: ["Part repaired", "Full heating cycle run", "Safety checked"],
                  },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={4}>
          <LandingSection
            id="repair-or-replace"
            tone="soft"
            eyebrow="Repair or replace"
            title="We'll tell you if your"
            accent="furnace is worth fixing"
            description="We'll check the condition of your furnace and find out what repairs it needs. If the equipment still has plenty of life left, we'll give you a straightforward quote to get it running again."
          >
            <DecisionColumns
              left={{
                title: "Repair makes sense",
                items: [
                  "The problem involves a repairable component, such as an igniter or flame sensor.",
                  "The furnace is in good condition and hasn't needed frequent repairs.",
                  "The repair cost makes sense for the equipment's remaining life.",
                ],
              }}
              right={{
                title: "Replacement deserves a look",
                items: [
                  "The furnace keeps breaking down, and repair bills are adding up.",
                  "A major component has failed, and the repair is expensive.",
                  "Serious safety concerns make continued operation impractical.",
                ],
              }}
            />
            <div className="ocl-section-cta">
              <Link href={CONTACT_ROUTE} className="oc-button oc-button-amber oc-button-large">
                Talk to Us About Your Furnace
                <Icon name="arrow" />
              </Link>
            </div>
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={5}>
          <LandingSection
            id="compare-options"
            eyebrow="Compare your options"
            title="Standard visit"
            accent="or Gold member?"
            description="Either way, we'll diagnose the furnace and explain the repair first."
          >
            <ComparisonTable
              caption="Gold Membership compared with a standard furnace repair visit"
              columns={["What you get", "Gold Membership", "Standard Visit"]}
              highlight={1}
              rows={[
                ["Furnace diagnostic", "$0", "$89; we waive it with repair"],
                ["Emergency furnace calls", "Priority response", "24/7 response"],
                ["Parts and labor", "15% member discount", "Itemized repair quote"],
                ["Seasonal tune-ups", "Two each year", "Book separately"],
                ["Repair approval", "Quote before work", "Quote before work"],
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
          <LandingSection
            id="service-area"
            eyebrow="Based in Brigham City"
            title="Furnace repair across"
            accent="northern Utah."
            description="From Salt Lake City to the Idaho border, we take no-heat calls across seven counties. Our crew runs furnace repair routes through Brigham City, Ogden, and Logan, as well as cities up and down the Wasatch Front. If you're outside our usual stops, call us. We'll confirm whether your address is on our current route."
          >
            <CountyTable />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={8}>
          <LandingFaq id="furnace-repair-faq" path={path} eyebrow="Frequently asked questions" title="FAQ" faqs={FURNACE_REPAIR_FAQS} />
        </SectionReveal>

        <SectionReveal index={9}>
          <LandingCta
            title="Let's get your furnace"
            accent="running again"
            body="When your furnace quits, give our team a call. Tell us what you've noticed and where you're located, and we'll help you schedule a repair visit. Our crew will find out what's wrong and explain what it'll take to get your heat back up and running."
            banner={["Call (801) 864-2045", "24/7 furnace repair", "No runaround"]}
            primary={{ label: "Call One Call for Furnace Repair", href: CALL.href }}
            secondary={{ label: "Request Furnace Service", href: CONTACT_ROUTE }}
          />
        </SectionReveal>
      </main>
      <LandingFooter
        brandLine="One Call Heating & Air | Owner-operated in Brigham City, Utah | Furnace and HVAC service across northern Utah."
        columns={LANDING_FOOTER_COLUMNS}
        areaLine="Brigham City · Ogden · Logan · Layton · Salt Lake City — seven northern Utah counties"
        trustLine="Licensed & insured · Local crew · Owner: Jesse"
      />
    </div>
  );
}
