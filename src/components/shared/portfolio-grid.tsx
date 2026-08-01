"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { VisualTile } from "@/components/shared/visual-tile";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/data";

const categorySeed: Record<PortfolioCategory, number> = {
  Totems: 0,
  LED: 1,
  Interior: 2,
  Exterior: 3,
  "Vehicle Branding": 0,
  Print: 1,
};

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");

  const items = useMemo(() => {
    const filtered =
      active === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {(["All", ...portfolioCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
              active === cat
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border-strong text-muted-foreground hover:border-accent/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <PortfolioTile key={item.id} item={item} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function PortfolioTile({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: (index % 6) * 0.04 }}
      className={cn("group relative overflow-hidden rounded-3xl border border-border", item.tall ? "sm:row-span-2" : "")}
    >
      <Dialog>
        <DialogTrigger asChild>
          <button className={cn("relative block w-full cursor-pointer", item.tall ? "aspect-[4/6]" : "aspect-[4/3]")}>
            <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="h-full w-full">
              <VisualTile seed={categorySeed[item.category]} />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-1 p-6 text-left">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white backdrop-blur">
                {item.category}
              </span>
              <h3 className="font-display text-lg font-medium text-white">{item.title}</h3>
              <span className="text-sm text-white/60">{item.client} · {item.year}</span>
            </div>
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <Expand className="h-4 w-4" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <VisualTile seed={categorySeed[item.category]} />
          </div>
          <div className="flex flex-col gap-1 p-6">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">{item.category} · {item.year}</span>
            <h3 className="font-display text-2xl font-medium text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">Client: {item.client}</p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
