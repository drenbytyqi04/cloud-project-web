import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Totem signs, LED signage, 3D letters, vehicle branding, billboards and large format printing — fabricated in-house by Pro Craft Reklama.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every surface of your brand, engineered in-house."
        description="Twelve signage and advertising disciplines, all fabricated under one roof — so quality never depends on a subcontractor's schedule."
      />
      <Services full />
      <Process />
      <Faq />
      <CtaBand />
    </>
  );
}
