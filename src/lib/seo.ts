import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
import { CONTACT } from "@/lib/site-data";

/** Production origin without trailing slash, e.g. https://example.com */
export const SITE_ORIGIN = String(import.meta.env["VITE_SITE_URL"] ?? "").replace(/\/$/, "");

const DEFAULT_GOOGLE_SITE_VERIFICATION = "GV3YB67R_tagXXjmoSuO0tAEJDA7mJspZTFZMAhBVtk";
const GOOGLE_SITE_VERIFICATION =
  String(import.meta.env["VITE_GOOGLE_SITE_VERIFICATION"] ?? "") || DEFAULT_GOOGLE_SITE_VERIFICATION;
const YANDEX_VERIFICATION = String(import.meta.env["VITE_YANDEX_VERIFICATION"] ?? "");

export const SEO_BRAND = "Olympic Detailing";

export const THEME_COLOR = "#be0008";

export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_TYPE = "image/jpeg";
export const OG_IMAGE_ALT = "Автомобиль после детейлинга в студии Olympic Detailing, Минск";

export const WEB_MANIFEST_PATH = "/site.webmanifest";

export const SEO_ALTERNATE_NAMES = [
  "Olympic",
  "Olympic Detailing",
  "Олимпик Детейлинг",
  "Олимпик детейлинг",
  "Olympic Detailing Минск",
  "Олимпик Детейлинг Минск",
  "детейлинг Минск",
] as const;

export const HOME_TITLE = "Olympic Detailing Минск — детейлинг, оклейка плёнкой и шумоизоляция";

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

export const NOT_FOUND_TITLE = "Страница не найдена — Olympic Detailing";

const HOME_ROBOTS = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const PRIVACY_ROBOTS = "noindex, follow";
const GEO_REGION = "BY-MI";
const OG_LOCALE = "ru_RU";

type MetaTag = {
  title?: string;
  charSet?: string;
  name?: string;
  property?: string;
  content?: string;
};

type LinkTag = {
  rel: string;
  href: string;
  type?: string;
  crossOrigin?: "anonymous" | "use-credentials";
};

const runtimeOrigin = createIsomorphicFn()
  .server(() => {
    try {
      return getRequestUrl({ xForwardedHost: true }).origin;
    } catch {
      return "";
    }
  })
  .client(() => window.location.origin);

export function resolvedOrigin(): string {
  return (SITE_ORIGIN || runtimeOrigin()).replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string | undefined {
  const origin = resolvedOrigin();
  if (!origin) return undefined;
  if (path === "/") return `${origin}/`;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function verificationMeta(): MetaTag[] {
  const tags: MetaTag[] = [];
  if (GOOGLE_SITE_VERIFICATION) {
    tags.push({ name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION });
  }
  if (YANDEX_VERIFICATION) {
    tags.push({ name: "yandex-verification", content: YANDEX_VERIFICATION });
  }
  return tags;
}

export function rootSeoMeta() {
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "theme-color", content: THEME_COLOR },
      { name: "color-scheme", content: "light" },
      { name: "apple-mobile-web-app-title", content: SEO_BRAND },
      { name: "application-name", content: SEO_BRAND },
      ...verificationMeta(),
    ] satisfies MetaTag[],
    links: [
      { rel: "icon", href: "/favicon.ico?v=olympic", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png?v=olympic", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=olympic" },
      { rel: "manifest", href: WEB_MANIFEST_PATH },
    ] satisfies LinkTag[],
  };
}

function socialHead({
  title,
  description,
  path,
  robots,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  robots: string;
  keywords?: string;
}) {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(OG_IMAGE_PATH);

  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    ...(keywords ? [{ name: "keywords", content: keywords }] : []),
    { name: "robots", content: robots },
    { name: "author", content: SEO_BRAND },
    { name: "geo.region", content: GEO_REGION },
    { name: "geo.placename", content: CONTACT.addressLocality },
    {
      name: "geo.position",
      content: `${CONTACT.geo.latitude};${CONTACT.geo.longitude}`,
    },
    {
      name: "ICBM",
      content: `${CONTACT.geo.latitude}, ${CONTACT.geo.longitude}`,
    },
    { property: "og:locale", content: OG_LOCALE },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SEO_BRAND },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    ...(canonical ? [{ property: "og:url", content: canonical }] : []),
    ...(ogImage
      ? [
          { property: "og:image", content: ogImage },
          { property: "og:image:secure_url", content: ogImage },
          { property: "og:image:type", content: OG_IMAGE_TYPE },
          { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
          { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
          { property: "og:image:alt", content: OG_IMAGE_ALT },
        ]
      : []),
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    ...(ogImage
      ? [
          { name: "twitter:image", content: ogImage },
          { name: "twitter:image:alt", content: OG_IMAGE_ALT },
        ]
      : []),
  ];

  const links: LinkTag[] = canonical ? [{ rel: "canonical", href: canonical }] : [];

  return { meta, links };
}

export function homeHeadMeta() {
  return socialHead({
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    path: "/",
    robots: HOME_ROBOTS,
    keywords: HOME_KEYWORDS,
  });
}

export function privacyHeadMeta() {
  return socialHead({
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
    path: "/privacy",
    robots: PRIVACY_ROBOTS,
  });
}
