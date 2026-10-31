import type { PortfolioCategory } from "@/lib/data";

// Real Pro Craft Reklama project photography, stored locally under /public.
export const realPhotos = {
  totemXbvk: "/images/real/totem-xbvk-close.jpg",
  totemXbvkWide: "/images/real/totem-xbvk-wide.jpg",
  totemLoshiPlast: "/images/real/totem-loshiplast-dusk.jpg",
  totemLoshiPlastDay: "/images/real/totem-loshiplast-day.jpg",
  interiorMural: "/images/real/interior-mural.jpg",
};

// Unsplash photos (stable, permanent URLs under the Unsplash License —
// free to use commercially, no attribution required). Used as stand-ins
// wherever we don't yet have real project photography.
export const heroImage =
  "https://images.unsplash.com/photo-1545649313-2a9a8112b127?crop=entropy&cs=srgb&fm=jpg&q=85";
export const workshopImage =
  "https://images.unsplash.com/photo-1776159904891-e7b213b8198f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

export const serviceImages: Record<string, string> = {
  "totem-signs": realPhotos.totemXbvk,
  "led-signs":
    "https://images.unsplash.com/photo-1757564591721-4105db68cd6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "light-boxes":
    "https://images.unsplash.com/photo-1643858985758-19689dd1e586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "3d-letters":
    "https://images.unsplash.com/photo-1782128919515-6c32f67a6fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "vehicle-branding":
    "https://images.unsplash.com/photo-1573681140254-abe33f9152c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "window-graphics":
    "https://images.unsplash.com/photo-1770591060040-25fd7d6a4c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "store-branding": realPhotos.interiorMural,
  billboards:
    "https://images.unsplash.com/photo-1784724195624-970e3414390b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "large-format-printing":
    "https://images.unsplash.com/photo-1693031630369-bd429a57f115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "interior-exterior-signage":
    "https://images.unsplash.com/photo-1788440890061-7bd8dbd69d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "business-branding-solutions":
    "https://images.unsplash.com/photo-1744395126213-b17da97aa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "custom-advertising-structures":
    "https://images.unsplash.com/photo-1769897779882-6c3a2b8ce920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
};

const categoryImages: Record<PortfolioCategory, string> = {
  Totems: serviceImages["totem-signs"],
  LED: serviceImages["led-signs"],
  // Not serviceImages["store-branding"] on purpose: that's the real mural
  // photo, which is tied to one specific real job (see portfolioImages.p3
  // below). Other fake "Interior" portfolio entries shouldn't inherit it.
  Interior:
    "https://images.unsplash.com/photo-1789547422569-6f2b3c4498ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  Exterior: serviceImages["interior-exterior-signage"],
  "Vehicle Branding": serviceImages["vehicle-branding"],
  Print: serviceImages["large-format-printing"],
};

export function getCategoryImage(category: PortfolioCategory): string {
  return categoryImages[category];
}

// Per-item overrides for portfolio pieces where we have a specific real
// photo of that exact job, rather than just a generic category stand-in.
export const portfolioImages: Record<string, string> = {
  p1: realPhotos.totemXbvk,
  p3: realPhotos.interiorMural,
  p8: realPhotos.totemLoshiPlast,
};

export function getPortfolioImage(item: { id: string; category: PortfolioCategory }): string {
  return portfolioImages[item.id] ?? getCategoryImage(item.category);
}

export const blogImages: Record<string, string> = {
  "choosing-the-right-led-sign": serviceImages["led-signs"],
  "totem-sign-lifespan": serviceImages["totem-signs"],
  "fleet-branding-roi": serviceImages["vehicle-branding"],
  "permitting-signage-kosovo": serviceImages["billboards"],
  "rebrand-rollout-playbook": serviceImages["business-branding-solutions"],
  "materials-that-survive-balkan-winters": workshopImage,
};
