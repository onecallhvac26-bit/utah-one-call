import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import AboutPage from "@/screens/AboutPage";
import "@/screens/about/about.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.about);

export default function Page() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbStructuredData({
          name: PAGE_BREADCRUMBS.about.label,
          path: PAGE_BREADCRUMBS.about.path,
        })}
      />
      <AboutPage />
    </>
  );
}
