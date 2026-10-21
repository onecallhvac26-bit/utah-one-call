import { values } from "./about-data";
import { Icon } from "./Icon";

export function ValuesSection() {
  return (
    <section
      className="oca-section"
      data-section="how the work actually gets done."
      aria-label="How the Work Actually Gets Done."
    >
      <div className="oca-container">
        <div className="oca-section-head">
          <div className="oca-eyebrow">The Working Model</div>
          <h2>How the Work<br /><em>Actually Gets Done.</em></h2>
          <p>
            Most HVAC shops skip the basics that keep a one-call fix from
            turning into a three-visit ordeal. Here is what One Call does
            differently as an owner-operated HVAC company.
          </p>
        </div>
        <div className="oca-values">
          {values.map((value) => (
            <article key={value.title}>
              <div className="oca-value-icon"><Icon name={value.icon} /></div>
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
