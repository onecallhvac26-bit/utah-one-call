import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import ServicesPage from "@/screens/ServicesPage";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.services);

export default function Page() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbStructuredData({
          name: PAGE_BREADCRUMBS.services.label,
          path: PAGE_BREADCRUMBS.services.path,
        })}
      />
      <ServicesPage />
    </>
  );
}
