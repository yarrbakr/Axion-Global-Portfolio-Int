import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, MailIcon } from "@/components/ui/icons";
import { siteConfig, wa, mailto, MAIN_CTA_TEXT } from "@/lib/site-config";

export function Contact() {
  const waMain = wa(siteConfig.whatsappMain, MAIN_CTA_TEXT);

  return (
    <Section id="contact" bg="navy-900">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-navy-700/40 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_50%_0%,rgba(92,143,240,0.16),transparent_70%)]"
            aria-hidden="true"
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Let&rsquo;s put an AI agent to work for your business.
          </h2>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={waMain}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              leading={<WhatsAppIcon />}
            >
              Chat on WhatsApp
            </Button>
            <Button
              href={mailto("Project inquiry")}
              variant="outline"
              size="lg"
              leading={<MailIcon />}
            >
              Email us
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Or email us at{" "}
            <a
              href={mailto()}
              className="text-accent-soft underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
