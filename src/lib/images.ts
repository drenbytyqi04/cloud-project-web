import type { PortfolioCategory } from "@/lib/data";

// Real Pro Craft Reklama project photography, stored locally under /public.
export const realPhotos = {
  totemXbvk: "/images/real/totem-xbvk-close.jpg",
  totemXbvkWide: "/images/real/totem-xbvk-wide.jpg",
  totemLoshiPlast: "/images/real/totem-loshiplast-dusk.jpg",
  totemLoshiPlastDay: "/images/real/totem-loshiplast-day.jpg",
  interiorMural: "/images/real/interior-mural.jpg",
  louvardWindow: "/images/real/louvard-window.jpg",
  bardhasCake: "/images/real/bardhas-cake.jpg",
  goldParfumesClose: "/images/real/gold-parfumes-close.jpg",
  goldParfumesWide: "/images/real/gold-parfumes-wide.jpg",
};

// Unsplash photos (stable, permanent URLs under the Unsplash License —
// free to use commercially, no attribution required). Used as stand-ins
// wherever we don't yet have real project photography.
export const heroImage =
  "https://images.unsplash.com/photo-1545649313-2a9a8112b127?crop=entropy&cs=srgb&fm=jpg&q=85";
export const workshopImage =
  "https://images.unsplash.com/photo-1776159904891-e7b213b8198f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600";

const interiorStockImage =
  "https://images.unsplash.com/photo-1789547422569-6f2b3c4498ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";

export const serviceImages: Record<string, string> = {
  "illuminated-signage": realPhotos.goldParfumesClose,
  "interior-signage": interiorStockImage,
  "exterior-signage": realPhotos.totemXbvk,
  print:
    "https://images.unsplash.com/photo-1693031630369-bd429a57f115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
  "window-film": realPhotos.louvardWindow,
  "wall-murals": realPhotos.interiorMural,
  "vehicle-wrapping":
    "https://images.unsplash.com/photo-1573681140254-abe33f9152c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
};

const categoryImages: Record<PortfolioCategory, string> = {
  Totems: serviceImages["exterior-signage"],
  LED: serviceImages["illuminated-signage"],
  // Not serviceImages["wall-murals"] on purpose: that's the real mural photo,
  // which is tied to one specific real job (see portfolioImages.p3 below).
  // Other fake "Interior" portfolio entries shouldn't inherit it.
  Interior: interiorStockImage,
  Exterior: serviceImages["exterior-signage"],
  "Vehicle Branding": serviceImages["vehicle-wrapping"],
  Print: serviceImages["print"],
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
  p13: realPhotos.louvardWindow,
  p14: realPhotos.bardhasCake,
  p15: realPhotos.goldParfumesClose,
};

export function getPortfolioImage(item: { id: string; category: PortfolioCategory }): string {
  return portfolioImages[item.id] ?? getCategoryImage(item.category);
}
