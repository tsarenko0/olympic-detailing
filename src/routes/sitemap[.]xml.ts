import { createFileRoute } from "@tanstack/react-router";
import { OG_IMAGE_ALT, OG_IMAGE_PATH, SITE_ORIGIN } from "@/lib/seo";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildSitemapXml(origin: string) {
  const base = origin.replace(/\/$/, "");
  const lastmod = new Date().toISOString().slice(0, 10);
  const imageLoc = `${base}${OG_IMAGE_PATH}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${base}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${imageLoc}</image:loc>
      <image:title>${escapeXml(OG_IMAGE_ALT)}</image:title>
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
          },
        });
      },
    },
  },
});
