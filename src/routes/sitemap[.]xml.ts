import { createFileRoute } from "@tanstack/react-router";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_CAPTION,
  OG_IMAGE_GEO_LOCATION,
  OG_IMAGE_PATH,
  SITE_ORIGIN,
  SITEMAP_LASTMOD,
} from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

/**
 * Only indexable URLs belong here.
 * `/privacy` is intentionally omitted (meta robots: noindex, follow).
 * changefreq/priority omitted — ignored by Google and often misleading.
 */
function buildSitemapXml(origin: string) {
  const base = origin.replace(/\/$/, "");
  const imageLoc = `${base}${OG_IMAGE_PATH}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(`${base}/`)}</loc>
    <lastmod>${SITEMAP_LASTMOD}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageLoc)}</image:loc>
      <image:title>${escapeXml(OG_IMAGE_ALT)}</image:title>
      <image:caption>${escapeXml(OG_IMAGE_CAPTION)}</image:caption>
      <image:geo_location>${escapeXml(OG_IMAGE_GEO_LOCATION)}</image:geo_location>
    </image:image>
  </url>
</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = SITE_ORIGIN || new URL(request.url).origin;
        return new Response(buildSitemapXml(origin), {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
