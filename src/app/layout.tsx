import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RouteEffects } from "@/components/RouteEffects";
import {
  SITE_DESCRIPTION,
  SITE_LANGUAGE,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from "@/config/site";
import "@/styles/google-reviews.css";
import "@/styles/internal-navigation.css";
import "@/styles/interactions.css";
import "@/styles/keyword-content.css";
import "@/styles/navigation.css";
import "@/styles/page-answers.css";

export const runtime = "nodejs";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "One Call Heating & Air | Northern Utah HVAC Service",
    template: "%s | One Call Heating & Air",
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: SITE_LOGO_PATH,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={SITE_LANGUAGE}>
      <body>
        <RouteEffects />
        {children}
      </body>
    </html>
  );
}
