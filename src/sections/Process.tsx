import { SectionLabel } from "@/components/ui";

const steps = [
  { num: "01", title: "Discovery & Brief", desc: "We talk through your goals, audience, and brand. You share what you have; we ask the right questions." },
  { num: "02", title: "Strategy & Structure", desc: "A clear sitemap and content plan so every page has a purpose before a single pixel is designed." },
  { num: "03", title: "UI/UX Design", desc: "Custom layouts, typography, and interactions — designed in the open with your feedback at each step." },
  { num: "04", title: "Development", desc: "Clean, responsive, fast code that brings the design to life across every device." },
  { num: "05", title: "Testing & Optimization", desc: "Cross-browser and device testing, performance checks, and refinements before launch." },
  { num: "06", title: "Launch & Handover", desc: "Deployment, final files, and guidance so you're confident running your new website." },
];

export default function Process() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <SectionLabel>Process</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
            A clear path from idea to launch.
          </h2>
          <p className="mt-4 text-white/55 leading-relaxed">
            Six steps, no mystery. You always know where your project stands and
            what happens next.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {steps.map((s) => (
            <div
              key={s.num}
              className="group relative p-8 bg-ink-900 hover:bg-ink-800 transition-colors duration-300"
            >
              <div className="font-display font-extrabold text-4xl text-white/10 group-hover:text-accent/40 transition-colors">
                {s.num}
              </div>
              <h3 className="mt-3 font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
