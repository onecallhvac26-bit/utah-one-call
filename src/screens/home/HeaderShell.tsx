"use client";

import { Link } from "@/components/Link";
import { MotionVisibility } from "@/components/MotionVisibility";
import { PrimaryNavigation } from "@/components/PrimaryNavigation";
import { ResponsiveHeaderContactActions } from "@/components/ResponsiveHeaderContactActions";
import { CONTACT_ROUTE, PHONE_NUMBER } from "@/config/site";
import { useMobileMenu } from "@/hooks/use-mobile-menu";
import { Icon } from "./Icon";
import { Logo } from "./Logo";

const DRAWER_ID = "home-mobile-navigation";

export function HeaderShell() {
  const { closeMenu, drawerRef, menuOpen, toggleMenu, triggerRef } =
    useMobileMenu();

  return (
    <>
      <header className="oc-header site-header-grid" data-section="nav:section-16" aria-label="nav">
        <Link href="/" className="oc-header-logo site-header-logo" aria-label="One Call Heating & Air home">
          <Logo />
        </Link>
        <nav className="oc-desktop-nav site-header-links" aria-label="Primary navigation">
          <PrimaryNavigation />
        </nav>
        <div className="oc-header-actions site-header-actions">
          <ResponsiveHeaderContactActions />
          <a href="tel:+18018642045" className="oc-header-phone site-header-phone">
            <Icon name="phone" />
            {PHONE_NUMBER}
          </a>
          <Link href={CONTACT_ROUTE} className="oc-button oc-button-amber site-header-cta">
            Free Estimate
          </Link>
          <button
            type="button"
            className="oc-menu-button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls={DRAWER_ID}
            onClick={toggleMenu}
            ref={triggerRef}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>
      <MotionVisibility
        className={`oc-drawer${menuOpen ? " is-open" : ""}`}
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
        <a href="tel:+18018642045" onClick={closeMenu}>{PHONE_NUMBER}</a>
      </MotionVisibility>
    </>
  );
}
