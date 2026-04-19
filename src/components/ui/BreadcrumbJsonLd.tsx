import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/utils";

type Crumb = { name: string; href: string };

/**
 * BreadcrumbList JSON-LD schema component.
 * Pass an array of { name, href } crumbs — "Startseite" is prepended automatically.
 */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const crumbs: Crumb[] = [{ name: "Startseite", href: "/" }, ...items];

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
        })),
      }}
    />
  );
}
