import { Link } from "@/components/Link";

import { services } from "./home-data";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section
      className="oc-section oc-paper"
      data-section="four lanes.one crew."
      aria-labelledby="home-services-heading"
    >
      <div className="oc-container">
        <SectionHeading
          id="home-services-heading"
          eyebrow="What We Do"
          lineOne="Four Lanes."
          lineTwo="One Crew."
          description="If your system quit, that's a repair call. If it runs but it's aging or undersized, that's an install conversation. If everything is working and you want to keep it that way, schedule a seasonal tune-up — or lock in a maintenance plan so you never have to remember. One crew covers every northern Utah heating and cooling need — same number, same accountable answer."
        />
        <div className="oc-service-grid">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className={`oc-service-card${service.featured ? " is-featured" : ""}`}
            >
              <div className="oc-service-number">{service.number}</div>
              <div className="oc-service-icon">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="oc-service-link">
                {service.link}
                <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
