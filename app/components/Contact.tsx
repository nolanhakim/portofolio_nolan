"use client";

import { useState, useCallback, useEffect } from "react";
import { contact } from "@/app/lib/data";

function yearTzLabel() {
  if (typeof Intl === "undefined") return new Date().getFullYear().toString();
  const now = new Date();
  const hhmm = now.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Jakarta",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${now.getFullYear()} — Surakarta, WIB ${hhmm}`;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [footerLabel, setFooterLabel] = useState<string | null>(null);

  useEffect(() => {
    setFooterLabel(yearTzLabel());
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      const text = contact.email;
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(text);
      else {
        const el = document.createElement("input");
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        el.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { }
  }, []);

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="flex flex-col gap-2">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-muted)]">
          {contact.tagline}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] leading-tight max-w-[20ch]">
          Tertarik Berkolaborasi atau Merekrut?
        </h2>
        <p className="mt-2 text-base text-[var(--text-secondary)] max-w-[600px]">
          Terbuka untuk posisi Web Developer (Front-End &amp; Back-End), IT Support, maupun proyek freelance web &amp; teknologi.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          onClick={copyEmail}
          className="rounded-full border border-[var(--border-subtle)] px-5 py-3 hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors inline-flex items-center gap-2"
          aria-live="polite"
          aria-label={copied ? "Email disalin" : "Salin email"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="M22 7l-10 6L2 7"/>
          </svg>
          <span className="text-sm font-medium">{copied ? "Tersalin ✓" : "Email"}</span>
        </button>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border-subtle)] px-5 py-3 hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors inline-flex items-center gap-2"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2.9 1.6 2.5 1.1 3.2.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-4.7 0-1.1.4-2 1-2.7-.1-.2-.4-1.4.1-2.9 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.5.2 2.7.1 2.9.6.7 1 1.6 1 2.7 0 3.7-2.4 4.5-4.6 4.7.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/>
          </svg>
          <span className="text-sm font-medium">GitHub</span>
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--border-subtle)] px-5 py-3 hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors inline-flex items-center gap-2"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
          </svg>
          <span className="text-sm font-medium">LinkedIn</span>
        </a>
      </div>

      <div className="mt-12 p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] grid gap-4 sm:grid-cols-2">
        <div>
          <span className="font-mono text-xs text-[var(--text-muted)] block uppercase">Lokasi</span>
          <span className="text-sm font-semibold text-[var(--text-primary)]">{contact.location}</span>
        </div>
      </div>

      <footer className="mt-16 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-6 text-sm font-mono text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
        <span>© {footerLabel ?? new Date().getFullYear()}</span>
      </footer>

      {copied && (
        <div role="status" className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
          <div className="toast-in rounded-full bg-[var(--accent-contrast)] text-[var(--bg-canvas)] px-5 py-2.5 text-sm font-medium shadow-lg">
            Alamat email disalin ke clipboard
          </div>
        </div>
      )}
    </section>
  );
}
