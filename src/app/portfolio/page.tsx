import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import { ClientLogos } from "@/components/sections/client-logos";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Totems, LED facades, interior branding, vehicle wraps and large format print — a look at recent work by Pro Craft Reklama.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A decade of signage, on display."
        description="Filter by category to explore installations across totems, LED, interior and exterior branding, vehicle wraps and print."
      />
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <PortfolioGrid />
        </div>
      </section>
      <ClientLogos />
      <CtaBand />
    </>
  );
}
