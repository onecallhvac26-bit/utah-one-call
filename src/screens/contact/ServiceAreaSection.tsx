import { Link } from "@/components/Link";
import { LOCATION_ROUTE } from "@/config/site";
import { serviceAreaCityCount } from "@/screens/location/location-data";
import { serviceAreas } from "./contact-data";

export function ServiceAreaSection() {
  return (
    <section
      className="occ-area-section"
      data-section="salt lake cityto the idaho border."
      aria-labelledby="contact-service-area-heading"
    >
      <div className="occ-container">
        <div className="occ-area-head">
          <div className="occ-section-eyebrow">Coverage</div>
          <h2 id="contact-service-area-heading">Salt Lake City<br /><em>to the Idaho border.</em></h2>
          <p>
            Based in Brigham City with regular routes through all seven northern
            Utah counties — Salt Lake, Davis, Morgan, Weber, Box Elder, Cache,
            and Rich. Don&apos;t see your city? Still ask — if we can route it,
            we will.
          </p>
        </div>
        <div className="occ-area-chips">
          {serviceAreas.map((area) => <span key={area}>{area}</span>)}
        </div>
        <Link
          href={LOCATION_ROUTE}
          className="occ-button occ-button-blue occ-service-area-link"
        >
          View all {serviceAreaCityCount} communities
        </Link>
      </div>
    </section>
  );
}
