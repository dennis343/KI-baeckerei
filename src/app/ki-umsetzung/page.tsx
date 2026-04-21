import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/utils";
import { KiUmsetzungContent } from "./Content";

export const metadata: Metadata = buildMetadata({
  title: "KI-Umsetzung für den Mittelstand – Ihre Ideen, heute live",
  description:
    "Adé Agentur, willkommen alle Möglichkeiten. Marketing, Vertrieb, Produkt und Prozesse – in Tagen, nicht Monaten.",
  path: "/ki-umsetzung",
});

export default function KiUmsetzungPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Für wen?", href: "/fuer-wen" },
          { name: "Unternehmen", href: "/unternehmen" },
          { name: "KI-Umsetzung", href: "/ki-umsetzung" },
        ]}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "KI-Umsetzung",
          description:
            "Schnelle, strukturierte KI-gestützte Umsetzung für Marketing, Vertrieb, Produkt und Prozesse.",
          provider: {
            "@type": "EducationalOrganization",
            name: "WissensReich Academy",
            url: SITE_URL,
          },
          areaServed: { "@type": "Country", name: "Deutschland" },
          serviceType: "Unternehmensberatung & Umsetzungsbegleitung",
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Passt das auch zu unserer Größe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Relevant ist, dass Sie schneller und eigenständiger werden wollen. Größe ist nebensächlich.",
              },
            },
            {
              "@type": "Question",
              name: "Ist das ein Kurs?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Nur echte Arbeit an Ihren Projekten. Lernen passiert dabei ganz von selbst.",
              },
            },
            {
              "@type": "Question",
              name: "Macht ihr die Arbeit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Nein. Wir machen Sie schneller und besser. Die Arbeit machen Sie selbst.",
              },
            },
            {
              "@type": "Question",
              name: "Unterschied zu Tool-Schulung?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Schulungen zeigen Tools. Wir zeigen, wie Sie damit Zielseiten in zwei Tagen live bringen.",
              },
            },
            {
              "@type": "Question",
              name: "Ist die Beratung förderfähig?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja – sofern Sie in Deutschland sind. Im kostenlosen Gespräch klären wir das sofort.",
              },
            },
          ],
        }}
      />

      <KiUmsetzungContent />
    </>
  );
}
