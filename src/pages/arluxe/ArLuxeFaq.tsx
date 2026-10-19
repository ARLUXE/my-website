import { useState } from "react";
import { ChevronDown, Mail } from "lucide-react";
import { ArLuxeShell } from "@/components/watch/ArLuxeShell";

const faqs = [
  {
    q: "Is AR LUXE a real watch brand?",
    a: "No. AR LUXE is a fictional concept brand designed and built by AR Studio to demonstrate premium e-commerce and product presentation capabilities. The watches are not manufactured or sold.",
  },
  {
    q: "Are the prices real?",
    a: "No. All prices in Indian rupees are editable placeholder values for demonstration only. No real transactions, payments, or orders are processed anywhere on this site.",
  },
  {
    q: "Does the watch dial show the real time?",
    a: "Yes. The dial you see reads the current time from your device clock and updates every second. The analogue hands and digital display are kept in sync from a single shared time source.",
  },
  {
    q: "Can I actually buy a watch?",
    a: "No. The Add to Cart, Buy Now, and demo checkout flows exist to showcase the shopping experience. No payment is collected and no order is placed.",
  },
  {
    q: "What materials are the watches made of?",
    a: "The specifications listed for each watch are plausible, internally consistent demonstration values. They do not represent real manufactured products or certified testing.",
  },
  {
    q: "Who designed AR LUXE?",
    a: "AR LUXE was designed and built by AR Studio as a flagship concept project. It sits at the top of the AR Studio portfolio to show what a premium watch e-commerce experience can look like.",
  },
];

export default function ArLuxeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <ArLuxeShell
      title="FAQ — AR LUXE | Concept by AR Studio"
      description="Frequently asked questions about the AR LUXE concept watch brand."
      path="/projects/arluxe/faq"
    >
      <section className="pt-12 pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-xs tracking-[0.4em] text-[#c9a227] mb-4">QUESTIONS</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl mb-12">Good to know.</h1>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((f, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  aria-expanded={open === i}
                >
                  <span className="font-display font-semibold text-base sm:text-lg">{f.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-white/40 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 pb-5" : "max-h-0"}`}>
                  <p className="text-sm text-white/55 leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter demo */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-ink-900/50">
            <div className="flex items-center gap-2.5 mb-3">
              <Mail className="w-5 h-5 text-[#c9a227]" />
              <h2 className="font-display font-semibold text-lg">Newsletter (demo)</h2>
            </div>
            <p className="text-sm text-white/50 mb-5">
              A demonstration newsletter form. No email is actually saved or sent.
            </p>
            {submitted ? (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-sm text-emerald-200">
                Thanks — this was a demo submission. No email was stored or sent, and you won't receive any messages.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubmitted(true);
                }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-ink-800 border border-white/10 text-sm focus:border-[#c9a227]/60 outline-none"
                />
                <button type="submit" className="px-6 py-3 rounded-lg bg-[#c9a227] text-black font-semibold text-sm hover:bg-[#e0c060] transition-colors">
                  Subscribe (demo)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </ArLuxeShell>
  );
}
