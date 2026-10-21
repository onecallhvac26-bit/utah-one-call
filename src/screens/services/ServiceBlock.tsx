import { Link } from "@/components/Link";
import { ServiceData } from "./services-data";
import { Icon } from "./Icon";

export function ServiceVisual({ service }: { service: ServiceData }) {
  return (
    <div className="ocs-service-visual">
      <div
        className={`ocs-visual-card${service.dark ? "" : " is-light"}`}
      >
        <div className="ocs-visual-icon">
          <Icon name={service.icon} />
        </div>
        <div>
          <div className="ocs-visual-headline">{service.visualTitle}</div>
          <div className="ocs-visual-chips">
            {service.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>
        {"tag" in service ? (
          <div className="ocs-visual-tag">{service.tag}</div>
        ) : null}
      </div>
    </div>
  );
}

export function ServiceCopy({
  headingId,
  service,
}: {
  headingId: string;
  service: ServiceData;
}) {
  const titleWords = service.title.split(" ");
  const firstWord = titleWords[0];
  const remainingWords = titleWords.slice(1).join(" ");

  return (
    <div className="ocs-service-copy">
      <div className="ocs-service-number">{service.number}</div>
      <h2 id={headingId}>
        {remainingWords ? (
          <>
            {firstWord} <em>{remainingWords}</em>
          </>
        ) : (
          <em>{firstWord}</em>
        )}
      </h2>
      <p className="ocs-service-lead">{service.description}</p>
      {"supportingDescription" in service ? (
        <p className="ocs-service-lead">{service.supportingDescription}</p>
      ) : null}
      <dl className="ocs-service-fit">
        <div>
          <dt>Best fit when</dt>
          <dd>{service.bestFor}</dd>
        </div>
        <div>
          <dt>What to expect</dt>
          <dd>{service.whatToExpect}</dd>
        </div>
      </dl>
      <ul className="ocs-feature-list">
        {service.features.map((feature) => (
          <li key={feature}>
            <Icon name="check" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="ocs-service-actions">
        <Link
          href={service.primaryHref}
          className="ocs-button ocs-button-amber"
        >
          {service.primaryCta}
          <Icon name="arrow" />
        </Link>
        <Link
          href={service.secondaryHref}
          className={`ocs-button ${
            service.dark ? "ocs-button-ghost" : "ocs-button-outline"
          }`}
        >
          {service.secondaryCta}
        </Link>
      </div>
    </div>
  );
}

export function ServiceBlock({
  id,
  service,
}: {
  id: string;
  service: ServiceData;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={`ocs-service-block${service.dark ? " is-dark ocs-airflow" : ""}`}
      data-section={id}
      aria-labelledby={headingId}
    >
      <div className="ocs-container">
        <div
          className={`ocs-service-row${service.visualFirst ? " is-visual-first" : ""}`}
        >
          <ServiceCopy headingId={headingId} service={service} />
          <ServiceVisual service={service} />
        </div>
      </div>
    </section>
  );
}
