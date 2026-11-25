import type { ReactNode } from "react";

import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { ASSET_BASE, CONTACT_ROUTE, EMAIL, PHONE_HREF, PHONE_NUMBER } from "@/config/site";
import { Icon, type IconName } from "@/screens/home/Icon";
import { Logo } from "@/screens/home/Logo";
import { SectionHeading } from "@/screens/home/SectionHeading";

/* ---------- Hero ---------- */

export type SeasonCard = {
  tone: "warm" | "cool";
  label: string;
  title: string;
  body: string;
};

export function LandingHero({
  eyebrow,
  title,
  accent,
  body,
  primary,
  secondary,
  trustLine,
  image = "hero-heating-winter.jpg",
  seasons,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  trustLine?: string;
  image?: string;
  seasons?: readonly SeasonCard[];
}) {
  const primaryIsPhone = primary.href.startsWith("tel:");
  return (
    <section className="oc-hero ocl-hero" aria-label={`${title} ${accent}`}>
      <div className="oc-hero-background-layer" aria-hidden="true" style={{ zIndex: 1 }}>
        <Image
          src={`${ASSET_BASE}/${image}`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="oc-hero-background"
        />
      </div>
      <div className="oc-hero-glow oc-cool-glow" />
      <div className="oc-hero-glow oc-warm-glow" />
      <div className="oc-hero-center">
        <div className="oc-hero-card">
          <div className="oc-mobile-logo">
            <Logo mobile />
          </div>
          <div className="oc-emergency">
            <span />
            {eyebrow}
          </div>
          <h1>
            {title}
            <br />
            <em>{accent}</em>
          </h1>
          <p className="oc-hero-description">{body}</p>
          <div className="oc-hero-buttons">
            <Link href={primary.href} className="oc-button oc-button-amber oc-button-large">
              {primary.label}
              <Icon name={primaryIsPhone ? "phone" : "arrow"} />
            </Link>
            <Link href={secondary.href} className="oc-button oc-button-ghost oc-button-large">
              {secondary.label}
            </Link>
          </div>
          {trustLine ? <p className="ocl-trust-line">{trustLine}</p> : null}
        </div>
      </div>
      {seasons ? (
        <div className="oc-season-wrap">
          {seasons.map((season) => (
            <div
              key={season.label}
              className={`oc-season ${season.tone === "warm" ? "oc-warm" : "oc-cool"}`}
            >
              <div className="oc-season-icon">
                <Icon name={season.tone === "warm" ? "warm" : "snow"} />
              </div>
              <div>
                <div className="oc-season-label">{season.label}</div>
                <div className="oc-season-title">{season.title}</div>
                <p>{season.body}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ocl-hero-spacer" />
      )}
    </section>
  );
}

/* ---------- Generic section wrapper ---------- */

export function LandingSection({
  id,
  tone = "paper",
  eyebrow,
  title,
  accent,
  description,
  centered = false,
  children,
}: {
  id: string;
  tone?: "paper" | "soft";
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`oc-section ${tone === "soft" ? "oc-soft" : "oc-paper"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="oc-container">
        <SectionHeading
          id={`${id}-heading`}
          eyebrow={eyebrow}
          lineOne={title}
          lineTwo={accent}
          description={description}
          centered={centered}
        />
        {children}
      </div>
    </section>
  );
}

/* ---------- Pain points / feature cards ---------- */

export type InfoCard = {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
};

export function InfoCardGrid({
  cards,
  columns = 3,
  numbered = false,
}: {
  cards: readonly InfoCard[];
  columns?: 2 | 3;
  numbered?: boolean;
}) {
  return (
    <div className={`ocl-card-grid ocl-cols-${columns}`}>
      {cards.map((card, index) => (
        <article key={card.title} className="oc-why-card ocl-info-card">
          {numbered ? (
            <div className="oc-card-number">{card.eyebrow ?? String(index + 1).padStart(2, "0")}</div>
          ) : card.eyebrow ? (
            <div className="ocl-card-eyebrow">{card.eyebrow}</div>
          ) : null}
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          {card.cta ? (
            <Link href={card.cta.href} className="oc-button oc-button-outline ocl-card-cta">
              {card.cta.label}
              <Icon name={card.cta.href.startsWith("tel:") ? "phone" : "arrow"} />
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}

/* ---------- Service cards (reuses homepage service-card styling) ---------- */

export type ServiceCardItem = {
  number?: string;
  title: string;
  body: string;
  icon: IconName;
  cta: { label: string; href: string };
  featured?: boolean;
  wide?: boolean;
  /** Optional in-page anchor so sitewide links like /services#install land on this card. */
  anchor?: string;
};

export function ServiceCardGrid({
  items,
  columns = 4,
}: {
  items: readonly ServiceCardItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className={`oc-service-grid ocl-service-grid ocl-cols-${columns}`}>
      {items.map((item) => (
        <Link
          key={item.title}
          id={item.anchor}
          href={item.cta.href}
          className={`oc-service-card ocl-service-card${item.featured ? " is-featured" : ""}${item.wide ? " is-wide" : ""}`}
        >
          {item.number ? <div className="oc-service-number">{item.number}</div> : null}
          <div className="oc-service-icon">
            <Icon name={item.icon} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <span className="oc-service-link">
            {item.cta.label}
            <Icon name={item.cta.href.startsWith("tel:") ? "phone" : "arrow"} />
          </span>
        </Link>
      ))}
    </div>
  );
}

/* ---------- How it works: alternating text + phone mockups ---------- */

export type PhoneScreen =
  | { kind: "call" }
  | { kind: "checklist"; title: string; items: readonly string[] }
  | { kind: "quote"; title: string; lines: readonly [string, string][]; note: string }
  | { kind: "done"; title: string; items: readonly string[] };

export type StepRow = {
  step: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  screen: PhoneScreen;
};

function PhoneMockup({ screen }: { screen: PhoneScreen }) {
  return (
    <div className="ocl-phone" aria-hidden="true">
      <div className="ocl-phone-notch" />
      <div className="ocl-phone-screen">
        <div className="ocl-phone-status">
          <span>9:41</span>
          <span>One Call</span>
        </div>
        {screen.kind === "call" ? (
          <div className="ocl-phone-call">
            <div className="ocl-phone-avatar">
              <Icon name="phone" />
            </div>
            <strong>One Call Heating &amp; Air</strong>
            <span>{PHONE_NUMBER}</span>
            <small>Jesse · Owner</small>
            <div className="ocl-phone-call-buttons">
              <span className="is-end" />
              <span className="is-accept" />
            </div>
          </div>
        ) : null}
        {screen.kind === "checklist" || screen.kind === "done" ? (
          <div className="ocl-phone-list">
            <div className="ocl-phone-title">
              <Icon name={screen.kind === "done" ? "check-circle" : "wrench"} />
              {screen.title}
            </div>
            <ul>
              {screen.items.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
            {screen.kind === "done" ? <div className="ocl-phone-badge">Job complete</div> : null}
          </div>
        ) : null}
        {screen.kind === "quote" ? (
          <div className="ocl-phone-list">
            <div className="ocl-phone-title">
              <Icon name="mail" />
              {screen.title}
            </div>
            <dl className="ocl-phone-quote">
              {screen.lines.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="ocl-phone-note">{screen.note}</div>
            <div className="ocl-phone-approve">Approve quote</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function StepRows({ steps }: { steps: readonly StepRow[] }) {
  return (
    <div className="ocl-steps">
      {steps.map((step, index) => (
        <div key={step.step} className={`ocl-step-row${index % 2 === 1 ? " is-reversed" : ""}`}>
          <div className="ocl-step-copy">
            <div className="ocl-step-number">{step.step}</div>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {step.cta ? (
              <Link href={step.cta.href} className="oc-button oc-button-amber">
                {step.cta.label}
                <Icon name="phone" />
              </Link>
            ) : null}
          </div>
          <div className="ocl-step-media">
            <PhoneMockup screen={step.screen} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Comparison table ---------- */

export function ComparisonTable({
  columns,
  rows,
  highlight,
  caption,
}: {
  columns: readonly [string, string, string];
  rows: readonly (readonly [string, string, string])[];
  highlight: 1 | 2;
  caption: string;
}) {
  return (
    <div className="ocl-table-wrap">
      <table className="ocl-table ocl-compare">
        <caption className="ocl-visually-hidden">{caption}</caption>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column} scope="col" className={index === highlight ? "is-highlight" : undefined}>
                {index === highlight ? <span className="ocl-best">Best value</span> : null}
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              <th scope="row">{row[0]}</th>
              <td className={highlight === 1 ? "is-highlight" : undefined}>{row[1]}</td>
              <td className={highlight === 2 ? "is-highlight" : undefined}>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Repair vs replace ---------- */

export function DecisionColumns({
  left,
  right,
}: {
  left: { title: string; items: readonly string[] };
  right: { title: string; items: readonly string[] };
}) {
  return (
    <div className="ocl-decision">
      <article className="ocl-decision-card is-repair">
        <h3>
          <Icon name="wrench" />
          {left.title}
        </h3>
        <ul>
          {left.items.map((item) => (
            <li key={item}>
              <Icon name="check" />
              {item}
            </li>
          ))}
        </ul>
      </article>
      <article className="ocl-decision-card is-replace">
        <h3>
          <Icon name="home" />
          {right.title}
        </h3>
        <ul>
          {right.items.map((item) => (
            <li key={item}>
              <Icon name="arrow" />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

/* ---------- County / city table ---------- */

export const COUNTY_ROWS = [
  ["Salt Lake", "Salt Lake City, Sandy, Murray, West Jordan, South Jordan, Cottonwood Heights, Holladay, Draper"],
  ["Davis", "Bountiful, Centerville, Farmington, Kaysville, Layton, Clearfield, Syracuse"],
  ["Morgan", "Morgan"],
  ["Weber", "Roy, Riverdale, South Ogden, Ogden, North Ogden, Pleasant View, Plain City"],
  ["Box Elder", "Brigham City (HQ), Perry, Willard, Mantua, Corinne, Tremonton, Garland, Honeyville, Bear River City"],
  ["Cache", "Logan, North Logan, Smithfield, Hyrum, Providence, Wellsville, Richmond"],
  ["Rich", "Garden City, Randolph"],
] as const;

export function CountyTable({ trustLine }: { trustLine?: string }) {
  return (
    <>
      <div className="ocl-table-wrap">
        <table className="ocl-table ocl-county">
          <caption className="ocl-visually-hidden">Counties and cities served</caption>
          <thead>
            <tr>
              <th scope="col">County</th>
              <th scope="col">Cities Served</th>
            </tr>
          </thead>
          <tbody>
            {COUNTY_ROWS.map(([county, cities]) => (
              <tr key={county}>
                <th scope="row">
                  <Icon name="pin" />
                  {county}
                </th>
                <td>{cities}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {trustLine ? <p className="ocl-area-trust">{trustLine}</p> : null}
    </>
  );
}

/* ---------- Final CTA ---------- */

export function LandingCta({
  eyebrow,
  title,
  accent,
  body,
  banner,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  body: string;
  banner: readonly string[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <section className="oc-cta ocl-cta" aria-label={title}>
      <div className="oc-container oc-cta-inner">
        <div>
          {eyebrow ? <div className="ocl-cta-eyebrow">{eyebrow}</div> : null}
          <h2>
            {title} {accent ? <em>{accent}</em> : null}
          </h2>
          <p>{body}</p>
        </div>
        <div className="oc-cta-buttons">
          <Link href={primary.href} className="oc-button oc-button-amber oc-button-large">
            {primary.label}
            <Icon name="phone" />
          </Link>
          <Link href={secondary.href} className="oc-button oc-button-ghost oc-button-large">
            {secondary.label}
          </Link>
        </div>
      </div>
      <div className="oc-container ocl-cta-banner">
        {banner.map((item, index) =>
          index === 0 ? (
            <a key={item} href={PHONE_HREF}>
              {item}
            </a>
          ) : (
            <span key={item}>{item}</span>
          ),
        )}
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

export type FooterColumn = {
  heading: string;
  links: readonly (readonly [string, string])[];
};

export function LandingFooter({
  brandLine,
  columns,
  areaLine,
  trustLine,
}: {
  brandLine: string;
  columns: readonly FooterColumn[];
  areaLine: string;
  trustLine: string;
}) {
  return (
    <footer className="oc-footer" aria-label="footer">
      <div className="oc-container">
        <div className="oc-footer-grid">
          <div className="oc-footer-intro">
            <Link href="/" className="oc-footer-logo" aria-label="One Call Heating & Air home">
              <Logo />
            </Link>
            <p>{brandLine}</p>
          </div>
          {columns.map((column) => (
            <div key={column.heading}>
              <h3>{column.heading}</h3>
              <ul className="oc-footer-links">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3>Contact</h3>
            <div className="oc-footer-contact">
              <Icon name="phone" />
              <div>
                <div className="oc-footer-label">Phone · 24/7 emergency calls</div>
                <div>
                  <a href={PHONE_HREF}>Call {PHONE_NUMBER}</a>
                </div>
              </div>
            </div>
            <div className="oc-footer-contact">
              <Icon name="mail" />
              <div>
                <div className="oc-footer-label">Email</div>
                <div>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </div>
              </div>
            </div>
            <div className="oc-footer-contact">
              <Icon name="pin" />
              <div>
                <div className="oc-footer-label">Home base</div>
                <div>Brigham City, Utah</div>
              </div>
            </div>
          </div>
        </div>
        <div className="oc-footer-seo">
          <p>
            <strong>Service area:</strong> {areaLine}
          </p>
          <p>{trustLine}</p>
        </div>
        <div className="oc-footer-bottom">© 2026 One Call Heating &amp; Air · Brigham City, UT</div>
        <div className="oc-credit">
          Website built &amp; managed by{" "}
          <a href="https://www.brightautomations.org/">Bright Automations</a>
        </div>
      </div>
    </footer>
  );
}

export const CONTACT = CONTACT_ROUTE;
export const CALL = { label: `Call ${PHONE_NUMBER}`, href: PHONE_HREF } as const;
