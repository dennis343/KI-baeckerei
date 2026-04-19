import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SalesMap } from "@/components/vertriebskarte/SalesMap";

export const metadata: Metadata = buildMetadata({
  title: "Vertriebskarte",
  description: "Interne Vertriebskarte",
  path: "/vertriebskarte",
  noIndex: true,
});

export default function VertriebskartePage() {
  return <SalesMap />;
}
