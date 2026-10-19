import { Link } from "react-router-dom";
import { ArrowRight, Shield, Gem, Clock, Infinity as InfinityIcon, Cog, Wind } from "lucide-react";
import { ArLuxeShell } from "@/components/watch/ArLuxeShell";
import { WatchDial } from "@/components/watch/WatchDial";
import { WatchProductCard } from "@/components/watch/WatchProductCard";
import { watches, formatINR } from "@/data/watches";

export default function ArLuxeHome() {
  const heroWatch = watches.find((w) => w.id === "grandmaster")!;
  const featured = watches.slice(0, 4);

  return (
    <ArLuxeShell
      title="AR LUXE — Luxury Automatic Skeleton Watches | Concept by AR Studio"
      description="AR LUXE is a fictional luxury watch brand concept by AR Studio. Eight automatic timepieces with open skeleton dials showing visible moving gears."
      path="/projects/arluxe"
    >
      {/* === Cinematic hero === */}
      <section className="relative overflow-hidden bg-[#070708] min-h-[92vh] flex items-center">
        {/* Ambient light layers */}
        <div
          className="absolute top-1/4 right-0 w-[50rem] h-[50rem] rounded-full blur-[140px] opacity-25"
          style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40rem] h-[40rem] rounded-full blur-[120px] opacity-10"
          style={{ background: "radial-gradient(circle, #5b6cff, transparent 70%)" }}
        />
        <div className="absolute inset-0 grid-noise opacity-20" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center py-24 lg:py-20">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="flex items-center gap-3 mb-7">
              <p className="text-xs tracking-[0.45em] text-[#c9a227]">AUTOMATIC · SKELETON · EST. 2025</p>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-tight">
              Time, made<br />
              <span className="text-[#c9a227]">visible.</span>
            </h1>
            <p className="mt-8 text-lg text-white/50 max-w-md leading-relaxed">
              Eight automatic timepieces. One obsession with precision. Every AR LUXE
              watch features an open skeleton dial — the moving gears are not hidden,
              they are the design. And the dial you see is showing your time, right now.
            </p>

            {/* Feature badges */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                <Wind className="w-3.5 h-3.5 text-[#c9a227]" /> Automatic Movement
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">
                <Cog className="w-3.5 h-3.5 text-[#c9a227]" /> Open Skeleton Dial
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/30 text-xs text-[#c9a227]">
                <InfinityIcon className="w-3.5 h-3.5" /> Lifetime Value
              </span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/projects/arluxe/catalogue"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,162,39,0.4)]"
              >
                Explore the Collection
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects/arluxe/craftsmanship"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
              >
                The Craft
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs text-white/35">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#c9a227]" /> Sapphire crystal</span>
              <span className="flex items-center gap-1.5"><Gem className="w-3.5 h-3.5 text-[#c9a227]" /> Premium materials</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#c9a227]" /> Live time</span>
            </div>
          </div>

          {/* Right: dramatic watch product image + live dial */}
          <div className="relative flex flex-col items-center lg:items-end gap-6 animate-fade-up [animation-delay:200ms]">
            <div className="relative w-full max-w-md">
              {/* Large product photo with cinematic treatment */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#c9a227]/20">
                <img
                  src={heroWatch.image}
                  alt={`${heroWatch.name} — ${heroWatch.dialColor} dial, ${heroWatch.strap}`}
                  className="w-full aspect-[3/4] object-cover"
                  loading="eager"
                />
                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070708]/40 via-transparent to-transparent" />
                {/* Brand watermark */}
                <div className="absolute top-5 left-5">
                  <p className="font-display font-extrabold tracking-[0.2em] text-white/80 text-sm">AR LUXE</p>
                  <p className="text-[10px] tracking-[0.3em] text-[#c9a227] mt-0.5">GRANDMASTER</p>
                  <p className="text-[9px] tracking-[0.2em] text-white/40 mt-1">SKELETON · AUTOMATIC</p>
                </div>
                {/* Lifetime Value badge on hero image */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#c9a227]/20 backdrop-blur text-[10px] font-semibold text-[#c9a227] border border-[#c9a227]/40">
                    <InfinityIcon className="w-3 h-3" /> Lifetime Value
                  </span>
                </div>
                {/* Price tag */}
                <div className="absolute bottom-5 right-5 text-right">
                  <p className="font-display font-bold text-2xl text-white">{formatINR(heroWatch.price)}</p>
                  <p className="text-xs text-white/40">{heroWatch.availability}</p>
                </div>
              </div>

              {/* Floating live-time dial card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-10 rounded-2xl border border-[#c9a227]/30 bg-[#0a0a0c]/95 backdrop-blur-xl p-3 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                <div className="text-center">
                  <p className="text-[9px] tracking-[0.25em] text-[#c9a227] mb-1.5">LIVE · YOUR TIME</p>
                  <WatchDial watch={heroWatch} size={120} showDigital />
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#c9a227] opacity-10 blur-3xl" />
            </div>

            <div className="text-center lg:text-right mt-2">
              <Link
                to={`/projects/arluxe/watches/${heroWatch.slug}`}
                className="inline-flex items-center gap-1.5 text-sm text-[#c9a227] hover:text-[#e0c060] transition-colors group"
              >
                View timepiece
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skeleton mechanism band — full-width cinematic image */}
      <section className="relative h-[400px] overflow-hidden border-t border-white/5">
        <img
          src="https://images.pexels.com/photos/39654988/pexels-photo-39654988.jpeg?auto=compress&cs=tinysrgb&h=650&w=1600"
          alt="Open skeleton watch movement with visible gears"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/40 to-[#070708]/60" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center px-5">
            <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-4">THE SKELETON PHILOSOPHY</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight max-w-2xl">
              We don't hide the mechanism.<br />We <span className="text-[#c9a227]">celebrate</span> it.
            </h2>
            <p className="mt-5 text-white/50 max-w-lg mx-auto">
              Every AR LUXE timepiece features an open skeleton dial. The beating
              heart of the watch — its gears, balance wheel, and mainspring — is
              visible through sapphire crystal on both sides.
            </p>
          </div>
        </div>
      </section>

      {/* Featured collection */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#c9a227] mb-3">FEATURED</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl">The Collection</h2>
              <p className="mt-3 text-sm text-white/40">Eight automatic skeleton timepieces · Lifetime Value</p>
            </div>
            <Link to="/projects/arluxe/catalogue" className="text-sm text-white/60 hover:text-white inline-flex items-center gap-1.5 transition-colors">
              View all 8 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((w) => (
              <WatchProductCard key={w.id} watch={w} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand story band */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-[#0a0a0c] to-[#070708]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-6">THE AR LUXE PHILOSOPHY</p>
          <p className="font-display text-2xl sm:text-4xl leading-relaxed font-light text-white/85">
            "A watch is not a tool to read the time. It is a reminder that time
            is the only thing you cannot make more of."
          </p>
          <Link
            to="/projects/arluxe/craftsmanship"
            className="mt-8 inline-flex items-center gap-2 text-sm text-[#c9a227] hover:text-[#e0c060] transition-colors"
          >
            Read the story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </ArLuxeShell>
  );
}
