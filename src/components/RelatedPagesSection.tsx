import { Link } from "@/components/Link";
import {
  PAGE_JOURNEYS,
  type PageJourneyKey,
} from "@/config/site-navigation";

export function RelatedPagesSection({ page }: { page: PageJourneyKey }) {
  const journey = PAGE_JOURNEYS[page];
  const headingId = `${page}-related-pages-heading`;

  return (
    <section className="site-related-pages" aria-labelledby={headingId}>
      <div className="site-related-pages__inner">
        <header className="site-related-pages__heading">
          <p>{journey.eyebrow}</p>
          <h2 id={headingId}>{journey.heading}</h2>
          <span>{journey.description}</span>
        </header>
        <nav aria-label={`${journey.eyebrow} links`}>
          <ul className="site-related-pages__grid">
            {journey.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <strong>{link.label}</strong>
                  <span>{link.description}</span>
                  <small aria-hidden="true">Continue →</small>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
