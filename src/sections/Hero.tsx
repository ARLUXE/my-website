import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, Infinity as InfinityIcon } from "lucide-react";
import { BrowserFrame } from "@/components/ui";
import { projects } from "@/data/portfolio";
import { ProjectMockup } from "@/components/ProjectMockup";
import { WatchDial } from "@/components/watch/WatchDial";
import { watches } from "@/data/watches";

export default function Hero() {
  const heroWatch = watches.find((w) => w.id === "obsidian")!;

  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-noise opacity-40" />
      {/* Primary ambient glow — gold luxury tone */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] accent-grad opacity-15 blur-[140px] rounded-full" />
      {/* Secondary warm glow — subtle depth */}
      <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full opacity-8 blur-[120px]" style={{ background: "radial-gradient(circle, #c9a227, transparent 70%)" }} />
      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 mb-7 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              Premium luxury web design studio
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] text-balance tracking-tight">
              Digital Experiences That Make Brands{" "}
              <span className="accent-text">Impossible to Ignore.</span>
            </h1>

            <p className="mt-6 text-lg text-white/50 leading-relaxed max-w-xl">
              We design and build premium websites for businesses, personal
              brands, and ambitious founders. Cinematic visuals, meticulous
              detail, and seamless experiences built to turn visitors into customers.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-white/35">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <InfinityIcon className="w-3.5 h-3.5 text-[#c9a227]" />
                Lifetime Value Craftsmanship
              </div>
            </div>
          </div>

          {/* Visual: cinematic layered watch + browser mockups */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative h-[440px] sm:h-[520px]">
              {/* Main mockup — AR LUXE watch site preview */}
              <div className="absolute top-0 right-0 w-[88%] animate-floaty">
                <BrowserFrame url="arluxe.com" className="rotate-1 hover:rotate-0 transition-transform duration-700">
                  <ProjectMockup project={projects[0]} className="h-56 sm:h-64" />
                </BrowserFrame>
              </div>
              {/* Secondary mockup */}
              <div className="absolute bottom-0 left-0 w-[72%] animate-floaty [animation-delay:1.5s]">
                <BrowserFrame url="luxora.com" className="-rotate-2 hover:rotate-0 transition-transform duration-700">
                  <ProjectMockup project={projects[1]} className="h-44 sm:h-52" />
                </BrowserFrame>
              </div>
              {/* Floating live watch dial — AR LUXE signature */}
              <div className="absolute -bottom-4 right-4 z-10 rounded-xl border border-[#c9a227]/30 bg-[#0a0a0c]/95 backdrop-blur-xl p-2 shadow-[0_8px_40px_rgba(0,0,0,0.6)] animate-floaty [animation-delay:0.8s]">
                <div className="text-center">
                  <p className="text-[8px] tracking-[0.25em] text-[#c9a227] mb-1">LIVE · AR LUXE</p>
                  <WatchDial watch={heroWatch} size={90} />
                </div>
              </div>
              {/* Floating accent orb */}
              <div className="absolute top-1/3 -left-6 w-24 h-24 rounded-full accent-grad opacity-25 blur-2xl" />
              {/* Subtle border accent line */}
              <div className="absolute top-1/2 right-0 w-px h-32 bg-gradient-to-b from-transparent via-accent-light/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
