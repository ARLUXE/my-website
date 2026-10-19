import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { services } from "@/data/services";
import * as Icons from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
              Everything you need to launch a website that works.
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white whitespace-nowrap"
          >
            All services <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
            return (
              <div
                key={s.id}
                className="group relative p-6 rounded-2xl border border-white/10 bg-ink-900/50 hover:bg-ink-900 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent-light">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-white/30 font-mono">
                    {String(services.indexOf(s) + 1).padStart(2, "0")}
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
  );
}
