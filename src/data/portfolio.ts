export type ProjectCategory =
  | "Business Websites"
  | "Personal Portfolios"
  | "Logo Designer Websites"
  | "E-commerce Concepts"
  | "Luxury Brand Websites"
  | "Landing Pages";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  tags: string[];
  accent: string; // hex
  demoRoute: string;
  caseStudyRoute?: string;
  year: string;
};

export const projectCategories: ProjectCategory[] = [
  "Business Websites",
  "Personal Portfolios",
  "Logo Designer Websites",
  "E-commerce Concepts",
  "Luxury Brand Websites",
  "Landing Pages",
];

export const projects: Project[] = [
  {
    id: "arluxe",
    title: "AR LUXE",
    category: "Luxury Brand Websites",
    tagline: "Luxury watch e-commerce — live-time concept store",
    description:
      "A flagship concept for a fictional luxury watch brand. Eight timepieces, a live-displaying watch dial driven by the visitor's clock, a functional cart, demo checkout, and editorial brand storytelling.",
    tags: ["E-commerce", "Luxury", "Watches", "Live Time"],
    accent: "#c9a227",
    demoRoute: "/projects/arluxe",
    caseStudyRoute: "/projects/arluxe/case-study",
    year: "2025",
  },
  {
    id: "luxora",
    title: "LUXORA",
    category: "Luxury Brand Websites",
    tagline: "Luxury fashion brand — editorial commerce concept",
    description:
      "An editorial e-commerce concept for a luxury fashion house. High-contrast typography, generous whitespace, and full-bleed imagery give each piece room to command attention.",
    tags: ["Editorial", "E-commerce", "Luxury", "Typography"],
    accent: "#c9a227",
    demoRoute: "/projects/luxora",
    year: "2025",
  },
  {
    id: "noir-frame",
    title: "NOIR FRAME",
    category: "Logo Designer Websites",
    tagline: "Logo designer portfolio — monochrome identity case studies",
    description:
      "A black-and-white portfolio concept for a logo designer. Identity work is presented in structured case studies with creative typographic moments.",
    tags: ["Portfolio", "Monochrome", "Identity", "Case Study"],
    accent: "#e5e5e5",
    demoRoute: "/projects/noir-frame",
    year: "2025",
  },
  {
    id: "atelier",
    title: "ATELIER",
    category: "Personal Portfolios",
    tagline: "Personal creative portfolio — minimal, type-led",
    description:
      "A minimal personal portfolio concept built on strong typography and a creative project gallery. Calm, confident, and easy to navigate.",
    tags: ["Portfolio", "Minimal", "Typography", "Gallery"],
    accent: "#ff6b4a",
    demoRoute: "/projects/atelier",
    year: "2025",
  },
  {
    id: "nova-digital",
    title: "NOVA DIGITAL",
    category: "Business Websites",
    tagline: "Technology business — modern service website",
    description:
      "A modern business website concept for a technology services company. Clear service sections, benefits grid, process flow, and a strong contact CTA.",
    tags: ["Business", "Services", "Technology", "Conversion"],
    accent: "#5b6cff",
    demoRoute: "/projects/nova-digital",
    year: "2025",
  },
  {
    id: "haven-estates",
    title: "HAVEN ESTATES",
    category: "Business Websites",
    tagline: "Real estate business — premium property listings",
    description:
      "A premium real estate concept with image-led property cards, listing layouts, and an enquiry flow designed to turn browsers into enquiries.",
    tags: ["Real Estate", "Listings", "Premium", "Enquiry"],
    accent: "#2e7d6b",
    demoRoute: "/projects/haven-estates",
    year: "2025",
  },
  {
    id: "aurel-skin",
    title: "AUREL SKIN",
    category: "E-commerce Concepts",
    tagline: "Beauty & skincare brand — soft editorial commerce",
    description:
      "A soft, neutral-toned skincare brand concept. Editorial product visuals, brand storytelling, and a gentle product showcase built around calm and trust.",
    tags: ["Skincare", "Editorial", "E-commerce", "Storytelling"],
    accent: "#d8b4a0",
    demoRoute: "/projects/aurel-skin",
    year: "2025",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
