import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { BRAND } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { DreiEinstiege } from "@/components/sections/DreiEinstiege";
import { WarumAnders } from "@/components/sections/WarumAnders";
import { ConciergeDeep } from "@/components/sections/ConciergeDeep";
import { Angebotswelten } from "@/components/sections/Angebotswelten";
import { Dozenten } from "@/components/sections/Dozenten";
import { DreiSchritte } from "@/components/sections/DreiSchritte";
import { TrustZone } from "@/components/sections/TrustZone";
import { PartnerAwards } from "@/components/sections/PartnerAwards";
import { Testimonials } from "@/components/sections/Testimonials";
import { KontaktSection } from "@/components/sections/KontaktSection";
import { AbschlussCta } from "@/components/sections/AbschlussCta";

export const metadata: Metadata = buildMetadata({
  title: BRAND.fullName,
  description: BRAND.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <DreiEinstiege />
      <WarumAnders />
      <ConciergeDeep />
      <Angebotswelten />
      <Dozenten />
      <DreiSchritte />
      <TrustZone />
      <PartnerAwards />
      <Testimonials />
      <KontaktSection />
      <AbschlussCta />
    </>
  );
}
