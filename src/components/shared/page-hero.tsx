import { RevealText } from "@/components/shared/reveal-text";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-white/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
        <div className="mt-6 max-w-3xl">
          <RevealText
            text={title}
            el="h1"
            className="font-display text-balance text-4xl font-medium leading-[1.08] tracking-tight text-foreground sm:text-6xl"
          />
        </div>
        {description && (
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
