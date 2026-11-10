import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function PortfolioTeaser() {
  const t = useTranslations("PortfolioTeaser");

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/projects">
              {t("ctaAll")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <PortfolioGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
