import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { agency } from "@/config/agency";

const principles = [
  "Design with purpose — every element earns its place.",
  "Clarity over cleverness — visitors should never feel lost.",
  "Details matter — the difference between good and great is in the margins.",
  "Honest timelines — no overpromising, no surprises.",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
              Small studio. Big ideas. Exceptional execution.
            </h2>
            <p className="mt-5 text-white/55 leading-relaxed">
              {agency.name} is a design studio founded by{" "}
              <span className="text-white">{agency.founderName}</span>, focused on
              one thing — building websites that make a brand impossible to
              ignore.
            </p>
            <p className="mt-4 text-white/55 leading-relaxed">
              We work with businesses, personal brands, and founders who care
              about how they show up online. Every project gets the same
              attention to detail, whether it's a single landing page or a
              full multi-page build.
            </p>

            <div className="mt-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                Design Principles
              </h3>
              <ul className="space-y-3">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full accent-grad shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white"
            >
              More about the studio <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Founder card */}
          <div className="relative">
            <div className="absolute -inset-4 accent-grad opacity-10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-white/10 bg-ink-900 p-8">
              {/* Founder portrait */}
              <div className="relative rounded-xl overflow-hidden mb-6 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/images/IMG_6507 copy.PNG"
                  alt={`${agency.founderName} — Founder of ${agency.name}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <h3 className="font-display font-bold text-lg">{agency.founderName}</h3>
              <p className="text-sm text-white/50">Founder & Designer, {agency.name}</p>
              <p className="mt-3 text-sm text-white/45 leading-relaxed">
                Based in {agency.location}. Working with clients everywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
