/**
 * All editable page copy lives here so the site reads from one place.
 * Contact / social links live in ./site-config.ts.
 */
import { siteConfig } from "@/lib/site-config";

export type IconKey =
  | "chat"
  | "cube"
  | "discover"
  | "build"
  | "demo"
  | "launch"
  | "support";

export type Service = {
  icon: IconKey;
  title: string;
  body: string;
  chips: string[];
};

export const services: Service[] = [
  {
    icon: "chat",
    title: "WhatsApp AI Chatbots",
    body: "A 24/7 AI agent on your WhatsApp that answers questions, recommends products, handles returns, and captures leads — trained entirely on your business. Speaks Urdu and English, and hands off to your team when needed.",
    chips: [
      "24/7 instant replies",
      "Product recommendations",
      "Order & return handling",
      "Understands photos & voice notes",
      "Human handoff",
      "CRM dashboard",
    ],
  },
  {
    icon: "cube",
    title: "3D Product Photogrammetry",
    body: "We turn your products into interactive 3D models customers can spin, zoom, and explore — built from simple photos. Perfect for fashion, retail, and restaurants showcasing their dishes.",
    chips: [
      "Photoreal 3D models",
      "Web & AR ready",
      "Higher conversions",
      "Great for menus & catalogs",
    ],
  },
];

export type WorkStatus = "Demo" | "In progress";

export type CaseStudy = {
  client: string;
  kicker: string;
  status: WorkStatus;
  problem: string;
  built: string;
  result: string;
  tags: string[];
};

export const work: CaseStudy[] = [
  {
    client: "Glow Beauty Co.",
    kicker: "Skincare shopping assistant",
    status: "Demo",
    problem: "Shoppers ask the same skincare questions and drift away before buying.",
    built:
      "A WhatsApp AI agent that recommends products by skin concern, answers delivery & return questions, and escalates real issues to the team.",
    result: "Demonstrates 24/7 guided product discovery with instant, on-brand answers.",
    tags: ["WhatsApp", "Product AI"],
  },
  {
    client: "Real-Estate",
    kicker: "Property concierge",
    status: "Demo",
    problem: "Buyers message at all hours and agents can't reply fast enough to stay top-of-mind.",
    built:
      "An agent that surfaces matching listings, answers buyer questions, and alerts agents the moment a hot lead appears.",
    result: "Demonstrates round-the-clock lead capture and qualified hand-offs to agents.",
    tags: ["WhatsApp", "Lead capture"],
  },
  {
    client: "Casual Collection",
    kicker: "Menswear support agent",
    status: "In progress",
    problem: "A Faisalabad fashion brand needs WhatsApp support that scales with its orders.",
    built:
      "WhatsApp support plus product recommendations, trained on the brand's catalog and tone.",
    result: "Currently in build — heading into a live pilot with real customers.",
    tags: ["Retail", "Customer support"],
  },
];

export type ProcessStep = {
  icon: IconKey;
  title: string;
  body: string;
};

export const process: ProcessStep[] = [
  { icon: "discover", title: "Discover", body: "We learn your products, FAQs, and tone of voice." },
  { icon: "build", title: "Build", body: "We train the AI agent on your business." },
  { icon: "demo", title: "Demo", body: "You test it live on WhatsApp before you pay to go live." },
  { icon: "launch", title: "Launch", body: "We set up your number and take it live." },
  { icon: "support", title: "Support", body: "We monitor, improve, and add features over time." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo: string;
  photoAlt: string;
  whatsapp: string;
  email: string;
};

export const team: TeamMember[] = [
  {
    name: "Aliyan Raza",
    role: "Co-founder & CEO",
    bio: "Leads strategy and client partnerships.",
    photo: "/team/aliyan.jpeg",
    photoAlt: "Aliyan Raza, Co-founder & CEO of AXION GLOBAL",
    whatsapp: siteConfig.whatsappMain,
    email: "maliyan.ceo@gmail.com",
  },
  {
    name: "Abu bakar Ramzan",
    role: "Co-founder & COO",
    bio: "Leads engineering and delivery — builds and deploys the AI systems behind every product.",
    photo: "/team/abubakar.png",
    photoAlt: "Abu bakar Ramzan, Co-founder & COO of AXION GLOBAL",
    whatsapp: siteConfig.whatsappCoo,
    email: "abubakarramzan.coo@gmail.com",
  },
];

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

/** Asset-free capability marquee (no third-party logo files). */
export const marqueeItems = [
  "WhatsApp Business API",
  "OpenAI",
  "Voice AI",
  "Three.js",
  "WebGL / AR",
  "Photogrammetry",
  "CRM Dashboards",
  "Urdu & English",
];
