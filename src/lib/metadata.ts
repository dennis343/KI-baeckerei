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
 * JSON-LD schema.org helpers.
 * Use with <JsonLd data={...} /> component.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
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
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "AZAV-Zertifizierung",
        name: "AZAV-zertifizierter Bildungsträger",
      },
    ],
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
      "@type": "EducationalOrganization",
      name: BRAND.fullName,
      url: SITE_URL,
    },
  } as const;
}

export function howToJsonLd(args: {
  name: string;
  description: string;
  steps: ReadonlyArray<{ name: string; text: string }>;
  totalTime?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: args.name,
    description: args.description,
    ...(args.totalTime && { totalTime: args.totalTime }),
    inLanguage: "de",
    step: args.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  } as const;
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: i.answer,
      },
    })),
  } as const;
}

export function courseJsonLd(course: {
  name: string;
  description: string;
  provider: string;
  duration: string;
  mode?: string;
  audience?: string;
  url?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: course.provider,
      sameAs: SITE_URL,
    },
    timeRequired: course.duration,
    ...(course.url && { url: course.url }),
    image: course.image ?? `${SITE_URL}/opengraph-image`,
    ...(course.mode && {
      courseMode: course.mode,
    }),
    ...(course.audience && {
      audience: {
        "@type": "Audience",
        audienceType: course.audience,
      },
    }),
    inLanguage: "de",
    isAccessibleForFree: false,
  } as const;
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Concierge-Service",
    description:
      "Der Concierge-Service strukturiert und begleitet Ihren Bildungsprozess von der ersten Anfrage bis zum Abschluss — Förderanträge, Dokumentation, Koordination.",
    provider: {
      "@type": "EducationalOrganization",
      name: BRAND.fullName,
      sameAs: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    serviceType: "Bildungsberatung und Prozessbegleitung",
  } as const;
}

export function blogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: string;
  image?: string;
}) {
  const url = `${SITE_URL}/ueber/veroeffentlichungen/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    image: post.image ?? `${SITE_URL}/opengraph-image`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: BRAND.fullName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.svg`,
      },
    },
    inLanguage: "de",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  } as const;
}
