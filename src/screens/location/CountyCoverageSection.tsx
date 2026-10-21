import { PHONE_HREF, PHONE_NUMBER } from "@/config/site";
import { countyServiceAreas } from "./location-data";

export function CountyCoverageSection() {
  return (
    <section className="ocl-coverage" aria-labelledby="coverage-heading">
      <div className="ocs-container">
        <header className="ocl-section-heading">
          <p className="ocl-eyebrow">Complete Service Area</p>
          <h2 id="coverage-heading">
            Cities We Reach,
            <br />
            <em>County by County.</em>
          </h2>
          <p>
            Browse the communities below to find yours. Once you confirm your
            city is listed, call or submit a request and One Call will confirm
            scheduling for your specific address.
          </p>
        </header>

        <div className="ocl-county-grid">
          {countyServiceAreas.map(({ county, description, cities }) => (
            <article className="ocl-county-card" key={county}>
              <div className="ocl-county-card-heading">
                <h3>{county}</h3>
                <span>
                  {cities.length} {cities.length === 1 ? "community" : "communities"}
                </span>
              </div>
              <p className="ocl-county-description">{description}</p>
              <ul>
                {cities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="ocl-coverage-callout">
          <div>
            <span>Don&apos;t see your city?</span>
            <strong>Call anyway — if we can route it, we will.</strong>
          </div>
          <a href={PHONE_HREF} className="ocs-button ocs-button-amber">
            Call {PHONE_NUMBER}
          </a>
        </aside>
      </div>
    </section>
  );
}
