import { CONTACT, FAQ_ITEMS } from "@/lib/amg-data";

/** Production origin without trailing slash, e.g. https://example.com */
export const SITE_ORIGIN = String(import.meta.env["VITE_SITE_URL"] ?? "").replace(/\/$/, "");

export const SEO_BRAND = "AMG Detailing";

export const SEO_ALTERNATE_NAMES = [
  "AMG",
  "АМГ",
  "АМГ Детейлинг",
  "Амг детейлинг",
  "AMG Детейлинг",
  "AMG Краснодар",
  "АМГ Краснодар",
  "Амг Краснодар",
  "AMG Detailing Краснодар",
  "детейлинг Краснодар",
] as const;

export const HOME_TITLE =
  "AMG Detailing Краснодар — АМГ детейлинг, оклейка плёнкой и шумоизоляция";

export const HOME_DESCRIPTION =
  "AMG Detailing (АМГ детейлинг) в Краснодаре: оклейка антигравийной плёнкой, шумоизоляция, керамика и полировка. Студия на ул. Мачуги, 157. Ежедневно 9:30–19:00. Звоните: +7 (918) 965-95-95.";

export const HOME_KEYWORDS = [
  "AMG Detailing",
  "АМГ детейлинг",
  "Амг детейлинг",
  "AMG Краснодар",
  "АМГ Краснодар",
  "Амг Краснодар",
  "детейлинг Краснодар",
  "оклейка плёнкой Краснодар",
  "антигравийная плёнка Краснодар",
  "шумоизоляция авто Краснодар",
  "керамика кузова Краснодар",
  "полировка авто Краснодар",
  "AMG Detailing Мачуги",
].join(", ");

export const PRIVACY_TITLE = "Политика конфиденциальности — AMG Detailing Краснодар";

export const PRIVACY_DESCRIPTION =
  "Политика конфиденциальности AMG Detailing (АМГ детейлинг, Краснодар): как обрабатываем имя и телефон из заявок на сайте.";

export const DEFAULT_TITLE = "AMG Detailing — детейлинг в Краснодаре | АМГ";

export const DEFAULT_DESCRIPTION =
  "AMG Detailing (АМГ детейлинг) в Краснодаре: оклейка плёнкой, шумоизоляция, керамика и полировка. ул. Мачуги, 157.";

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
      streetAddress: "улица Мачуги, 157",
      addressLocality: "Краснодар",
      addressRegion: "Краснодарский край",
      addressCountry: "RU",
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
      name: "Краснодар",
    },
    priceRange: "₽₽",
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
        name: "Главная — AMG Detailing Краснодар",
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
      { name: "geo.region", content: "RU-KDA" },
      { name: "geo.placename", content: "Краснодар" },
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
