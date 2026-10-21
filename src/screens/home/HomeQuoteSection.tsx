import { PHONE_HREF, PHONE_NUMBER } from "@/config/site";
import { FreeQuoteForm } from "@/screens/contact/FreeQuoteForm";

const QUOTE_BENEFITS = [
  "One request goes directly to the local One Call team.",
  "Choose the service now; add property details only if helpful.",
] as const;

export function HomeQuoteSection() {
  return (
    <section
      className="oc-home-quote"
      aria-labelledby="home-quote-heading"
      data-section="request a free hvac quote"
    >
      <div className="oc-container oc-home-quote-layout">
        <div className="oc-home-quote-intro">
          <p className="oc-home-quote-eyebrow">Start Here</p>
          <h2 id="home-quote-heading">
            Tell us what you need.
            <br />
            <em>We’ll take it from there.</em>
          </h2>
          <p className="oc-home-quote-description">
            Request an install estimate, schedule service, or describe what
            your system is doing. The form is short — one submission goes
            directly to the local One Call team. Choose the service type and
            add property details only if helpful.
          </p>
          <ul className="oc-home-quote-benefits">
            {QUOTE_BENEFITS.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <div className="oc-home-quote-emergency">
            <span>Active no-heat or no-cool emergency?</span>
            <a href={PHONE_HREF}>Call {PHONE_NUMBER}</a>
          </div>
        </div>

        <div className="oc-home-quote-form">
          <FreeQuoteForm />
        </div>
      </div>
    </section>
  );
}
