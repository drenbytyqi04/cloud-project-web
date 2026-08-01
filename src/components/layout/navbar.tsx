"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-[80]">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10",
          scrolled ? "mt-3 rounded-full glass-strong py-2.5 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] lg:mx-6 xl:mx-auto" : "py-6"
        )}
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          PRO CRAFT <span className="text-accent">REKLAMA</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-accent" : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/quote">
              Get a Quote
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground lg:hidden cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-4 mt-3 flex flex-col gap-1 rounded-3xl glass-strong p-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium transition-colors",
                  pathname === link.href
                    ? "bg-white/[0.06] text-accent"
                    : "text-foreground/85 hover:bg-white/[0.04]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link href="/quote">
                Get a Quote
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
