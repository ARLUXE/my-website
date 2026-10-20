import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ArrowUpRight, Clock, ShoppingBag, Filter } from "lucide-react";
import { DemoShell } from "@/components/DemoShell";
import { SmartImage } from "@/components/ui";
import { WatchDial } from "@/components/watch/WatchDial";
import { watches, formatINR } from "@/data/watches";
import { getProject } from "@/data/portfolio";

const palette = [
  { name: "Graphite Black", hex: "#070708" },
  { name: "Champagne Gold", hex: "#c9a227" },
  { name: "Ivory", hex: "#f0e6d0" },
  { name: "Gunmetal", hex: "#2a2a30" },
];

export default function ArLuxeCaseStudy() {
  const project = getProject("arluxe")!;
  const heroWatch = watches.find((w) => w.id === "obsidian")!;

  return (
    <DemoShell barColor="bg-[#070708]" projectId="arluxe">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#070708] py-20">
        <div
          className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-20"
          style={{ background: "#c9a227" }}
        />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#c9a227]">FLAGSHIP CONCEPT PROJECT</span>
            <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight">
              AR LUXE —<br />A watch brand,<br />built from zero.
            </h1>
            <p className="mt-6 text-white/55 text-lg leading-relaxed max-w-lg">
              A fictional luxury watch e-commerce concept: brand identity, eight
              timepieces, a live-displaying watch dial, and a full demo store —
              designed and built to showcase AR Studio's premium e-commerce work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/projects/arluxe"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors"
              >
                View Live Project <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> All Projects
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WatchDial watch={heroWatch} size={240} showDigital />
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section eyebrow="OVERVIEW" title="The brief">
        <p className="text-white/60 leading-relaxed max-w-2xl">
          AR LUXE is a self-initiated concept project. The objective was to
          design an independent luxury watch brand and a complete e-commerce
          experience around it — one that feels like a real maison, not a
          template. Every watch dial on the site displays the visitor's actual
          local time, kept in sync across the entire store from a single shared
          time source.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <Stat label="Timepieces" value="8" />
          <Stat label="Live clock" value="1s sync" />
          <Stat label="Price range" value="₹24,999–₹59,999" />
        </div>
      </Section>

      {/* Objectives */}
      <Section eyebrow="OBJECTIVES" title="Fictional concept goals">
        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {[
            "Create an original luxury watch brand identity from scratch.",
            "Design eight distinct timepieces with consistent but unique dials.",
            "Make every watch dial display real, synchronized live time.",
            "Build a working cart and demo checkout without a backend.",
            "Keep the experience premium, restrained, and editorial.",
            "Clearly identify the project as a concept — no false claims.",
          ].map((o) => (
            <li key={o} className="flex items-start gap-3 text-sm text-white/65 p-4 rounded-xl border border-white/10 bg-ink-900/40">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0" /> {o}
            </li>
          ))}
        </ul>
      </Section>

      {/* Brand identity */}
      <Section eyebrow="BRAND IDENTITY" title="Visual direction">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-white/60 leading-relaxed mb-6">
              The AR LUXE identity is built on deep graphite black, champagne
              gold, and ivory. The wordmark uses wide letter-spacing for a
              couture feel, and an AR monogram anchors the dial and favicon.
            </p>
            <div className="rounded-2xl border border-white/10 bg-[#070708] p-8 grid place-items-center">
              <div className="text-center">
                <div className="font-display font-extrabold tracking-[0.3em] text-3xl text-white">AR LUXE</div>
                <div className="mt-2 text-[10px] tracking-[0.4em] text-[#c9a227]">AUTOMATIC · 2025</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">Color palette</h4>
            <div className="grid grid-cols-2 gap-3">
              {palette.map((c) => (
                <div key={c.name} className="rounded-xl border border-white/10 overflow-hidden">
                  <div className="h-16" style={{ background: c.hex }} />
                  <div className="p-3 bg-ink-900/50">
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-white/40 font-mono">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mt-6 mb-3">Typography</h4>
            <div className="rounded-xl border border-white/10 bg-ink-900/50 p-5 space-y-2">
              <p className="font-display font-extrabold text-2xl">Manrope Display</p>
              <p className="font-sans text-sm text-white/60">Inter for body text — calm, precise, readable.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Live watch feature */}
      <Section eyebrow="SIGNATURE FEATURE" title="The live watch dial">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <WatchDial watch={heroWatch} size={300} showDigital />
          </div>
          <div>
            <p className="text-white/60 leading-relaxed mb-5">
              Each watch face is a hand-built SVG component. The hour, minute,
              and second hand angles are calculated mathematically from the
              visitor's device clock and updated every second. A single shared
              hook keeps every visible dial synchronized — no per-card timers,
              no drift, no hardcoded time.
            </p>
            <div className="space-y-3">
              <Feature icon={Clock} title="Shared time source" desc="One useLiveTime hook instance per mount; all dials read the same clock." />
              <Feature icon={ShoppingBag} title="Cart-aware" desc="Adding a watch opens the cart drawer; state persists in localStorage." />
              <Feature icon={Filter} title="Filterable catalogue" desc="Filter by strap, dial color, price; sort by price or name." />
            </div>
          </div>
        </div>
      </Section>

      {/* Catalogue preview */}
      <Section eyebrow="THE COLLECTION" title="Eight timepieces">
        <p className="text-white/60 leading-relaxed mb-6 max-w-2xl">
          Every watch has a distinct dial color, case material, strap, and set
          of specifications — all editable from one centralized data file.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {watches.slice(0, 4).map((w) => (
            <Link
              key={w.id}
              to={`/projects/arluxe/watches/${w.slug}`}
              className="group rounded-2xl border border-white/10 bg-ink-900/40 p-3 hover:border-white/25 transition-colors"
            >
              <div className="aspect-[3/4] mb-3 rounded-xl overflow-hidden bg-ink-800">
                <SmartImage src={w.image} alt={w.name} accent="#c9a227" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <p className="font-display font-semibold text-sm truncate px-2">{w.name}</p>
              <p className="text-xs text-white/40 px-2 pb-1">{formatINR(w.price)}</p>
            </Link>
          ))}
        </div>
        <Link
          to="/projects/arluxe/catalogue"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-[#c9a227] hover:text-[#e0c060]"
        >
          View full catalogue <ArrowUpRight className="w-4 h-4" />
        </Link>
      </Section>

      {/* Tech stack */}
      <Section eyebrow="TECHNOLOGY" title="Built with">
        <div className="flex flex-wrap gap-2.5">
          {["React 18", "TypeScript", "Tailwind CSS", "React Router", "SVG Watch Dial", "localStorage Cart", "Vite"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-ink-900/50 text-sm text-white/70">
              {t}
            </span>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <section className="py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.3em] text-[#c9a227] mb-4">CONCEPT PROJECT</p>
          <p className="font-display text-2xl sm:text-3xl leading-relaxed text-white/85 font-light">
            AR LUXE is a fictional brand. No watches are sold, no payments are
            processed, and no real client commissioned this work.
          </p>
          <Link
            to="/projects/arluxe"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors"
          >
            Explore the AR LUXE store <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </DemoShell>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <p className="text-xs tracking-[0.3em] text-[#c9a227] mb-3">{eyebrow}</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-ink-900/40">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
      <p className="font-display font-bold text-xl text-[#c9a227]">{value}</p>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-ink-900/40">
      <div className="grid place-items-center w-9 h-9 rounded-lg bg-[#c9a227]/10 text-[#c9a227] shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-white/50 mt-0.5">{desc}</p>
      </div>
    </div>
  );
}
