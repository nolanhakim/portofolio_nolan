"use client";

import { skills } from "@/app/lib/data";

const groups = [
  {
    key: "frontend",
    label: "Frontend Development",
    desc: "Modern, responsive, and performance-focused UI",
    items: skills.frontend,
  },
  {
    key: "backend",
    label: "Backend & Database",
    desc: "Robust architecture, APIs & data management",
    items: skills.backend,
  },
  {
    key: "jaringanIT",
    label: "Jaringan & IT Support",
    desc: "Network infrastructure, routing, security & hardware support",
    items: skills.jaringanIT,
  },
  {
    key: "cmsTools",
    label: "CMS, Tools & Design",
    desc: "Development environment, prototyping & creative workflows",
    items: skills.cmsTools,
  },
  {
    key: "softSkill",
    label: "Soft Skills & Leadership",
    desc: "Collaborative, agile, problem solver & adaptive mindset",
    items: skills.softSkill,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          Capabilities &amp; Stack
        </span>
        <h2 className="text-3xl font-semibold tracking-[-0.025em] mt-1">
          Keahlian Teknis &amp; Toolkit
        </h2>
      </div>

      <dl className="mt-10 flex flex-col">
        {groups.map((g, i) => (
          <div
            key={g.label}
            className={`grid gap-3 md:grid-cols-[170px_1fr] lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr] py-7 ${
              i > 0 ? "border-t border-[var(--border-subtle)]" : ""
            }`}
          >
            <div>
              <dt className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                {g.label}
              </dt>
              <dd className="text-xs text-[var(--text-muted)] mt-0.5">
                {g.desc}
              </dd>
            </div>
            <dd className="grid-item flex flex-wrap gap-2 items-center">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs tracking-wide text-[var(--text-secondary)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors rounded-full px-3.5 py-1.5"
                >
                  {s}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}