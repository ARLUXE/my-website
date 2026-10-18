import { Layers, Smartphone, Zap, MessageSquare, Search, TrendingUp, CalendarCheck, ShieldCheck } from "lucide-react";
import { SectionLabel } from "@/components/ui";

const values = [
  { icon: Layers, title: "Custom-Designed", desc: "Every website is designed from scratch for your brand — no templates." },
  { icon: Smartphone, title: "Mobile-First", desc: "Designed for small screens first, then scaled up to desktop." },
  { icon: Zap, title: "Fast & Responsive", desc: "Lightweight, quick-loading interfaces that adapt to any screen." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Straightforward updates and honest timelines from start to finish." },
  { icon: Search, title: "SEO Foundations", desc: "Semantic structure and metadata that give search engines what they need." },
  { icon: TrendingUp, title: "Conversion-Focused", desc: "Layouts engineered to guide visitors toward taking action." },
  { icon: CalendarCheck, title: "Reliable Delivery", desc: "Clear scope and agreed timelines so you know what to expect." },
  { icon: ShieldCheck, title: "You Own It", desc: "On delivery, the final website is yours — files and all." },
];

export default function TrustValues() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <SectionLabel>Why AR Studio</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
            Design that does more than look good.
          </h2>
          <p className="mt-4 text-white/55 leading-relaxed">
            Every project is built on the same principles — clarity, craft, and
            a focus on turning visitors into customers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-6 rounded-2xl border border-white/10 bg-ink-900/50 hover:bg-ink-900 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                <v.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5">{v.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
