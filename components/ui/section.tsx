import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/reveal";

type SectionProps = {
  id?: string;
  bg?: "navy-900" | "navy-800";
  className?: string;
  children: ReactNode;
};

export function Section({ id, bg = "navy-900", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bg === "navy-800" ? "bg-navy-800" : "bg-navy-900",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(center && "flex justify-center")}>
      <div className={cn("max-w-2xl", center && "text-center", className)}>
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>
        {intro ? (
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
