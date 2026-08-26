/** Invisible to users — only for search engines. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD must be raw JSON text for crawlers
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
