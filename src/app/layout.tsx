import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

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
 <Script id="gtm" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-PWCVCVFQ');
  `}
</Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0D282WQWLZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0D282WQWLZ');
          `}
        </Script>
        <RouteEffects />
        {children}
      </body>
    </html>
  );
}
