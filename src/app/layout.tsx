import type { Metadata, Viewport } from "next";
import { BRAND } from "@/lib/constants";
import {
  buildMetadata,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/metadata";
import { FEATURES } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { ConsentProvider } from "@/components/providers/ConsentProvider";
import { ConsentScripts } from "@/components/providers/ConsentScripts";
import "./globals.css";

export const metadata: Metadata = buildMetadata({
  title: BRAND.fullName,
  description: BRAND.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: "#07070C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = FEATURES.gtm ? process.env.NEXT_PUBLIC_GTM_ID : undefined;
  const metaPixelId = FEATURES.metaPixel
    ? process.env.NEXT_PUBLIC_META_PIXEL_ID
    : undefined;

  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
        />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="min-h-screen bg-[#07070C] text-white antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:inline-flex focus:h-11 focus:items-center focus:justify-center focus:rounded-xl focus:bg-brand-600 focus:px-5 focus:text-[14px] focus:font-medium focus:text-white focus:outline-none focus:ring-[3px] focus:ring-brand-500/45"
        >
          Zum Hauptinhalt springen
        </a>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <ConsentProvider>
          <ConsentScripts gtmId={gtmId} metaPixelId={metaPixelId} />
          <Header />
          <main id="main" className="relative">
            {children}
          </main>
          <Footer />
        </ConsentProvider>
      </body>
    </html>
  );
}
