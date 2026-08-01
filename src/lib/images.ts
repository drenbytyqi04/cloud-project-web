import type { PortfolioCategory } from "@/lib/data";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3BrMTMZKb9J7sZXfkZMRvaaT2nK";

export const heroImage = `${CDN}/hf_20260801_224402_73e8dc1e-6580-4b83-96ae-c2c1d8d1b9ff.png`;
export const workshopImage = `${CDN}/hf_20260801_224421_ce6e2116-4848-449b-bd2c-8730461537ab.png`;

export const serviceImages: Record<string, string> = {
  "totem-signs": `${CDN}/hf_20260801_224422_69e00641-d9c0-4a2d-886d-41368078ac82.png`,
  "led-signs": `${CDN}/hf_20260801_224423_2a5b6420-ceee-488b-aef8-c3b96c06fae2.png`,
  "light-boxes": `${CDN}/hf_20260801_224424_e7dbf401-e0a2-411d-8e1d-dce7f7b8c13b.png`,
  "3d-letters": `${CDN}/hf_20260801_224426_093d57b0-e51b-48c6-b74c-b44c541ff05e.png`,
  "vehicle-branding": `${CDN}/hf_20260801_224427_1e93b148-8423-417e-b2ad-30cc0c436be5.png`,
  "window-graphics": `${CDN}/hf_20260801_224428_f23d0696-8c3e-4acc-b3fb-03ec55215ed5.png`,
  "store-branding": `${CDN}/hf_20260801_224429_670b9500-2fb3-4b90-a114-0876b476611f.png`,
  billboards: `${CDN}/hf_20260801_224430_d6b82eeb-c056-4c3c-b685-1081aa659a18.png`,
  "large-format-printing": `${CDN}/hf_20260801_224431_8f58d245-a859-44c7-b56e-4767ade3be49.png`,
  "interior-exterior-signage": `${CDN}/hf_20260801_224432_bf84f71e-6d62-4cdf-a32d-af3d0f47a1d2.png`,
  "business-branding-solutions": `${CDN}/hf_20260801_224434_5a09584e-a737-49aa-a05d-4fc08be92d67.png`,
  "custom-advertising-structures": `${CDN}/hf_20260801_224434_77aa0ebe-cfa9-4e42-988f-4acf51885c1a.png`,
};

const categoryImages: Record<PortfolioCategory, string> = {
  Totems: serviceImages["totem-signs"],
  LED: serviceImages["led-signs"],
  Interior: serviceImages["store-branding"],
  Exterior: serviceImages["interior-exterior-signage"],
  "Vehicle Branding": serviceImages["vehicle-branding"],
  Print: serviceImages["large-format-printing"],
};

export function getCategoryImage(category: PortfolioCategory): string {
  return categoryImages[category];
}

export const blogImages: Record<string, string> = {
  "choosing-the-right-led-sign": serviceImages["led-signs"],
  "totem-sign-lifespan": serviceImages["totem-signs"],
  "fleet-branding-roi": serviceImages["vehicle-branding"],
  "permitting-signage-kosovo": serviceImages["billboards"],
  "rebrand-rollout-playbook": serviceImages["business-branding-solutions"],
  "materials-that-survive-balkan-winters": workshopImage,
};
