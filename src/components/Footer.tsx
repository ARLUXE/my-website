import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { agency, navLinks, whatsappLink } from "@/config/agency";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-lg accent-grad text-white font-display font-extrabold text-sm">
                {agency.shortName}
              </span>
              <span className="font-display font-bold text-lg">{agency.name}</span>
            </Link>
            <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
              {agency.tagline} Premium website design for businesses, personal
              brands, and ambitious founders.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/60">
              <a href={`mailto:${agency.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4 text-accent-light" /> {agency.email}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <MessageCircle className="w-4 h-4 text-accent-light" /> {agency.whatsappDisplay}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-light" /> {agency.location}
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
              Work
            </h4>
            <ul className="space-y-2.5 text-sm">
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    to={p.demoRoute}
                    className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {p.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {agency.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {agency.social.instagram !== "#" && (
              <a
                href={agency.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center w-9 h-9 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            )}
            <Link
              to="/contact"
              className="text-xs text-white/40 hover:text-white transition-colors"
            >
              Start a project →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
