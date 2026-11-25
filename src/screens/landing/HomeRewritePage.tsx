import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Link } from "@/components/Link";
import { SectionReveal } from "@/components/SectionReveal";
import { CONTACT_ROUTE, LOCATION_ROUTE } from "@/config/site";
import { HeaderShell } from "@/screens/home/HeaderShell";
import { Icon } from "@/screens/home/Icon";
import { LandingFaq } from "./LandingFaq";
import {
  CALL,
  CountyTable,
  InfoCardGrid,
  LandingCta,
  LandingFooter,
  LandingHero,
  LandingSection,
  ServiceCardGrid,
  StepRows,
} from "./LandingParts";
import { LANDING_FOOTER_COLUMNS } from "./landing-routes";

export const HOME_REWRITE_FAQS = [
  {
    question: "Why does my furnace keep turning on and off?",
    answer:
      "If your furnace starts up but shuts off before the house reaches the right temperature, it's probably short cycling. Dirty filters, overheating, or problems with the flame sensor could cause it. We'll check what's interrupting the heating cycle and figure out what needs fixing.",
  },
  {
    question: "Why are some rooms hotter or colder than others?",
    answer:
      "Uneven temperatures usually point to an airflow problem, although insulation and ductwork also play a role. Blocked vents, leaking ducts, or an improperly sized system could leave certain rooms uncomfortable. We'll look at how air moves through your home to track down the issue.",
  },
  {
    question: "How often should I change my furnace filter?",
    answer:
      "Most homeowners need to check their filters monthly and replace them every one to three months, depending on the filter type and household conditions. Pets, dust, and heavy system use affect how quickly filters get dirty. A clogged filter restricts airflow and puts extra strain on your equipment.",
  },
  {
    question: "Do heat pumps work during northern Utah winters?",
    answer:
      "Yes. Modern cold-climate heat pumps operate in temperatures well below freezing, although their heating output changes as outdoor temperatures drop. We'll look at your home's heating requirements and the equipment's cold-weather performance before recommending a heat pump.",
  },
  {
    question: "How do I know what size furnace or AC my home needs?",
    answer:
      "Square footage alone won't tell you what size system to buy. Your home's insulation, windows, and heating or cooling demands all affect the calculation. We use those details to determine the right equipment capacity. An oversized system could cycle too frequently, while an undersized unit might struggle to keep up.",
  },
  {
    question: "Do I need to replace my ductwork when installing a new HVAC system?",
    answer:
      "Not necessarily. If your existing ducts are in good condition and deliver the right amount of airflow, you might not need to replace them. We'll check the ductwork and look for restrictions or leaks before recommending changes. There's no reason to replace something that's doing its job.",
  },
  {
    question: "Is it normal for my furnace to smell when I turn it on for the first time?",
    answer:
      "A slight dusty smell isn't unusual when you start your furnace after months without using it. Dust collects on the equipment and burns off as the system heats up. The smell should disappear fairly quickly. If you notice a strong burning odor or smoke, shut the system off and get it checked. If you smell gas, leave the building immediately and contact your gas utility or emergency services from a safe location.",
  },
] as const;

export default function HomeRewritePage({ path }: { path: `/${string}` }) {
  return (
    <div className="one-call-page ocl-page">
      <HeaderShell />
      <main>
        <LandingHero
          eyebrow="24/7 Emergency HVAC Services · Brigham City, Utah"
          title="One Call to"
          accent="Get It Done"
          body="We're a locally owned HVAC company serving northern Utah's seven counties, from Salt Lake City to the Idaho border. We handle furnace and AC installation, 24/7 emergency repairs, and seasonal maintenance. We're a local crew, and we handle our own calls and service work. When we come out, we'll take a look at your system, figure out what's wrong, and talk you through the repair before getting started."
          primary={{ label: "Get a Free Estimate", href: CONTACT_ROUTE }}
          secondary={CALL}
          trustLine="Owner-operated  •  24/7 emergency calls  •  Serving seven northern Utah counties"
          seasons={[
            {
              tone: "warm",
              label: "Heating Season · Oct–Apr",
              title: "Furnaces · Heat Pumps · Mini-Splits",
              body: "From new system installations and replacements to seasonal tune-ups and 24/7 emergency repairs, we keep your heat running through northern Utah's coldest months.",
            },
            {
              tone: "cool",
              label: "Cooling Season · Jun–Sep",
              title: "Central AC · Mini-Splits · Tune-Ups",
              body: "From new AC installations and replacements to seasonal tune-ups and emergency repairs, we keep your home cool through northern Utah’s hottest summer days.",
            },
          ]}
        />

        <SectionReveal index={1}>
          <LandingSection
            id="pain-points"
            eyebrow="Sound familiar?"
            title="Heating and cooling problems"
            accent="are frustrating enough"
            description="We take the time to find out what's actually wrong with your system before recommending a repair. We'll explain what we find, go over your options, and let you know what the work will cost."
          >
            <InfoCardGrid
              cards={[
                {
                  title: "No Heat When You Need It",
                  body: "When your furnace quits, we'll check the system to figure out what's stopping the heat. Once we find the problem, we'll explain what it'll take to get things running again.",
                  cta: { label: "Get Furnace Repair", href: CONTACT_ROUTE },
                },
                {
                  title: "AC Running But Not Cooling",
                  body: "If your AC runs all day but the house stays hot, something isn't working right. We'll test the equipment and find out what's causing the problem before recommending a fix.",
                  cta: { label: "Schedule AC Service", href: CONTACT_ROUTE },
                },
                {
                  title: "Already Told to Replace It?",
                  body: "A breakdown doesn't automatically mean you need a new system. We'll show you what's wrong and walk you through the repair costs so you know whether replacement actually makes sense.",
                  cta: { label: "Explore Your Options", href: CONTACT_ROUTE },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={2}>
          <LandingSection
            id="services"
            tone="soft"
            eyebrow="What we do"
            title="Heating and cooling"
            accent="from start to finish"
            description="From a broken furnace to a new AC installation, we've got your heating and cooling needs covered. Our local crew handles repairs, installations, and routine maintenance, so you know who you're working with and what to expect."
          >
            <ServiceCardGrid
              columns={4}
              items={[
                {
                  number: "01",
                  title: "Repair",
                  icon: "wrench",
                  body: "If your furnace quits or your AC stops cooling, give us a call. We'll figure out what's wrong and let you know what it'll cost to fix before we start working. We keep common replacement parts on our trucks, so there's a good chance we'll have what we need for the repair.",
                  cta: { label: "Get HVAC Repair", href: CONTACT_ROUTE },
                },
                {
                  number: "02",
                  title: "Installation",
                  icon: "home",
                  body: "We install furnaces, central AC systems, heat pumps, and ductless mini-splits. We'll look at your home's heating and cooling needs before recommending equipment that fits your space and budget.",
                  cta: { label: "Get an Installation Quote", href: CONTACT_ROUTE },
                },
                {
                  number: "03",
                  title: "Tune-Ups",
                  icon: "clock",
                  body: "Keep your heating and cooling equipment in good shape with regular maintenance. We check airflow and electrical components, clean the equipment, and look for problems before the next heating or cooling season.",
                  cta: { label: "Book a Tune-Up", href: CONTACT_ROUTE },
                },
                {
                  number: "04",
                  title: "Gold Membership",
                  icon: "check-circle",
                  featured: true,
                  body: "For $99 a year, our Gold Membership includes two seasonal tune-ups and priority emergency scheduling. Members also get $0 diagnostic fees and 15% off parts and labor.",
                  cta: { label: "Join Our Gold Membership", href: CONTACT_ROUTE },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={3}>
          <LandingSection
            id="how-it-works"
            eyebrow="How it works"
            title="Four steps."
            accent="No surprises."
            description="You’ll know what we found and what the repair costs before we start turning wrenches."
            centered
          >
            <StepRows
              steps={[
                {
                  step: "01",
                  title: "Call",
                  body: "When you call One Call, you'll speak directly with Jesse, the owner. He'll listen to what's happening with your furnace or AC, ask a few questions, and help you figure out what to do next.",
                  cta: CALL,
                  screen: { kind: "call" },
                },
                {
                  step: "02",
                  title: "Diagnose",
                  body: "We don't start replacing parts or pushing new equipment without checking what's wrong. We'll inspect your system, explain what we find, and recommend a repair that makes sense.",
                  screen: {
                    kind: "checklist",
                    title: "System check",
                    items: ["Thermostat & controls", "Ignition & burners", "Airflow & filter", "Electrical components", "Findings explained"],
                  },
                },
                {
                  step: "03",
                  title: "Quote",
                  body: "You'll know what the repair involves and what it'll cost before we start. We provide clear, itemized quotes and waive the $89 diagnostic fee when you book the repair with us.",
                  screen: {
                    kind: "quote",
                    title: "Itemized quote",
                    lines: [
                      ["Parts", "Itemized"],
                      ["Labor", "Itemized"],
                      ["Diagnostic", "$89 waived"],
                    ],
                    note: "Diagnostic fee waived when you book the repair with One Call.",
                  },
                },
                {
                  step: "04",
                  title: "Get It Done",
                  body: "If we have the right part on hand, we'll take care of the repair. If we need to order something, we'll explain the next steps and schedule the work. Once we're done, we'll test the system to make sure everything runs properly.",
                  screen: {
                    kind: "done",
                    title: "Repair complete",
                    items: ["Part replaced", "System tested", "Running properly"],
                  },
                },
              ]}
            />
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={4}>
          <GoogleReviewsSection
            eyebrow="Reviews"
            title="What our customers"
            accent="are saying"
            description="See what northern Utah homeowners share about working directly with One Call Heating & Air."
          />
        </SectionReveal>

        <SectionReveal index={5}>
          <LandingSection
            id="service-area"
            eyebrow="Where we work"
            title="Salt Lake City"
            accent="to the Idaho Border"
            description="We're based in Brigham City and work throughout seven counties in northern Utah. That includes Ogden, Layton, Bountiful, Logan, Salt Lake City, and plenty of towns in between. We also cover areas up to the Idaho border. If you're not sure whether we make it out your way, give us a call."
          >
            <CountyTable trustLine="Brigham City headquarters · Seven-county northern Utah service area" />
            <div className="ocl-section-cta">
              <Link href={LOCATION_ROUTE} className="oc-button oc-button-outline">
                View the full service area
                <Icon name="arrow" />
              </Link>
            </div>
          </LandingSection>
        </SectionReveal>

        <SectionReveal index={6}>
          <LandingFaq id="home-rewrite-faq" path={path} eyebrow="Common questions" title="FAQ" faqs={HOME_REWRITE_FAQS} />
        </SectionReveal>

        <SectionReveal index={7}>
          <LandingCta
            eyebrow="Need help with your system?"
            title="Let's Get Your Heating & Cooling"
            accent="Taken Care Of"
            body="Tell us what's going on with your system, and we'll help you figure out the next step. From routine service to emergency repairs, our crew is ready to get to work. Give us a call, and we'll take it from there."
            banner={["Call (801) 864-2045", "24/7 emergency service", "Free new-system estimates", "$89 repair diagnostic, waived with repair"]}
            primary={CALL}
            secondary={{ label: "Request Service Online", href: CONTACT_ROUTE }}
          />
        </SectionReveal>
      </main>
      <LandingFooter
        brandLine="One Call Heating & Air · Owner-operated HVAC in Brigham City, Utah"
        columns={LANDING_FOOTER_COLUMNS}
        areaLine="Salt Lake · Davis · Morgan · Weber · Box Elder · Cache · Rich counties"
        trustLine="Licensed & insured · Local crew · Owner: Jesse"
      />
    </div>
  );
}

