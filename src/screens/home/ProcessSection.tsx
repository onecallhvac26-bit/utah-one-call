import { processSteps } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section
      className="oc-section oc-soft"
      data-section="four steps.no surprises."
      aria-label="Four Steps.No Surprises."
    >
      <div className="oc-container">
        <SectionHeading
          centered
          eyebrow="How It Works"
          lineOne="Four Steps."
          lineTwo="No Surprises."
        />
        <div className="oc-process-grid">
          {processSteps.map((step) => (
            <article key={step.number} className="oc-process-card">
              <div className="oc-card-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
