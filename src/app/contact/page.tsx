import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { PAGE_BREADCRUMBS } from "@/config/site-navigation";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import ContactPage from "@/screens/ContactPage";
import "@/screens/contact/contact.css";
import "@/screens/contact/free-quote-form.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.contact);

export default function Page() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbStructuredData({
          name: PAGE_BREADCRUMBS.contact.label,
          path: PAGE_BREADCRUMBS.contact.path,
        })}
      />
      <ContactPage />
    </>
  );
}
