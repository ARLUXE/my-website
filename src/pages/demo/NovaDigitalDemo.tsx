import { DemoShell, DemoFooter } from "@/components/DemoShell";
import { ArrowRight, Check } from "lucide-react";

// NOVA DIGITAL — Technology business website. Dark, blue accent, modern SaaS feel.
export default function NovaDigitalDemo() {
  return (
    <DemoShell barColor="bg-[#070710]">
      {/* Hero */}
      <section className="bg-[#070710] text-white min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-[40rem] h-[40rem] bg-[#5b6cff] opacity-15 blur-[120px] rounded-full" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full">
          <div className="flex items-center justify-between mb-16">
            <span className="font-display font-bold text-xl text-[#5b6cff]">NOVA</span>
            <nav className="hidden sm:flex gap-7 text-sm text-white/50">
              <span>Product</span><span>Solutions</span><span>Pricing</span><span>Contact</span>
            </nav>
            <button className="px-5 py-2.5 rounded-full bg-[#5b6cff] text-white text-sm font-semibold">Get demo</button>
          </div>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5b6cff]" /> New — Nova 2.0 is live
            </span>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[0.95] tracking-tight">
              Software that <span className="text-[#5b6cff]">scales</span> with you.
            </h1>
            <p className="mt-6 text-lg text-white/55 max-w-xl leading-relaxed">
              A modern business website concept for a technology services
              company. Clear messaging, service sections, and a strong CTA.
            </p>
            <div className="mt-8 flex gap-3">
              <button className="px-6 py-3.5 rounded-full bg-[#5b6cff] text-white font-semibold text-sm hover:shadow-glow transition-all inline-flex items-center gap-2">
                Start free trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-all">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats row (non-numeric, value props) */}
      <section className="bg-[#0a0a14] py-16 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-3 gap-8">
          {[
            { t: "Built for teams", d: "Shared workspaces and roles for every size of team." },
            { t: "Deploy anywhere", d: "Edge-ready infrastructure that follows your traffic." },
            { t: "Secure by default", d: "Encryption and audit logs included from day one." },
          ].map((s) => (
            <div key={s.t}>
              <h3 className="font-display font-semibold text-lg text-[#5b6cff] mb-2">{s.t}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[#070710] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">What we do</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { t: "Cloud infrastructure", d: "Scalable, observable, cost-efficient." },
              { t: "Data pipelines", d: "Stream and batch processing built to order." },
              { t: "Developer tooling", d: "CI/CD, testing, and internal platforms." },
              { t: "Security audits", d: "Reviews, hardening, and compliance support." },
              { t: "AI integrations", d: "Model deployment and product integration." },
              { t: "Managed hosting", d: "Hands-off ops with 24/7 monitoring." },
            ].map((s) => (
              <div key={s.t} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#5b6cff]/40 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#5b6cff]/20 grid place-items-center mb-4">
                  <Check className="w-4 h-4 text-[#7c8bff]" />
                </div>
                <h3 className="font-display font-semibold text-base mb-1.5">{s.t}</h3>
                <p className="text-sm text-white/50">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a14] py-24 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl">Ready when you are.</h2>
          <p className="mt-5 text-white/50">Book a 20-minute intro call. No pressure, no jargon.</p>
          <button className="mt-8 px-7 py-3.5 rounded-full bg-[#5b6cff] text-white font-semibold text-sm inline-flex items-center gap-2">
            Book a call <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <DemoFooter brand="NOVA DIGITAL" accent="#5b6cff" />
    </DemoShell>
  );
}
