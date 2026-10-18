export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string; // lucide icon name
};

export const services: Service[] = [
  {
    id: "business-website",
    title: "Business Website Design",
    description:
      "Clean, professional websites that communicate what your business does and make it easy for customers to act.",
    deliverables: ["Custom layout", "Mobile-first design", "Contact integration", "SEO foundations"],
    icon: "Building2",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Websites",
    description:
      "Showcase your work, skills, and story with a portfolio that feels unmistakably yours.",
    deliverables: ["Project gallery", "About section", "Resume/CV display", "Contact form"],
    icon: "User",
  },
  {
    id: "logo-designer-portfolio",
    title: "Logo Designer Portfolio Websites",
    description:
      "Present your identity work in a gallery that lets each logo and case study breathe.",
    deliverables: ["Logo showcase grid", "Brand case studies", "Process page", "Enquiry form"],
    icon: "PenTool",
  },
  {
    id: "corporate-website",
    title: "Professional & Corporate Websites",
    description:
      "Multi-page websites for companies that need credibility, clarity, and structure at scale.",
    deliverables: ["Multi-page structure", "Services layout", "Team section", "CMS-ready"],
    icon: "Briefcase",
  },
  {
    id: "landing-page",
    title: "Landing Page Design",
    description:
      "Focused, fast, conversion-driven single-page sites for launches, campaigns, and product offers.",
    deliverables: ["Single-page layout", "Conversion sections", "Lead capture", "Fast load"],
    icon: "Rocket",
  },
  {
    id: "ecommerce-website",
    title: "E-commerce Website Design",
    description:
      "Storefronts designed to make products look premium and checkout feel effortless.",
    deliverables: ["Product grid", "Product detail layout", "Cart & checkout UX", "Category pages"],
    icon: "ShoppingBag",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Rethink an existing site — better structure, modern visuals, and improved clarity without losing your identity.",
    deliverables: ["Audit & recommendations", "Refreshed design", "Improved structure", "Migration plan"],
    icon: "RefreshCw",
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Updates",
    description:
      "Ongoing updates, content changes, and improvements so your site keeps performing after launch.",
    deliverables: ["Content updates", "Security patches", "Performance checks", "Monthly support"],
    icon: "Wrench",
  },
  {
    id: "branding-identity",
    title: "Branding & Visual Identity",
    description:
      "Logo, color, type, and visual systems that give your brand a consistent, recognizable presence.",
    deliverables: ["Logo concepts", "Color & type system", "Brand guidelines", "Asset pack"],
    icon: "Palette",
  },
];
