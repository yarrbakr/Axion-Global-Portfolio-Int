/**
 * Single source of truth for contact + social links.
 * Update these values to change them site-wide — no component edits needed.
 */
export const siteConfig = {
  name: "AXION GLOBAL",
  tagline: "AI automation studio — AI chatbots, voice assistants, and custom AI solutions.",

  whatsappMain: "https://wa.me/923441868140", // CEO Aliyan — main CTA line
  whatsappCoo: "https://wa.me/923290384389", // COO Abu bakar

  email: "axionglobalcorp@gmail.com",

  socials: {
    // Paste a URL to make the icon appear automatically. Empty = hidden.
    linkedin: "",
    instagram: "",
  },
} as const;

/** Build a wa.me link with an optional prefilled, URL-encoded message. */
export const wa = (base: string, text?: string): string =>
  text ? `${base}?text=${encodeURIComponent(text)}` : base;

/** Build a mailto: link to the agency inbox with an optional subject. */
export const mailto = (subject?: string): string =>
  subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;

/** Prefilled message used by the primary "Chat on WhatsApp" buttons. */
export const MAIN_CTA_TEXT =
  "Hi AXION GLOBAL, I'd like to know more about your services";

export type SocialKey = keyof typeof siteConfig.socials;
