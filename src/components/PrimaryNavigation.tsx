"use client";

import { usePathname } from "next/navigation";

import { Link } from "@/components/Link";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  EMERGENCY_ROUTE,
  FURNACE_REPAIR_ROUTE,
  HOME_ROUTE,
  LOCATION_ROUTE,
  SERVICES_ROUTE,
  SOCIAL_MEDIA_ROUTE,
} from "@/config/site";

type PrimaryNavigationProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

function activeClass(pathname: string, route: string) {
  const isActive =
    route === ABOUT_ROUTE
      ? pathname === ABOUT_ROUTE
      : pathname === route;

  return isActive ? "is-active" : undefined;
}

export function PrimaryNavigation({
  mobile = false,
  onNavigate,
}: PrimaryNavigationProps) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <>
        <Link href={HOME_ROUTE} className={activeClass(pathname, HOME_ROUTE)} onClick={onNavigate}>Home</Link>
        <Link href={SERVICES_ROUTE} className={activeClass(pathname, SERVICES_ROUTE)} onClick={onNavigate}>Services</Link>
        <Link href={FURNACE_REPAIR_ROUTE} className={`site-nav-subpage${pathname === FURNACE_REPAIR_ROUTE ? " is-active" : ""}`} onClick={onNavigate}>Furnace Repair</Link>
        <Link href={ABOUT_ROUTE} className={activeClass(pathname, ABOUT_ROUTE)} onClick={onNavigate}>About</Link>
        <Link href={SOCIAL_MEDIA_ROUTE} className={`site-nav-subpage${pathname === SOCIAL_MEDIA_ROUTE ? " is-active" : ""}`} onClick={onNavigate}>Social Media</Link>
        <Link href={LOCATION_ROUTE} className={activeClass(pathname, LOCATION_ROUTE)} onClick={onNavigate}>Service Area</Link>
        <Link href={EMERGENCY_ROUTE} className={activeClass(pathname, EMERGENCY_ROUTE)} onClick={onNavigate}>Emergency</Link>
        <Link href={CONTACT_ROUTE} className={activeClass(pathname, CONTACT_ROUTE)} onClick={onNavigate}>Contact</Link>
      </>
    );
  }

  return (
    <>
      <Link href={HOME_ROUTE} className={activeClass(pathname, HOME_ROUTE)}>Home</Link>
      <div className="site-nav-about site-nav-services">
        <Link href={SERVICES_ROUTE} className={pathname === SERVICES_ROUTE || pathname === FURNACE_REPAIR_ROUTE ? "is-active" : undefined}>
          Services <span aria-hidden="true">▾</span>
        </Link>
        <div className="site-nav-submenu" aria-label="Service pages">
          <Link href={FURNACE_REPAIR_ROUTE} className={activeClass(pathname, FURNACE_REPAIR_ROUTE)}>Furnace Repair</Link>
        </div>
      </div>
      <div className="site-nav-about">
        <Link href={ABOUT_ROUTE} className={pathname.startsWith(`${ABOUT_ROUTE}/`) || pathname === ABOUT_ROUTE ? "is-active" : undefined}>
          About <span aria-hidden="true">▾</span>
        </Link>
        <div className="site-nav-submenu" aria-label="About pages">
          <Link href={SOCIAL_MEDIA_ROUTE} className={activeClass(pathname, SOCIAL_MEDIA_ROUTE)}>Social Media</Link>
        </div>
      </div>
      <Link href={LOCATION_ROUTE} className={activeClass(pathname, LOCATION_ROUTE)}>Service Area</Link>
      <Link href={EMERGENCY_ROUTE} className={activeClass(pathname, EMERGENCY_ROUTE)}>Emergency</Link>
      <Link href={CONTACT_ROUTE} className={activeClass(pathname, CONTACT_ROUTE)}>Contact</Link>
    </>
  );
}
