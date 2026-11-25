import type { Metadata } from "next";

import { StructuredData } from "@/components/StructuredData";
import { PAGE_METADATA } from "@/config/page-metadata";
import { FURNACE_REPAIR_ROUTE } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";
import FurnaceRepairPage from "@/screens/landing/FurnaceRepairPage";
import "@/screens/home/home.css";
import "@/screens/landing/landing.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.furnaceRepair);

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
