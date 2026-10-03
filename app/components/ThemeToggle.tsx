"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SunIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className} aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const scope = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const sun = scope.current?.querySelector(".js-sun");
      const moon = scope.current?.querySelector(".js-moon");
      if (!sun || !moon) return;
      if (theme === "dark") {
        gsap.set(sun, { opacity: 0, scale: 0.4, rotation: 60 });
        gsap.set(moon, { opacity: 1, scale: 1, rotation: 0 });
      } else {
        gsap.set(sun, { opacity: 1, scale: 1, rotation: 0 });
        gsap.set(moon, { opacity: 0, scale: 0.4, rotation: -60 });
      }
    },
    { scope },
  );

  const toggle = useCallback(() => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    const sun = scope.current?.querySelector(".js-sun");
    const moon = scope.current?.querySelector(".js-moon");
    const el = document.documentElement;

    if (!sun || !moon || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.toggle("dark", next === "dark");
      try { localStorage.setItem("theme", next); } catch {}
      return;
    }

    const tl = gsap.timeline();
    if (next === "dark") {
      tl.to(sun, { opacity: 0, scale: 0.4, rotation: -60, duration: 0.35, ease: "power2.in" }, 0)
        .to(
          el,
          {
            duration: 0.7,
            ease: "power1.inOut",
            onStart() { el.classList.add("dark"); },
          },
          0.15
        )
        .fromTo(moon, { opacity: 0, scale: 0.4, rotation: 60 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: "back.out(1.2)" }, 0.25);
    } else {
      tl.to(moon, { opacity: 0, scale: 0.4, rotation: 60, duration: 0.35, ease: "power2.in" }, 0)
        .to(
          el,
          {
            duration: 0.7,
            ease: "power1.inOut",
            onStart() { el.classList.remove("dark"); },
          },
          0.15
        )
        .fromTo(sun, { opacity: 0, scale: 0.4, rotation: -60 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: "back.out(1.2)" }, 0.25);
    }
    tl.eventCallback("onComplete", () => {
      try { localStorage.setItem("theme", next); } catch {}
    });
  }, [theme]);

  return (
    <button
      ref={scope}
      onClick={toggle}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="js-sun absolute">
        <SunIcon />
      </span>
      <span className="js-moon absolute">
        <MoonIcon />
      </span>
    </button>
  );
}