import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import { SectionLabel } from "@/components/ui";
import { services } from "@/data/services";
import * as Icons from "lucide-react";
import FinalCta from "@/sections/FinalCta";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services — AR Studio"
        description="Website design services: business websites, personal portfolios, logo designer portfolios, corporate sites, landing pages, e-commerce, redesigns, maintenance, and branding."
        path="/services"
      />
      <section className="pt-36 pb-16 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Services</SectionLabel>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-balance max-w-3xl">
            Design and build services for every kind of website.
          </h1>
          <p className="mt-5 text-white/55 max-w-2xl leading-relaxed">
            From a single landing page to a full multi-page build, each service
            is custom-designed for your brand.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
              return (
                <div
                  key={s.id}
                  className="group p-6 rounded-2xl border border-white/10 bg-ink-900/50 hover:bg-ink-900 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent-light">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-white/30 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="text-xs text-white/45 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent-light" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 hover:text-accent-light transition-colors"
                  >
                    Enquire <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
