"use client";

import { Image } from "@/components/Image";
import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { ResponsiveHeaderContactActions } from "@/components/ResponsiveHeaderContactActions";
import { ASSET_BASE, HOME_ROUTE, PHONE, EMAIL } from "@/config/site";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Icon } from "./Icon";

const DRAWER_ID = "contact-mobile-navigation";

export function HeaderShell() {
  const { closeMenu, drawerRef, menuOpen, toggleMenu, triggerRef } =
    useMobileMenu();

  return (
    <>
      <MotionVisibility
        className="occ-drawer"
        data-open={menuOpen}
        id={DRAWER_ID}
        ref={drawerRef}
        visible={menuOpen}
        direction="right"
        aria-hidden={!menuOpen}
      >
        <button type="button" aria-label="Close menu" onClick={closeMenu}>×</button>
        <PrimaryNavigation mobile onNavigate={closeMenu} />
        <a href="tel:+18018642045" className="occ-drawer-phone" onClick={closeMenu}>{PHONE}</a>
        <a href="tel:+18018642045" className="occ-button occ-button-amber" onClick={closeMenu}>Call Now</a>
      </MotionVisibility>

      <div className="occ-announce">
        <div className="occ-container occ-announce-inner">
          <div className="occ-announce-left">
            <a href="tel:+18018642045"><Icon name="phone" /><span>{PHONE}</span></a>
            <a href={`mailto:${EMAIL}`}><Icon name="mail" /><span>{EMAIL}</span></a>
          </div>
          <div className="occ-announce-right"><span />24/7 Emergency HVAC</div>
        </div>
      </div>

      <header className="occ-nav-wrap">
        <div className="occ-container occ-nav site-header-grid">
          <Link href={HOME_ROUTE} className="occ-nav-logo site-header-logo">
            <Image
              src={`${ASSET_BASE}/logo.png`}
              alt="One Call Heating & Air"
              width={1051}
              height={718}
              priority
            />
          </Link>
          <nav className="occ-nav-links site-header-links" aria-label="Primary navigation">
            <PrimaryNavigation />
          </nav>
          <div className="occ-nav-right site-header-actions">
            <ResponsiveHeaderContactActions />
            <a href="tel:+18018642045" className="occ-nav-phone site-header-phone"><Icon name="phone" />{PHONE}</a>
            <a href="#quoteForm" className="occ-button occ-button-amber site-header-cta">Free Estimate</a>
            <button
              type="button"
              className="occ-menu"
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
