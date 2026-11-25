import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import ServicesPage from "@/screens/ServicesPage";
import "@/screens/services/services.css";

// Draft: the previous services page, kept for reference. Not indexed, not in the sitemap, not linked.
export const metadata: Metadata = createPageMetadata({
  title: "Draft: Previous Services Page | One Call Heating & Air",
  description: "Archived draft of the previous One Call Heating & Air services page.",
  path: "/draft/old-services",
  indexable: false,
});

export default function Page() {
  return <ServicesPage />;
}
