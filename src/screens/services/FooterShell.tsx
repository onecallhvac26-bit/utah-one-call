import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { type ReactNode } from "react";
import { ASSET_BASE, HOME_ROUTE, PHONE_NUMBER, EMAIL } from "@/config/site";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
} from "@/config/site-navigation";
import { IconName, Icon } from "./Icon";

export function FooterShell() {
  return (
    <footer className="ocs-footer ocs-airflow">
      <div className="ocs-container">
        <div className="ocs-footer-grid">
          <div className="ocs-footer-about">
            <Link href={HOME_ROUTE}>
              <Image
                src={`${ASSET_BASE}/logo.png`}
                alt="One Call Heating & Air"
                width={1051}
                height={718}
              />
            </Link>
            <p>
              Owner-operated HVAC, headquartered in Brigham City. Heating,
              cooling, and 24/7 service across all seven northern Utah counties
              — from Salt Lake City to the Idaho border.
            </p>
          </div>
          <FooterLinks
            heading="Services"
            links={FOOTER_SERVICE_LINKS}
          />
          <FooterLinks
            heading="Company"
            links={FOOTER_COMPANY_LINKS}
          />
          <div>
            <div className="ocs-footer-heading">Contact</div>
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
        <div className="ocs-footer-seo">
          <p>
            <strong>Services:</strong> AC Repair · Furnace Repair · HVAC
            Installation · Heat Pumps
          </p>
          <p>
            <strong>Service areas:</strong> Brigham City · Ogden · Logan · Layton
            · Bountiful · Salt Lake City
          </p>
        </div>
        <div className="ocs-footer-bottom">
          © 2026 One Call Heating & Air · Owner: Jesse · Licensed & Insured
        </div>
      </div>
      <div className="ocs-credit">
        Website built & managed by{" "}
        <a
          href="https://www.brightautomations.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bright Automations
        </a>
      </div>
    </footer>
  );
}

export function FooterLinks({
  heading,
  links,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <div className="ocs-footer-heading">{heading}</div>
      <ul className="ocs-footer-links">
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
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="ocs-footer-contact">
      <Icon name={icon} />
      <div>
        <div className="ocs-footer-contact-label">{label}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
