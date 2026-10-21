import { Link } from "@/components/Link";
import { CONTACT_ROUTE, LOCATION_ROUTE } from "@/config/site";
import {
  homeownerUpdateChecklist,
  socialContentTopics,
} from "./social-media-data";

export function SocialContentTopicsSection() {
  return (
    <section className="ocsm-topics" aria-labelledby="social-topics-heading">
      <div className="ocs-container">
        <header className="ocsm-section-heading">
          <p>Use the Updates</p>
          <h2 id="social-topics-heading">How to Use What You Find Here.</h2>
          <span>
            Use each post to prepare for the weather, understand what the crew
            evaluates, or decide when a direct call is the better next step.
          </span>
        </header>
        <div className="ocsm-topic-grid">
          {socialContentTopics.map((topic) => (
            <article key={topic.label}>
              <span>{topic.label}</span>
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeownerUpdateSection() {
  return (
    <section className="ocsm-checklist ocs-airflow" aria-labelledby="social-checklist-heading">
      <div className="ocs-container ocsm-checklist__inner">
        <header>
          <p>Make the Next Call Easier</p>
          <h2 id="social-checklist-heading">Four Details That Make the Next Call Easier.</h2>
        </header>
        <ol>
          {homeownerUpdateChecklist.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
        <div className="ocsm-checklist__actions">
          <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-amber">Start a Service Request</Link>
          <Link href={LOCATION_ROUTE}>Check the complete service area →</Link>
        </div>
      </div>
    </section>
  );
}
