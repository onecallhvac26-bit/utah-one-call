import { Link } from "@/components/Link";
import { type ReactNode } from "react";
import { EMAIL, PHONE_NUMBER } from "@/config/site";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/config/site-navigation";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

export function FooterShell() {
  return (
    <footer className="oc-footer" data-section="footer" aria-label="footer">
      <div className="oc-container">
        <div className="oc-footer-grid">
          <div className="oc-footer-intro">
            <Link href="/" className="oc-footer-logo" aria-label="One Call Heating & Air home">
              <Logo />
            </Link>
            <p>
              Owner-operated HVAC, headquartered in Brigham City. Heating, cooling,
              and 24/7 service across all seven northern Utah counties — from Salt
              Lake City to the Idaho border.
            </p>
          </div>
          <FooterLinks heading="Services" links={FOOTER_SERVICE_LINKS} />
          <FooterLinks heading="Company" links={FOOTER_COMPANY_LINKS} />
          <div>
            <h3>Contact</h3>
            <FooterContact icon="phone" label="Phone · 24/7">
              <a href="tel:+18018642045">{PHONE_NUMBER}</a>
            </FooterContact>
            <FooterContact icon="mail" label="Email">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </FooterContact>
            <FooterContact icon="pin" label="Service Area">
              Brigham City, UT
              <br />
              Salt Lake · Davis · Morgan · Weber
              <br />
              Box Elder · Cache · Rich Counties
            </FooterContact>
          </div>
        </div>
        <div className="oc-footer-seo">
          <p>
            <strong>Services:</strong> AC Repair · Furnace Repair · HVAC Installation ·
            Heat Pumps
          </p>
          <p>
            <strong>Service areas:</strong> Brigham City · Ogden · Logan · Layton ·
            Bountiful · Salt Lake City
          </p>
        </div>
        <div className="oc-footer-bottom">
          © 2026 One Call Heating & Air · Owner: Jesse · Licensed & Insured
        </div>
        <div className="oc-credit">
          Website built & managed by{" "}
          <a href="https://www.brightautomations.org/">Bright Automations</a>
        </div>
      </div>
    </footer>
  );
}

export function FooterLinks({
  heading,
  links,
}: {
  heading: string;
  links: ReadonlyArray<readonly [label: string, href: string]>;
}) {
  return (
    <div>
      <h3>{heading}</h3>
      <ul className="oc-footer-links">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterContact({
  icon,
  label,
  children,
}: {
  icon: "phone" | "mail" | "pin";
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="oc-footer-contact">
      <Icon name={icon} />
      <div>
        <div className="oc-footer-label">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
