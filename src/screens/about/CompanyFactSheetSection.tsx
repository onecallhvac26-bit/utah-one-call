import { Link } from "@/components/Link";
import {
  CONTACT_ROUTE,
  EMAIL,
  LOCATION_ROUTE,
  PHONE,
  PUBLIC_CONTENT_LAST_REVIEWED,
  PUBLIC_CONTENT_LAST_REVIEWED_LABEL,
  SERVICES_ROUTE,
  SITE_NAME,
  SITE_URL,
} from "@/config/site";
import {
  countyServiceAreas,
  serviceAreaCityCount,
} from "@/screens/location/location-data";

const companyFacts = [
  { label: "Public business name", value: SITE_NAME },
  { label: "Home base", value: "Brigham City, Utah" },
  {
    label: "Published service area",
    value: `${serviceAreaCityCount} communities across ${countyServiceAreas.length} northern Utah counties`,
  },
  {
    label: "Primary service categories",
    value: "Installation, repair, seasonal service, and maintenance",
  },
  { label: "Public phone", value: PHONE },
  { label: "Public website", value: SITE_URL },
] as const;

export function CompanyFactSheetSection() {
  return (
    <section
      className="oca-section oca-fact-sheet"
      aria-labelledby="company-facts-heading"
    >
      <div className="oca-container">
        <div className="oca-section-head">
          <div className="oca-eyebrow">Company Reference</div>
          <h2 id="company-facts-heading">
            One Call <em>Fact Sheet.</em>
          </h2>
          <p>
            A concise reference for customers, local organizations, partners,
            and anyone confirming the public details One Call publishes.
          </p>
        </div>

        <dl className="oca-fact-grid">
          {companyFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
          <div>
            <dt>Public email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </dd>
          </div>
        </dl>

        <div className="oca-fact-footer">
          <p>
            Source: One Call Heating &amp; Air&apos;s public service, location,
            and contact pages. Reviewed{" "}
            <time dateTime={PUBLIC_CONTENT_LAST_REVIEWED}>
              {PUBLIC_CONTENT_LAST_REVIEWED_LABEL}
            </time>
            . Confirm scheduling for a specific address before publishing an
            availability statement.
          </p>
          <nav aria-label="Company fact sources">
            <Link href={SERVICES_ROUTE}>Compare Services</Link>
            <Link href={LOCATION_ROUTE}>View Service Area</Link>
            <Link href={CONTACT_ROUTE}>Contact One Call</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
