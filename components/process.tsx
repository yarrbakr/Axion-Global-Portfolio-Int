import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/content";
import { featureIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Process() {
  const lastIndex = process.length - 1;

  return (
    <Section id="process" bg="navy-800">
      <SectionHeading
        eyebrow="How we work"
        title="From idea to live agent in five steps"
        intro="A simple, low-risk path — you only go live once you're happy with the demo."
      />

      <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-5">
        {/* Desktop connector line behind the markers */}
        <div
          className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-line md:block"
          aria-hidden="true"
        />

        {process.map((step, i) => {
          const Icon = featureIcon[step.icon];
          return (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="relative flex gap-5 pb-8 last:pb-0 md:flex-col md:gap-0 md:pb-0">
                {/* Mobile vertical connector */}
                {i < lastIndex ? (
                  <span
                    className="absolute left-[23px] top-12 bottom-0 w-px bg-line md:hidden"
                    aria-hidden="true"
                  />
                ) : null}

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-navy-700 text-accent">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="md:mt-5">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-sm font-semibold text-accent-soft">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
