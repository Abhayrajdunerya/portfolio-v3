import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { MotionSurface } from "@/components/motion-surface";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Abhay Raj Dunerya — Software Engineer",
    template: "%s | Abhay Raj Dunerya",
  },
  description:
    "Software engineer in Indore building and modernizing web applications with React, Next.js, TypeScript, and a full-stack perspective.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Abhay Raj Dunerya",
    title: "Abhay Raj Dunerya — Software Engineer",
    description:
      "Frontend architecture. Full-stack perspective. Selected engineering work and experience.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <NuqsAdapter>
          <SiteHeader />
          <MotionSurface>{children}</MotionSurface>
          <SiteFooter />
        </NuqsAdapter>
      </body>
    </html>
  );
}
