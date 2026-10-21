import { Link } from "@/components/Link";
import {
  CONTACT_ROUTE,
  PRICING_ROUTE,
  SERVICE_PLANNING_ROUTE,
} from "@/config/site";

const approvalQuestions = [
  {
    title: "What was tested?",
    description:
      "Which component was checked, what the readings or observations showed, and what specific finding led to the recommendation.",
  },
  {
    title: "Repair or replacement?",
    description:
      "Have both options explained separately — what each one addresses, how long each is expected to last, and what each costs — so you can compare them side by side.",
  },
  {
    title: "What is included?",
    description:
      "Equipment, labor, disposal, permit and warranty responsibilities, and anything excluded from the written quote.",
  },
  {
    title: "What happens next?",
    description:
      "The schedule, access needs, primary contact, and the walkthrough or findings review you should expect when work is complete.",
  },
] as const;

export function ServiceDecisionSection() {
  return (
    <section
      className="ocs-decision-guide"
      aria-labelledby="service-decision-heading"
    >
      <div className="ocs-container">
        <div className="ocs-decision-heading">
          <span>Decision Guide</span>
          <h2 id="service-decision-heading">
            Know What You&apos;re <em>Approving.</em>
          </h2>
          <p>
            Before signing off on a repair or replacement, make sure you can
            answer four questions. If the tech cannot answer them clearly, ask.
          </p>
        </div>
        <div className="ocs-decision-grid">
          {approvalQuestions.map((question, index) => (
            <article key={question.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{question.title}</h3>
              <p>{question.description}</p>
            </article>
          ))}
        </div>
        <div className="ocs-decision-actions">
          <Link
            href={SERVICE_PLANNING_ROUTE}
            className="ocs-button ocs-button-outline"
          >
            Use Planning Checklist
          </Link>
          <Link
            href={PRICING_ROUTE}
            className="ocs-button ocs-button-outline"
          >
            See Published Pricing
          </Link>
          <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-amber">
            Request Service
          </Link>
        </div>
      </div>
    </section>
  );
}
