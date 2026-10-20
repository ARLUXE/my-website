import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { SmartImage } from "@/components/ui";
import { projectImages } from "@/data/images";

const img = projectImages.noirFrame;

// NOIR FRAME — Logo designer portfolio. Black-and-white, monochrome, case studies.
export default function NoirFrameDemo() {
  const marks = ["AR", "NX", "VK", "LM", "OC", "PR", "BX", "SD", "MT", "QV", "HR", "ZE"];
  return (
    <DemoShell barColor="bg-black">
      {/* Hero */}
      <section className="bg-white text-black min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <div className="flex items-center justify-between mb-16">
            <span className="font-display font-extrabold text-xl tracking-tight">NOIR/FRAME</span>
            <nav className="hidden sm:flex gap-7 text-xs font-medium text-black/60">
              <span>WORK</span><span>STUDIO</span><span>JOURNAL</span><span>CONTACT</span>
            </nav>
          </div>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
            <div>
              <h1 className="font-display font-extrabold text-6xl sm:text-8xl leading-[0.9] tracking-tighter">
                Marks that<br />mean<br />something.
              </h1>
              <p className="mt-8 text-black/60 max-w-md leading-relaxed">
                A monochrome portfolio concept for a logo &amp; identity
                designer. Identity work presented as structured case studies.
              </p>
              <div className="mt-8 flex gap-4 text-sm font-semibold">
                <button className="px-6 py-3 rounded-full bg-black text-white">View Case Studies</button>
                <button className="px-6 py-3 rounded-full border border-black/20 hover:bg-black/5 transition-colors">Get in touch</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {marks.slice(0, 6).map((m, i) => (
                <div
                  key={m}
                  className={`aspect-square rounded-xl grid place-items-center font-display font-extrabold text-3xl border ${
                    i % 3 === 0 ? "bg-black text-white border-black" : "bg-white text-black border-black/10"
                  }`}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logo grid */}
      <section className="bg-black text-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Selected marks</h2>
            <span className="text-sm text-white/40">12 / 48</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {marks.map((m, i) => (
              <div
                key={m}
                className="aspect-square rounded-xl border border-white/10 grid place-items-center hover:border-white/40 transition-colors group cursor-pointer relative"
              >
                <span className="font-display font-extrabold text-4xl text-white group-hover:scale-110 transition-transform">
                  {m}
                </span>
                <span className="absolute bottom-3 text-[9px] text-white/30">N° 0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study block */}
      <section className="bg-white text-black py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] text-black/40 mb-4">CASE STUDY — 001</p>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl leading-tight">
              Vénk — a mark built from negative space.
            </h2>
            <p className="mt-6 text-black/60 leading-relaxed max-w-md">
              The brief: a monogram for a furniture maker that felt both
              architectural and warm. The solution lives in the gap between two
              letterforms.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              {["Discovery & sketches", "Geometric construction", "Negative-space refinement", "Final mark & guidelines"].map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <span className="font-mono text-black/40">0{i + 1}</span>
                  <span className="font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <SmartImage src={img.hero} alt="Branding and identity work" accent="#e5e5e5" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-neutral-100 border border-black/10 grid place-items-center">
                <span className="font-display font-extrabold text-6xl text-black">VK</span>
              </div>
              <div className="rounded-2xl bg-black grid place-items-center">
                <span className="font-display font-extrabold text-6xl text-white">VK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DemoFooter brand="NOIR/FRAME" accent="#ffffff" />
    </DemoShell>
  );
}
