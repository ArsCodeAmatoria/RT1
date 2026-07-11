import { serializeJsonLd } from "@/lib/seo";

type JsonLdProps = {
  /** One or more schema.org objects. */
  data: unknown | unknown[];
};

/**
 * Server Component that injects JSON-LD script tags.
 * Filters out null/undefined entries.
 */
export function JsonLd({ data }: JsonLdProps) {
  const payloads = (Array.isArray(data) ? data : [data]).filter(Boolean);

  return (
    <>
      {payloads.map((payload, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(payload) }}
          key={index}
          type="application/ld+json"
        />
      ))}
    </>
  );
}
