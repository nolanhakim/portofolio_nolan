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

      const container = scope.current?.querySelector(".js-exp-timeline");
      const line = scope.current?.querySelector<HTMLElement>(".js-exp-line");
      const items = gsap.utils.toArray<HTMLElement>(".js-exp-item");
      if (!container || !items.length) return;

      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 65%",
              scrub: 0.4,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      const desktop = window.matchMedia("(min-width: 768px)").matches;

      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: desktop ? (i % 2 ? 56 : -56) : -32 },
          {
            opacity: 1,
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              end: "top 55%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
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
      <div className="text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
          Career Journey
        </span>
        <h2 className="text-3xl font-semibold tracking-[-0.025em] mt-1">
          Pengalaman Kerja
        </h2>
      </div>

      <div className="js-exp-timeline relative mt-14">
        <span
          className="js-exp-line absolute top-0 bottom-0 left-4 md:left-1/2 w-px bg-[var(--border-strong)] md:-translate-x-1/2"
          aria-hidden
        />

        <div className="flex flex-col gap-14 md:gap-20">
          {timeline.map((t, idx) => {
            const left = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="js-exp-item relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-x-16"
              >
                <span
                  className="absolute top-0 left-4 md:left-1/2 z-10 h-7 w-7 -translate-x-1/2 rounded-full bg-[var(--bg-canvas)] border border-[var(--border-strong)] flex items-center justify-center font-mono text-[10px] font-semibold text-[var(--text-muted)] transition-colors group-hover:border-[var(--accent-contrast)] group-hover:text-[var(--accent-contrast)]"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div
                  className={`flex flex-col gap-1 ${left
                      ? "md:col-start-1 md:items-end md:text-right md:pr-4"
                      : "md:col-start-2 md:pl-4"
                    }`}
                >
                  <span className="font-mono text-xs font-semibold tracking-widest text-[var(--text-muted)] uppercase">
                    {t.year}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {t.role}{" "}
                    <span className="text-[var(--text-secondary)] font-normal text-base">
                      — {t.place}
                    </span>
                  </h3>
                  <span className={`mt-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)] ${left ? "md:self-end" : "self-start"}`}>
                    {t.type}
                  </span>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed max-w-[520px]">
                    {t.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
