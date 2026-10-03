"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { contact } from "@/app/lib/data";

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        ".js-hero-line",
        { yPercent: 110 },
        { yPercent: 0, duration: 1.4, ease: "power3.out", stagger: 0.18, delay: 0.3 }
      );
      gsap.fromTo(
        ".js-hero-fade",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power2.out", stagger: 0.15, delay: 1.0 }
      );
      gsap.fromTo(
        ".js-hero-key",
        { scaleY: 0 },
        { scaleY: 1, duration: 1.1, ease: "power3.out", delay: 0.9, transformOrigin: "top" }
      );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="mx-auto max-w-[1120px] px-6 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 border-b border-[var(--border-subtle)]"
    >
      <div className="mono js-hero-fade mb-8 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-[var(--text-muted)] max-w-full">
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full bg-[var(--text-primary)]"
            aria-hidden
          />
          <span>Available for Opportunities</span>
        </span>
        <span className="text-[var(--border-subtle)]">•</span>
        <span>{contact.location}</span>
      </div>

      <h1 className="font-bold leading-[1.03] tracking-[-0.035em] text-[clamp(2.25rem,6.5vw,4.25rem)] uppercase">
        <span className="block overflow-hidden">
          <span className="js-hero-line block">CATRALIYA NOLAN</span>
        </span>
        <span className="block overflow-hidden">
          <span className="js-hero-line block">
            HAKIM<span className="text-[var(--text-muted)]"> — DEV &amp; IT</span>
          </span>
        </span>
      </h1>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          <p className="js-hero-fade text-lg leading-relaxed text-[var(--text-primary)] font-medium">
            Web Developer &amp; IT Support Specialist — Lulusan D3 Teknologi Informasi Universitas Brawijaya (IPK 3,89/4,00) &amp; Pemegang Sertifikasi BNSP Junior Web Developer.
          </p>
          <p className="js-hero-fade text-base leading-relaxed text-[var(--text-secondary)]">
            Berpengalaman membangun antarmuka responsif dan terintegrasi menggunakan <strong>Next.js</strong>, <strong>Laravel</strong>, <strong>JavaScript</strong>, <strong>TailwindCSS</strong>, serta mengelola infrastruktur CMS <strong>WordPress</strong> dan troubleshooting jaringan <strong>MikroTik</strong> &amp; hardware.
          </p>
        </div>

        <div className="js-hero-key border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 self-start rounded-lg shadow-sm">
          <dl className="font-mono text-xs leading-6 space-y-2">
            <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2">
              <dt className="text-[var(--text-muted)]">NAME</dt>
              <dd className="font-semibold text-right">{contact.name}</dd>
            </div>
            <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2">
              <dt className="text-[var(--text-muted)]">EDUCATION</dt>
              <dd className="text-right">D3 TI — UB (3.89/4.00)</dd>
            </div>
            <div className="flex justify-between border-b border-[var(--border-subtle)] pb-2">
              <dt className="text-[var(--text-muted)]">CERTIFIED</dt>
              <dd className="text-right">BNSP Web Developer</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-[var(--text-muted)]">LOCATION</dt>
              <dd className="text-right">Surakarta, ID</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="js-hero-fade rounded-full bg-[var(--accent-contrast)] px-6 py-3 text-sm font-medium text-[var(--bg-canvas)] hover:opacity-85 transition-opacity"
        >
          Lihat Proyek
        </a>
        <a
          href="/cv.pdf"
          download
          className="js-hero-fade rounded-full border border-[var(--border-subtle)] px-6 py-3 text-sm font-medium hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors inline-flex items-center gap-1.5"
        >
          Unduh CV
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="js-hero-fade rounded-full border border-[var(--border-subtle)] px-6 py-3 text-sm font-medium hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors inline-flex items-center gap-1.5"
        >
          Email
        </a>
        <span className="js-hero-fade flex items-center gap-2 border-l border-[var(--border-subtle)] pl-3 ml-1">
          <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2.9 1.6 2.5 1.1 3.2.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-4.7 0-1.1.4-2 1-2.7-.1-.2-.4-1.4.1-2.9 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.5.2 2.7.1 2.9.6.7 1 1.6 1 2.7 0 3.7-2.4 4.5-4.6 4.7.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" /></svg>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] hover:bg-[var(--bg-surface)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" /></svg>
          </a>
        </span>
      </div>
    </section>
  );
}
