"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const displayOrder: Locale[] = ["de", "en", "sq"];

export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "flex h-9 items-center gap-0.5 rounded-full border border-border-strong bg-surface p-1",
        className
      )}
    >
      {displayOrder.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active}
            onClick={() => router.replace(pathname, { locale: l })}
            className={cn(
              "flex-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors cursor-pointer",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
