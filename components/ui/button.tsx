import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-soft hover:shadow-accent/40",
  outline:
    "border border-line bg-white/[0.02] text-text hover:border-accent-soft/70 hover:bg-white/[0.05]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  leading?: ReactNode;
};

/** A link styled as a button. All CTAs on the site are anchors. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  leading,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex select-none items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98]",
        sizes[size],
        variants[variant],
        className,
      )}
      {...props}
    >
      {leading ? (
        <span className="shrink-0 [&>svg]:h-[1.15em] [&>svg]:w-[1.15em]">
          {leading}
        </span>
      ) : null}
      {children}
    </a>
  );
}
