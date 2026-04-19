/**
 * Reusable JSON-LD structured data component.
 * Emits a <script type="application/ld+json"> tag with the given data.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
