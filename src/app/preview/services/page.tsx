import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import ServicesRewritePage from "@/screens/landing/ServicesRewritePage";
import { SERVICES_PREVIEW_ROUTE } from "@/screens/landing/landing-routes";
import "@/screens/home/home.css";
import "@/screens/landing/landing.css";

// Preview of the November 2026 services rewrite. The live /services page is untouched.
export const metadata: Metadata = createPageMetadata({
  title: "HVAC Installation, Repair & Maintenance | One Call",
  description:
    "One Call Heating & Air handles heating and cooling in northern Utah. Get HVAC repairs, installations, and tune-ups from a local crew with straight answers.",
  path: SERVICES_PREVIEW_ROUTE,
  indexable: false,
});

export default function Page() {
  return <ServicesRewritePage path={SERVICES_PREVIEW_ROUTE} />;
}
