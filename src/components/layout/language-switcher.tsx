"use client";

import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={cn("relative", className)}>
      <label className="sr-only" htmlFor="language-switcher">
        {t("label")}
      </label>
      <div className="flex items-center gap-1.5 rounded-full border border-border-strong bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-accent/40">
        <Globe className="h-3.5 w-3.5 shrink-0 text-accent" />
        <select
          id="language-switcher"
          value={locale}
          onChange={(e) => {
            const nextLocale = e.target.value as (typeof routing.locales)[number];
            router.replace(pathname, { locale: nextLocale });
          }}
          className="cursor-pointer appearance-none bg-transparent pr-1 text-xs font-medium text-foreground/80 outline-none"
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
