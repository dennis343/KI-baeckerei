import type { Metadata } from "next";
import { BRAND } from "./constants";
import { SITE_URL } from "./utils";

/**
 * Reusable metadata generator.
 * Produces OpenGraph, Twitter, Robots, Canonical, and Geo-Tags in one shot.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const fullTitle =
    title === BRAND.fullName ? title : `${title} · ${BRAND.fullName}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: { "de-DE": url, "x-default": url },
    },
    keywords: [
      "Digitale Umsetzungsmaschine",
      "KI Bäckerei",
      "Digitalisierung",
      "BAFA Anamnese",
      "Unternehmensanamnese",
      "Customer Journey",
      "Landingpage Aufbau",
      "Sales Funnel",
      "Prozessdigitalisierung",
      "KI Beratung",
      "KI Programm",
      "Automatisierung",
    ],
    authors: [{ name: BRAND.fullName }],
    creator: BRAND.fullName,
    publisher: BRAND.legal.company,
    category: "business",
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: BRAND.fullName,
      title: fullTitle,
      description,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${BRAND.fullName} — ${BRAND.tagline}`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "DE",
      "geo.placename": "Deutschland",
      "content-language": "de",
    },
  };
}

/**
 * Organization JSON-LD — Hauptentität, auf die andere Schemas via @id referenzieren.
 */
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;
const SERVICE_ID = `${SITE_URL}/#service`;

export const SCHEMA_IDS = {
  organization: ORG_ID,
  website: WEBSITE_ID,
  webpage: WEBPAGE_ID,
  service: SERVICE_ID,
} as const;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: BRAND.fullName,
    alternateName: BRAND.name,
    legalName: BRAND.legal.legalName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.svg`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/opengraph-image`,
    description: BRAND.description,
    slogan: BRAND.tagline,
    email: BRAND.legal.email,
    telephone: [BRAND.legal.phone, BRAND.legal.phoneCh],
    /** Schweizer Unternehmens-Identifikationsnummer (UID). */
    taxID: BRAND.legal.uid,
    foundingDate: BRAND.legal.foundedSince,
    foundingLocation: {
      "@type": "Place",
      name: `${BRAND.legal.locality}, ${BRAND.legal.country}`,
    },
    founders: BRAND.legal.managingDirectors.map((name) => ({
      "@type": "Person",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.legal.address,
      postalCode: BRAND.legal.postalCode,
      addressLocality: BRAND.legal.locality,
      addressCountry: BRAND.legal.countryCode,
      addressRegion: "Schwyz",
    },
    areaServed: [
      { "@type": "Country", name: "Schweiz" },
      { "@type": "Country", name: "Deutschland" },
      { "@type": "Country", name: "Österreich" },
    ],
    knowsLanguage: ["de", "en"],
    knowsAbout: [
      "Digitale Umsetzungsmaschine",
      "KI-gestützte Geschäftsprozesse",
      "Digitale Transformation",
      "BAFA-Förderung",
      "Customer Journey Design",
      "Landingpages und Conversion-Optimierung",
      "Sales-Funnel-Aufbau",
      "Prototyping",
      "Prozessdigitalisierung",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: BRAND.legal.email,
        telephone: BRAND.legal.phone,
        contactType: "customer service",
        availableLanguage: ["German", "English"],
        areaServed: ["DE", "AT"],
      },
      {
        "@type": "ContactPoint",
        email: BRAND.legal.email,
        telephone: BRAND.legal.phoneCh,
        contactType: "customer service",
        availableLanguage: ["German", "English"],
        areaServed: ["CH", "LI"],
      },
    ],
    sameAs: [],
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BRAND.fullName,
    alternateName: BRAND.name,
    url: SITE_URL,
    inLanguage: "de-DE",
    description: BRAND.description,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}
