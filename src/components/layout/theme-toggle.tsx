"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className, inverted }: { className?: string; inverted?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors cursor-pointer",
        inverted
          ? "border-white/20 bg-white/[0.06] text-white/80 hover:border-accent/40 hover:text-white"
          : "border-border-strong bg-surface text-foreground/80 hover:border-accent/40 hover:text-foreground",
        className
      )}
    >
      {mounted && (
        <>
          <Sun className={cn("h-4 w-4", isDark ? "hidden" : "block")} />
          <Moon className={cn("h-4 w-4", isDark ? "block" : "hidden")} />
        </>
      )}
    </button>
  );
}
