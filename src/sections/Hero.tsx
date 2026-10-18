import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { BrowserFrame } from "@/components/ui";
import { projects } from "@/data/portfolio";
import { ProjectMockup } from "@/components/ProjectMockup";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-noise opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] accent-grad opacity-20 blur-[120px] rounded-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              Premium website design studio
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Digital Experiences That Make Brands{" "}
              <span className="accent-text">Impossible to Ignore.</span>
            </h1>

            <p className="mt-6 text-lg text-white/55 leading-relaxed max-w-xl">
              We design and build premium websites for businesses, personal
              brands, and ambitious founders. Thoughtful design. Seamless
              experiences. Built to turn visitors into customers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5 transition-all"
              >
                Start Your Project <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
              >
                Explore Our Work
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-white/40">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for new projects
              </div>
              <div className="hidden sm:block">Based in Bareilly, India · Working worldwide</div>
            </div>
          </div>

          {/* Visual: layered floating browser mockups */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative h-[440px] sm:h-[520px]">
              {/* Main mockup */}
              <div className="absolute top-0 right-0 w-[88%] animate-floaty">
                <BrowserFrame url="luxora.com" className="rotate-1 hover:rotate-0 transition-transform duration-700">
                  <ProjectMockup project={projects[0]} className="h-56 sm:h-64" />
                </BrowserFrame>
              </div>
              {/* Secondary mockup */}
              <div className="absolute bottom-0 left-0 w-[72%] animate-floaty [animation-delay:1.5s]">
                <BrowserFrame url="novadigital.io" className="-rotate-2 hover:rotate-0 transition-transform duration-700">
                  <ProjectMockup project={projects[3]} className="h-44 sm:h-52" />
                </BrowserFrame>
              </div>
              {/* Floating accent orb */}
              <div className="absolute top-1/3 -left-6 w-24 h-24 rounded-full accent-grad opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
