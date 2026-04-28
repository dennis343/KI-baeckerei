"use client";

import { Children, type ReactNode } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

type SlidesPerView = number | "auto" | (() => number | "auto");

type FreeSnapSliderProps = {
  children: ReactNode;
  slidesPerView?: SlidesPerView;
  spacing?: number;
  loop?: boolean;
  rubberband?: boolean;
  initial?: number;
  origin?: "auto" | "center" | number;
  breakpoints?: Record<
    string,
    { slidesPerView?: SlidesPerView; spacing?: number; origin?: "auto" | "center" | number }
  >;
  className?: string;
  slideClassName?: string;
  ariaLabel?: string;
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
}: FreeSnapSliderProps) {
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

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
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
  });

  return (
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
  );
}
