import { Link } from "@/components/Link";
import { CONTACT_ROUTE, SERVICES_ROUTE } from "@/config/site";

export function SocialMediaHeroSection() {
  return (
    <section className="ocsm-hero ocs-airflow" aria-labelledby="social-media-heading">
      <div className="ocs-container ocsm-hero__inner">
        <nav className="ocsm-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/about">About</Link>
          <span aria-hidden="true">/</span>
          <span>Social Media</span>
        </nav>
        <p className="ocsm-eyebrow">Tips · Projects · Northern Utah</p>
        <h1 id="social-media-heading">
          Useful updates.
          <br />
          <em>No noise.</em>
        </h1>
        <p className="ocsm-hero__description">
          Northern Utah HVAC tips, project notes, and local service updates from
          the owner-operated One Call Heating & Air crew — written around
          decisions you can actually act on.
        </p>
        <div className="ocsm-actions">
          <Link href={SERVICES_ROUTE} className="ocs-button ocs-button-amber">Explore Services</Link>
          <Link href={CONTACT_ROUTE} className="ocs-button ocs-button-ghost">Ask One Call</Link>
        </div>
      </div>
    </section>
  );
}
