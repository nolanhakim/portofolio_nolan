"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const variants = {
  rise: { y: 24, opacity: 0, scale: 1, x: 0, blur: "blur(0px)" },
  slideLeft: { y: 0, opacity: 0, scale: 1, x: -64, blur: "blur(0px)" },
  slideRight: { y: 0, opacity: 0, scale: 1, x: 64, blur: "blur(0px)" },
  zoom: { y: 0, opacity: 0, scale: 0.86, x: 0, blur: "blur(10px)" },
  drop: { y: -48, opacity: 0, scale: 1, x: 0, blur: "blur(0px)" },
  skew: { y: 30, opacity: 0, scale: 1.05, x: -30, blur: "blur(0px)" },
} as const;

const ease = "power3.out";

export default function Reveal({
  children,
  className,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const from = variants[variant];
    const to = { y: 0, x: 0, scale: 1, opacity: 1, blur: "blur(0px)" };

    gsap.fromTo(
      ref.current,
      { ...from, filter: from.blur },
      {
        ...to,
        filter: to.blur,
        duration: 0.9,
        ease,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, { scope: ref });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}