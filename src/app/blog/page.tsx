import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { VisualTile } from "@/components/shared/visual-tile";
import { blogPosts } from "@/lib/data";
import { blogImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and field notes on signage materials, permitting, fleet branding and multi-location rollouts from the Pro Craft Reklama team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Field notes on signage that lasts."
        description="Practical writing on materials, permitting and rollout strategy — drawn from projects we've actually shipped."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-white/[0.015] transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <VisualTile seed={i} src={blogImages[post.slug]} label={post.category} alt={post.title} />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">{post.category}</span>
                  <h3 className="font-display text-lg font-medium leading-snug text-foreground">{post.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
