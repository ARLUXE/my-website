// ============================================================================
// AR LUXE — LUXURY WATCH PRODUCT CATALOGUE
// ----------------------------------------------------------------------------
// Every AR LUXE watch is an automatic mechanical timepiece with an open
// skeleton dial showing moving gears. Prices are fictional demonstration
// placeholders in INR.
// ============================================================================

export type Watch = {
  id: string;
  slug: string;
  name: string;
  model: string;
  price: number; // INR
  dialColor: string;
  dialHex: string; // for the rendered dial
  caseMaterial: string;
  caseDiameter: string; // mm
  strap: string;
  strapHex: string;
  movement: string; // always "Automatic"
  waterResistance: string;
  description: string;
  availability: "In Stock" | "Limited" | "Made to Order";
  accent: string; // accent hex for UI
  tags: string[];
  features: string[];
  image: string; // real product photo
  strapType: "leather" | "bracelet"; // for SVG rendering
  skeleton: boolean; // all true — open skeleton dial
  lifetimeValue: string; // visible badge text
};

// All AR LUXE watches share these properties:
// - Automatic mechanical movement
// - Open skeleton dial with visible moving gears
// - Analog display with live time
// - Lifetime Value badge (no warranty claim — conceptual value indicator)
const AUTOMATIC = "Automatic";
const SKELETON = true;
const LIFETIME = "Lifetime Value";

export const watches: Watch[] = [
  {
    id: "nocturne",
    slug: "nocturne",
    name: "AR LUXE Nocturne",
    model: "AL-NCT-01",
    price: 24999,
    dialColor: "Midnight Skeleton",
    dialHex: "#0d0d12",
    caseMaterial: "Brushed Steel",
    caseDiameter: "42mm",
    strap: "Black Leather",
    strapHex: "#1a1410",
    movement: AUTOMATIC,
    waterResistance: "50m",
    description:
      "A quiet study in darkness. The Nocturne reveals its beating mechanical heart through an open skeleton dial — deep midnight tones, brushed steel, and supple black leather. Restraint as a statement.",
    availability: "In Stock",
    accent: "#c9a227",
    tags: ["Automatic", "Skeleton", "Leather", "Black Dial"],
    features: ["Open skeleton dial", "Sapphire crystal", "Exhibition caseback", "40h power reserve", "Hand-finished movement"],
    image: "https://images.pexels.com/photos/5443566/pexels-photo-5443566.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "leather",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "meridian",
    slug: "meridian",
    name: "AR LUXE Meridian",
    model: "AL-MRD-02",
    price: 32999,
    dialColor: "Champagne Skeleton",
    dialHex: "#d4b876",
    caseMaterial: "Polished Steel",
    caseDiameter: "40mm",
    strap: "Steel Bracelet",
    strapHex: "#b8b8c0",
    movement: AUTOMATIC,
    waterResistance: "100m",
    description:
      "Light caught in motion. The Meridian's champagne skeleton dial shifts with every angle, its gears visible beneath sapphire crystal. A polished steel bracelet that feels weightless on the wrist.",
    availability: "In Stock",
    accent: "#d4b876",
    tags: ["Automatic", "Skeleton", "Bracelet", "Champagne Dial"],
    features: ["Open skeleton dial", "Sunburst finish", "Integrated bracelet", "50h power reserve", "Screw-down crown"],
    image: "https://images.pexels.com/photos/39620397/pexels-photo-39620397.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "bracelet",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "eclipse",
    slug: "eclipse",
    name: "AR LUXE Eclipse",
    model: "AL-ECL-03",
    price: 39999,
    dialColor: "Graphite Skeleton",
    dialHex: "#2a2a30",
    caseMaterial: "PVD Gunmetal",
    caseDiameter: "42mm",
    strap: "Grey Suede",
    strapHex: "#6a6a70",
    movement: AUTOMATIC,
    waterResistance: "50m",
    description:
      "The Eclipse traces its mechanical rhythm through a graphite skeleton dial — a complication for those who measure time by the sky. Gunmetal case, grey suede, a watch for after dark.",
    availability: "Limited",
    accent: "#8a8a96",
    tags: ["Automatic", "Skeleton", "Suede", "Graphite Dial"],
    features: ["Open skeleton dial", "PVD gunmetal finish", "Sapphire crystal", "Display caseback", "Moonphase sub-dial"],
    image: "https://images.pexels.com/photos/12915491/pexels-photo-12915491.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "bracelet",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "heritage",
    slug: "heritage",
    name: "AR LUXE Heritage",
    model: "AL-HRT-04",
    price: 27499,
    dialColor: "Ivory Skeleton",
    dialHex: "#f4ecd8",
    caseMaterial: "Polished Steel",
    caseDiameter: "38mm",
    strap: "Cognac Leather",
    strapHex: "#8a4a2a",
    movement: AUTOMATIC,
    waterResistance: "30m",
    description:
      "A nod to watchmaking's golden age, reimagined. The Heritage wears a warm ivory skeleton dial — its automatic movement visible beneath enamel-finished bridges — paired with cognac leather.",
    availability: "In Stock",
    accent: "#b8864a",
    tags: ["Automatic", "Skeleton", "Leather", "Ivory Dial"],
    features: ["Open skeleton dial", "Slim 38mm case", "Automatic movement", "Polished finish", "Enamel-style bridges"],
    image: "https://images.pexels.com/photos/3916049/pexels-photo-3916049.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "leather",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "vanguard",
    slug: "vanguard",
    name: "AR LUXE Vanguard",
    model: "AL-VGD-05",
    price: 44999,
    dialColor: "Cobalt Skeleton",
    dialHex: "#1a3a8a",
    caseMaterial: "Brushed Titanium",
    caseDiameter: "44mm",
    strap: "Steel Bracelet",
    strapHex: "#9aa0aa",
    movement: AUTOMATIC,
    waterResistance: "200m",
    description:
      "Built for the deep. The Vanguard's cobalt skeleton dial reveals a rugged automatic movement, housed in brushed titanium that takes 200m of pressure without flinching — a tool watch that refuses to look like one.",
    availability: "In Stock",
    accent: "#3a6ad8",
    tags: ["Automatic", "Skeleton", "Diver", "Titanium", "Blue Dial"],
    features: ["Open skeleton dial", "200m water resistance", "Titanium case", "Luminous indices", "Rotating bezel"],
    image: "https://images.pexels.com/photos/33750536/pexels-photo-33750536.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "bracelet",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "celeste",
    slug: "celeste",
    name: "AR LUXE Celeste",
    model: "AL-CLS-06",
    price: 29999,
    dialColor: "Silver Skeleton",
    dialHex: "#c8c8d0",
    caseMaterial: "Polished Steel",
    caseDiameter: "39mm",
    strap: "Mauve Leather",
    strapHex: "#a88a9a",
    movement: AUTOMATIC,
    waterResistance: "50m",
    description:
      "A whisper of color meets mechanical transparency. The Celeste's silver skeleton dial catches light in concentric ripples around visible gears, set against a soft mauve strap for a quietly modern dress watch.",
    availability: "In Stock",
    accent: "#b89ac8",
    tags: ["Automatic", "Skeleton", "Leather", "Silver Dial"],
    features: ["Open skeleton dial", "Guilloché-style bridges", "Slim profile", "Sapphire crystal", "Exhibition caseback"],
    image: "https://images.pexels.com/photos/39620396/pexels-photo-39620396.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "bracelet",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "obsidian",
    slug: "obsidian",
    name: "AR LUXE Obsidian",
    model: "AL-OBS-07",
    price: 49999,
    dialColor: "Black Skeleton",
    dialHex: "#08080a",
    caseMaterial: "Black PVD Steel",
    caseDiameter: "43mm",
    strap: "Black Alligator",
    strapHex: "#101010",
    movement: "Automatic Skeleton",
    waterResistance: "50m",
    description:
      "The movement made visible. The Obsidian strips everything to its working parts — a fully skeletonized automatic movement under dual sapphire crystal, finished in black PVD and hand-stitched alligator.",
    availability: "Limited",
    accent: "#e0c060",
    tags: ["Automatic", "Skeleton", "Alligator", "Black Dial"],
    features: ["Fully skeletonized movement", "Black PVD finish", "Dual sapphire crystal", "Alligator strap", "48h power reserve"],
    image: "https://images.pexels.com/photos/39640513/pexels-photo-39640513.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "bracelet",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
  {
    id: "grandmaster",
    slug: "grandmaster",
    name: "AR LUXE Grandmaster",
    model: "AL-GM-08",
    price: 59999,
    dialColor: "Ivory Grand Feu Skeleton",
    dialHex: "#f0e6d0",
    caseMaterial: "18k Gold Plated",
    caseDiameter: "40mm",
    strap: "Black Alligator",
    strapHex: "#0c0c0c",
    movement: AUTOMATIC,
    waterResistance: "50m",
    description:
      "The apex of the collection. The Grandmaster pairs a grand feu enamel skeleton dial — its automatic movement visible beneath hand-painted bridges — with an 18k gold-plated case and hand-stitched alligator.",
    availability: "Made to Order",
    accent: "#d4af37",
    tags: ["Automatic", "Skeleton", "Gold", "Alligator", "Enamel Dial"],
    features: ["Grand feu enamel skeleton", "18k gold plate", "Hand-stitched strap", "Display caseback", "72h power reserve"],
    image: "https://images.pexels.com/photos/39620423/pexels-photo-39620423.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    strapType: "leather",
    skeleton: SKELETON,
    lifetimeValue: LIFETIME,
  },
];

export function getWatch(slug: string): Watch | undefined {
  return watches.find((w) => w.slug === slug);
}

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

// Distinct strap materials and dial colors for filters.
export const strapOptions = Array.from(new Set(watches.map((w) => w.strap)));
export const dialOptions = Array.from(new Set(watches.map((w) => w.dialColor)));
