import type { Metadata } from "next";

import { PAGE_METADATA } from "@/config/page-metadata";
import { createPageMetadata } from "@/lib/metadata";
import EmergencyPage from "@/screens/EmergencyPage";
import "@/screens/emergency/emergency.css";
import "@/screens/services/services.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.emergency);

export default function Page() {
  return <EmergencyPage />;
}
