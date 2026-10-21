import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { createPageMetadata } from "@/lib/metadata";
import {
  createBreadcrumbStructuredData,
  createServiceAreaStructuredData,
} from "@/lib/structured-data";
import LocationPage from "@/screens/LocationPage";
import { countyServiceAreas } from "@/screens/location/location-data";
import "@/screens/location/location.css";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.location);

export default function Page() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbStructuredData({
          name: PAGE_BREADCRUMBS.location.label,
          path: PAGE_BREADCRUMBS.location.path,
        })}
      />
      <StructuredData
        data={createServiceAreaStructuredData(countyServiceAreas)}
      />
      <LocationPage />
    </>
  );
}
