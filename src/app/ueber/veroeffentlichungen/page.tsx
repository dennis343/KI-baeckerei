import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  Clock,
  ExternalLink,
  GraduationCap,
  Newspaper,
  Tag,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { FACHVEROEFFENTLICHUNGEN, PRESSEARTIKEL } from "@/lib/publications";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { PresseBar } from "@/components/ui/PresseBar";

export const metadata: Metadata = buildMetadata({
  title: "Veröffentlichungen — Blog, Fachartikel & Presse",
  description:
    "Wissen, Forschung und Stimmen aus der Praxis: Blogartikel, wissenschaftliche Fachveröffentlichungen und Presseartikel rund um WissensReich Academy, geförderte Weiterbildung und Concierge-Service.",
  path: "/ueber/veroeffentlichungen",
});

const sektionen = [
  {
    id: "blog",
    icon: BookOpenText,
    kicker: "Blog",
    title: "Wissen & Impulse",
    intro:
      "Praxiswissen zu Förderung, Weiterbildung und Bildungsprozessen — klar erklärt, ohne Marketingfloskeln.",
  },
  {
    id: "fachveroeffentlichungen",
    icon: GraduationCap,
    kicker: "Fachveröffentlichungen",
    title: "Wissenschaftliche Beiträge",
    intro:
      "Konferenzbeiträge und Fachpublikationen — unsere Arbeit dokumentiert, peer-reviewt und international sichtbar.",
  },
  {
    id: "presse",
    icon: Newspaper,
    kicker: "Presse",
    title: "Presseartikel & Medien",
    intro:
      "WissensReich in den Medien: Interviews, Fachbeiträge und Berichterstattung über unsere Arbeit.",
  },
];

export default function VeroeffentlichungenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Über WissensReich", href: "/ueber" },
          { name: "Veröffentlichungen", href: "/ueber/veroeffentlichungen" },
        ]}
      />

      <Section aria-labelledby="vp-title">
        <SectionHeader
          as="h1"
          eyebrow="Veröffentlichungen"
          titleId="vp-title"
          title="Was wir teilen, bevor wir es verkaufen"
          intro="Hier finden Sie unsere Texte, Forschungsbeiträge und Pressestimmen — gegliedert in drei Bereiche. Wir veröffentlichen, weil Wissen sichtbar werden muss, bevor es Wirkung entfaltet."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {sektionen.map((s) => {
            const Icon = s.icon;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-brand-200 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                      {s.kicker}
                    </span>
                    <span className="mt-1 block font-sans text-[15px] font-semibold text-ink-900">
                      {s.title}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Blog */}
      <Section id="blog" tone="cream" aria-labelledby="blog-title">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
          >
            <BookOpenText className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Blog
            </p>
            <h2
              id="blog-title"
              className="mt-1 font-display text-display-md text-ink-900"
            >
              Wissen &amp; Impulse
            </h2>
          </div>
        </div>
        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-500">
          Praxiswissen zu Förderung, Weiterbildung und Bildungsprozessen — klar
          erklärt, ohne Marketingfloskeln.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug}>
              <Card variant="elevated" className="flex h-full flex-col">
                <div className="flex items-center gap-3 text-sm text-ink-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="mt-3 font-sans text-lg font-semibold text-ink-900 leading-snug">
                  <Link
                    href={`/ueber/veroeffentlichungen/blog/${post.slug}`}
                    className="rounded hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-500">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                    >
                      <Tag className="h-3 w-3" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/ueber/veroeffentlichungen/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                  aria-label={`${post.title} weiterlesen`}
                >
                  Weiterlesen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Card>
            </article>
          ))}
        </div>
      </Section>

      {/* Fachveröffentlichungen */}
      <Section
        id="fachveroeffentlichungen"
        aria-labelledby="fachver-title"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
          >
            <GraduationCap className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Fachveröffentlichungen
            </p>
            <h2
              id="fachver-title"
              className="mt-1 font-display text-display-md text-ink-900"
            >
              Wissenschaftliche Beiträge
            </h2>
          </div>
        </div>
        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-500">
          Wir denken Bildung nicht nur operativ, sondern auch wissenschaftlich.
          Unsere Beiträge entstehen aus der konkreten Arbeit mit Teilnehmenden,
          Unternehmen und Behörden — und werden auf internationalen Konferenzen
          und in Fachpublikationen sichtbar.
        </p>

        <div className="mt-10 space-y-8">
          {FACHVEROEFFENTLICHUNGEN.map((p) => (
            <Card key={p.slug} variant="elevated" className="flex flex-col">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                <span>{p.conferenceShort ?? p.publisher}</span>
                <span aria-hidden="true" className="text-ink-300">
                  ·
                </span>
                <span>{p.year}</span>
                {p.isbn && (
                  <>
                    <span aria-hidden="true" className="text-ink-300">
                      ·
                    </span>
                    <span className="text-ink-500 normal-case tracking-normal">
                      ISBN {p.isbn}
                    </span>
                  </>
                )}
              </div>

              <h3 className="mt-3 font-sans text-lg font-semibold leading-snug text-ink-900">
                {p.title}
              </h3>

              <p className="mt-2 text-[14px] text-ink-500">
                {p.authors.join(", ")}
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                <span className="font-semibold text-ink-900">Abstract:</span>{" "}
                {p.abstract}
              </p>

              <div className="mt-5 rounded-xl border border-line bg-cream-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-700">
                  Über die Konferenz
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-700">
                  <span className="font-semibold text-ink-900">
                    {p.conference}
                  </span>{" "}
                  — {p.context}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                  >
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 self-start rounded text-sm font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45"
                aria-label={`${p.title} bei ${p.publisher} öffnen (externer Link)`}
              >
                Volltext &amp; Originalquelle öffnen
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Presse */}
      <Section id="presse" tone="cream" aria-labelledby="presse-title">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-700"
          >
            <Newspaper className="h-6 w-6" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Presse
            </p>
            <h2
              id="presse-title"
              className="mt-1 font-display text-display-md text-ink-900"
            >
              Presseartikel &amp; Medien
            </h2>
          </div>
        </div>
        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-500">
          WissensReich in den Medien: Interviews, Fachbeiträge und
          Berichterstattung über unsere Arbeit. Diese Übersicht wächst
          kontinuierlich.
        </p>

        <div className="mt-10 rounded-2xl border border-line bg-white p-8">
          <PresseBar title="Bekannt aus & berichtet durch" />
        </div>

        {PRESSEARTIKEL.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-line bg-white p-8">
            <p className="text-[15px] leading-relaxed text-ink-500">
              Ausgewählte Einzelbeiträge befinden sich in redaktioneller
              Vorbereitung — sobald Belege und Permalinks vorliegen, werden sie
              hier verlinkt. Sie sind Journalist:in oder Redakteur:in?{" "}
              <Link
                href="/#kontakt"
                className="font-medium text-brand-700 underline-offset-4 hover:text-brand-800 hover:underline"
              >
                Sprechen Sie uns gerne an.
              </Link>
            </p>
          </div>
        ) : (
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {PRESSEARTIKEL.map((p) => (
              <li key={p.slug}>
                <Card variant="elevated" className="flex h-full flex-col">
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
                    <span>{p.outlet}</span>
                    <span aria-hidden="true" className="text-ink-300">
                      ·
                    </span>
                    <span>{p.type}</span>
                    <span aria-hidden="true" className="text-ink-300">
                      ·
                    </span>
                    <time
                      dateTime={p.publishedAt}
                      className="text-ink-500 normal-case tracking-normal"
                    >
                      {new Date(p.publishedAt).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-3 font-sans text-base font-semibold leading-snug text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-500">
                    {p.excerpt}
                  </p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand-700 hover:text-brand-800 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-brand-500/45 rounded"
                  >
                    Zum Beitrag
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
