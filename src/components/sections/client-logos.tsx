import { clientLogos } from "@/lib/data";
import { Marquee } from "@/components/shared/marquee";

export function ClientLogos() {
  return (
    <section className="border-y border-border py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by brands across the region
        </p>
      </div>
      <Marquee items={clientLogos} />
    </section>
  );
}
