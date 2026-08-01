import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { VisualTile } from "@/components/shared/visual-tile";
import { CtaBand } from "@/components/sections/cta-band";
import { projects } from "@/lib/data";
import { getCategoryImage } from "@/lib/images";

export const metadata: Metadata = {
  title: "Projects",
  description: "In-depth case studies covering the brief, the build, and the result behind recent Pro Craft Reklama projects.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="The brief, the build, and the result."
        description="A closer look at how we scope, produce and install signage projects for clients who can't afford to look inconsistent."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white/[0.015] transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <VisualTile seed={i} src={getCategoryImage(project.category)} label={project.category} alt={project.title} />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-7">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.client} · {project.year}
                  </span>
                  <h3 className="font-display text-xl font-medium text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  <span className="mt-auto inline-flex w-fit items-center gap-2 pt-3 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
