import {
  CONTACT_ROUTE,
  EMAIL,
  HOME_ROUTE,
  PHONE_E164,
  SITE_DESCRIPTION,
  SITE_LOGO_HEIGHT,
  SITE_LOGO_URL,
  SITE_LOGO_WIDTH,
  SITE_NAME,
  SITE_URL,
} from "@/config/site";
import { ROUTE_PATHS } from "@/config/route-paths";

type PublicPath = `/${string}` | "/";
type FaqQuestion = {
  question: string;
  answer: string;
};
type ServiceArea = {
  county: string;
  cities: readonly string[];
};

function createCountyArea({ county, cities }: ServiceArea) {
  return {
    "@type": "AdministrativeArea",
    name: `${county}, Utah`,
    containsPlace: cities.map((city) => ({
      "@type": "City",
      name: `${city}, Utah`,
    })),
  };
}

export function createSiteStructuredData(serviceAreas: readonly ServiceArea[]) {
  const organizationId = `${SITE_URL}/#organization`;
  const logoId = `${SITE_URL}/#logo`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: "en-US",
        publisher: { "@id": organizationId },
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        description: SITE_DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          "@id": logoId,
          url: SITE_LOGO_URL,
          contentUrl: SITE_LOGO_URL,
          width: SITE_LOGO_WIDTH,
          height: SITE_LOGO_HEIGHT,
        },
        telephone: PHONE_E164,
        email: EMAIL,
        areaServed: serviceAreas.map(({ county }) => ({
          "@type": "AdministrativeArea",
          name: `${county}, Utah`,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: PHONE_E164,
          email: EMAIL,
          areaServed: "Northern Utah",
          availableLanguage: "English",
        },
      },
    ],
  };
}

export function createServiceAreaStructuredData(
  serviceAreas: readonly ServiceArea[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${ROUTE_PATHS.location}#service-area`,
    name: "Northern Utah HVAC service area",
    url: new URL(ROUTE_PATHS.location, SITE_URL).toString(),
    serviceType: "Heating, ventilation, and air conditioning service",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: serviceAreas.map(createCountyArea),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: new URL(CONTACT_ROUTE, SITE_URL).toString(),
      servicePhone: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
      },
    },
  };
}

export function createBreadcrumbStructuredData({
  name,
  path,
}: {
  name: string;
  path: Exclude<PublicPath, "/">;
}) {
  const pageUrl = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: new URL(HOME_ROUTE, SITE_URL).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: pageUrl,
      },
    ],
  };
}

export function createFaqStructuredData({
  path,
  questions,
}: {
  path: PublicPath;
  questions: readonly FaqQuestion[];
}) {
  const pageUrl = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
