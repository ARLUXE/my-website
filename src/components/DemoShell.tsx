import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import type { ReactNode } from "react";
import { getProject } from "@/data/portfolio";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";

// Wrapper for demo project pages: provides a top bar linking back to the
// agency, a "concept project" notice, and consistent SEO.
export function DemoShell({
  children,
  barColor = "bg-black",
}: {
  children: ReactNode;
  barColor?: string;
}) {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id ?? "");
  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      <Seo
        title={`${project.title} — Concept Project | AR Studio`}
        description={project.description}
        path={`/projects/${project.id}`}
      />
      {/* Top bar */}
      <div className={`${barColor} border-b border-white/10 sticky top-0 z-50`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to AR Studio
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-white/70">
              <Info className="w-3 h-3" /> Concept Project
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-ink-950 text-xs font-semibold hover:bg-white/90 transition-colors"
            >
              Start a similar project <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

// Shared "concept project" footer for demo pages.
export function DemoFooter({ brand, accent }: { brand: string; accent: string }) {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
          <span className="font-display font-bold tracking-tight">{brand}</span>
          <span className="text-xs text-white/30 ml-2">— concept project by AR Studio</span>
        </div>
        <Link
          to="/portfolio"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          View more concept projects →
        </Link>
      </div>
    </footer>
  );
}
