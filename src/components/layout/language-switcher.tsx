"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className, inverted }: { className?: string; inverted?: boolean }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={cn("relative", className)}>
      <label className="sr-only" htmlFor="language-switcher">
        {t("label")}
      </label>
      <div
        className={cn(
          "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
          inverted
            ? "border-white/20 bg-white/[0.06] text-white/80 hover:border-accent/40"
            : "border-border-strong bg-surface text-foreground/80 hover:border-accent/40"
        )}
      >
        <Globe className="h-3.5 w-3.5 shrink-0 text-accent" />
        <select
          id="language-switcher"
          value={locale}
          onChange={(e) => {
            const nextLocale = e.target.value as (typeof routing.locales)[number];
            router.replace(pathname, { locale: nextLocale });
          }}
          className={cn(
            "cursor-pointer appearance-none bg-transparent pr-1 text-xs font-medium outline-none",
            inverted ? "text-white/80" : "text-foreground/80"
          )}
        >
          {routing.locales.map((l) => (
            <option key={l} value={l} className="bg-background text-foreground">
              {t(l)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
