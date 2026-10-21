// ============================================================================
// AR STUDIO — AGENCY CONFIGURATION
// ----------------------------------------------------------------------------
// This is the single source of truth for your business information.
// Edit the values below and every page updates automatically.
// ============================================================================

export const agency = {
  name: "AR Studio",
  shortName: "AR",
  tagline: "We design digital experiences that define brands.",
  founderName: "Areeb Rehmani",
  email: "saytoareebrehmani@gmail.com",
  // WhatsApp number with country code, digits only (no +, no spaces).
  whatsapp: "918755719882",
  whatsappDisplay: "+91 8755719882",
  location: "Bareilly, India",
  currency: "INR",
  currencySymbol: "₹",
  primaryLanguage: "English",
  secondaryLanguage: "Hindi",
  // Update these to your real social URLs. "#" means "not set yet".
  social: {
    instagram: "#",
    behance: "#",
    dribbble: "#",
    x: "#",
    linkedin: "#",
  },
  // Used for canonical URLs / sitemap. Change to your real domain before launch.
  siteUrl: "https://arstudio.example.com",
};

export type Agency = typeof agency;

// Navigation links
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

// Build a WhatsApp click-to-chat link with an optional prefilled message.
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${agency.whatsapp}`;
  if (message && message.trim()) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
