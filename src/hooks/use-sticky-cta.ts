import { useEffect, useState } from "react";

export function useStickyCta(scrollThreshold: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > scrollThreshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [scrollThreshold]);

  return isVisible;
}
