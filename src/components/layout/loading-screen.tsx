"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("pcr-loaded")) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("pcr-loaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            PRO CRAFT <span className="text-accent">REKLAMA</span>
          </motion.div>
          <div className="relative h-[2px] w-52 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-y-0 w-1/2 bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
