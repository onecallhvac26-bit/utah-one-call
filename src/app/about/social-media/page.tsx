import type { Metadata } from "next";

import { PAGE_METADATA } from "@/config/page-metadata";
import { createPageMetadata } from "@/lib/metadata";
import SocialMediaPage from "@/screens/SocialMediaPage";
import "@/screens/services/services.css";
import "@/screens/social-media/social-media.css";

export const metadata: Metadata = createPageMetadata(PAGE_METADATA.socialMedia);

export default function Page() {
  return <SocialMediaPage />;
}
