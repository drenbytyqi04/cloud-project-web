"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-glow/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A decade of craftsmanship, built into every install."
          description="Seven reasons businesses across the region trust us with their most visible brand asset."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-20 max-w-2xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />

          <div className="flex flex-col gap-10">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.06 }}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-background text-accent">
                  <Check className="h-4 w-4" />
                </div>

                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-medium text-foreground sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
