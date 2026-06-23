"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/marquee";
import { WhatsAppIcon, MailIcon } from "@/components/ui/icons";
import { siteConfig, wa, mailto, MAIN_CTA_TEXT } from "@/lib/site-config";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const waMain = wa(siteConfig.whatsappMain, MAIN_CTA_TEXT);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const item: Variants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeOut" },
        },
      };

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Animated aurora glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="aurora-a absolute -top-48 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
        <div className="aurora-b absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-accent-soft/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-5%,rgba(92,143,240,0.12),transparent_70%)]" />
      </div>

      {/* Faint monogram watermark */}
      <div
        className="pointer-events-none absolute -right-10 top-24 -z-10 hidden opacity-[0.06] mix-blend-screen lg:block"
        aria-hidden="true"
      >
        <Image
          src="/logo-mark.png"
          alt=""
          width={560}
          height={560}
          className="h-[34rem] w-[34rem]"
          priority
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              AI automation studio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.75rem]"
          >
            AI agents that talk to your customers —{" "}
            <span className="text-accent">so you don&rsquo;t have to.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            AXION GLOBAL builds WhatsApp AI chatbots and 3D product experiences
            that help brands sell more and support better, around the clock.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
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
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-14 sm:px-8">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted/60">
          Built with
        </p>
        <Marquee />
      </div>
    </section>
  );
}
