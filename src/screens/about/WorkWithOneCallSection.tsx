import { Link } from "@/components/Link";
import { CONTACT_ROUTE, PHONE } from "@/config/site";
import { Icon } from "./Icon";

export function WorkWithOneCallSection() {
  return (
    <section
      className="oca-cta oca-airflow"
      data-section="work with one call."
      aria-label="Work with One Call."
    >
      <div className="oca-container oca-cta-inner">
        <div>
          <h2>Work with <em>One Call.</em></h2>
          <p>
            Call, text, or send the form. Free estimates on installs, $89
            diagnostic on repairs (waived with the fix), and 24/7 emergency
            response from Salt Lake to the Idaho border.
          </p>
        </div>
        <div className="oca-cta-actions">
          <Link href={CONTACT_ROUTE} className="oca-button oca-button-amber oca-button-large">
            Free Estimate <Icon name="arrow" />
          </Link>
          <a href="tel:+18018642045" className="oca-button oca-button-ghost oca-button-large">
            {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
