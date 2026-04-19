import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "article" | "header" | "footer" | "main" | "nav";
  className?: string;
  children: React.ReactNode;
  id?: string;
};

/**
 * Central content container — max 1200px, 8pt-grid padding,
 * respects reading rhythm on mobile-first.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
