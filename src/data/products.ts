export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  description: string;
  materials: string;
  care: string;
  shipping: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  featured: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    name: "Formal & Dress Socks",
    slug: "formal",
    description: "Refined elegance for the modern professional. Crafted from premium combed cotton with reinforced heels and toes.",
    image: "https://image.qwenlm.ai/generated-images/92811f63-0691-4976-82a2-e054fe468478/_result.png",
    count: 12,
  },
  {
    name: "Casual & Everyday",
    slug: "casual",
    description: "Comfortable versatility for daily wear. Soft-touch fabrics with arch support and moisture-wicking technology.",
    image: "https://image.qwenlm.ai/generated-images/c9ac081b-7300-402b-a0df-eab377101dbd/_result.png",
    count: 18,
  },
  {
    name: "Athletic & Sports",
    slug: "athletic",
    description: "Performance-engineered for peak activity. Strategic cushioning, ventilation zones, and compression support.",
    image: "https://image.qwenlm.ai/generated-images/214dbd85-5278-412d-9a15-ba60a31f6421/_result.png",
    count: 9,
  },
  {
    name: "Kids Collection",
    slug: "kids",
    description: "Playful designs with durable construction. Non-slip soles and gentle elastic for growing feet.",
    image: "https://image.qwenlm.ai/generated-images/73d3aad3-cf1b-485b-aa4e-6d294c1d5404/_result.png",
    count: 14,
  },
  {
    name: "Gift Sets",
    slug: "gifts",
    description: "Curated collections in premium packaging. The considered gift for those who appreciate quality.",
    image: "https://image.qwenlm.ai/generated-images/b02f6a1f-265e-4260-a643-23b6437ef92f/_result.png",
    count: 6,
  },
  {
    name: "Custom & Bulk Orders",
    slug: "custom",
    description: "Bespoke manufacturing for brands and retailers. Custom designs, private labeling, and competitive bulk pricing.",
    image: "https://image.qwenlm.ai/generated-images/0de0c7b4-514b-4481-9256-d2d59d20c2cb/_result.png",
    count: 0,
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "heritage-merino-dress-sock",
    name: "Heritage Merino Dress Sock",
    category: "Formal & Dress Socks",
    categorySlug: "formal",
    price: 24,
    description: "Our flagship dress sock, woven from New Zealand merino wool blended with Egyptian cotton. A considered choice for the discerning professional — breathable, temperature-regulating, and impossibly soft against the skin.",
    materials: "65% Merino Wool, 30% Egyptian Cotton, 5% Elastane. Reinforced heel and toe with nylon core.",
    care: "Machine wash cold, gentle cycle. Lay flat to dry. Do not bleach. Cool iron if needed.",
    shipping: "Ships within 2-3 business days. Free shipping on orders above $75. International shipping available.",
    sizes: ["S (5-7)", "M (8-10)", "L (11-13)", "XL (14-16)"],
    colors: [
      { name: "Midnight Navy", hex: "#0F172A" },
      { name: "Charcoal", hex: "#374151" },
      { name: "Burgundy", hex: "#7F1D1D" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/92811f63-0691-4976-82a2-e054fe468478/_result.png"],
    featured: true,
  },
  {
    id: "2",
    slug: "ceylon-cotton-crew",
    name: "Ceylon Cotton Crew",
    category: "Casual & Everyday",
    categorySlug: "casual",
    price: 16,
    description: "Everyday luxury redefined. Our signature crew sock features locally-sourced organic cotton with a ribbed cuff that stays put. The foundation of a well-dressed wardrobe.",
    materials: "80% Organic Cotton, 15% Recycled Polyester, 5% Elastane. Terry loop cushioning at footbed.",
    care: "Machine wash warm. Tumble dry low. Do not iron directly on elastic.",
    shipping: "Ships within 2-3 business days. Free shipping on orders above $75.",
    sizes: ["S (5-7)", "M (8-10)", "L (11-13)"],
    colors: [
      { name: "Stone", hex: "#D6D3D1" },
      { name: "Forest", hex: "#166534" },
      { name: "Navy", hex: "#1E3A5F" },
      { name: "Terracotta", hex: "#C2410C" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/c9ac081b-7300-402b-a0df-eab377101dbd/_result.png"],
    featured: true,
  },
  {
    id: "3",
    slug: "performance-athletic-quarter",
    name: "Performance Athletic Quarter",
    category: "Athletic & Sports",
    categorySlug: "athletic",
    price: 19,
    description: "Engineered for movement. Strategic mesh ventilation, arch compression, and seamless toe construction keep you comfortable from warm-up to cool-down.",
    materials: "55% Coolmax® Polyester, 30% Cotton, 10% Nylon, 5% Spandex. Moisture-wicking and quick-dry.",
    care: "Machine wash cold. Do not use fabric softener. Tumble dry low.",
    shipping: "Ships within 2-3 business days. Free shipping on orders above $75.",
    sizes: ["S (5-7)", "M (8-10)", "L (11-13)", "XL (14-16)"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#111827" },
      { name: "Steel Grey", hex: "#6B7280" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/214dbd85-5278-412d-9a15-ba60a31f6421/_result.png"],
    featured: true,
  },
  {
    id: "4",
    slug: "little-explorers-kids-pack",
    name: "Little Explorers 3-Pack",
    category: "Kids Collection",
    categorySlug: "kids",
    price: 22,
    description: "Three pairs of adventure-ready socks for little feet. Non-slip grips, reinforced toes for active play, and gentle elastic that won't leave marks.",
    materials: "75% Combed Cotton, 20% Polyester, 5% Elastane. Non-slip silicone grip dots on sole.",
    care: "Machine wash warm. Tumble dry low. Do not bleach.",
    shipping: "Ships within 2-3 business days. Free shipping on orders above $75.",
    sizes: ["Toddler (8-10)", "Little Kid (11-13)", "Big Kid (1-3)"],
    colors: [
      { name: "Rainbow Mix", hex: "#F59E0B" },
      { name: "Ocean Blues", hex: "#3B82F6" },
      { name: "Jungle Greens", hex: "#22C55E" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/73d3aad3-cf1b-485b-aa4e-6d294c1d5404/_result.png"],
    featured: false,
  },
  {
    id: "5",
    slug: "the-gentlemans-collection",
    name: "The Gentleman's Collection",
    category: "Gift Sets",
    categorySlug: "gifts",
    price: 68,
    description: "Four pairs of our finest dress socks, presented in a handcrafted wooden box. A gift that speaks of considered taste and enduring quality.",
    materials: "60% Merino Wool, 30% Silk, 10% Cashmere. Each pair in a different classic pattern.",
    care: "Hand wash recommended. Lay flat to dry. Store in provided cedar box.",
    shipping: "Ships within 3-5 business days. Gift wrapping included. Free shipping.",
    sizes: ["M (8-10)", "L (11-13)"],
    colors: [
      { name: "Classic Edit", hex: "#1E293B" },
      { name: "Earth Tones", hex: "#92400E" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/b02f6a1f-265e-4260-a643-23b6437ef92f/_result.png"],
    featured: true,
  },
  {
    id: "6",
    slug: "island-breeze-linen-sock",
    name: "Island Breeze Linen Sock",
    category: "Casual & Everyday",
    categorySlug: "casual",
    price: 21,
    description: "Inspired by the Sri Lankan coast. A lightweight linen-cotton blend that breathes with you — perfect for warm climates and effortless style.",
    materials: "55% European Linen, 35% Organic Cotton, 8% Polyamide, 2% Elastane.",
    care: "Machine wash cold, gentle cycle. Reshape while damp. Do not tumble dry.",
    shipping: "Ships within 2-3 business days. Free shipping on orders above $75.",
    sizes: ["S (5-7)", "M (8-10)", "L (11-13)"],
    colors: [
      { name: "Sand", hex: "#D4C5A9" },
      { name: "Sky", hex: "#93C5FD" },
      { name: "Coral", hex: "#FB923C" },
    ],
    images: ["https://image.qwenlm.ai/generated-images/c9ac081b-7300-402b-a0df-eab377101dbd/_result.png"],
    featured: true,
  },
];

export const testimonials = [
  {
    name: "James Whitfield",
    role: "Boutique Owner, London",
    text: "The quality is exceptional. Our customers return specifically for these socks — the craftsmanship is immediately apparent.",
  },
  {
    name: "Sarah Chen",
    role: "Procurement Director, Melbourne",
    text: "Reliable manufacturing, consistent quality, and genuine partnership. Ceylon Threads has been our trusted supplier for three years.",
  },
  {
    name: "Michael Torres",
    role: "Private Client, New York",
    text: "I've tried every premium sock brand. These are simply the best — the merino blend is extraordinary against the skin.",
  },
];
