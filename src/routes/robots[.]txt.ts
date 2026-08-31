import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/seo";

/** Query params that create duplicate URLs (ads / analytics). Yandex Clean-param. */
const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "yclid",
  "ysclid",
  "gclid",
  "fbclid",
  "mc_cid",
  "mc_eid",
  "_openstat",
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

/**
 * Minimal, crawler-friendly robots.txt:
 * - one Allow-all rule (bot-specific Allow duplicates add nothing)
 * - Host for Yandex preferred mirror
 * - Clean-param for tracking duplicates (Yandex)
 * - Sitemap absolute URL
 * Do not Disallow /privacy — meta noindex must remain crawlable.
 */
function buildRobotsTxt(origin: string) {
  const base = origin.replace(/\/$/, "");
  const host = originHost(base);
  const lines = [
    "User-agent: *",
    "Allow: /",
    "",
    ...(host ? [`Host: ${host}`, ""] : []),
    `Clean-param: ${TRACKING_PARAMS}`,
    "",
    `Sitemap: ${base}/sitemap.xml`,
    "",
  ];

  return lines.join("\n");
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
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
