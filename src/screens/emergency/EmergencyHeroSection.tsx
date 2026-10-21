import { Link } from "@/components/Link";
import { PHONE_NUMBER } from "@/config/site";
import { emergencyActions } from "./emergency-data";

export function EmergencyHeroSection() {
  return (
    <section className="oce-hero ocs-airflow" aria-labelledby="emergency-heading">
      <div className="ocs-container oce-hero__inner">
        <div className="oce-hero__copy">
          <nav className="oce-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Emergency</span>
          </nav>
          <p className="oce-eyebrow">24/7 Emergency HVAC</p>
          <h1 id="emergency-heading">
            System down?
            <br />
            <em>Call One Call.</em>
          </h1>
          <p className="oce-hero__description">
            24 hour heating and air help across northern Utah. Call with the
            equipment type, symptoms, and property address — Jesse picks up and
            confirms the next response directly.
          </p>
          <div className="oce-actions">
            <a href={emergencyActions.phone} className="ocs-button ocs-button-amber">
              Call {PHONE_NUMBER}
            </a>
            <Link href={emergencyActions.contact} className="ocs-button ocs-button-ghost">
              Send a Non-Urgent Request
            </Link>
          </div>
        </div>
        <aside className="oce-hero__summary" aria-label="Emergency service summary">
          <div><strong>24/7</strong><span>Direct emergency line</span></div>
          <div><strong>7</strong><span>Northern Utah counties</span></div>
          <div><strong>1</strong><span>Owner-operated crew</span></div>
        </aside>
      </div>
    </section>
  );
}
