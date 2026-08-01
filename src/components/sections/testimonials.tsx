"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by business owners across the region."
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] px-2">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl p-10 text-center sm:p-14"
                  >
                    <Quote className="h-8 w-8 text-accent" />
                    <p className="text-balance font-display text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 -translate-x-4 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-background/80 p-3 text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:flex lg:-translate-x-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 cursor-pointer items-center justify-center rounded-full border border-border-strong bg-background/80 p-3 text-foreground transition-colors hover:border-accent/50 hover:text-accent sm:flex lg:translate-x-14"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 cursor-pointer rounded-full transition-all duration-300",
                  selected === i ? "w-8 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
