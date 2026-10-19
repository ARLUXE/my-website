import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import { SectionLabel } from "@/components/ui";
import { pricingPackages, pricingNote } from "@/data/pricing";
import Faq from "@/sections/Faq";

export default function PricingPage() {
  return (
    <>
      <Seo
        title="Pricing — AR Studio"
        description="Transparent starting prices for website design in INR. Starter, Professional, and Premium packages — each quoted individually."
        path="/pricing"
      />
      <section className="pt-36 pb-16 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Pricing</SectionLabel>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-balance max-w-3xl">
            Starting estimates, clearly stated.
          </h1>
          <p className="mt-5 text-white/55 max-w-2xl leading-relaxed">
            Every project is quoted individually. These starting prices give you
            a sense of scope — the final price depends on your requirements.
          </p>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-accent/40 bg-gradient-to-b from-accent/10 to-ink-900 shadow-glow"
                    : "border-white/10 bg-ink-900/50 hover:border-white/20"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider accent-grad text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-xl">{pkg.name}</h3>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-3xl">{pkg.price}</span>
                  <span className="text-xs text-white/40">starting</span>
                </div>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">{pkg.idealClient}</p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/50">
                  <div>
                    <div className="text-white/30 mb-0.5">Scope</div>
                    <div className="text-white/80">{pkg.scope}</div>
                  </div>
                  <div>
                    <div className="text-white/30 mb-0.5">Delivery</div>
                    <div className="text-white/80">{pkg.delivery}</div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="w-4 h-4 text-accent-light mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    pkg.highlight
                      ? "accent-grad text-white hover:shadow-glow"
                      : "border border-white/15 text-white hover:bg-white/5 hover:border-white/30"
                  }`}
                >
                  Get a Custom Quote <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/40 max-w-2xl">{pricingNote}</p>
        </div>
      </section>
      <Faq />
    </>
  );
}
