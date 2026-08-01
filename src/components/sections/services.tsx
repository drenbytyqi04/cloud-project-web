import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { ServiceCard } from "@/components/shared/service-card";
import { Button } from "@/components/ui/button";

export function Services({ full = false }: { full?: boolean }) {
  const list = full ? services : services.slice(0, 6);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Build"
            title="Signage engineered for every surface of your brand."
            description="From street-level totems to fleet-wide vehicle wraps — every project is fabricated in-house, to your exact specification."
          />
          {!full && (
            <Button asChild variant="outline" className="shrink-0">
              <Link href="/services">
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
