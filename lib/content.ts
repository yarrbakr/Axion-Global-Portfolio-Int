/**
 * All editable page copy lives here so the site reads from one place.
 * Contact / social links live in ./site-config.ts.
 */
import { siteConfig } from "@/lib/site-config";

export type IconKey =
  | "chat"
  | "voice"
  | "spark"
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
    title: "AI Chatbots",
    body: "24/7 AI chat agents for WhatsApp, your website, or any channel your customers use — trained entirely on your business to answer questions, recommend products, and capture leads, with a clean handoff to your team when it matters.",
    chips: [
      "WhatsApp & custom channels",
      "Trained on your business",
      "Product recommendations",
      "Lead capture",
      "Human handoff",
      "Urdu & English",
    ],
  },
  {
    icon: "voice",
    title: "AI & Voice Assistants",
    body: "Assistants that talk and listen — voice agents that answer calls, qualify leads, and book appointments, plus AI assistants that handle tasks and follow-ups across the tools you already use.",
    chips: [
      "Inbound & outbound voice",
      "Natural, on-brand speech",
      "Appointment booking",
      "Call qualification",
      "Task & workflow automation",
      "Works with your tools",
    ],
  },
  {
    icon: "spark",
    title: "Custom AI Solutions",
    body: "Have a problem that doesn't fit a template? We design and build bespoke AI — from document and data processing to knowledge tools and automations wired straight into your existing systems.",
    chips: [
      "Tailored to your workflow",
      "Document & data AI",
      "Knowledge & search tools",
      "System integrations",
      "From idea to deployment",
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
  "Knowledge & RAG Tools",
  "Workflow Automation",
  "Custom Integrations",
  "CRM Dashboards",
  "Urdu & English",
];
