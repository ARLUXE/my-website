import { SectionLabel } from "@/components/ui";

// Empty state — no invented testimonials. Shows a tasteful "coming soon"
// message until real reviews are added to src/data (future enhancement).
export default function Testimonials() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
            Client stories.
          </h2>
        </div>

        <div className="relative rounded-2xl border border-dashed border-white/15 bg-ink-900/30 p-12 sm:p-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 accent-grad opacity-5 blur-3xl rounded-full" />
          <div className="relative">
            <div className="grid place-items-center w-12 h-12 mx-auto rounded-full border border-white/10 text-white/40 mb-4">
              <span className="text-lg">“</span>
            </div>
            <h3 className="font-display font-semibold text-xl text-white/80">
              Client testimonials coming soon.
            </h3>
            <p className="mt-3 text-sm text-white/40 max-w-md mx-auto leading-relaxed">
              Real reviews from real clients will appear here once projects are
              delivered. We never use invented testimonials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
