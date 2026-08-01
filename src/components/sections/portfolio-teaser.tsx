import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { PortfolioGrid } from "@/components/shared/portfolio-grid";
import { Button } from "@/components/ui/button";

export function PortfolioTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work from across the region."
            description="A look at the totems, LED facades and branded fleets we've shipped for clients across Kosovo and the Balkans."
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/portfolio">
              Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-16">
          <PortfolioGrid limit={6} />
        </div>
      </div>
    </section>
  );
}
