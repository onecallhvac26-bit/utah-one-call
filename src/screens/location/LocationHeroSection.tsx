import { Link } from "@/components/Link";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PHONE_HREF,
  PHONE_NUMBER,
} from "@/config/site";
import { serviceAreaCityCount } from "./location-data";

export function LocationHeroSection() {
  return (
    <section className="ocl-hero ocs-airflow" aria-labelledby="location-heading">
      <div className="ocs-container ocl-hero-inner">
        <div className="ocl-hero-copy">
          <nav className="ocs-breadcrumb" aria-label="Breadcrumb">
            <Link href={HOME_ROUTE}>Home</Link>
            <span aria-hidden="true">/</span>
            {PAGE_BREADCRUMBS.location.label}
          </nav>
          <p className="ocl-eyebrow">Northern Utah HVAC</p>
          <h1 id="location-heading">
            Seven Counties.
            <br />
            <em>One Local Crew.</em>
          </h1>
          <p className="ocl-hero-description">
            Based in Brigham City, One Call Heating &amp; Air serves homes and
            businesses from Salt Lake County to the Idaho border. If you need
            local HVAC service — repair, installation, tune-up, or maintenance
            — call anytime, including 24/7 emergencies.
          </p>
          <div className="ocl-hero-actions">
            <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-amber">
              Request Service
            </Link>
            <a href={PHONE_HREF} className="ocs-button ocs-button-ghost">
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>

        <dl className="ocl-service-stats" aria-label="Service area summary">
          <div>
            <dt>Counties</dt>
            <dd>7</dd>
          </div>
          <div>
            <dt>Communities</dt>
            <dd>{serviceAreaCityCount}</dd>
          </div>
          <div>
            <dt>Home Base</dt>
            <dd>Brigham City</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
