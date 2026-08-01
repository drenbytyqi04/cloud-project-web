"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VisualTile } from "@/components/shared/visual-tile";
import { iconMap } from "@/lib/icon-map";
import { serviceImages } from "@/lib/images";
import type { Service } from "@/lib/data";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon];

  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="group relative flex scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-border bg-white/[0.015] transition-colors duration-500 hover:border-accent/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full"
        >
          <VisualTile icon={Icon} seed={index} src={serviceImages[service.slug]} alt={service.title} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-display text-xl font-medium text-foreground">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
        <Link
          href={`/services#${service.slug}`}
          className="group/link mt-3 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}
