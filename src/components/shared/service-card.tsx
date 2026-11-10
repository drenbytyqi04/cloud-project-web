"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { VisualTile } from "@/components/shared/visual-tile";
import { Button } from "@/components/ui/button";
import { iconMap } from "@/lib/icon-map";
import { serviceImages } from "@/lib/images";
import type { Service } from "@/lib/data";

export function ServiceCard({
  service,
  index,
  full = false,
}: {
  service: Service;
  index: number;
  full?: boolean;
}) {
  const t = useTranslations(`Services.items.${service.slug}`);
  const tCommon = useTranslations("Common");
  const Icon = iconMap[service.icon];
  const features = t.raw("features") as string[];

  return (
    <motion.div
      id={service.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="group relative flex scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-accent/50 bg-surface-subtle transition-colors duration-500 hover:border-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110">
          <VisualTile icon={Icon} seed={index} src={serviceImages[service.slug]} alt={t("title")} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-display text-xl font-medium text-foreground">{t("title")}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {full ? t("description") : t("shortDescription")}
        </p>

        {full ? (
          <>
            <ul className="mt-2 flex flex-col gap-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button asChild size="sm" className="mt-4 w-fit">
              <Link href="/quote">
                {tCommon("getQuote")}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </>
        ) : (
          <Link
            href={`/services#${service.slug}`}
            className="group/link mt-3 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
          >
            {tCommon("learnMore")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
