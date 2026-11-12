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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1107375271906500');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1107375271906500&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <RouteEffects />
        {children}
      </body>
    </html>
  );
}
