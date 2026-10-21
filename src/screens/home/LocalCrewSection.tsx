import { whyCards, stats } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function LocalCrewSection() {
  return (
    <section
      className="oc-section oc-soft"
      data-section="local crew.no runaround."
      aria-label="Local Crew.No Runaround."
    >
      <div className="oc-container">
        <SectionHeading
          eyebrow="Why One Call"
          lineOne="Local Crew."
          lineTwo="No Runaround."
          description="Most regional HVAC companies route you through a call center, dispatch a tech you've never met, and quote a system you don't need. Here's what changes when you call a local HVAC contractor who owns the truck."
        />
        <div className="oc-why-grid">
          {whyCards.map((card) => (
            <article key={card.number} className="oc-why-card">
              <div className="oc-card-number">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="oc-stats">
        {stats.map(([value, label, tone]) => (
          <div key={label} className="oc-stat">
            <div className={`oc-stat-value ${tone}`}>{value}</div>
            <div className="oc-stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
