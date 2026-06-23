"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/content";
import { siteConfig, wa, MAIN_CTA_TEXT } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const waMain = wa(siteConfig.whatsappMain, MAIN_CTA_TEXT);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-line bg-navy-900/80 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="AXION GLOBAL — home"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="font-heading text-base font-semibold tracking-wide">
            AXION GLOBAL
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={waMain}
            target="_blank"
            rel="noopener noreferrer"
            leading={<WhatsAppIcon />}
          >
            Chat on WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-white/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="space-y-1 border-t border-line bg-navy-900/95 px-5 pb-6 pt-3 backdrop-blur-md">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={waMain}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full"
            leading={<WhatsAppIcon />}
            onClick={() => setOpen(false)}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
