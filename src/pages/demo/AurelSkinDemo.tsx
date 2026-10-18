import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { ArrowRight, Leaf, Droplet, Sun } from "lucide-react";

// AUREL SKIN — Beauty & skincare brand. Soft neutrals, editorial, storytelling.
export default function AurelSkinDemo() {
  return (
    <DemoShell barColor="bg-[#f7f1ec]">
      <div className="text-[#4a3b32]">
        {/* Hero */}
        <section className="bg-[#f7f1ec] min-h-[88vh] flex items-center">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
            <div className="flex items-center justify-between mb-16">
              <span className="font-display font-bold text-xl text-[#c9a27a]">aurel.</span>
              <nav className="hidden sm:flex gap-6 text-sm text-black/50">
                <span>Shop</span><span>Ritual</span><span>About</span>
              </nav>
              <button className="px-5 py-2.5 rounded-full bg-[#4a3b32] text-white text-sm font-semibold">Cart (0)</button>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] text-[#c9a27a] mb-6">GENTLE SKINCARE</p>
                <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] tracking-tight text-[#3a2c24]">
                  Gentle care,<br />for skin that<br />feels.
                </h1>
                <p className="mt-7 text-black/55 max-w-md leading-relaxed">
                  A soft, neutral-toned skincare brand concept. Editorial product
                  visuals, brand storytelling, and a calm shopping experience.
                </p>
                <button className="mt-8 px-7 py-3.5 rounded-full bg-[#4a3b32] text-white font-semibold text-sm inline-flex items-center gap-2 hover:bg-[#5a4a40] transition-colors">
                  Shop the range <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["#e8d5c4", "#d8b4a0", "#c9a27a"].map((c, i) => (
                  <div
                    key={c}
                    className={`rounded-full aspect-[3/4] ${i === 1 ? "translate-y-8" : ""}`}
                    style={{ background: `linear-gradient(to bottom, ${c}, #f7f1ec)` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#f1e8df] py-16 border-y border-black/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 gap-8">
            {[
              { icon: Leaf, t: "Plant-derived", d: "Botanical ingredients, responsibly sourced." },
              { icon: Droplet, t: "Deeply hydrating", d: "Formulated for sensitive, thirsty skin." },
              { icon: Sun, t: "Daily wear", d: "Lightweight enough for morning to night." },
            ].map((v) => (
              <div key={v.t} className="text-center">
                <div className="grid place-items-center w-12 h-12 mx-auto rounded-full bg-white text-[#c9a27a] mb-3">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-base mb-1">{v.t}</h3>
                <p className="text-sm text-black/50">{v.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Products */}
        <section className="bg-[#f7f1ec] py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="font-display font-bold text-3xl mb-10">The essentials</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { n: "Cleansing Milk", p: "₹680", c: "#e8d5c4" },
                { n: "Hydra Serum", p: "₹1,200", c: "#d8b4a0" },
                { n: "Night Cream", p: "₹980", c: "#c9a27a" },
                { n: "Face Oil", p: "₹1,450", c: "#b8956a" },
              ].map((p) => (
                <div key={p.n} className="group cursor-pointer">
                  <div className="aspect-square rounded-2xl mb-3 overflow-hidden" style={{ background: `linear-gradient(160deg, ${p.c}, #f7f1ec)` }}>
                    <div className="w-full h-full grid place-items-center">
                      <div className="w-16 h-24 rounded-full bg-white/40 backdrop-blur" />
                    </div>
                  </div>
                  <h3 className="font-display font-medium text-sm">{p.n}</h3>
                  <p className="text-sm text-[#c9a27a] mt-0.5">{p.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#efe5da] py-24 border-t border-black/5">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="text-xs tracking-[0.3em] text-[#c9a27a] mb-6">OUR STORY</p>
            <p className="font-display text-2xl sm:text-3xl leading-relaxed text-[#3a2c24] font-light">
              "Aurel began with a simple belief — that skincare should feel like
              a quiet ritual, not a routine."
            </p>
          </div>
        </section>
      </div>
      <DemoFooter brand="AUREL SKIN" accent="#c9a27a" />
    </DemoShell>
  );
}
