"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo({ left: 0, top: 0 });
      return;
    }

    let frameId = 0;
    let remainingAttempts = 60;

    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView();
        return;
      }

      remainingAttempts -= 1;
      if (remainingAttempts > 0) {
        frameId = window.requestAnimationFrame(scrollToTarget);
      }
    };

    frameId = window.requestAnimationFrame(scrollToTarget);
    return () => window.cancelAnimationFrame(frameId);
  }, [pathname]);

  return null;
}
