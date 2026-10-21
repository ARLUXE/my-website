import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { agency, navLinks } from "@/config/agency";
import { ArLogo } from "@/components/ArLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-card border border-white/10"
              : "border border-transparent"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group" aria-label={`${agency.name} home`}>
            <ArLogo size={36} />
          </Link>

          {/* Desktop nav — premium feel with elegant underline */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-ink-950 text-sm font-semibold hover:bg-white/90 hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-white/10 text-white"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-0 z-40 bg-ink-950/95 backdrop-blur-xl pt-24 px-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-5 py-4 rounded-xl text-lg font-medium transition-colors ${
                    isActive ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-ink-950 font-semibold"
            >
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
