import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { SmartImage } from "@/components/ui";
import { projectImages } from "@/data/images";

const img = projectImages.luxora;

// LUXORA — Luxury fashion brand concept. Editorial, gold-on-black, cinematic.
export default function LuxoraDemo() {
  return (
    <DemoShell barColor="bg-[#0c0c0d]">
      {/* === Cinematic hero === */}
      <section className="relative bg-[#0c0c0d] text-white min-h-[92vh] flex items-center overflow-hidden">
        {/* Ambient gold glow */}
        <div
          className="absolute top-1/4 right-0 w-[45rem] h-[45rem] rounded-full blur-[140px] opacity-20"
          style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }}
        />
        <div className="absolute inset-0 grid-noise opacity-15" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center w-full py-24">
          {/* Left: dramatic typography */}
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.45em] text-[#c9a227] mb-7">AUTUMN / WINTER 2025</p>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tight">
              Quiet<br />
              <span className="text-[#c9a227]">luxury,</span><br />
              loud presence.
            </h1>
            <p className="mt-8 text-lg text-white/45 max-w-md leading-relaxed">
              An editorial concept for a luxury fashion house — where every
              piece is given room to breathe and every detail speaks.
            </p>
            <div className="mt-9 flex items-center gap-4">
              <button className="group px-7 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#d9b337] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]">
                Explore Collection
              </button>
              <button className="text-sm text-white/70 hover:text-white border-b border-white/30 pb-1 transition-colors">
                Lookbook
              </button>
            </div>
          </div>

          {/* Right: cinematic image composition */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative grid grid-cols-2 gap-3">
              {/* Main image — taller, dramatic */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c9a227]/20 shadow-2xl translate-y-8">
                <SmartImage src={img.hero} alt="Editorial fashion — dramatic black outfit" accent="#c9a227" className="aspect-[3/4] w-full object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d]/60 via-transparent to-transparent" />
              </div>
              {/* Secondary image — elegant portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-[#c9a227]/20 shadow-2xl">
                <SmartImage src={img.lookbook} alt="Fashion lookbook — pearls and jewelry" accent="#c9a227" className="aspect-[3/4] w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c0c0d]/40" />
              </div>
              {/* Floating gold accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#c9a227] opacity-10 blur-3xl" />
            </div>
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

      {/* Editorial split */}
      <section className="bg-[#0c0c0d] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <SmartImage src={img.editorial} alt="Black and white editorial portrait" accent="#c9a227" className="w-full aspect-[4/5] object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d]/30 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">THE CAMPAIGN</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-[1.05] mb-6">
              Form follows feeling.
            </h2>
            <p className="text-white/50 leading-relaxed max-w-md">
              Every piece in the collection is sculpted around a single emotion.
              The campaign imagery strips away color to let silhouette, texture,
              and movement do the talking.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <p className="font-display font-bold text-2xl text-[#c9a227]">24</p>
                <p className="text-xs text-white/40 mt-1">Pieces</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-[#c9a227]">3</p>
                <p className="text-xs text-white/40 mt-1">Capsules</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-[#c9a227]">1</p>
                <p className="text-xs text-white/40 mt-1">Vision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured pieces */}
      <section className="bg-[#0c0c0d] py-24 border-t border-white/5">
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

      <DemoFooter brand="LUXORA" accent="#c9a227" />
    </DemoShell>
  );
}
