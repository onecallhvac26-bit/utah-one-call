import { Link } from "@/components/Link";
import {
  CONTACT_ROUTE,
  PHONE_HREF,
  PHONE_NUMBER,
  PUBLIC_CONTENT_LAST_REVIEWED,
  PUBLIC_CONTENT_LAST_REVIEWED_LABEL,
} from "@/config/site";

import { serviceTermDefinitions } from "./services-data";

const planningChecklist = [
  "Identify the equipment involved if known: furnace, central AC, heat pump, mini-split, thermostat, or ductwork.",
  "Write down what the system is doing, when it started, and whether the problem is constant or intermittent.",
  "Record any thermostat message, fault code, unusual sound, or unusual odor without taking equipment apart.",
  "Confirm the property address, best contact information, and any access details that may affect the visit.",
  "Keep the approval questions nearby: what was tested, what is recommended, what is included, and what happens next.",
] as const;

export function ServicePlanningResourceSection() {
  return (
    <section
      id="service-planning-checklist"
      className="ocs-planning-resource"
      aria-labelledby="service-planning-heading"
    >
      <div className="ocs-container">
        <div className="ocs-planning-heading">
          <span>Homeowner Reference</span>
          <h2 id="service-planning-heading">
            HVAC Service <em>Planning Checklist.</em>
          </h2>
          <p>
            Use this reference to organize the details before calling or
            submitting a request. It keeps the first conversation focused. It
            is not a remote diagnosis and does not replace emergency guidance.
          </p>
        </div>

        <div className="ocs-planning-grid">
          <article>
            <h3>How this site uses its service terms</h3>
            <dl>
              {serviceTermDefinitions.map(([label, description]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </article>
          <article>
            <h3>Details to gather before you call</h3>
            <ol>
              {planningChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        </div>

        <div className="ocs-planning-footer">
          <p>
            Source: One Call Heating &amp; Air&apos;s published service
            definitions, decision guide, and request form. Reviewed{" "}
            <time dateTime={PUBLIC_CONTENT_LAST_REVIEWED}>
              {PUBLIC_CONTENT_LAST_REVIEWED_LABEL}
            </time>
            .
          </p>
          <div>
            <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-amber">
              Request Service
            </Link>
            <a href={PHONE_HREF} className="ocs-button ocs-button-outline">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
