import { ArLuxeShell } from "@/components/watch/ArLuxeShell";
import { Shield, Gem, Cog, Eye } from "lucide-react";
import { SmartImage } from "@/components/ui";
import { projectImages } from "@/data/images";

const img = projectImages.arluxe;

const pillars = [
  { icon: Gem, title: "Materials", desc: "Sapphire crystal, 316L steel, PVD finishes, and genuine leather — chosen for how they age, not just how they look new." },
  { icon: Cog, title: "Movements", desc: "Automatic and manual-wind movements, each with an exhibition caseback so the mechanism is part of the experience." },
  { icon: Shield, title: "Durability", desc: "From 30m dress watches to 200m divers — water resistance matched to the watch's purpose, not a marketing number." },
  { icon: Eye, title: "Detail", desc: "Sunburst dials, guilloché patterns, grand feu enamel, and skeletonized bridges. The dial is where a watch earns its name." },
];

export default function ArLuxeCraftsmanship() {
  return (
    <ArLuxeShell
      title="Craftsmanship — AR LUXE | Concept by AR Studio"
      description="The design philosophy and materials behind the AR LUXE concept watch collection."
      path="/projects/arluxe/craftsmanship"
    >
      <section className="pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <SmartImage src={img.mechanism} alt="Watch mechanism close-up" accent="#c9a227" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070708] via-[#070708]/80 to-[#070708]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">THE CRAFT</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl leading-[0.95] tracking-tight">
            Obsession, in<br />measured time.
          </h1>
          <p className="mt-7 text-lg text-white/55 leading-relaxed max-w-2xl mx-auto">
            Every AR LUXE concept begins with a question: what should a watch
            feel like on the wrist, and what should it say without speaking?
            These are the principles that shape the collection.
          </p>
        </div>
      </section>

      {/* Mechanism image band */}
      <section className="py-0 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
            <SmartImage src={img.gears} alt="Detailed macro view of watch gears and jewels" accent="#c9a227" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-transparent to-[#070708]" />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-xs tracking-[0.3em] text-[#c9a227]">PRECISION ENGINEERING</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="p-6 rounded-2xl border border-white/10 bg-ink-900/50">
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-[#c9a227]/10 text-[#c9a227] mb-4">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0a0a0c] to-[#070708]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">THE PROCESS</p>
          <div className="space-y-8">
            {[
              { n: "01", t: "The brief", d: "Each concept begins as a single idea — a color, a material, a feeling — and is built outward from there." },
              { n: "02", t: "The dial", d: "The dial is designed first. It's the face of the watch and the thing the wearer sees most, so it earns the most attention." },
              { n: "03", t: "The case", d: "Case size, finish, and material are chosen to suit the dial — not the other way around." },
              { n: "04", t: "The strap", d: "Leather, suede, alligator, or bracelet — the strap is the watch's handshake with the wrist." },
            ].map((s) => (
              <div key={s.n} className="grid grid-cols-[auto_1fr] gap-6 items-start">
                <span className="font-display font-extrabold text-3xl text-white/15">{s.n}</span>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-1">{s.t}</h3>
                  <p className="text-white/50 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ArLuxeShell>
  );
}
