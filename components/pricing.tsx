import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { CheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { plans, pricingNote } from "@/lib/content";
import { siteConfig, wa, MAIN_CTA_TEXT } from "@/lib/site-config";
import { cn } from "@/lib/cn";

export function Pricing() {
  const waMain = wa(siteConfig.whatsappMain, MAIN_CTA_TEXT);

  return (
    <Section id="pricing" bg="navy-900">
      <SectionHeading
        eyebrow="Pricing"
        title="Straightforward, scalable pricing"
        intro="Start small and grow into richer capabilities. Numbers below are starting points — final scope is quoted per project."
      />

      <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.08} className="h-full">
            <article
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-7",
                plan.highlighted
                  ? "border-accent bg-navy-700 shadow-xl shadow-accent/10 lg:scale-[1.025]"
                  : "border-line bg-navy-700/50",
              )}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-accent/30">
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="text-sm font-semibold text-muted">{plan.name}</h3>

              <div className="mt-4">
                <div className="text-2xl font-bold tracking-tight text-text">
                  {plan.priceMain}
                </div>
                <div className="mt-0.5 text-sm text-muted">{plan.priceSub}</div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-muted">
                {plan.blurb}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Button
                  href={waMain}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full"
                  leading={<WhatsAppIcon />}
                >
                  Get started
                </Button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
        {pricingNote}
      </p>
      <p className="mt-1.5 text-center text-xs text-muted/70">
        All prices shown in PKR.
      </p>
    </Section>
  );
}
