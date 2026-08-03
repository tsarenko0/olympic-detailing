const MARQUEE_ITEMS = [
  "Полировка кузова",
  "Керамика",
  "Антигравийная плёнка",
  "Жидкая броня",
  "Шумоизоляция",
  "AMG Detailing",
  "Краснодар",
] as const;

export function MotionMarquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-border/70 bg-background py-4" aria-hidden>
      <div className="motion-marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span className="text-primary">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
