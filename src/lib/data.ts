export const siteConfig = {
  name: "Pro Craft Reklama",
  shortName: "PCR",
  tagline: "We Build Brands That Get Noticed.",
  description:
    "Premium signage, LED displays and advertising structures engineered and installed across Kosovo and the Balkans.",
  url: "https://cloud-project-web-two.vercel.app",
  phone: "+383 49 406 883",
  phoneHref: "+38349406883",
  whatsapp: "38349406883",
  email: "hello@procraftreklama.com",
  address: "Rr. Jashar Salihu 26, Prishtinë 10000, Kosovo",
  hours: [
    { day: "Monday – Saturday", time: "09:00 – 17:00" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/procraft.reklama/" },
    { label: "Facebook", href: "https://www.facebook.com/p/ProCraftReklama-61580451504515/" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Satisfied Clients" },
  { value: 24, suffix: "/7", label: "Production Capacity" },
];

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "illuminated-signage",
    title: "Illuminated Signage",
    shortDescription: "Lit signs and lettering that keep your business visible day and night.",
    description:
      "An illuminated sign keeps your business visible long after the sun goes down. We build every sign around your logo and your space, with lettering and shapes that read clearly from a distance. Design, production and installation are all handled in-house, start to finish.",
    icon: "Zap",
    features: [
      "3D letters and logos with LED illumination",
      "Illuminated light boxes",
      "Illuminated signs for facades and entrances",
      "LED neon signage",
      "Double-sided illuminated hanging signs",
    ],
  },
  {
    slug: "interior-signage",
    title: "Interior Signage",
    shortDescription: "Branding that carries your identity inside the store, office or venue.",
    description:
      "A first impression is also made inside the space. We bring your brand onto walls, reception areas and points of sale, so the space itself feels organised and professional. Every element is sized and finished to match your specific interior.",
    icon: "Store",
    features: [
      "Logos for reception areas and offices",
      "Wall lettering",
      "Wayfinding and internal signage",
      "Stands and point-of-sale displays",
      "Roll-ups and poster holders",
      "Menu boards for restaurants and cafés",
    ],
  },
  {
    slug: "exterior-signage",
    title: "Exterior Signage",
    shortDescription: "Outdoor advertising built to grab attention and handle the weather.",
    description:
      "Exterior advertising is often a customer's first contact with your business. We work with materials suited to outdoor conditions and adapt every sign to your facade and location, handling everything from the on-site survey to the final installation.",
    icon: "Signpost",
    features: [
      "Signs for facades and entrances",
      "Lettering on buildings",
      "Banners and printed mesh",
      "Panels and billboards",
      "Outdoor wayfinding signage",
      "Advertising on work vehicles (see Vehicle Wrapping)",
    ],
  },
  {
    slug: "print",
    title: "Print",
    shortDescription: "Sharp, accurate colour for everything from business cards to building-sized prints.",
    description:
      "From a single business card to a large-scale banner, we make sure your brand's colours and details come out exactly right. Bring us a finished design or let us build it with you — we choose the material and format based on how the print will actually be used.",
    icon: "Printer",
    features: [
      "Business cards, flyers and brochures",
      "Posters and catalogues",
      "Labels and stickers",
      "Banners and large-format printing",
      "Printing on PVC, forex and other rigid materials",
      "Promotional materials for events and campaigns",
    ],
  },
  {
    slug: "window-film",
    title: "Window Film",
    shortDescription: "Decorative, branded and privacy film for storefronts, offices and glass doors.",
    description:
      "The glass in your storefront or office is valuable advertising and design space. Window film lets you display your brand and offers, or add privacy without losing natural light. Every sheet is cut to size and applied with care.",
    icon: "PanelTop",
    features: [
      "Printed film for storefronts",
      "Cut-vinyl logos and lettering",
      "Frosted-effect film",
      "Privacy film for offices and glass partitions",
      "One-way vision perforated film",
      "Seasonal and promotional graphics",
    ],
  },
  {
    slug: "wall-murals",
    title: "Wall Murals",
    shortDescription: "Made-to-measure printed murals that completely transform a wall.",
    description:
      "A single wall can change the character of an entire space. We print murals to your wall's exact dimensions — from our design collection, your own photos, or your brand's graphics. A fitting solution for homes and businesses alike.",
    icon: "ImageIcon",
    features: [
      "Custom-designed murals",
      "Photo or landscape murals",
      "Branded walls for offices, stores and shops",
      "Murals for living rooms, bedrooms and kids' rooms",
      "On-site measurement and installation",
    ],
  },
  {
    slug: "vehicle-wrapping",
    title: "Vehicle Wrapping",
    shortDescription: "Full and partial wraps that give your vehicle a new look or turn it into a moving ad.",
    description:
      "Your vehicle can get a new colour without a repaint, or advertise your business everywhere it drives. We match the design to your vehicle's model and apply the film with care to every detail, for private vehicles and business fleets alike.",
    icon: "Truck",
    features: [
      "Full vehicle wrap with film",
      "Partial wrap (hood, roof, mirrors, details)",
      "Colour change in matte, gloss or satin film",
      "Printed graphics for work vehicles, vans and trucks",
      "Cut-vinyl logos and lettering",
      "Fleet wrapping for businesses",
    ],
  },
];

export type PortfolioCategory = "Totems" | "LED" | "Interior" | "Exterior" | "Vehicle Branding" | "Print";

export type PortfolioItem = {
  id: string;
  title: string;
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
  { id: "p1", title: "Backlit Entrance Totem — Hair Studio", client: "XB|VK Hair Studio", category: "Totems", year: "2026", tall: true },
  { id: "p2", title: "RGB Facade Display", client: "Nova Bank", category: "LED", year: "2025" },
  { id: "p3", title: "Decorative Interior Mural — Digital Print", client: "Louvard", category: "Interior", year: "2026" },
  { id: "p4", title: "Rooftop Fascia Sign", client: "Skyline Residences", category: "Exterior", year: "2024", tall: true },
  { id: "p5", title: "Fleet Wrap — 40 Vehicles", client: "Balkan Logistics", category: "Vehicle Branding", year: "2025" },
  { id: "p6", title: "Billboard Campaign Series", client: "Pure Beverages", category: "Print", year: "2024" },
  { id: "p7", title: "Dimensional Lobby Letters", client: "Apex Tower", category: "Interior", year: "2025" },
  { id: "p8", title: "Multi-Panel Roadside Totem", client: "Loshi Plast", category: "Totems", year: "2026", tall: true },
  { id: "p9", title: "Storefront Light Boxes", client: "Aurora Pharmacy", category: "LED", year: "2024" },
  { id: "p10", title: "Delivery Van Branding", client: "FreshMarket", category: "Vehicle Branding", year: "2025" },
  { id: "p11", title: "Window Vision Graphics", client: "Studio Nine Café", category: "Exterior", year: "2024" },
  { id: "p12", title: "Trade Show Backdrop", client: "TechExpo Kosovo", category: "Print", year: "2023", tall: true },
  { id: "p13", title: "Gold-Leaf Logo Window Graphics", client: "Louvard", category: "Exterior", year: "2026", tall: true },
  { id: "p14", title: "Heart-Shaped Pole Sign — Bakery", client: "Bardha's Cake", category: "Totems", year: "2026", tall: true },
  { id: "p15", title: "Backlit Dimensional Storefront Letters", client: "Gold Parfumes", category: "Exterior", year: "2026" },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Tell us what you need and where the advertisement will be installed. We talk through the brief on-site or by phone before anything is measured or quoted.",
  },
  {
    number: "02",
    title: "Measurements & Quote",
    description:
      "We take precise measurements at your location and send you a clear quote, so there are no surprises once production starts.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our design team produces to-scale renders and material samples against your brand guidelines, iterating with you until every proportion and finish is signed off.",
  },
  {
    number: "04",
    title: "Production",
    description:
      "Fabrication happens in-house across our metal, print and electronics workshops, with quality checkpoints at every stage before anything leaves the floor.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Certified installation crews handle site prep, mounting and electrical connection, and hand over a finished sign, ready to use.",
  },
];

export const whyChooseUs = [
  { title: "Premium Materials", description: "Marine-grade aluminium, cast vinyl and commercial LED components rated for years of outdoor exposure." },
  { title: "Modern Machinery", description: "CNC routing, UV-flatbed printing and precision metalwork under one roof — no third-party bottlenecks." },
  { title: "Fast Production", description: "Transparent production timelines with milestone updates, so you always know exactly where your project stands." },
  { title: "Professional Installation", description: "Certified crews, proper lifting equipment and full site safety compliance on every install." },
  { title: "Custom Design", description: "Every project starts from your brand, not from a template — dimensional studies before a single cut is made." },
  { title: "Warranty", description: "Structural and electrical warranty on every project, backed by a local team that answers the phone." },
  { title: "Nationwide Service", description: "Production in Prishtinë, installation crews covering Kosovo and the wider Balkan region." },
];

export const testimonials = [
  {
    name: "Agron Mazreku",
    role: "Google Review",
    quote: "Very fair work without any rackets and direct, respectful people!",
    rating: 5,
  },
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

export const faqs = [
  {
    question: "How long does a typical signage project take?",
    answer:
      "Small interior signage can ship in 1–2 weeks. Totems, LED facades and billboard structures typically run 4–8 weeks depending on structural engineering and permitting. You'll get a firm timeline after the design phase is signed off.",
  },
  {
    question: "Do you handle permits and municipal approvals?",
    answer:
      "Yes. For structures that require municipal sign-off — totems, billboards, rooftop signage — we prepare the technical documentation and manage the permitting process on your behalf.",
  },
  {
    question: "Can you match our existing brand guidelines exactly?",
    answer:
      "We work directly from your brand book, including Pantone-matched paint and vinyl, approved typefaces cut to spec, and consistent proportions across every location.",
  },
  {
    question: "What's included in the warranty?",
    answer:
      "Every project carries a structural warranty and a separate electronics warranty on LED components and drivers, typically 2–5 years depending on the product. Full terms are confirmed in your project quote.",
  },
  {
    question: "Do you work outside of Prishtinë?",
    answer:
      "Yes — our installation crews cover all of Kosovo and take on regional projects across the Balkans. Production stays centralised in our Prishtinë workshop for consistent quality control.",
  },
  {
    question: "Can you maintain signage after installation?",
    answer:
      "We offer scheduled maintenance contracts for LED and illuminated signage, covering module replacement, cleaning and structural inspection so your signage keeps performing years after installation.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-led-sign",
    title: "Choosing the Right LED Sign for Your Storefront",
    excerpt: "Brightness, pixel pitch, and viewing distance — the technical decisions that determine whether your LED sign reads clearly or washes out.",
    category: "Guides",
    date: "2026-06-12",
    readTime: "6 min read",
    content: [
      "Most storefront LED failures aren't a manufacturing defect — they're a spec mismatch. A sign that looks crisp on a shaded side street will wash out completely on a west-facing facade in direct afternoon sun, and a sign bright enough for that facade will feel aggressive on a narrow pedestrian lane.",
      "The variable that matters most is viewing distance, not brightness in isolation. Pixel pitch determines the minimum distance at which text resolves cleanly — get it wrong and close-up viewers see a grid of dots instead of a wordmark. We calculate this from the actual pavement width and traffic speed at your specific location, not a generic rule of thumb.",
      "Drivers matter as much as the modules themselves. Cheap drivers degrade brightness unevenly across a sign face within eighteen months, creating patchy hot spots that are more noticeable than a uniformly dimmer sign. We spec commercial-grade drivers with remote dimming as standard, so brightness can be tuned seasonally without a site visit.",
    ],
  },
  {
    slug: "totem-sign-lifespan",
    title: "What Actually Determines a Totem Sign's Lifespan",
    excerpt: "It's not the acrylic face that fails first. A look at the structural and electrical choices that separate a 3-year sign from a 15-year sign.",
    category: "Materials",
    date: "2026-05-28",
    readTime: "5 min read",
    content: [
      "When a totem sign fails early, the cause is almost never the visible face — it's what's inside the structure. Water ingress around poorly sealed cable entries corrodes internal wiring long before the acrylic shows any sign of UV fade.",
      "Foundation design is the second most overlooked factor. A totem undersized for regional wind loads will develop stress fractures at the base weld within a few winters, especially on exposed roadside sites. We run structural calculations against Kosovo's wind load standards on every freestanding structure, not just the ones that require permitting.",
      "Steel grade and galvanisation quality account for most of the remaining variance. Marine-grade coatings cost more upfront but eliminate the rust bleed that ruins a sign's appearance well before it's structurally compromised — a cost we walk clients through before, not after, they commit to a budget.",
    ],
  },
  {
    slug: "fleet-branding-roi",
    title: "The ROI Math Behind Vehicle Fleet Branding",
    excerpt: "A wrapped fleet is a moving billboard with zero media spend. Here's how we help clients model the payback period before committing.",
    category: "Strategy",
    date: "2026-05-09",
    readTime: "7 min read",
    content: [
      "A single delivery van in daily urban use generates tens of thousands of visual impressions a month — at a fraction of the cost-per-impression of static billboard media, and with no recurring media spend after the wrap is installed.",
      "The payback period depends heavily on fleet utilisation and route density, which is why we build a simple impressions model with clients before quoting: daily mileage, route overlap with target demographics, and average dwell time at stops all factor in.",
      "Wrap durability is the other half of the ROI equation. A 7-year cast vinyl wrap amortises the upfront cost over a much longer window than a 3-year budget wrap that needs replacing twice in the same period — often making the premium material the cheaper option over the vehicle's service life.",
    ],
  },
  {
    slug: "permitting-signage-kosovo",
    title: "A Practical Guide to Signage Permitting in Kosovo",
    excerpt: "What municipalities actually look for in a structural submission, and how to avoid the delays that push installs back by months.",
    category: "Regulatory",
    date: "2026-04-22",
    readTime: "8 min read",
    content: [
      "The single biggest cause of permitting delays we see is an incomplete structural submission — missing wind load calculations, unclear foundation details, or drawings that don't match the actual proposed dimensions.",
      "Municipalities generally care about three things: structural safety, sightline impact on traffic, and consistency with the surrounding streetscape. Addressing all three explicitly in the initial submission, rather than waiting for a request for more information, typically cuts weeks off the review cycle.",
      "We prepare and submit the full technical package on behalf of clients as standard, because we've learned exactly what each municipal office expects to see — and what triggers an automatic second review.",
    ],
  },
  {
    slug: "rebrand-rollout-playbook",
    title: "Running a Multi-Location Rebrand Without Losing Consistency",
    excerpt: "Our phased rollout playbook for franchise and multi-site brands, from design standardisation to the last install crew leaving the last site.",
    category: "Strategy",
    date: "2026-03-30",
    readTime: "6 min read",
    content: [
      "Multi-location rebrands rarely fail because of design — they fail because of sequencing. Without a shared production schedule, the fifth location installed a month after the first can end up with subtly different vinyl batches, mounting heights, or finish tolerances.",
      "We lock a single design system before any fabrication starts: exact Pantone references, mounting height standards, and material specifications documented once and referenced by every production run, regardless of which week a given site is scheduled.",
      "Installation sequencing matters just as much for brand perception. Where possible, we stagger crews to open the highest-traffic locations first, so the rebrand reads as intentional and coordinated rather than a gradual, visible rollout.",
    ],
  },
  {
    slug: "materials-that-survive-balkan-winters",
    title: "Materials That Actually Survive Balkan Winters",
    excerpt: "Freeze-thaw cycling destroys cheap signage fast. The substrate and hardware specifications we won't compromise on, regardless of budget pressure.",
    category: "Materials",
    date: "2026-03-05",
    readTime: "5 min read",
    content: [
      "Freeze-thaw cycling is brutal on signage that wasn't specified for it. Water that seeps into a hairline gap in a poorly sealed substrate expands when it freezes, widening the gap every cycle until the material fails from the inside out.",
      "We standardise on aluminium composite and marine-grade substrates for anything mounted outdoors, even when a client's budget suggests a cheaper alternative — the cost difference is minor compared to a full sign replacement two winters later.",
      "Fasteners and mounting hardware get the same scrutiny. Stainless steel throughout, rated for the temperature range we actually see locally, because a rusted bracket is often the real cause of a sign that looks like it's failing structurally.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "metro-retail-signage-rollout",
    title: "Six-Location Signage Rollout",
    client: "Metro Retail Group",
    category: "Exterior",
    year: "2025",
    summary: "Standardised exterior and interior signage across six retail locations in under ten weeks.",
    challenge:
      "Metro Retail Group had grown through acquisition, inheriting six stores with six different signage standards. Their rebrand launch date was fixed, leaving no room for a slow rollout.",
    solution:
      "We built a single design system covering fascia signage, window graphics and interior wayfinding, then scheduled parallel production and phased installation crews across all six sites simultaneously.",
    result:
      "All six locations opened under a unified brand on launch day, with zero installation delays and consistent Pantone-matched finishes across every site.",
    stats: [
      { label: "Locations", value: "6" },
      { label: "Timeline", value: "10 weeks" },
      { label: "Sign types", value: "14" },
    ],
  },
  {
    slug: "nova-bank-led-facade",
    title: "Landmark LED Facade",
    client: "Nova Bank",
    category: "LED",
    year: "2025",
    summary: "A programmable RGB facade display that turned a flagship branch into a recognisable city landmark.",
    challenge:
      "Nova Bank's flagship branch sat on a high-visibility corner but had no distinct identity after dark, losing impact against neighbouring illuminated storefronts.",
    solution:
      "We engineered a full-facade LED matrix with weatherproof modules and a remote content management system, allowing the bank's marketing team to update branding moments without site visits.",
    result:
      "The facade is now referenced as a city landmark in local press, with foot traffic past the branch increasing measurably after installation.",
    stats: [
      { label: "LED modules", value: "3,200" },
      { label: "Brightness", value: "6,500 nits" },
      { label: "Uptime", value: "99.8%" },
    ],
  },
  {
    slug: "balkan-logistics-fleet-wrap",
    title: "40-Vehicle Fleet Branding",
    client: "Balkan Logistics",
    category: "Vehicle Branding",
    year: "2025",
    summary: "Full cast-vinyl wraps applied across a 40-vehicle delivery fleet with zero colour variance.",
    challenge:
      "Balkan Logistics needed their entire delivery fleet wrapped ahead of a regional expansion launch, with strict colour consistency across vehicles wrapped weeks apart.",
    solution:
      "We built a colour-managed production pipeline with batch-matched vinyl stock and a dedicated climate-controlled wrap bay, scheduling vehicles in rotation to avoid fleet downtime.",
    result:
      "All 40 vehicles were wrapped ahead of the launch date with verified colour consistency, and the fleet has since become the client's most-cited brand asset.",
    stats: [
      { label: "Vehicles", value: "40" },
      { label: "Vinyl rating", value: "7 years" },
      { label: "Downtime", value: "0 days" },
    ],
  },
];
