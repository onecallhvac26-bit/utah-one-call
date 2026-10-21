import { Link } from "@/components/Link";
import { CONTACT_ROUTE, PHONE_NUMBER } from "@/config/site";
import { Icon } from "./Icon";

export function CallToActionSection() {
  return (
    <section
      className="oc-cta"
      data-section="got an hvac problem?"
      aria-label="Got an HVAC problem?"
    >
      <div className="oc-container oc-cta-inner">
        <div>
          <h2>
            Got an <em>HVAC problem?</em>
          </h2>
          <p>
            Call (801) 864-2045 — owner picks up. Free estimates on installs, $89
            diagnostic on repairs (waived with the fix), and 24/7 emergency response
            from Salt Lake City to the Idaho border.
          </p>
        </div>
        <div className="oc-cta-buttons">
          <a href="tel:+18018642045" className="oc-button oc-button-amber oc-button-large">
            Call {PHONE_NUMBER}
            <Icon name="phone" />
          </a>
          <Link href={CONTACT_ROUTE} className="oc-button oc-button-ghost oc-button-large">
            Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
