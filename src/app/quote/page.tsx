import type { Metadata } from "next";
import { Clock, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { QuoteForm } from "@/components/shared/quote-form";
import { ClientLogos } from "@/components/sections/client-logos";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Tell us about your signage project and get a scoped quote from Pro Craft Reklama within one business day.",
};

const trust = [
  { icon: Clock, title: "1 Business Day", description: "Average response time on every quote request." },
  { icon: ShieldCheck, title: "No Obligation", description: "A scoped estimate with no pressure to commit." },
  { icon: Sparkles, title: "Custom Every Time", description: "Every quote is scoped to your brief, not a template." },
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Let's scope your project."
        description="Share a few details about what you need and where — we'll come back with a realistic budget and timeline within one business day."
      />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.3fr] lg:px-10">
          <div className="flex flex-col gap-6">
            {trust.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-white/[0.015] p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <QuoteForm />
        </div>
      </section>

      <ClientLogos />
    </>
  );
}
