"use client";

import { education, certifications, organizations } from "@/app/lib/data";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          Academics, Certifications &amp; Leadership
        </span>
        <h2 className="text-3xl font-semibold tracking-[-0.025em] mt-1">
          Pendidikan &amp; Sertifikasi
        </h2>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Pendidikan */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              01 / Pendidikan
            </span>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors"
              >
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <h3 className="font-bold text-base text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm font-medium text-[var(--text-secondary)]">
                  {edu.institution}
                </p>
                <div className="mt-2 inline-block font-mono text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                  {edu.grade}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-2.5">
                  <strong className="text-[var(--text-primary)]">Fokus:</strong> {edu.courses}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikasi */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
              02 / Sertifikasi
            </span>
          </div>
          <div className="space-y-3">
            {certifications.map((c, idx) => (
              <div
                key={idx}
                className="p-4 border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-canvas)] hover:bg-[var(--bg-surface)] transition-colors flex items-start justify-between gap-4"
              >
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-semibold text-sm text-[var(--text-primary)]">
                    {c.name}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {c.issuer}
                  </p>
                </div>
                <div className="flex flex-col items-end shrink-0 gap-1">
                  <span className="font-mono text-[11px] text-[var(--text-muted)]">
                    {c.year}
                  </span>
                  {c.badge && (
                    <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded bg-[var(--accent-contrast)] text-[var(--bg-canvas)]">
                      {c.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Organisasi & Kepanitiaan */}
      <div className="mt-16 pt-12 border-t border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] pb-3 mb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">
            03 / Pengalaman Organisasi &amp; Kepanitiaan
          </span>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {organizations.map((org, idx) => (
            <div
              key={idx}
              className="p-5 border border-[var(--border-subtle)] rounded-xl bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase block mb-1">
                  {org.year}
                </span>
                <h4 className="font-bold text-sm text-[var(--text-primary)]">
                  {org.role}
                </h4>
                <p className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                  {org.org}
                </p>
                <p className="text-xs leading-relaxed text-[var(--text-secondary)] border-t border-[var(--border-subtle)] pt-2.5">
                  {org.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
