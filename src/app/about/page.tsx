import type { Metadata } from "next";
import { Cog, Eye, ShieldCheck, Wrench } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { VisualTile } from "@/components/shared/visual-tile";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaBand } from "@/components/sections/cta-band";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pro Craft Reklama is a signage and advertising structure manufacturer based in Prishtinë, serving businesses across Kosovo and the Balkans for over a decade.",
};

const values = [
  {
    icon: Eye,
    title: "Attention to Detail",
    description: "Every proportion, radius and finish is proofed against your brand before a single cut is made.",
  },
  {
    icon: Cog,
    title: "Custom Manufacturing",
    description: "No catalogue parts. Structures are engineered and fabricated specifically for your brief.",
  },
  {
    icon: Wrench,
    title: "Modern Equipment",
    description: "CNC routing, UV-flatbed printing and precision metalwork, all under one roof in Prishtinë.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Partnership",
    description: "A single point of accountability from first sketch through years of after-install support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pro Craft Reklama"
        title="Craftsmanship built for the long term."
        description="We've spent over a decade turning storefronts, fleets and facades into landmarks — engineered, fabricated and installed by a team that treats every project like it carries our own name."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Our Story"
              title="From a small fabrication shop to the region's signage partner."
              description="Pro Craft Reklama started as a two-person metalwork shop taking on whatever signage jobs came through the door. A decade later, we run a full production floor — metal fabrication, UV printing, LED assembly and vehicle wrap bays — serving retail groups, banks, logistics fleets and independent businesses across Kosovo and the wider Balkans."
            />
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              What hasn&apos;t changed is how we work: every project starts with a site visit, not a template. We&apos;d rather turn down a rushed brief than deliver something that doesn&apos;t hold up to five years of weather, traffic and daily wear.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <VisualTile seed={1} label="Production Floor — Prishtinë" />
          </div>
        </div>
      </section>

      <section className="border-y border-border py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What We Value"
            title="Principles that shape every project we take on."
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-3xl border border-border bg-white/[0.015] p-7 transition-colors hover:border-accent/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border-strong text-accent">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CtaBand />
    </>
  );
}
