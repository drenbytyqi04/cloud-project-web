import type { MetadataRoute } from "next";
import { siteConfig, services, projects } from "@/lib/data";
import { routing } from "@/i18n/routing";

function localePath(locale: string, route: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const staticRoutes = ["", "/about", "/services", "/projects", "/contact", "/quote"].map((route) => ({
      url: localePath(locale, route),
      lastModified: new Date(),
    }));

    const serviceRoutes = services.map((service) => ({
      url: localePath(locale, `/services#${service.slug}`),
      lastModified: new Date(),
    }));

    const projectRoutes = projects.map((project) => ({
      url: localePath(locale, `/projects/${project.slug}`),
      lastModified: new Date(),
    }));

    routes.push(...staticRoutes, ...serviceRoutes, ...projectRoutes);
  }

  return routes;
}
