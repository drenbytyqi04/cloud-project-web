import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/lib/data";

export function Contact({ withService = false }: { withService?: boolean }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let's put your brand somewhere it can't be missed."
          description="Tell us about your location and timeline — we'll come back with a scoped plan within one business day."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border">
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0d1224] via-background to-[#141414]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_40px_rgba(59,130,246,0.4)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <p className="font-display text-base text-foreground">Pro Craft Reklama Workshop</p>
                <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.address}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phoneHref}`} />
              <InfoCard icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <InfoCard icon={MapPin} label="Address" value={siteConfig.address} />
              <InfoCard
                icon={Clock}
                label="Working Hours"
                value={siteConfig.hours.map((h) => `${h.day}: ${h.time}`).join(" · ")}
                small
              />
            </div>
          </div>

          <ContactForm withService={withService} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  small,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  small?: boolean;
}) {
  const content = (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-white/[0.015] p-5 transition-colors hover:border-accent/40">
      <Icon className="h-5 w-5 text-accent" />
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className={small ? "mt-1 text-xs leading-relaxed text-foreground/85" : "mt-1 text-sm text-foreground/85"}>
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}
