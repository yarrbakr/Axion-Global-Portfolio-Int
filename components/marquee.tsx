"use client";

import { marqueeItems } from "@/lib/content";

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {marqueeItems.map((item) => (
        <li
          key={item}
          className="flex items-center gap-4 px-6 text-sm font-medium uppercase tracking-wider text-muted/70"
        >
          <span>{item}</span>
          <span className="h-1 w-1 rounded-full bg-accent/60" />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div className="marquee-track flex w-max">
        <Row />
        <Row />
      </div>
      <span className="sr-only">
        Technologies we build with: {marqueeItems.join(", ")}.
      </span>
    </div>
  );
}
