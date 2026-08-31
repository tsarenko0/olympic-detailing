import { SERVICES_CATALOG } from "@/lib/services-data";
import { CONTACT, FAQ_ITEMS } from "@/lib/site-data";
import {
  HOME_DESCRIPTION,
  HOME_TITLE,
  OG_IMAGE_PATH,
  SEO_ALTERNATE_NAMES,
  SEO_BRAND,
  absoluteUrl,
} from "@/lib/seo";

const SCHEMA_CONTEXT = "https://schema.org";
const IN_LANGUAGE = "ru-RU";
const OPENING_HOURS_SCHEMA = "Mo-Su 09:30-19:00";
const PAYMENT_ACCEPTED = "Cash, Credit Card, Bank Transfer";
const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function buildHomeJsonLd() {
  const pageUrl = absoluteUrl("/");
  const ogImage = absoluteUrl(OG_IMAGE_PATH);
  const logoUrl = absoluteUrl("/apple-touch-icon.png");

  const localBusiness = {
    "@type": "AutomotiveBusiness",
    "@id": pageUrl ? `${pageUrl}#business` : undefined,
    name: SEO_BRAND,
    alternateName: [...SEO_ALTERNATE_NAMES],
    description: HOME_DESCRIPTION,
    url: pageUrl,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    image: [ogImage, logoUrl].filter(Boolean),
    logo: logoUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.streetAddress,
      addressLocality: CONTACT.addressLocality,
      addressCountry: CONTACT.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CONTACT.geo.latitude,
      longitude: CONTACT.geo.longitude,
    },
    hasMap: CONTACT.mapsUrl,
    openingHours: OPENING_HOURS_SCHEMA,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...WEEKDAYS],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    sameAs: [CONTACT.instagram, CONTACT.telegram],
    areaServed: {
      "@type": "City",
      name: CONTACT.addressLocality,
    },
    priceRange: "BYN",
    currenciesAccepted: "BYN",
    paymentAccepted: PAYMENT_ACCEPTED,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      areaServed: CONTACT.addressCountry,
      availableLanguage: ["Russian", "ru"],
    },
    knowsAbout: [
      "детейлинг",
      "оклейка антигравийной плёнкой",
      "шумоизоляция автомобиля",
      "керамическое покрытие",
      "полировка кузова",
      "жидкое бронирование",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Услуги детейлинга",
      itemListElement: SERVICES_CATALOG.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.teaser,
        },
      })),
    },
  };

  const webSite = {
    "@type": "WebSite",
    "@id": pageUrl ? `${pageUrl}#website` : undefined,
    name: SEO_BRAND,
    alternateName: [...SEO_ALTERNATE_NAMES],
    url: pageUrl,
    inLanguage: IN_LANGUAGE,
    publisher: { "@id": pageUrl ? `${pageUrl}#business` : undefined },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": pageUrl ? `${pageUrl}#webpage` : undefined,
    url: pageUrl,
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    inLanguage: IN_LANGUAGE,
    isPartOf: { "@id": pageUrl ? `${pageUrl}#website` : undefined },
    about: { "@id": pageUrl ? `${pageUrl}#business` : undefined },
    primaryImageOfPage: ogImage,
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": pageUrl ? `${pageUrl}#faq` : undefined,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная — Olympic Detailing Минск",
        item: pageUrl,
      },
    ],
  };

  return {
    "@context": SCHEMA_CONTEXT,
    "@graph": [localBusiness, webSite, webPage, faqPage, breadcrumb].map((node) =>
      stripUndefined(node),
    ),
  };
}

function stripUndefined<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
