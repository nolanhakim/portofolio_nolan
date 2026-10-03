"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ThemeToggle from "./ThemeToggle";
import { contact } from "@/app/lib/data";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#credentials", label: "Education & Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useGSAP(
    () => {
      const menu = scope.current?.querySelector<HTMLElement>(".js-mobile-menu");
      const links = gsap.utils.toArray<HTMLElement>(".js-mobile-link");
      if (!menu) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (open) {
        menu.classList.remove("h-0", "invisible");
        if (reduced) {
          gsap.set(menu, { clearProps: "all" });
          gsap.set(links, { opacity: 1, x: 0 });
          return;
        }
        menu.style.overflow = "hidden";
        gsap.fromTo(
          menu,
          { height: 0, autoAlpha: 0, y: -8 },
          {
            height: "auto",
            autoAlpha: 1,
            y: 0,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto",
            onComplete() { menu.style.overflow = "visible"; },
          },
        );
        gsap.fromTo(
          links,
          { opacity: 0, x: -16 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.06,
            ease: "power2.out",
            delay: 0.12,
            overwrite: "auto",
          },
        );
      } else {
        if (reduced) {
          gsap.set(menu, { clearProps: "all" });
          gsap.set(links, { opacity: 0, x: 0 });
          menu.classList.add("h-0", "invisible");
          return;
        }
        gsap.to(links, {
          opacity: 0,
          x: -12,
          duration: 0.2,
          stagger: -0.04,
          ease: "power2.in",
        });
        gsap.to(menu, {
          height: 0,
          overflow: "hidden",
          autoAlpha: 0,
          y: -8,
          duration: 0.35,
          ease: "power3.in",
          delay: 0.12,
          overwrite: "auto",
          onComplete() { menu.classList.add("h-0", "invisible"); },
        });
      }
    },
    { scope, dependencies: [open] },
  );

  const toggle = () => setOpen((v) => !v);

  return (
    <header
      ref={scope}
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg-canvas)]/80 bg-[var(--bg-canvas)] border-b border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 md:px-8 flex h-14 items-center justify-between gap-4">
        <a
          href="#"
          className="font-mono text-sm tracking-widest font-semibold shrink-0 whitespace-nowrap hover:opacity-80 transition-opacity max-md:text-xs"
        >
          {contact.initials} — 2026
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline-offset-4 hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggle}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-colors"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        className="js-mobile-menu md:hidden absolute inset-x-0 top-full z-40 overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--bg-canvas)] h-0 invisible"
      >
          <ul className="px-6 py-4 flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={toggle}
                  className="js-mobile-link flex items-center justify-between border-b border-[var(--border-subtle)] py-4 text-sm font-mono tracking-wider uppercase text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
      </nav>
    </header>
  );
}