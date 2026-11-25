import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { createPageMetadata } from "@/lib/metadata";
import { createSiteStructuredData } from "@/lib/structured-data";
import HomeRewritePage from "@/screens/landing/HomeRewritePage";
import { countyServiceAreas } from "@/screens/location/location-data";
import "@/screens/home/home.css";
import "@/screens/landing/landing.css";

// November 2026 homepage. The previous homepage is kept as a noindex draft at /draft/old-homepage.
export const metadata: Metadata = createPageMetadata(PAGE_METADATA.home);

export default function Page() {
  return (
    <>
      <StructuredData data={createSiteStructuredData(countyServiceAreas)} />
      <HomeRewritePage path="/" />
    </>
  );
}
