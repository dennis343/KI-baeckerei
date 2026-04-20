import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";
import { getAllSlugs } from "@/lib/blog-posts";
import { KURSE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/ueber/veroeffentlichungen/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const kompassKurse: MetadataRoute.Sitemap = KURSE.filter((k) =>
    k.foerderung.toLowerCase().includes("kompass"),
  ).map((k) => ({
    url: `${SITE_URL}/kursuebersicht/${k.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/ki-umsetzung`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE_URL}/fuer-wen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/solopreneure`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/unternehmen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/concierge-unternehmen`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/prophylaxe-institut`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/inqa-coaching`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/avgs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/kursuebersicht`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...kompassKurse,
    { url: `${SITE_URL}/concierge-service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/botschafter`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ueber`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/ueber/veroeffentlichungen`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/ueber/rechtsgrundlagen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...blogEntries,
  ];
}
