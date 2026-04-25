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
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: BRAND.fullName,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
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
 * Organization JSON-LD for the KI Bäckerei brand. Pflichtfelder
 * verweisen auf die rechtlich verantwortliche Gesellschaft.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.fullName,
    alternateName: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description: BRAND.description,
    email: BRAND.legal.email,
    telephone: BRAND.legal.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.legal.address,
      addressLocality: BRAND.legal.city,
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: BRAND.legal.email,
      telephone: BRAND.legal.phone,
      contactType: "customer service",
      availableLanguage: "German",
      areaServed: "DE",
    },
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND.fullName,
    alternateName: BRAND.name,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: {
      "@type": "Organization",
      name: BRAND.fullName,
      url: SITE_URL,
    },
  } as const;
}
