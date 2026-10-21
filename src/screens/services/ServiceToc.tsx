import { serviceLinks } from "./services-data";

export function ServiceToc() {
  return (
    <section className="ocs-toc" aria-labelledby="service-guide-heading">
      <div className="ocs-container">
        <div className="ocs-toc-heading">
          <span>Service Guide</span>
          <h2 id="service-guide-heading">
            Which HVAC service fits your situation?
          </h2>
        </div>
        <ul className="ocs-toc-inner">
          {serviceLinks.map(([label, href, description]) => (
            <li key={label}>
              <a href={href}>
                <strong>{label}</strong>
                <span>{description}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
