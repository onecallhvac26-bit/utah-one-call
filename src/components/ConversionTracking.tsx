"use client";

import { useEffect } from "react";

import { trackPhoneClick } from "@/lib/tracking";

/**
 * Listens for clicks on any tel: link (header, hero, footer, CTAs) and
 * pushes a `phone_click` event to the dataLayer for Google Tag Manager.
 * Uses one delegated listener so new phone links are covered automatically.
 */
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]');

      if (!link) {
        return;
      }

      trackPhoneClick(link.getAttribute("href") ?? "", window.location.pathname);
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
