"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/app/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const items = gsap.utils.toArray<HTMLElement>(".js-exp-item");
      if (!items.length) return;

      gsap.set(items, { opacity: 0, x: -32 });

      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      id="experience"
      className="mx-auto max-w-[1120px] px-6 md:px-8 py-20 md:py-28 border-t border-[var(--border-subtle)]"
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          Career Journey
        </span>
        <h2 className="text-3xl font-semibold tracking-[-0.025em] mt-1">
          Pengalaman Kerja
        </h2>
      </div>

      <div className="mt-12 flex flex-col space-y-12 pl-8">
        {timeline.map((t, idx) => (
          <div key={idx} className="js-exp-item relative group">
            <span
              className="absolute -left-[31px] top-1.5 h-6 w-6 rounded-full bg-[var(--bg-canvas)] border border-[var(--border-strong)] flex items-center justify-center font-mono text-[10px] font-semibold text-[var(--text-muted)] group-hover:border-[var(--accent-contrast)] group-hover:text-[var(--accent-contrast)] transition-colors"
              aria-hidden
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-col gap-1 pl-0">
              <span className="font-mono text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">
                {t.year}
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                {t.role}{" "}
                <span className="text-[var(--text-secondary)] font-normal text-base">
                  — {t.place}
                </span>
              </h3>
              <span className="mt-1.5 self-start font-mono text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]">
                {t.type}
              </span>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed max-w-[720px]">
                {t.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}