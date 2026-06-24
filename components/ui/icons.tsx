import type { FC, ReactNode, SVGProps } from "react";
import type { IconKey } from "@/lib/content";

type P = SVGProps<SVGSVGElement>;

/** Stroked line icon wrapper. */
function Line({ children, ...p }: P & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...p}
    >
      {children}
    </svg>
  );
}

/** Filled brand-glyph wrapper. */
function Glyph({ children, ...p }: P & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      {children}
    </svg>
  );
}

/* ---------- UI / navigation ---------- */
export const MenuIcon = (p: P) => (
  <Line {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Line>
);

export const CloseIcon = (p: P) => (
  <Line {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Line>
);

export const ArrowRightIcon = (p: P) => (
  <Line {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Line>
);

export const CheckIcon = (p: P) => (
  <Line {...p}>
    <path d="m5 12 4 4 10-10" />
  </Line>
);

export const MailIcon = (p: P) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Line>
);

/* ---------- Brand / social ---------- */
export const WhatsAppIcon = (p: P) => (
  <Glyph {...p}>
    <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01ZM12.05 20.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.48-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
  </Glyph>
);

export const LinkedInIcon = (p: P) => (
  <Glyph {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </Glyph>
);

export const InstagramIcon = (p: P) => (
  <Glyph {...p}>
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.64 4.13.34 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.27 2.15.57 2.92.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.77.3 1.64.5 2.92.57C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.27 2.92-.57a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.77.5-1.65.57-2.92.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.27-2.15-.57-2.92a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.87.63c-.77-.3-1.65-.5-2.92-.57C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
  </Glyph>
);

/* ---------- Service / process glyphs ---------- */
const ChatIcon = (p: P) => (
  <Line {...p}>
    <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3v-3H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    <path d="M8 9.5h8" />
    <path d="M8 12.5h5" />
  </Line>
);

const VoiceIcon = (p: P) => (
  <Line {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
    <path d="M9 21h6" />
  </Line>
);

const SparkIcon = (p: P) => (
  <Line {...p}>
    <path d="M10 3c.5 4 1.5 5 5.5 5.5-4 .5-5 1.5-5.5 5.5-.5-4-1.5-5-5.5-5.5 4-.5 5-1.5 5.5-5.5Z" />
    <path d="M18 13.5c.25 2 .75 2.5 2.75 2.75-2 .25-2.5.75-2.75 2.75-.25-2-.75-2.5-2.75-2.75 2-.25 2.5-.75 2.75-2.75Z" />
  </Line>
);

const CubeIcon = (p: P) => (
  <Line {...p}>
    <path d="M12 2.5 20 7v9l-8 4.5L4 16V7l8-4.5Z" />
    <path d="M12 11.5 20 7" />
    <path d="M12 11.5 4 7" />
    <path d="M12 11.5v9" />
  </Line>
);

const DiscoverIcon = (p: P) => (
  <Line {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Line>
);

const BuildIcon = (p: P) => (
  <Line {...p}>
    <path d="M12 3 21 8l-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 16.5 9 5 9-5" />
  </Line>
);

const DemoIcon = (p: P) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5 16 12l-6 3.5v-7Z" />
  </Line>
);

const LaunchIcon = (p: P) => (
  <Line {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </Line>
);

const SupportIcon = (p: P) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="m5 5 4.5 4.5M19 5l-4.5 4.5M19 19l-4.5-4.5M5 19l4.5-4.5" />
  </Line>
);

export const featureIcon: Record<IconKey, FC<P>> = {
  chat: ChatIcon,
  voice: VoiceIcon,
  spark: SparkIcon,
  cube: CubeIcon,
  discover: DiscoverIcon,
  build: BuildIcon,
  demo: DemoIcon,
  launch: LaunchIcon,
  support: SupportIcon,
};

export const socialIcon: Record<string, FC<P>> = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};
