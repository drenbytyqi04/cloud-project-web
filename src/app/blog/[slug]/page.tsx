import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { VisualTile } from "@/components/shared/visual-tile";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";
import { blogPosts } from "@/lib/data";
import { blogImages } from "@/lib/images";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[index];
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All Articles
          </Link>
          <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {post.category}
          </span>
          <h1 className="mt-6 font-display text-balance text-3xl font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border">
            <VisualTile seed={index} src={blogImages[post.slug]} label={post.category} alt={post.title} priority />
          </div>

          <div className="mt-10 flex flex-col gap-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/85 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl glass p-8">
            <div>
              <h3 className="font-display text-xl font-medium text-foreground">Have a signage project in mind?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Get a scoped quote within one business day.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/quote">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-xl font-medium text-foreground">More articles</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-border p-5 transition-colors hover:border-accent/40"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{r.category}</span>
                    <h3 className="mt-2 font-display text-base font-medium text-foreground group-hover:text-accent">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
