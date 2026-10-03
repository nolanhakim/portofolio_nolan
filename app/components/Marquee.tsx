export default function Marquee({ text = "let's build something together" }: { text?: string }) {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className="marquee-wrap overflow-hidden border-y border-[var(--border-subtle)] py-3 select-none">
      <div className="marquee-track flex w-max gap-8" style={{ animationDuration: "45s" }}>
        {[...items, ...items].map((_, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-mono tracking-[0.2em] uppercase text-[var(--text-muted)] whitespace-nowrap">
            {text} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
