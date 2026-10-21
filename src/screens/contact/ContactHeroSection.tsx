import { Link } from "@/components/Link";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { HOME_ROUTE } from "@/config/site";

export function ContactHeroSection() {
  return (
    <section
      className="occ-page-hero occ-airflow"
      data-section="one number.always answered."
      aria-labelledby="contact-heading"
    >
      <div className="occ-container">
        <nav className="occ-breadcrumb" aria-label="Breadcrumb">
          <Link href={HOME_ROUTE}>Home</Link>
          <span aria-hidden="true">/</span>
          {PAGE_BREADCRUMBS.contact.label}
        </nav>
        <div className="occ-page-eyebrow">Get In Touch</div>
        <h1 id="contact-heading">One Number.<br /><em>Always Answered.</em></h1>
        <p>
          Call, text, email, or send the form. Owner Jesse picks up — including
          24/7 emergency calls when the furnace dies in January or the AC quits
          in July. Free estimates on installs, $89 diagnostic on repairs (waived
          with the fix).
        </p>
      </div>
    </section>
  );
}
