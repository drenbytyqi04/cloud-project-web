"use client";

import { useRef, useState, useCallback, type PointerEvent } from "react";
import { Move } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className={cn(
        "relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border border-border touch-none",
        className
      )}
    >
      <div className="absolute inset-0">{before}</div>
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {after}
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-foreground">
        {afterLabel}
      </span>

      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
          <Move className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
