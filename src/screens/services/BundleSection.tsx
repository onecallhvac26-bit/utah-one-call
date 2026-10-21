import { Link } from "@/components/Link";
import { CONTACT_ROUTE, PHONE_NUMBER } from "@/config/site";
import { Icon } from "./Icon";

export function BundleSection() {
  return (
    <section
      className="ocs-bundle ocs-airflow"
      data-section="bundle multiple services?"
      aria-label="Bundle Multiple Services?"
    >
      <div className="ocs-container ocs-bundle-inner">
        <div>
          <h2>
            Bundle Multiple <em>Services?</em>
          </h2>
          <p>
            New install plus a maintenance plan? Repair plus a tune-up on the
            second system? Multi-service jobs get combined pricing and a
            single-crew schedule. Ask Jesse when you call.
          </p>
        </div>
        <div className="ocs-bundle-actions">
          <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-amber ocs-button-large">
            Request a Bundle
            <Icon name="arrow" />
          </Link>
          <a
            href="tel:+18018642045"
            className="ocs-button ocs-button-ghost ocs-button-large"
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
