import { type ReactNode } from "react";
import { PHONE, EMAIL } from "@/config/site";
import { FreeQuoteForm } from "./FreeQuoteForm";
import { Icon } from "./Icon";

export function InfoCard({
  icon,
  label,
  value,
  children,
  emergency = false,
}: {
  icon: "mail" | "phone" | "pin";
  label: string;
  value: ReactNode;
  children: ReactNode;
  emergency?: boolean;
}) {
  return (
    <article className={`occ-info-card${emergency ? " is-emergency" : ""}`}>
      <div className="occ-info-head">
        <div className="occ-info-icon"><Icon name={icon} /></div>
        <h3>{label}</h3>
      </div>
      <div className="occ-info-value">{value}</div>
      <p>{children}</p>
    </article>
  );
}

export function BusinessHoursCard() {
  return (
    <article className="occ-hours occ-airflow">
      <h3>Business Hours</h3>
      <div><span>Monday – Friday</span><strong>7:00 AM – 7:00 PM</strong></div>
      <div><span>Saturday</span><strong>8:00 AM – 5:00 PM</strong></div>
      <div><span>Sunday</span><strong>By appointment</strong></div>
      <p>
        <strong>Emergency HVAC calls:</strong> 24/7/365 for active no-heat or
        no-cool problems.
        <br />
        <br />
        If you smell gas or a carbon-monoxide alarm sounds, leave the property
        and call 911 or the gas utility from outside before arranging HVAC
        repair.
      </p>
    </article>
  );
}

export function ContactDetailsSection() {
  return (
    <section
      className="occ-contact-section"
      data-section="request a free hvac quote"
      aria-label="Request a free HVAC quote"
    >
      <div className="occ-container occ-contact-grid">
        <FreeQuoteForm />
        <div className="occ-info-stack">
          <InfoCard
            icon="phone"
            label="24/7 Emergency · Owner Picks Up"
            value={<a href="tel:+18018642045">{PHONE}</a>}
            emergency
          >
            No call center. No &quot;we&apos;ll get back to you tomorrow.&quot;
            Jesse answers — including nights, weekends, and Utah&apos;s
            nastiest January cold snaps.
          </InfoCard>
          <InfoCard
            icon="mail"
            label="Email"
            value={<a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
          >
            Best for install scopes, multi-system bids, commercial/property-management
            requests, or sending pictures of the system or error codes.
          </InfoCard>
          <InfoCard icon="pin" label="Service Area" value="Brigham City, UT">
            Headquarters in Brigham City. Active routes across all seven
            northern Utah counties — Salt Lake, Davis, Morgan, Weber, Box
            Elder, Cache, and Rich.
          </InfoCard>
          <BusinessHoursCard />
        </div>
      </div>
    </section>
  );
}
