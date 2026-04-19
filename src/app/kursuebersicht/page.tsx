import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { KursuebersichtContent } from "./KursuebersichtContent";

export const metadata: Metadata = buildMetadata({
  title: "Kursübersicht — Alle Weiterbildungsangebote",
  description:
    "AZAV-zertifizierte Kurse & KOMPASS-geförderte Weiterbildung: Inkasso-Sachkunde, Businessplan-Werkstatt, Online-Marketing, Persönlichkeit & Führung.",
  path: "/kursuebersicht",
});

export default function KursuebersichtPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Kursübersicht", href: "/kursuebersicht" }]} />
      <KursuebersichtContent />
    </>
  );
}
