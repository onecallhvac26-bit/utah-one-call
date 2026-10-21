import { Link } from "@/components/Link";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { HOME_ROUTE } from "@/config/site";

export function ServicesHeroSection() {
  return (
    <section
      className="ocs-page-hero ocs-airflow"
      data-section="four lanes.one crew."
      aria-labelledby="services-heading"
    >
      <div className="ocs-container ocs-page-hero-inner">
        <nav className="ocs-breadcrumb" aria-label="Breadcrumb">
          <Link href={HOME_ROUTE}>Home</Link>
          <span aria-hidden="true">/</span>
          {PAGE_BREADCRUMBS.services.label}
        </nav>
        <div className="ocs-page-eyebrow">Services</div>
        <h1 id="services-heading">
          Four Lanes.
          <br />
          <em>One Crew.</em>
        </h1>
        <p>
          Install, repair, service, maintenance — every HVAC job a Brigham City
          home or business needs, handled by the same crew. Same number, same
          accountable answer, every time.
        </p>
      </div>
    </section>
  );
}
