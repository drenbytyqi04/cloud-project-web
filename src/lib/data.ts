export const siteConfig = {
  name: "Pro Craft Reklama",
  shortName: "PCR",
  url: "https://cloud-project-web-two.vercel.app",
  phone: "+383 49 406 883",
  phoneHref: "+38349406883",
  whatsapp: "38349406883",
  email: "hello@procraftreklama.com",
  address: "Rr. Jashar Salihu 26, Prishtinë 10000, Kosovo",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/procraft.reklama/" },
    { label: "Facebook", href: "https://www.facebook.com/p/ProCraftReklama-61580451504515/" },
  ],
};

export const navKeys = ["home", "about", "services", "projects", "blog", "contact"] as const;
export const navHrefs: Record<(typeof navKeys)[number], string> = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
};

export const statKeys = ["projectsCompleted", "yearsExperience", "satisfiedClients", "productionCapacity"] as const;
export const stats: { key: (typeof statKeys)[number]; value: number; suffix: string }[] = [
  { key: "projectsCompleted", value: 500, suffix: "+" },
  { key: "yearsExperience", value: 10, suffix: "+" },
  { key: "satisfiedClients", value: 100, suffix: "%" },
  { key: "productionCapacity", value: 24, suffix: "/7" },
];

export type Service = {
  slug: string;
  icon: string;
};

export const services: Service[] = [
  { slug: "illuminated-signage", icon: "Zap" },
  { slug: "interior-signage", icon: "Store" },
  { slug: "exterior-signage", icon: "Signpost" },
  { slug: "print", icon: "Printer" },
  { slug: "window-film", icon: "PanelTop" },
  { slug: "wall-murals", icon: "ImageIcon" },
  { slug: "vehicle-wrapping", icon: "Truck" },
];

export type PortfolioCategory = "Totems" | "LED" | "Interior" | "Exterior" | "Vehicle Branding" | "Print";

export type PortfolioItem = {
  id: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  tall?: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Totems",
  "LED",
  "Interior",
  "Exterior",
  "Vehicle Branding",
  "Print",
];

export const portfolioItems: PortfolioItem[] = [
  { id: "p1", client: "XB|VK Hair Studio", category: "Totems", year: "2026", tall: true },
  { id: "p2", client: "Nova Bank", category: "LED", year: "2025" },
  { id: "p3", client: "Louvard", category: "Interior", year: "2026" },
  { id: "p4", client: "Skyline Residences", category: "Exterior", year: "2024", tall: true },
  { id: "p5", client: "Balkan Logistics", category: "Vehicle Branding", year: "2025" },
  { id: "p6", client: "Pure Beverages", category: "Print", year: "2024" },
  { id: "p7", client: "Apex Tower", category: "Interior", year: "2025" },
  { id: "p8", client: "Loshi Plast", category: "Totems", year: "2026", tall: true },
  { id: "p9", client: "Aurora Pharmacy", category: "LED", year: "2024" },
  { id: "p10", client: "FreshMarket", category: "Vehicle Branding", year: "2025" },
  { id: "p11", client: "Studio Nine Café", category: "Exterior", year: "2024" },
  { id: "p12", client: "TechExpo Kosovo", category: "Print", year: "2023", tall: true },
  { id: "p13", client: "Louvard", category: "Exterior", year: "2026", tall: true },
  { id: "p14", client: "Bardha's Cake", category: "Totems", year: "2026", tall: true },
  { id: "p15", client: "Gold Parfumes", category: "Exterior", year: "2026" },
];

export const processStepNumbers = ["01", "02", "03", "04", "05"] as const;

export const whyChooseUsKeys = ["w1", "w2", "w3", "w4", "w5", "w6", "w7"] as const;

export const testimonials = [
  { key: "t1", name: "Agron Mazreku", rating: 5 },
];

export const clientLogos = [
  "Metro Retail Group",
  "Nova Bank",
  "Elite Motors",
  "Balkan Logistics",
  "Pure Beverages",
  "Skyline Residences",
  "Green Valley Mall",
  "Aurora Pharmacy",
  "Apex Tower",
  "FreshMarket",
];

export const faqKeys = ["f1", "f2", "f3", "f4", "f5", "f6"] as const;

export type BlogPost = {
  slug: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  { slug: "choosing-the-right-led-sign", date: "2026-06-12" },
  { slug: "totem-sign-lifespan", date: "2026-05-28" },
  { slug: "fleet-branding-roi", date: "2026-05-09" },
  { slug: "permitting-signage-kosovo", date: "2026-04-22" },
  { slug: "rebrand-rollout-playbook", date: "2026-03-30" },
  { slug: "materials-that-survive-balkan-winters", date: "2026-03-05" },
];

export type Project = {
  slug: string;
  client: string;
  category: PortfolioCategory;
  year: string;
};

export const projects: Project[] = [
  { slug: "metro-retail-signage-rollout", client: "Metro Retail Group", category: "Exterior", year: "2025" },
  { slug: "nova-bank-led-facade", client: "Nova Bank", category: "LED", year: "2025" },
  { slug: "balkan-logistics-fleet-wrap", client: "Balkan Logistics", category: "Vehicle Branding", year: "2025" },
];
