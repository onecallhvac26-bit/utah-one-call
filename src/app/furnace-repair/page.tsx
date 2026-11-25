import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import FurnaceRepairPage from "@/screens/landing/FurnaceRepairPage";
import { FURNACE_REPAIR_ROUTE } from "@/screens/landing/landing-routes";
import "@/screens/home/home.css";
import "@/screens/landing/landing.css";

// New page — noindex and out of the sitemap until approved.
export const metadata: Metadata = createPageMetadata({
  title: "Furnace Repair in Northern Utah | One Call Heating & Air",
  description:
    "One Call Heating & Air handles 24/7 furnace repair across northern Utah. Our local crew diagnoses the problem, explains the repair, and gives an up-front quote.",
  path: FURNACE_REPAIR_ROUTE,
  indexable: false,
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbStructuredData({ name: "Furnace Repair", path: FURNACE_REPAIR_ROUTE })}
      />
      <FurnaceRepairPage path={FURNACE_REPAIR_ROUTE} />
    </>
  );
}
