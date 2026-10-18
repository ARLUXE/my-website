import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] grid place-items-center px-5 pt-24">
      <Seo title="Page not found — AR Studio" description="The page you're looking for doesn't exist." />
      <div className="text-center max-w-md">
        <div className="font-display font-extrabold text-7xl sm:text-8xl accent-text mb-4">404</div>
        <h1 className="font-display font-bold text-2xl mb-3">Page not found</h1>
        <p className="text-white/50 leading-relaxed mb-8">
          The page you're looking for doesn't exist or may have moved. Let's get
          you back on track.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-ink-950 font-semibold text-sm hover:bg-white/90 hover:shadow-glow transition-all"
          >
            <Home className="w-4 h-4" /> Back home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> View portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
