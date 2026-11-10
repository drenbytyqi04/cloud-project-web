import { useTranslations } from "next-intl";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/lib/data";

export function Contact({ withService = false }: { withService?: boolean }) {
  const t = useTranslations("ContactSection");

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} description={t("description")} />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("workshop")}
                allowFullScreen
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} label={t("phoneLabel")} value={siteConfig.phone} href={`tel:${siteConfig.phoneHref}`} />
              <InfoCard icon={Mail} label={t("emailLabel")} value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <InfoCard icon={MapPin} label={t("addressLabel")} value={siteConfig.address} />
              <InfoCard
                icon={Clock}
                label={t("hoursLabel")}
                value={`${t("hoursWeekdays")}: ${t("hoursWeekdayTime")} · ${t("hoursSunday")}: ${t("hoursClosed")}`}
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
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface-subtle p-5 transition-colors hover:border-accent/40">
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
