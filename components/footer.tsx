import Image from "next/image";
import { navLinks } from "@/lib/content";
import { siteConfig, mailto, type SocialKey } from "@/lib/site-config";
import { socialIcon } from "@/components/ui/icons";

export function Footer() {
  const socials = Object.entries(siteConfig.socials).filter(
    ([, url]) => url.length > 0,
  ) as Array<[SocialKey, string]>;

  return (
    <footer className="border-t border-line bg-navy-900">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-heading text-base font-semibold tracking-wide">
                AXION GLOBAL
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>

            {socials.length > 0 ? (
              <div className="mt-5 flex items-center gap-2">
                {socials.map(([key, url]) => {
                  const Icon = socialIcon[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`AXION GLOBAL on ${key}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-soft/60 hover:bg-white/5 hover:text-text"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:flex sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <a href={mailto()} className="transition-colors hover:text-text">
            {siteConfig.email}
          </a>
          <p>&copy; 2026 AXION GLOBAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
