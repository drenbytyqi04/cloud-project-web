"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, PlayCircle } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/shared/reveal-text";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Magnetic } from "@/components/shared/magnetic-button";
import { stats } from "@/lib/data";
import { heroImage } from "@/lib/images";

export function Hero() {
  const t = useTranslations("Hero");
  const tStats = useTranslations("Stats");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col overflow-hidden bg-[#050505]">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Signage installation crew mounting an illuminated LED sign at night"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[8%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[6%] top-[38%] h-[360px] w-[360px] rounded-full bg-blue-glow/30 blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[8%] bottom-[10%] h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent"
        >
          {t("badge")}
        </motion.div>

        <h1 className="font-display max-w-5xl text-balance text-5xl font-medium leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-8xl">
          <RevealText text={t("titleLine1")} delay={0.3} />
          <br />
          <RevealText text={t("titleLine2")} delay={0.55} className="text-gradient-accent" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic strength={0.25}>
            <Button asChild size="lg">
              <Link href="/quote">
                {t("ctaQuote")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/15 text-white hover:border-accent/60 hover:bg-white/10"
            >
              <Link href="/projects">
                <PlayCircle className="h-4 w-4" />
                {t("ctaProjects")}
              </Link>
            </Button>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8"
        >
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.key} className="flex flex-col gap-1">
              <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-white/60 sm:text-sm">{tStats(stat.key)}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
