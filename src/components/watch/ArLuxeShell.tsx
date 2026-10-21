import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ShoppingBag, Info, Infinity as InfinityIcon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useCart } from "./CartContext";
import Seo from "@/components/Seo";

// AR LUXE site shell — premium luxury header with gold-on-black aesthetic,
// brand wordmark, cart button, and concept project notice.
export function ArLuxeShell({
  children,
  title,
  description,
  path,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  path: string;
}) {
  const { count, open } = useCart();
  const { pathname } = useLocation();
  const isHome = pathname === "/projects/arluxe";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-[#070708] text-white">
      <Seo title={title} description={description} path={path} />
      {/* Premium luxury header */}
      <div className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#070708]/95 backdrop-blur-xl border-b border-[#c9a227]/20" : "bg-[#070708]/60 backdrop-blur-md border-b border-transparent"}`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm rounded-full px-3.5 py-1.5 border transition-all duration-300"
              style={{
                color: "#c9a227",
                borderColor: "rgba(201,162,39,0.4)",
                background: "rgba(201,162,39,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.8)";
                e.currentTarget.style.background = "rgba(201,162,39,0.15)";
                e.currentTarget.style.boxShadow = "0 0 16px rgba(201,162,39,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(201,162,39,0.4)";
                e.currentTarget.style.background = "rgba(201,162,39,0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">AR Studio</span>
            </Link>
            <Link to="/projects/arluxe" className="flex items-center gap-2.5">
              <span className="font-display font-extrabold tracking-[0.2em] text-base text-white">AR LUXE</span>
              <span className="hidden sm:inline text-[9px] tracking-[0.3em] text-[#c9a227] border-l border-[#c9a227]/30 pl-2.5">AUTOMATIC · SKELETON</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm text-white/55">
            <Link to="/projects/arluxe" className={`transition-colors ${isHome ? "text-white" : "hover:text-white"}`}>Collection</Link>
            <Link to="/projects/arluxe/catalogue" className={`transition-colors ${pathname.includes("catalogue") ? "text-white" : "hover:text-white"}`}>Catalogue</Link>
            <Link to="/projects/arluxe/craftsmanship" className={`transition-colors ${pathname.includes("craftsmanship") ? "text-white" : "hover:text-white"}`}>Craftsmanship</Link>
            <Link to="/projects/arluxe/faq" className={`transition-colors ${pathname.includes("faq") ? "text-white" : "hover:text-white"}`}>FAQ</Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#c9a227]/10 text-[10px] font-medium text-[#c9a227] border border-[#c9a227]/20">
              <InfinityIcon className="w-3 h-3" /> Lifetime Value
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-medium text-white/50">
              <Info className="w-3 h-3" /> Concept
            </span>
            <button
              type="button"
              onClick={open}
              className="relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#c9a227]/30 text-sm hover:bg-[#c9a227]/10 transition-colors"
              aria-label={`Open cart, ${count} items`}
            >
              <ShoppingBag className="w-4 h-4 text-[#c9a227]" />
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 grid place-items-center w-5 h-5 rounded-full bg-[#c9a227] text-black text-[10px] font-bold">
                  {count}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-[#c9a227]/30 text-[#c9a227]"
              aria-label="Toggle AR LUXE navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="md:hidden absolute inset-x-0 top-full border-t border-[#c9a227]/15 bg-[#070708]/98 px-5 py-4 shadow-2xl">
            <div className="flex flex-col gap-1">
              {[
                ["Collection", "/projects/arluxe"],
                ["Catalogue", "/projects/arluxe/catalogue"],
                ["Craftsmanship", "/projects/arluxe/craftsmanship"],
                ["FAQ", "/projects/arluxe/faq"],
              ].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-[#c9a227]/10 hover:text-[#c9a227]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
      {children}
      <ArLuxeFooter />
    </div>
  );
}

function ArLuxeFooter() {
  return (
    <footer className="border-t border-[#c9a227]/15 bg-black py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display font-extrabold tracking-[0.2em] text-lg">AR LUXE</span>
              <span className="text-[9px] tracking-[0.3em] text-[#c9a227] border-l border-[#c9a227]/30 pl-2">AUTOMATIC</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              A fictional luxury watch brand concept, designed and built by AR
              Studio to demonstrate premium e-commerce design capabilities.
              Every timepiece features an open skeleton dial with visible moving gears.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/projects/arluxe" className="hover:text-[#c9a227] transition-colors">Collection</Link></li>
              <li><Link to="/projects/arluxe/catalogue" className="hover:text-[#c9a227] transition-colors">Full Catalogue</Link></li>
              <li><Link to="/projects/arluxe/craftsmanship" className="hover:text-[#c9a227] transition-colors">Craftsmanship</Link></li>
              <li><Link to="/projects/arluxe/case-study" className="hover:text-[#c9a227] transition-colors">Case Study</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">AR Studio</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link to="/" className="hover:text-[#c9a227] transition-colors">Agency Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-[#c9a227] transition-colors">All Projects</Link></li>
              <li><Link to="/contact" className="hover:text-[#c9a227] transition-colors">Start a Project</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>AR LUXE — a concept project by AR Studio. Not a real retailer.</span>
          <span>Prices and products are fictional demonstration content.</span>
        </div>
      </div>
    </footer>
  );
}
