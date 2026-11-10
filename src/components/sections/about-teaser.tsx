import { useTranslations } from "next-intl";
import { ArrowRight, Award, Hammer, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualTile } from "@/components/shared/visual-tile";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { workshopImage } from "@/lib/images";

const pointIcons = [Users, Hammer, Award];

export function AboutTeaser() {
  const t = useTranslations("AboutTeaser");
  const points = t.raw("points") as string[];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
          <VisualTile seed={2} src={workshopImage} label={t("workshopLabel")} />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

          <div className="flex flex-col gap-4">
            {points.map((point, i) => {
              const Icon = pointIcons[i];
              return (
                <div key={point} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-foreground/85 sm:text-base">{point}</span>
                </div>
              );
            })}
          </div>

          <Button asChild variant="outline" className="mt-2 w-fit">
            <Link href="/about">
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
