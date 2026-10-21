"use client";

import { useEffect, useState } from "react";

import { Image } from "@/components/Image";
import { GOOGLE_SERVICE_AREA_MAP_EMBED_URL } from "@/config/service-area-map";

const DESKTOP_MAP_QUERY = "(min-width: 721px)";

export function ServiceAreaMapMedia() {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_MAP_QUERY);
    const updateMapType = () => setShowInteractiveMap(desktopQuery.matches);

    updateMapType();
    desktopQuery.addEventListener("change", updateMapType);

    return () => desktopQuery.removeEventListener("change", updateMapType);
  }, []);

  if (showInteractiveMap) {
    return (
      <div className="oc-service-map-frame">
        <iframe
          title="Google map of One Call Heating and Air's northern Utah service area"
          src={GOOGLE_SERVICE_AREA_MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="oc-service-map-mobile">
      <Image
        src="/pics/image.png"
        alt="One Call Heating and Air service area across northern Utah"
        width={2616}
        height={1984}
        sizes="(max-width: 720px) calc(100vw - 28px), 1px"
      />
      <a
        href={GOOGLE_SERVICE_AREA_MAP_EMBED_URL}
        className="oc-service-map-external-link"
      >
        View the interactive service-area map
      </a>
    </div>
  );
}
