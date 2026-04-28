"use client";

import { Children, useState, type ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SlidesPerView = number | "auto" | (() => number | "auto");

type ResponsiveOpts = {
  slidesPerView?: SlidesPerView;
  spacing?: number;
  origin?: "auto" | "center" | number;
};

type FreeSnapSliderProps = {
  children: ReactNode;
  slidesPerView?: SlidesPerView;
  spacing?: number;
  loop?: boolean;
  rubberband?: boolean;
  initial?: number;
  origin?: "auto" | "center" | number;
  breakpoints?: Record<string, ResponsiveOpts>;
  className?: string;
  slideClassName?: string;
  ariaLabel?: string;
  showArrows?: boolean;
  showDots?: boolean;
  navTone?: "light" | "dark";
};

export function FreeSnapSlider({
  children,
  slidesPerView = 1,
  spacing = 16,
  loop = false,
  rubberband = true,
  initial = 0,
  origin = "auto",
  breakpoints,
  className = "",
  slideClassName = "",
  ariaLabel,
  showArrows = false,
  showDots = false,
  navTone = "light",
}: FreeSnapSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(initial);
  const [slideCount, setSlideCount] = useState(0);
  const [perViewActive, setPerViewActive] = useState(1);

  const mappedBreakpoints = breakpoints
    ? Object.fromEntries(
        Object.entries(breakpoints).map(([query, opts]) => [
          query,
          {
            slides: {
              perView: opts.slidesPerView ?? slidesPerView,
              spacing: opts.spacing ?? spacing,
              origin: opts.origin ?? origin,
            },
          },
        ]),
      )
    : undefined;

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    loop,
    rubberband,
    initial,
    slides: {
      perView: slidesPerView,
      spacing,
      origin,
    },
    breakpoints: mappedBreakpoints,
    created(slider) {
      setSlideCount(slider.track.details.slides.length);
      const pv = slider.options.slides;
      if (pv && typeof pv === "object" && "perView" in pv) {
        const v = pv.perView;
        setPerViewActive(typeof v === "number" ? v : 1);
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    optionsChanged(slider) {
      const pv = slider.options.slides;
      if (pv && typeof pv === "object" && "perView" in pv) {
        const v = pv.perView;
        setPerViewActive(typeof v === "number" ? v : 1);
      }
    },
  });

  const dotCount = Math.max(1, Math.ceil(slideCount - perViewActive + 1));
  const isDark = navTone === "dark";
  const arrowBase = isDark
    ? "border-ink-900/15 bg-white/90 text-ink-900 hover:bg-white"
    : "border-white/15 bg-white/[0.06] text-white hover:bg-white/15";
  const dotInactive = isDark ? "bg-ink-900/20" : "bg-white/30";
  const dotActive = isDark ? "bg-brand-600" : "bg-brand-300";

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className={`keen-slider ${className}`.trim()}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
      >
        {Children.map(children, (child, idx) => (
          <div key={idx} className={`keen-slider__slide ${slideClassName}`.trim()}>
            {child}
          </div>
        ))}
      </div>

      {showArrows && instanceRef.current && (
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden md:flex items-center justify-between">
          <button
            type="button"
            onClick={() => instanceRef.current?.prev()}
            aria-label="Vorherige Slide"
            className={`pointer-events-auto -ml-3 lg:-ml-5 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition shadow-lg ${arrowBase}`}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => instanceRef.current?.next()}
            aria-label="Nächste Slide"
            className={`pointer-events-auto -mr-3 lg:-mr-5 inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm transition shadow-lg ${arrowBase}`}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}

      {showDots && dotCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Slide-Navigation">
          {Array.from({ length: dotCount }).map((_, i) => {
            const active = i === currentSlide;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Zu Slide ${i + 1}`}
                onClick={() => instanceRef.current?.moveToIdx(i)}
                className={`h-1.5 rounded-full transition-all ${
                  active ? `w-8 ${dotActive}` : `w-1.5 ${dotInactive} hover:opacity-70`
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
