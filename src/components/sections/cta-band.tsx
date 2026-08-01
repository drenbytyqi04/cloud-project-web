"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border-strong bg-gradient-to-br from-white/[0.05] to-transparent px-8 py-16 text-center sm:px-16 sm:py-24"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[140px]" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-[260px] w-[260px] rounded-full bg-blue-glow/25 blur-[120px]" />

          <div className="relative flex flex-col items-center gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Ready When You Are
            </span>
            <h2 className="font-display max-w-2xl text-balance text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Let&apos;s build the sign your business deserves.
            </h2>
            <p className="max-w-lg text-balance text-muted-foreground">
              Get a scoped quote within one business day — no obligation, no generic templates.
            </p>
            <Magnetic strength={0.25}>
              <Button asChild size="lg">
                <Link href="/quote">
                  Request a Quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
