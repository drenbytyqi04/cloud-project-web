import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { ClientLogos } from "@/components/sections/client-logos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.quote" });
  return { title: t("title"), description: t("description") };
}

const trustIcons = [Clock, ShieldCheck, Sparkles];
const trustKeys = ["q1", "q2", "q3"] as const;

export default async function QuotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.quote" });
  const tTrust = await getTranslations({ locale, namespace: "QuotePage.trust" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div className="flex flex-col gap-6">
            {trustKeys.map((key, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={key} className="flex items-start gap-4 rounded-2xl border border-border bg-surface-subtle p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-medium text-foreground">{tTrust(`${key}.title`)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{tTrust(`${key}.description`)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <QuoteForm />
        </div>
      </section>

      <ClientLogos />
    </>
  );
}
