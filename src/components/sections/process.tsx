"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Process() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How We Work"
          title="Four steps from brief to installed."
          description="A transparent process that keeps you informed from the first sketch to the final walkthrough."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              className="group relative flex flex-col gap-5 rounded-3xl border border-border bg-white/[0.015] p-8 transition-colors hover:border-accent/40"
            >
              <span className="font-display text-5xl font-semibold text-white/10 transition-colors group-hover:text-accent/30">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-medium text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
