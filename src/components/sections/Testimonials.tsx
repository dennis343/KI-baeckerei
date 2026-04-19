import * as React from "react";
import { Quote, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { TESTIMONIALS, TESTIMONIAL_VIDEOS, GOOGLE_REVIEWS } from "@/lib/constants";

export function Testimonials() {
  const hasVideos = TESTIMONIAL_VIDEOS.length > 0;
  const hasReviews = GOOGLE_REVIEWS.length > 0;

  return (
    <Section aria-labelledby="stimmen-title">
      <ScrollReveal>
        <SectionHeader
          eyebrow={TESTIMONIALS.eyebrow}
          titleId="stimmen-title"
          title={TESTIMONIALS.title}
          intro={TESTIMONIALS.note}
        />
      </ScrollReveal>

      {hasVideos && (
        <StaggerContainer
          as="ul"
          className="mt-12 grid gap-6 md:grid-cols-2"
          stagger={0.1}
        >
          {TESTIMONIAL_VIDEOS.map((v) => (
            <StaggerItem
              key={v.youtubeId}
              as="li"
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-soft"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="p-5">
                <p className="text-[15px] font-semibold text-ink-900">{v.name}</p>
                <p className="mt-0.5 text-[13px] text-ink-500">{v.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}

      <StaggerContainer as="ul" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {TESTIMONIALS.items.map((t, i) => (
          <StaggerItem key={i} as="li" className="flex flex-col rounded-2xl border border-line bg-cream-100 p-7">
            <Quote className="h-6 w-6 text-brand-600" aria-hidden="true" />
            <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-900">
              &bdquo;{t.quote}&ldquo;
            </blockquote>
            <div className="mt-auto pt-6">
              <p className="text-[14px] font-semibold text-ink-900">{t.name}</p>
              <p className="mt-0.5 text-[13px] text-ink-500">{t.role}</p>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.1em] text-brand-700">
                {t.branche}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {hasReviews && (
        <div className="mt-16">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
              Google-Bewertungen
            </p>
            <h3 className="mt-2 font-display text-display-sm text-ink-900">
              Was unsere Teilnehmer:innen öffentlich sagen
            </h3>
          </ScrollReveal>
          <StaggerContainer
            as="ul"
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            stagger={0.1}
          >
            {GOOGLE_REVIEWS.map((r, i) => (
              <StaggerItem
                key={i}
                as="li"
                className="flex flex-col rounded-2xl border border-line bg-white p-6"
              >
                <div
                  className="flex items-center gap-1 text-brand-600"
                  aria-label={`${r.rating} von 5 Sternen`}
                >
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4"
                      fill={idx < r.rating ? "currentColor" : "none"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-ink-700">
                  {r.text}
                </p>
                <div className="mt-auto pt-5">
                  <p className="text-[13px] font-semibold text-ink-900">
                    {r.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-ink-500">{r.date}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </Section>
  );
}
