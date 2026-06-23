import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://axion-global.vercel.app";

const title = "AXION GLOBAL — AI Chatbots & 3D Product Experiences";
const description =
  "AXION GLOBAL builds WhatsApp AI chatbots and 3D product visualizations that help brands sell more and support customers 24/7.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "AXION GLOBAL",
  keywords: [
    "AI chatbot",
    "WhatsApp AI",
    "WhatsApp chatbot",
    "AI automation agency",
    "3D product visualization",
    "photogrammetry",
    "customer support AI",
    "Pakistan",
  ],
  authors: [{ name: "AXION GLOBAL" }],
  creator: "AXION GLOBAL",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "AXION GLOBAL",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1730",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-navy-900 text-text antialiased">
        {children}
      </body>
    </html>
  );
}
