import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import { SectionLabel } from "@/components/ui";
import { agency } from "@/config/agency";
import FinalCta from "@/sections/FinalCta";

const principles = [
  { title: "Design with purpose", desc: "Every element earns its place. Nothing decorative for decoration's sake." },
  { title: "Clarity over cleverness", desc: "Visitors should never feel lost. Navigation and hierarchy come first." },
  { title: "Details matter", desc: "The difference between good and great lives in the margins — spacing, contrast, motion." },
  { title: "Honest timelines", desc: "No overpromising, no surprises. You always know what to expect and when." },
];

const approach = [
  "Listen first — your goals shape the project, not the other way around.",
  "Design in the open — you see progress and give feedback at each stage.",
  "Build to last — clean, maintainable code that performs long after launch.",
  "Hand over clearly — you get files, guidance, and confidence to run your site.",
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About — ${agency.name}`}
        description={`Learn about ${agency.name}, a design studio founded by ${agency.founderName} building premium websites for brands and founders.`}
        path="/about"
      />
      <section className="pt-36 pb-16 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-balance max-w-4xl leading-[1.05]">
            Small studio. Big ideas. Exceptional execution.
          </h1>
          <p className="mt-6 text-lg text-white/55 max-w-2xl leading-relaxed">
            {agency.name} is a design studio founded by {agency.founderName},
            focused on one thing — building websites that make a brand
            impossible to ignore.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-5 text-white/55 leading-relaxed">
            <p>
              We work with businesses, personal brands, and founders who care
              about how they show up online. Every project gets the same
              attention to detail, whether it's a single landing page or a
              full multi-page build.
            </p>
            <p>
              The studio is based in {agency.location} and works with clients
              everywhere. Communication is direct — you talk to the person
              designing and building your site, not a project manager.
            </p>
            <p>
              This section is intentionally honest. Replace this text with your
              own background, qualifications, and story by editing{" "}
              <code className="text-white/70 text-sm">src/pages/AboutPage.tsx</code>.
            </p>

            <div className="pt-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                How we approach projects
              </h3>
              <ul className="space-y-3">
                {approach.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full accent-grad shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Founder card */}
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              <div className="absolute -inset-4 accent-grad opacity-10 blur-3xl rounded-full" />
              <div className="relative rounded-2xl border border-white/10 bg-ink-900 p-8">
                <div className="relative rounded-xl overflow-hidden mb-6 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.5)]" style={{ aspectRatio: "4/5" }}>
                  <img
                    src="/images/IMG_6507 copy.PNG"
                    alt={`${agency.founderName} — Founder of ${agency.name}`}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                    style={{ imageRendering: "auto" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
                <h3 className="font-display font-bold text-xl">{agency.founderName}</h3>
                <p className="text-sm text-white/50">Founder & Designer, {agency.name}</p>
                <p className="mt-3 text-sm text-white/45 leading-relaxed">
                  Based in {agency.location}. Working with clients worldwide.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-light hover:text-white transition-colors"
                >
                  Get in touch <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-10">Design principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl border border-white/10 bg-ink-900/50">
                <h3 className="font-display font-semibold text-base mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
