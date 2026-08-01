import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const VARIANTS = [
  "from-[#0a1330]/80 via-[#050505] to-[#0d1830]",
  "from-[#0d1830]/80 via-[#050505] to-[#0a1330]",
  "from-[#141414] via-[#050505] to-[#0c1428]",
  "from-[#0d1224] via-[#050505] to-[#141414]",
];

export function VisualTile({
  icon: Icon,
  seed = 0,
  label,
  className,
  grid = true,
  src,
  alt,
  priority,
}: {
  icon?: LucideIcon;
  seed?: number;
  label?: string;
  className?: string;
  grid?: boolean;
  src?: string;
  alt?: string;
  priority?: boolean;
}) {
  const variant = VARIANTS[seed % VARIANTS.length];

  if (src) {
    return (
      <div className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-[#050505]", className)}>
        <Image
          src={src}
          alt={alt ?? label ?? "Pro Craft Reklama signage work"}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
        {label ? (
          <span className="absolute bottom-4 left-4 font-display text-xs uppercase tracking-[0.2em] text-white/60">
            {label}
          </span>
        ) : null}
        <div className="noise-overlay" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        variant,
        className
      )}
    >
      {grid ? (
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      ) : null}
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: seed % 2 === 0 ? "#3b82f6" : "#93c5fd" }}
      />
      <div
        className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full opacity-25 blur-3xl"
        style={{ background: seed % 2 === 0 ? "#93c5fd" : "#3b82f6" }}
      />
      {Icon ? (
        <Icon
          strokeWidth={1}
          className="relative h-16 w-16 text-white/70 sm:h-20 sm:w-20"
        />
      ) : null}
      {label ? (
        <span className="absolute bottom-4 left-4 font-display text-xs uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
      ) : null}
      <div className="noise-overlay" />
    </div>
  );
}
