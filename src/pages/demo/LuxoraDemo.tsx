import { DemoShell, DemoFooter } from "@/components/DemoShell";

// LUXORA — Luxury fashion brand concept. Editorial, gold-on-black, minimal.
export default function LuxoraDemo() {
  return (
    <DemoShell barColor="bg-[#0c0c0d]">
      {/* Hero */}
      <section className="bg-[#0c0c0d] text-white min-h-[92vh] flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">AUTUMN / WINTER 2025</p>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] tracking-tight">
              Quiet<br />luxury,<br />loud presence.
            </h1>
            <p className="mt-8 text-white/50 max-w-md leading-relaxed">
              An editorial concept for a luxury fashion house — where every
              piece is given room to breathe and every detail speaks.
            </p>
            <div className="mt-9 flex items-center gap-4">
              <button className="px-7 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#d9b337] transition-colors">
                Explore Collection
              </button>
              <button className="text-sm text-white/70 hover:text-white border-b border-white/30 pb-1">
                Lookbook
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[0,1,2,3].map((i) => (
              <div
                key={i}
                className={`rounded-lg overflow-hidden border border-[#c9a227]/20 ${
                  i % 2 === 0 ? "translate-y-6" : ""
                }`}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-[#c9a227]/30 via-[#1a1a1a] to-[#0c0c0d]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-black border-y border-white/10 py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-2xl font-display font-semibold text-white/20 tracking-widest">
          {Array(4).fill("LUXORA — ATELIER — MAISON — COUTURE — ").join("")}
          {Array(4).fill("LUXORA — ATELIER — MAISON — COUTURE — ").join("")}
        </div>
      </div>

      {/* Featured pieces */}
      <section className="bg-[#0c0c0d] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Featured pieces</h2>
            <span className="text-sm text-white/40">04 items</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Cashmere Coat", "Silk Slip", "Wool Trouser", "Leather Mule"].map((name, i) => (
              <div key={name} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0d] border border-white/5 overflow-hidden mb-3 relative">
                  <div
                    className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity"
                    style={{ background: `radial-gradient(circle at 50% 30%, ${i % 2 ? "#c9a227" : "#3a2f10"}33, transparent 70%)` }}
                  />
                  <div className="absolute bottom-3 left-3 text-[10px] tracking-widest text-white/40">N° 0{i + 1}</div>
                </div>
                <h3 className="font-display font-medium text-sm">{name}</h3>
                <p className="text-xs text-[#c9a227] mt-1">₹ {(i + 1) * 14500}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="bg-black py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">THE ATELIER</p>
          <p className="font-display text-2xl sm:text-4xl leading-relaxed text-white/80 font-light">
            "Luxury is not about more. It's about the right amount of the right
            thing — and nothing else."
          </p>
        </div>
      </section>

      <DemoFooter brand="LUXORA" accent="#c9a227" />
    </DemoShell>
  );
}
