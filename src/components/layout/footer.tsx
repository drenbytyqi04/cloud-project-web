import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { navKeys, navHrefs, services, siteConfig } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "@/components/shared/social-icons";

const socialIcons: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
};

export function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tServices = useTranslations("Services.items");

  return (
    <footer className="relative border-t border-border bg-background pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <span className="font-display text-xl font-semibold tracking-tight">
              PRO CRAFT <span className="text-accent">REKLAMA</span>
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t("description")}</p>
            <div className="flex gap-3 pt-2">
              {siteConfig.social.map((s) => {
                const Icon = socialIcons[s.label] ?? InstagramIcon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("quickLinks")}
            </span>
            <ul className="flex flex-col gap-3">
              {navKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={navHrefs[key]}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("servicesHeading")}
            </span>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {tServices(`${service.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {t("contactHeading")}
            </span>
            <ul className="flex flex-col gap-3 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Link
              href="/quote"
              className="group mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
            >
              {t("requestQuote")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Pro Craft Reklama. {t("rights")}</span>
          <span>{t("crafted")}</span>
        </div>
      </div>
    </footer>
  );
}
