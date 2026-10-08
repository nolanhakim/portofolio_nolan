"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, categories } from "@/app/lib/data";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-20 md:py-28"
    >
      <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Featured Works
          </span>
          <h2 className="text-3xl font-semibold tracking-[-0.025em] mt-1">
            Proyek Unggulan
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono tracking-wider uppercase">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 transition-all ${active === c
                ? "bg-[var(--accent-contrast)] text-[var(--bg-canvas)] border-[var(--accent-contrast)] font-medium"
                : "border-[var(--border-subtle)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--border-strong)] text-[var(--text-secondary)]"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="grid-item group border border-[var(--border-subtle)] rounded-xl overflow-hidden hover:border-[var(--border-strong)] transition-all flex flex-col justify-between bg-[var(--bg-canvas)] shadow-xs"
          >
            <div>
              <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-surface)]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover grayscale transition-[transform_0.5s_ease,filter_0.3s_ease] group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-3.5 md:p-5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-wrap items-center justify-between gap-2 transition-colors group-hover:border-[var(--border-strong)]">
                <span className="font-mono text-[10px] md:text-[11px] font-semibold tracking-widest uppercase px-2 md:px-2.5 py-1 rounded bg-[var(--bg-canvas)] border border-[var(--border-subtle)]">
                  {p.category}
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] md:text-xs font-mono">
                  {p.source && p.source !== "https://github.com" && (
                    <a
                      href={p.source}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-primary)] font-medium hover:underline"
                      aria-label={`Source code ${p.name}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2.9 1.6 2.5 1.1 3.2.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-4.7 0-1.1.4-2 1-2.7-.1-.2-.4-1.4.1-2.9 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.5.2 2.7.1 2.9.6.7 1 1.6 1 2.7 0 3.7-2.4 4.5-4.6 4.7.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                      </svg>
                      <span>Code</span>
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--text-primary)] font-medium hover:underline"
                    >
                      <span>Live Demo</span>
                      <span
                        aria-hidden
                        className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col gap-2 md:gap-3">
                <h3 className="text-base md:text-xl font-bold tracking-[-0.015em] text-[var(--text-primary)]">
                  {p.name}
                </h3>
                <p className="text-[13px] md:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>

            <div className="p-4 md:p-6 pt-0">
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-subtle)]">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] md:text-[11px] tracking-wide px-2 md:px-2.5 py-1 border border-[var(--border-subtle)] bg-[var(--bg-surface)] rounded-md text-[var(--text-secondary)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
