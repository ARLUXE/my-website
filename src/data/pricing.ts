export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  idealClient: string;
  features: string[];
  scope: string;
  delivery: string;
  highlight?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "₹1,000",
    idealClient: "Individuals and small businesses getting online for the first time.",
    features: [
      "1–3 page custom design",
      "Mobile-first responsive layout",
      "Contact form or WhatsApp button",
      "Basic SEO foundations",
      "1 round of revisions",
    ],
    scope: "1–3 pages",
    delivery: "Approx. 5–7 days",
  },
  {
    id: "professional",
    name: "Professional Website",
    price: "₹5,000",
    idealClient: "Businesses and professionals needing a polished multi-section site.",
    features: [
      "4–8 page custom design",
      "Mobile-first responsive layout",
      "Portfolio or services section",
      "SEO foundations & metadata",
      "Contact form + WhatsApp",
      "2 rounds of revisions",
    ],
    scope: "4–8 pages",
    delivery: "Approx. 10–14 days",
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium Website",
    price: "₹10,000",
    idealClient: "Brands needing custom design, advanced layouts, and added functionality.",
    features: [
      "Custom multi-page design",
      "Advanced layouts & interactions",
      "Custom components / functionality",
      "SEO foundations & metadata",
      "Contact form + WhatsApp",
      "3 rounds of revisions",
      "Post-launch support window",
    ],
    scope: "8+ pages / custom scope",
    delivery: "Approx. 2–4 weeks",
  },
];

export const pricingNote =
  "These are starting estimates. The final price depends on your project's scope, features, and timeline. Request a custom quote for an exact proposal.";
