import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { VisualTile } from "@/components/shared/visual-tile";
import { CtaBand } from "@/components/sections/cta-band";
import { Link } from "@/i18n/navigation";
import { projects } from "@/lib/data";
import { getCategoryImage } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.projects" });
  return { title: t("title"), description: t("description") };
}

const categoryMessageKey: Record<string, string> = {
  Totems: "Totems",
  LED: "LED",
  Interior: "Interior",
  Exterior: "Exterior",
  "Vehicle Branding": "VehicleBranding",
  Print: "Print",
};

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.projects" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const tProjects = await getTranslations({ locale, namespace: "Projects.items" });
  const tCategories = await getTranslations({ locale, namespace: "PortfolioCategories" });

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project, i) => {
              const title = tProjects(`${project.slug}.title`);
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-accent/50 bg-surface-subtle transition-colors hover:border-accent"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <VisualTile
                      seed={i}
                      src={getCategoryImage(project.category)}
                      label={tCategories(categoryMessageKey[project.category])}
                      alt={title}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.client} · {project.year}
                    </span>
                    <h3 className="font-display text-xl font-medium text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{tProjects(`${project.slug}.summary`)}</p>
                    <span className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
                      {tCommon("readCaseStudy")}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
