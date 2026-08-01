import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { VisualTile } from "@/components/shared/visual-tile";
import { BeforeAfterSlider } from "@/components/shared/before-after-slider";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) notFound();

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All Case Studies
          </Link>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {project.category} · {project.year}
          </span>
          <h1 className="mt-6 font-display text-balance text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Client: {project.client}</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            <VisualTile seed={index} label={project.title} />
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-y border-border py-8">
            {project.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div>
              <h2 className="font-display text-lg font-medium text-accent">The Challenge</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-accent">The Solution</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-accent">The Result</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.result}</p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-medium text-foreground">Before &amp; After</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Drag the handle to compare the site before and after installation.
            </p>
            <div className="mt-6">
              <BeforeAfterSlider before={<VisualTile seed={index + 2} grid={false} />} after={<VisualTile seed={index} />} />
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl glass p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-foreground">Have a similar brief?</h3>
              <p className="mt-1 text-sm text-muted-foreground">We&apos;ll scope it and come back with a plan within one business day.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/quote">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
