import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";
import HomeRewritePage from "@/screens/landing/HomeRewritePage";
import { HOME_PREVIEW_ROUTE } from "@/screens/landing/landing-routes";
import "@/screens/home/home.css";
import "@/screens/landing/landing.css";

// Preview of the November 2026 homepage rewrite. The live homepage at "/" is untouched.
export const metadata: Metadata = createPageMetadata({
  title: "HVAC Repair & Installation in Northern Utah | One Call",
  description:
    "Need furnace repair, AC service, or a new HVAC system? Call One Call Heating & Air in Brigham City for honest diagnostics and 24/7 service across northern Utah.",
  path: HOME_PREVIEW_ROUTE,
  indexable: false,
});

export default function Page() {
  return <HomeRewritePage path={HOME_PREVIEW_ROUTE} />;
}
