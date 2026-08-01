"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RevealText({
  text,
  className,
  el: El = "span",
  delay = 0,
}: {
  text: string;
  className?: string;
  el?: "span" | "h1" | "h2" | "h3" | "p";
  delay?: number;
}) {
  const words = text.split(" ");

  return (
    <El className={cn("inline-block", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-bottom">
            <motion.span
              initial={{ y: "110%", rotate: 4 }}
              whileInView={{ y: "0%", rotate: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.04,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </El>
  );
}
