import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  fast = false,
}: {
  items: string[];
  className?: string;
  fast?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max items-center gap-16 pr-16",
          fast ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-2xl font-medium text-muted-foreground/70 transition-colors hover:text-foreground sm:text-3xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
