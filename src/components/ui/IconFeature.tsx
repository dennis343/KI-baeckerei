import * as React from "react";
import { cn } from "@/lib/utils";

type IconFeatureProps = {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  className?: string;
};

export function IconFeature({ icon, title, body, className }: IconFeatureProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div
        aria-hidden="true"
        className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600"
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-base font-semibold text-ink-900">{title}</h3>
        <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{body}</p>
      </div>
    </div>
  );
}
