import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { work, type WorkStatus } from "@/lib/content";
import { cn } from "@/lib/cn";

function StatusBadge({ status }: { status: WorkStatus }) {
  const inProgress = status === "In progress";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        inProgress
          ? "bg-accent/15 text-accent-soft ring-1 ring-inset ring-accent/30"
          : "bg-white/[0.04] text-muted ring-1 ring-inset ring-line",
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          inProgress ? "bg-accent" : "bg-muted/60",
        )}
      />
      {status}
    </span>
  );
}

function Detail({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <dt className="text-[0.7rem] font-semibold uppercase tracking-wider text-muted/70">
        {label}
      </dt>
      <dd className="mt-1 leading-relaxed text-text/90">{children}</dd>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work" bg="navy-900">
      <SectionHeading
        eyebrow="Our work"
        title="Pilot builds, shown honestly"
        intro="These are demo and pilot agents — labelled as such. We swap in real client metrics as projects go live."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {work.map((item, i) => (
          <Reveal key={item.client} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-navy-700/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft/40 hover:bg-navy-700">
              <StatusBadge status={item.status} />
              <h3 className="mt-4 text-lg font-semibold">{item.client}</h3>
              <p className="text-sm text-accent-soft">{item.kicker}</p>

              <dl className="mt-5 space-y-3.5 text-sm">
                <Detail label="Problem">{item.problem}</Detail>
                <Detail label="What we built">{item.built}</Detail>
                <Detail label="Result">{item.result}</Detail>
              </dl>

              <ul className="mt-6 flex flex-wrap gap-2 pt-1">
                {item.tags.map((tag) => (
                  <li key={tag}>
                    <Chip dot={false}>{tag}</Chip>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
