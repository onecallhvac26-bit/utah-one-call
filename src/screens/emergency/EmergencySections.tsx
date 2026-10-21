import { Link } from "@/components/Link";
import { PHONE_NUMBER } from "@/config/site";
import {
  emergencyActions,
  emergencyResponseSteps,
  emergencySituations,
} from "./emergency-data";

export function EmergencySituationsSection() {
  return (
    <section className="oce-situations" aria-labelledby="emergency-situations-heading">
      <div className="ocs-container">
        <header className="oce-section-heading">
          <p>When to call</p>
          <h2 id="emergency-situations-heading">If Any of These Are Happening, Call Now.</h2>
          <span>
            Stop using equipment that appears unsafe. If there is immediate danger,
            fire, a suspected gas leak, or an active carbon-monoxide alarm, leave the
            property and contact emergency services before arranging HVAC repair.
          </span>
        </header>
        <div className="oce-situation-grid">
          {emergencySituations.map((situation) => (
            <article key={situation.number}>
              <span>{situation.number}</span>
              <h3>{situation.title}</h3>
              <p>{situation.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EmergencyResponseSection() {
  return (
    <section className="oce-response ocs-airflow" aria-labelledby="emergency-response-heading">
      <div className="ocs-container oce-response__inner">
        <header>
          <p>What happens next</p>
          <h2 id="emergency-response-heading">Three Details That Get the Call Moving.</h2>
          <a href={emergencyActions.phone} className="ocs-button ocs-button-amber">
            Call {PHONE_NUMBER}
          </a>
        </header>
        <ol>
          {emergencyResponseSteps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="oce-response__note">
          Need to compare repair, maintenance, or replacement work first?{" "}
          <Link href={emergencyActions.services}>Review all HVAC services.</Link>
        </p>
      </div>
    </section>
  );
}
