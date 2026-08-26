import { CONTACT, FAQ_ITEMS } from "@/lib/site-data";

/** Production origin without trailing slash, e.g. https://example.com */
export const SITE_ORIGIN = String(import.meta.env["VITE_SITE_URL"] ?? "").replace(/\/$/, "");

export const SEO_BRAND = "Olympic Detailing";

export const SEO_ALTERNATE_NAMES = [
  "Olympic",
  "Olympic Detailing",
  "Олимпик Детейлинг",
  "Олимпик детейлинг",
  "Olympic Detailing Минск",
  "Олимпик Детейлинг Минск",
  "детейлинг Минск",
] as const;

export const HOME_TITLE =
  "Olympic Detailing Минск — детейлинг, оклейка плёнкой и шумоизоляция";

export const HOME_DESCRIPTION =
  "Olympic Detailing в Минске: оклейка антигравийной плёнкой, шумоизоляция, керамика и полировка. Студия на Михаловская 18. Ежедневно 9:30–19:00. Звоните: +375 29 314 5777.";

export const HOME_KEYWORDS = [
  "Olympic Detailing",
  "Олимпик детейлинг",
  "Olympic Detailing Минск",
  "детейлинг Минск",
  "оклейка плёнкой Минск",
  "антигравийная плёнка Минск",
  "шумоизоляция авто Минск",
  "керамика кузова Минск",
  "полировка авто Минск",
  "Olympic Detailing Михаловская",
].join(", ");

export const PRIVACY_TITLE = "Политика конфиденциальности — Olympic Detailing Минск";

export const PRIVACY_DESCRIPTION =
  "Политика конфиденциальности Olympic Detailing (Минск): как обрабатываем имя и телефон из заявок на сайте.";

export const DEFAULT_TITLE = "Olympic Detailing — детейлинг в Минске";

export const DEFAULT_DESCRIPTION =
  "Olympic Detailing в Минске: оклейка плёнкой, шумоизоляция, керамика и полировка. Михаловская 18.";

export function absoluteUrl(path = "/"): string | undefined {
  if (!SITE_ORIGIN) return undefined;
  if (path === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildHomeJsonLd() {
  const pageUrl = absoluteUrl("/");

  const localBusiness = {
    "@type": "AutomotiveBusiness",
    "@id": pageUrl ? `${pageUrl}#business` : undefined,
    name: SEO_BRAND,
    alternateName: [...SEO_ALTERNATE_NAMES],
    description: HOME_DESCRIPTION,
    url: pageUrl,
    telephone: CONTACT.phoneHref.replace("tel:", ""),
    image: absoluteUrl("/favicon.png"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Михаловская 18",
      addressLocality: "Минск",
      addressCountry: "BY",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
    sameAs: [CONTACT.instagram],
    areaServed: {
      "@type": "City",
      name: "Минск",
    },
    priceRange: "BYN",
    knowsAbout: [
      "детейлинг",
      "оклейка антигравийной плёнкой",
      "шумоизоляция автомобиля",
      "керамическое покрытие",
      "полировка кузова",
      "жидкое бронирование",
    ],
  };

  const webSite = {
    "@type": "WebSite",
    "@id": pageUrl ? `${pageUrl}#website` : undefined,
    name: SEO_BRAND,
    alternateName: [...SEO_ALTERNATE_NAMES],
    url: pageUrl,
    inLanguage: "ru-RU",
    publisher: { "@id": pageUrl ? `${pageUrl}#business` : undefined },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": pageUrl ? `${pageUrl}#webpage` : undefined,
    url: pageUrl,
    name: HOME_TITLE,
    description: HOME_DESCRIPTION,
    inLanguage: "ru-RU",
    isPartOf: { "@id": pageUrl ? `${pageUrl}#website` : undefined },
    about: { "@id": pageUrl ? `${pageUrl}#business` : undefined },
    primaryImageOfPage: absoluteUrl("/favicon.png"),
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
    "@context": "https://schema.org",
    "@graph": [localBusiness, webSite, webPage, faqPage, breadcrumb].map((node) =>
      stripUndefined(node),
    ),
  };
}

function stripUndefined<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

export function homeHeadMeta() {
  const canonical = absoluteUrl("/");
  const ogImage = absoluteUrl("/favicon.png");

  return {
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { name: "keywords", content: HOME_KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: SEO_BRAND },
      { name: "geo.region", content: "BY-MI" },
      { name: "geo.placename", content: "Минск" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SEO_BRAND },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
}

export function privacyHeadMeta() {
  const canonical = absoluteUrl("/privacy");

  return {
    meta: [
      { title: PRIVACY_TITLE },
      { name: "description", content: PRIVACY_DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SEO_BRAND },
      { property: "og:title", content: PRIVACY_TITLE },
      { property: "og:description", content: PRIVACY_DESCRIPTION },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    ],
    links: canonical ? [{ rel: "canonical", href: canonical }] : [],
  };
}
