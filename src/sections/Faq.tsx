import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import { faqItems } from "@/data/faq";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-balance">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="rounded-xl border border-white/10 bg-ink-900/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base">{item.q}</span>
                  <span className="grid place-items-center w-7 h-7 rounded-full border border-white/10 shrink-0 text-white/60">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
