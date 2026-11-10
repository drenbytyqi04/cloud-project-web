"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
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
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-foreground/80 transition-colors hover:border-accent/40 hover:text-foreground cursor-pointer",
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
