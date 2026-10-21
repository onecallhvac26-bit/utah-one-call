import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { createPageMetadata } from "@/lib/metadata";
import { createSiteStructuredData } from "@/lib/structured-data";
import HomePage from "@/screens/HomePage";
import { countyServiceAreas } from "@/screens/location/location-data";
import "@/screens/contact/free-quote-form.css";
import "@/screens/home/home.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.home);

export default function Page() {
  return (
    <>
      <StructuredData data={createSiteStructuredData(countyServiceAreas)} />
      <HomePage />
    </>
  );
}
