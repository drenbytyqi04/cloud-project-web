import Link from "next/link";
import { ArrowRight, Award, Hammer, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualTile } from "@/components/shared/visual-tile";
import { Button } from "@/components/ui/button";

const points = [
  { icon: Users, label: "Experienced, in-house team of designers and fabricators" },
  { icon: Hammer, label: "Modern CNC, print and metalwork equipment under one roof" },
  { icon: Award, label: "A decade of manufacturing to exacting brand standards" },
];

export function AboutTeaser() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
          <VisualTile seed={2} label="Pro Craft Reklama — Prishtinë Workshop" />
        </div>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Us"
            title="A reliable manufacturing partner, not just a signage vendor."
            description="For over a decade, Pro Craft Reklama has designed, fabricated and installed advertising structures for businesses that refuse to look ordinary. Every project runs through our own workshop — from first render to final bolt — so quality never depends on a subcontractor's schedule."
          />

          <div className="flex flex-col gap-4">
            {points.map((point) => (
              <div key={point.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                  <point.icon className="h-5 w-5" />
                </div>
                <span className="text-sm text-foreground/85 sm:text-base">{point.label}</span>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-2 w-fit">
            <Link href="/about">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
