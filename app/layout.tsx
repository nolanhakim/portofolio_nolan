import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { contact } from "@/app/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${contact.name} — ${contact.role}`,
  description:
    "Portfolio resmi Catraliya Nolan Hakim — Web Developer (Front-End & Back-End), IT Support & Network Specialist. Lulusan D3 TI Universitas Brawijaya bersertifikasi BNSP.",
  keywords: [
    "Catraliya Nolan Hakim",
    "Catraliya",
    "Nolan Hakim",
    "Web Developer Surakarta",
    "Frontend Developer",
    "Backend Developer",
    "Laravel",
    "Next.js",
    "WordPress Web Master",
    "IT Support",
    "MikroTik",
    "Universitas Brawijaya",
    "BNSP Junior Web Developer",
  ],
  authors: [{ name: contact.name, url: contact.website }],
  creator: contact.name,
  openGraph: {
    title: `${contact.name} — Web Developer & IT Support`,
    description:
      "Portfolio profesional Catraliya Nolan Hakim — Web Development (Next.js, Laravel, WordPress) & IT Support Infrastructure.",
    type: "website",
    url: contact.website,
    siteName: contact.name,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${contact.name} — Web Developer & IT Support`,
    description:
      "Portfolio profesional Catraliya Nolan Hakim — Web Development (Next.js, Laravel, WordPress) & IT Support Infrastructure.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased selection:bg-[var(--text-primary)] selection:text-[var(--bg-canvas)]">
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}