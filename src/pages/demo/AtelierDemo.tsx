import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { SmartImage } from "@/components/ui";
import { projectImages } from "@/data/images";

const img = projectImages.atelier;

// ATELIER — Personal creative portfolio. Minimal, type-led, warm off-white.
export default function AtelierDemo() {
  return (
    <DemoShell barColor="bg-[#f5f3ef]">
      <div className="text-[#1a1a1a]">
        {/* Hero */}
        <section className="bg-[#f5f3ef] min-h-[90vh] flex items-center">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
            <div className="flex items-center justify-between mb-16">
              <span className="font-display font-extrabold text-xl">Atelier.</span>
              <nav className="hidden sm:flex gap-6 text-xs font-medium text-black/50">
                <span>Work</span><span>Studio</span><span>Contact</span>
              </nav>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <div>
                <p className="text-xs tracking-[0.3em] text-black/40 mb-6">SELECTED WORK — 2025</p>
                <h1 className="font-display font-extrabold text-6xl sm:text-8xl leading-[0.9] tracking-tighter">
                  Things<br />I make,<br />with care.
                </h1>
              </div>
              <div className="max-w-sm lg:justify-self-end">
                <p className="text-black/60 leading-relaxed">
                  A personal portfolio concept for a multidisciplinary creative.
                  Strong typography, calm layout, room for the work to speak.
                </p>
                <button className="mt-6 px-6 py-3 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold">
                  See the work →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Project list with images */}
        <section className="bg-[#f5f3ef] py-20 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display font-bold text-2xl mb-10">Selected projects</h2>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {[
                { n: "01", t: "Field Notes — editorial site", c: "Editorial / Web", img: img.hero },
                { n: "02", t: "Mara Ceramics — brand & site", c: "Branding / Web", img: img.workspace },
                { n: "03", t: "Slow Type — type specimen", c: "Typography", img: img.flatlay },
                { n: "04", t: "North Light — photo journal", c: "Photography / Web", img: img.hero },
                { n: "05", t: "Quiet Goods — shop", c: "E-commerce", img: img.workspace },
              ].map((p) => (
                <div
                  key={p.n}
                  className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_auto_auto] items-center gap-6 py-6 cursor-pointer hover:bg-black/[0.03] transition-colors px-2"
                >
                  <span className="font-mono text-sm text-black/40">{p.n}</span>
                  <span className="font-display font-semibold text-xl sm:text-2xl group-hover:translate-x-2 transition-transform">
                    {p.t}
                  </span>
                  <div className="hidden sm:block w-16 h-12 rounded-lg overflow-hidden">
                    <SmartImage src={p.img} alt={p.t} accent="#ff6b4a" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <span className="text-xs text-black/40 hidden sm:block">{p.c}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured workspace image */}
        <section className="bg-[#f5f3ef] py-20 border-t border-black/10">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="rounded-3xl overflow-hidden border border-black/10 mb-12">
              <SmartImage src={img.workspace} alt="Creative workspace — laptop and design tools" accent="#ff6b4a" className="w-full aspect-[16/9] object-cover" loading="lazy" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { c: "#ff6b4a", l: "Coral" },
                { c: "#1a1a1a", l: "Ink" },
                { c: "#f5f3ef", l: "Bone" },
                { c: "#d4c5a9", l: "Sand" },
              ].map((b) => (
                <div key={b.l} className="rounded-2xl overflow-hidden border border-black/10">
                  <div className="aspect-[4/3]" style={{ background: b.c }} />
                  <div className="p-3 flex items-center justify-between text-xs">
                    <span className="font-medium">{b.l}</span>
                    <span className="font-mono text-black/40">{b.c}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / contact */}
        <section className="bg-[#1a1a1a] text-white py-24">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <p className="text-xs tracking-[0.3em] text-white/40 mb-6">SAY HELLO</p>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl leading-tight">
              Let's make<br />something good.
            </h2>
            <button className="mt-8 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm">
              hello@atelier.example
            </button>
          </div>
        </section>
      </div>
      <DemoFooter brand="ATELIER" accent="#ff6b4a" />
    </DemoShell>
  );
}
