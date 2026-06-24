import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { services } from "@/lib/content";
import { featureIcon } from "@/components/ui/icons";

export function Services() {
  return (
    <Section id="services" bg="navy-800">
      <SectionHeading
        eyebrow="Services"
        title="Ways we put AI to work"
        intro="From always-on chat and voice agents to bespoke AI built around your workflow — designed for how modern brands actually operate."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = featureIcon[service.icon];
          return (
            <Reveal key={service.title} delay={i * 0.08} className="h-full">
              <article className="h-full rounded-2xl border border-line bg-navy-700/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft/40 hover:bg-navy-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {service.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.chips.map((chip) => (
                    <li key={chip}>
                      <Chip>{chip}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
