import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ChipProps = {
  children: ReactNode;
  className?: string;
  /** Show the leading accent dot (default true). */
  dot?: boolean;
};

export function Chip({ children, className, dot = true }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
    >
      {dot ? (
        <span
          className="h-1 w-1 shrink-0 rounded-full bg-accent"
          aria-hidden="true"
        />
      ) : null}
      {children}
    </span>
  );
}
