"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Animation direction: "up" (default), "left", "right", "none" (fade only) */
  direction?: "up" | "left" | "right" | "none";
  /** Viewport amount visible before triggering (0-1) */
  threshold?: number;
};

const directionOffsets = {
  up: { y: 24, x: 0 },
  left: { y: 0, x: -24 },
  right: { y: 0, x: 24 },
  none: { y: 0, x: 0 },
} as const;

/**
 * ScrollReveal — subtle fade+slide animation triggered on scroll.
 *
 * Respects `prefers-reduced-motion`: renders static content without animation.
 * Autism-friendly: gentle, predictable motion with no bounce or overshoot.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const offset = directionOffsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
 * StaggerContainer + StaggerItem
 *
 * Support `as` prop for semantic HTML (ul/ol/li).
 * Uses motion[tag] for correct element rendering.
 * ---------------------------------------------------------------- */

type ListTag = "div" | "ul" | "ol";

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  threshold = 0.1,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
  as?: ListTag;
}) {
  const prefersReduced = useReducedMotion();
  const Tag = as;

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
}

type ItemTag = "div" | "li";

export function StaggerItem({
  children,
  className,
  direction = "up",
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  as?: ItemTag;
}) {
  const prefersReduced = useReducedMotion();
  const offset = directionOffsets[direction];
  const Tag = as;

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: offset.y, x: offset.x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
