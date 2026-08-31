import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/seo";

const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "yclid",
  "ysclid",
  "gclid",
].join("&");

function originHost(origin: string): string | undefined {
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:") return undefined;
    if (url.hostname === "localhost" || url.hostname.endsWith(".local")) return undefined;
    return url.host;
  } catch {
    return undefined;
  }
}

function buildRobotsTxt(origin: string) {
  const base = origin.replace(/\/$/, "");
  const host = originHost(base);

  return `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Yandex
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /
${host ? `\nHost: ${host}` : ""}
Clean-param: ${TRACKING_PARAMS}

Sitemap: ${base}/sitemap.xml
`;
}

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = SITE_ORIGIN || new URL(request.url).origin;
        return new Response(buildRobotsTxt(origin), {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
