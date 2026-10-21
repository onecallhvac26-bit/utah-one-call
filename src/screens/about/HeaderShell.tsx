"use client";

import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { ResponsiveHeaderContactActions } from "@/components/ResponsiveHeaderContactActions";
import { ASSET_BASE, HOME_ROUTE, CONTACT_ROUTE, PHONE, EMAIL } from "@/config/site";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Icon } from "./Icon";

const DRAWER_ID = "about-mobile-navigation";

export function HeaderShell() {
  const { closeMenu, drawerRef, menuOpen, toggleMenu, triggerRef } =
    useMobileMenu();

  return (
    <>
      <MotionVisibility
        className="oca-drawer"
        data-open={menuOpen}
        id={DRAWER_ID}
        ref={drawerRef}
        visible={menuOpen}
        direction="right"
        aria-hidden={!menuOpen}
      >
        <button type="button" aria-label="Close menu" onClick={closeMenu}>
          ×
        </button>
        <PrimaryNavigation mobile onNavigate={closeMenu} />
        <a href="tel:+18018642045" className="oca-drawer-phone" onClick={closeMenu}>{PHONE}</a>
        <Link href={CONTACT_ROUTE} className="oca-button oca-button-amber" onClick={closeMenu}>Free Estimate</Link>
      </MotionVisibility>

      <div className="oca-announce">
        <div className="oca-container oca-announce-inner">
          <div className="oca-announce-left">
            <a href="tel:+18018642045"><Icon name="phone" /><span>{PHONE}</span></a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" /><span>{EMAIL}</span></a>
          </div>
          <div className="oca-announce-right"><span />24/7 Emergency HVAC</div>
        </div>
      </div>

      <header className="oca-nav-wrap">
        <div className="oca-container oca-nav site-header-grid">
          <Link href={HOME_ROUTE} className="oca-nav-logo site-header-logo">
            <Image
              src={`${ASSET_BASE}/logo.png`}
              alt="One Call Heating & Air"
              width={1051}
              height={718}
              priority
            />
          </Link>
          <nav className="oca-nav-links site-header-links" aria-label="Primary navigation">
            <PrimaryNavigation />
          </nav>
          <div className="oca-nav-right site-header-actions">
            <ResponsiveHeaderContactActions />
            <a href="tel:+18018642045" className="oca-nav-phone site-header-phone">
              <Icon name="phone" />{PHONE}
            </a>
            <Link href={CONTACT_ROUTE} className="oca-button oca-button-outline site-header-cta">Free Estimate</Link>
            <button
              type="button"
              className="oca-menu"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls={DRAWER_ID}
              onClick={toggleMenu}
              ref={triggerRef}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
