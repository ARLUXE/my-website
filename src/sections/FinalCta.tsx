import { Link } from "react-router-dom";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { agency, whatsappLink } from "@/config/agency";

export default function FinalCta() {
  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] accent-grad opacity-15 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
          Have an idea? Let's build something{" "}
          <span className="accent-text">exceptional.</span>
        </h2>
        <p className="mt-6 text-lg text-white/55 max-w-xl mx-auto">
          Tell us about your brand and what you want to achieve. You'll get a
          clear response with next steps and a custom quote.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-white/90 hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            Start a Project <ArrowUpRight className="w-4 h-4" />
          </Link>
          <a
            href={whatsappLink(`Hi ${agency.name}, I'd like to discuss a website project.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
