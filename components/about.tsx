import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon, MailIcon } from "@/components/ui/icons";
import { team, type TeamMember } from "@/lib/content";
import { wa } from "@/lib/site-config";

function ContactIconLink({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-soft/60 hover:bg-white/5 hover:text-text"
    >
      {children}
    </a>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-navy-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-accent-soft/40">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-900">
        <Image
          src={member.photo}
          alt={member.photoAlt}
          fill
          sizes="(max-width: 640px) 100vw, 320px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-accent-soft">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
        <div className="mt-5 flex items-center gap-2">
          <ContactIconLink
            href={wa(member.whatsapp)}
            label={`WhatsApp ${member.name}`}
            external
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
          </ContactIconLink>
          <ContactIconLink
            href={`mailto:${member.email}`}
            label={`Email ${member.name}`}
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </ContactIconLink>
        </div>
      </div>
    </article>
  );
}

export function About() {
  return (
    <Section id="about" bg="navy-800">
      <SectionHeading
        eyebrow="About"
        title="AI agents — designed, built, and run for you"
        intro="AXION GLOBAL is an AI automation studio helping businesses put intelligent agents to work — starting in Pakistan, building for the world. We design, build, and run the AI systems behind your customer conversations and product experiences."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={i * 0.1} className="h-full">
            <TeamCard member={member} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
