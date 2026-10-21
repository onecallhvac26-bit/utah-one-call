import { Link } from "@/components/Link";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { HOME_ROUTE } from "@/config/site";

export function OneCrewSection() {
  return (
    <section
      className="oca-page-hero oca-airflow"
      data-section="one crew.one number."
      aria-labelledby="about-heading"
    >
      <div className="oca-container">
        <nav className="oca-breadcrumb" aria-label="Breadcrumb">
          <Link href={HOME_ROUTE}>Home</Link>
          <span aria-hidden="true">/</span>
          {PAGE_BREADCRUMBS.about.label}
        </nav>
        <div className="oca-eyebrow is-cyan">About One Call</div>
        <h1 id="about-heading">One Crew.<br /><em>One Number.</em></h1>
        <p>
          A Brigham City HVAC company that picks up when you call. No corporate
          phone tree. No bait-and-switch quote. No tech you&apos;ve never met
          showing up to recommend a system you don&apos;t need. One owner, one
          crew, one number — that&apos;s the entire model.
        </p>
      </div>
    </section>
  );
}
