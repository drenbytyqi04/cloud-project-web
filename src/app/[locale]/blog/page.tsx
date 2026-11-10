import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/shared/page-hero";
import { VisualTile } from "@/components/shared/visual-tile";
import { Link } from "@/i18n/navigation";
import { blogPosts } from "@/lib/data";
import { blogImages } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.blog" });
  return { title: t("title"), description: t("description") };
}

const localeMap: Record<string, string> = { en: "en-US", sq: "sq-AL", de: "de-DE" };

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PageHero.blog" });
  const tCommon = await getTranslations({ locale, namespace: "Common" });
  const tBlog = await getTranslations({ locale, namespace: "Blog.items" });
  const dateLocale = localeMap[locale] ?? "en-US";

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => {
              const title = tBlog(`${post.slug}.title`);
              const category = tBlog(`${post.slug}.category`);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface-subtle transition-colors hover:border-accent/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <VisualTile seed={i} src={blogImages[post.slug]} label={category} alt={title} />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{category}</span>
                    <h3 className="font-display text-lg font-medium leading-snug text-foreground">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{tBlog(`${post.slug}.excerpt`)}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString(dateLocale, { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {tBlog(`${post.slug}.readTime`)}
                      </span>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground/85 transition-colors group-hover:text-accent">
                      {tCommon("readArticle")}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
