import { hvacQuickAnswer } from "./home-data";
import { SectionHeading } from "./SectionHeading";

export function HomeQuickAnswerSection() {
  return (
    <section
      id="home-quick-answer"
      className="oc-section oc-paper"
      data-section="quick answer"
      aria-labelledby="home-quick-answer-heading"
    >
      <div className="oc-container">
        <SectionHeading
          id="home-quick-answer-heading"
          centered
          eyebrow="Quick Answer"
          lineOne="What We"
          lineTwo="Can Help With."
        />
        <article
          className="oc-faq-summary"
          aria-labelledby="home-hvac-summary-heading"
        >
          <div className="oc-faq-summary-copy">
            <span>Quick Answer</span>
            <h3 id="home-hvac-summary-heading">
              {hvacQuickAnswer.question}
            </h3>
            <p>{hvacQuickAnswer.answer}</p>
          </div>
          <dl>
            {hvacQuickAnswer.facts.map(({ term, detail }) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}
