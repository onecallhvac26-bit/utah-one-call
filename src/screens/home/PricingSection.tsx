import { Link } from "@/components/Link";
import { CONTACT_ROUTE } from "@/config/site";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function PricingCard({
  featured = false,
  tag,
  amount,
  per,
  title,
  description,
  items,
  button,
  finePrint,
}: {
  featured?: boolean;
  tag: string;
  amount: string;
  per: string;
  title: string;
  description: string;
  items: readonly string[];
  button: string;
  finePrint: string;
}) {
  return (
    <article className={`oc-pricing-card${featured ? " is-featured" : ""}`}>
      {featured ? <span className="oc-best-value">Best Value</span> : null}
      <div className="oc-pricing-tag">
        <Icon name={featured ? "check-circle" : "wrench"} />
        {tag}
      </div>
      <div className="oc-price">
        <span>{amount}</span>
        <small>{per}</small>
      </div>
      <h3>{title}</h3>
      <p className="oc-pricing-lead">{description}</p>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <Icon name="check" />
            {index === 0 || (!featured && index === items.length - 1) ? (
              <strong>{item}</strong>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
      <Link
        href={featured ? CONTACT_ROUTE : "tel:+18018642045"}
        className={`oc-button ${featured ? "oc-button-amber" : "oc-button-outline"}`}
      >
        {button}
        <Icon name="arrow" />
      </Link>
      <p className="oc-fine-print">{finePrint}</p>
    </article>
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="oc-section oc-paper oc-pricing-section"
      data-section="no hidden fees.pricing you'll see."
      aria-labelledby="home-pricing-heading"
    >
      <div className="oc-container">
        <SectionHeading
          id="home-pricing-heading"
          centered
          eyebrow="Up-Front Pricing"
          lineOne="No Hidden Fees."
          lineTwo="Pricing You'll See."
          description="Two price points everyone asks about — the diagnostic visit and the annual Gold Membership. Everything else is quoted in writing before any work starts."
        />
        <div className="oc-pricing-grid">
          <PricingCard
            tag="Diagnostic Visit"
            amount="$89"
            per="flat"
            title="One-Visit Diagnostic"
            description="A tech comes to your home, tests the system, and tells you what's wrong — in writing — before anything else happens."
            items={[
              "Onsite testing & diagnosis",
              "Written report of findings",
              "No upsell pressure",
              "Waived if you book the repair with us",
            ]}
            button="Schedule Diagnostic"
            finePrint="Free estimates on new install jobs — no diagnostic fee on full system replacement quotes."
          />
          <PricingCard
            featured
            tag="Gold Membership"
            amount="$99"
            per="/year"
            title="Annual Gold Membership"
            description="Two free seasonal tune-ups (spring AC, fall furnace), priority scheduling, member pricing, and zero diagnostic fees all year."
            items={[
              "2 free tune-ups every year",
              "Priority emergency response",
              "$0 diagnostic fees (member rate)",
              "15% off parts & labor",
              "Transferable on home sale",
            ]}
            button="Join Gold · $99/yr"
            finePrint="Pays for itself the first time it catches a $40 capacitor before it dies on a 14° January night."
          />
        </div>
      </div>
    </section>
  );
}
