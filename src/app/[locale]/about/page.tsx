import type { Metadata } from "next";
import { Cog, Eye, ShieldCheck, Wrench } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualTile } from "@/components/shared/visual-tile";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBand } from "@/components/sections/cta-band";
import { stats } from "@/lib/data";
import { workshopImage } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.about" });
  return { title: t("title"), description: t("description") };
}

const valueIcons = [Eye, Cog, Wrench, ShieldCheck];
const valueKeys = ["v1", "v2", "v3", "v4"] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "PageHero.about" });
  const tPage = await getTranslations({ locale, namespace: "AboutPage" });
  const tStats = await getTranslations({ locale, namespace: "Stats" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow={tPage("storyEyebrow")}
              title={tPage("storyTitle")}
              description={tPage("storyDescription")}
            />
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{tPage("storyParagraph")}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <VisualTile seed={1} src={workshopImage} label={tPage("productionFloorLabel")} />
          </div>
        </div>
      </section>

      <section className="border-y border-border py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.key} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">{tStats(stat.key)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow={tPage("valuesEyebrow")}
            title={tPage("valuesTitle")}
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={key}
                  className="flex flex-col gap-4 rounded-3xl border border-border bg-white/[0.015] p-7 transition-colors hover:border-accent/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground">{tPage(`values.${key}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{tPage(`values.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
