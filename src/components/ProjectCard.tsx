import { Link } from "react-router-dom";
import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectMockup } from "./ProjectMockup";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-ink-900 overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      {/* Preview */}
      <div className="relative aspect-[16/11] overflow-hidden bg-ink-800">
        <ProjectMockup project={project} className="h-full transition-transform duration-700 group-hover:scale-[1.03]" />
        {/* Concept badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-black/60 backdrop-blur border border-white/20 text-white/80">
            Concept Project
          </span>
        </div>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 40%, ${project.accent}22 100%)`,
          }}
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ background: `${project.accent}1a`, color: project.accent }}
          >
            {project.category}
          </span>
          <span className="text-xs text-white/30">{project.year}</span>
        </div>
        <h3 className="font-display font-bold text-xl mb-1.5 group-hover:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4">
          <Link
            to={project.demoRoute}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent-light transition-colors"
          >
            View Project <ArrowUpRight className="w-4 h-4" />
          </Link>
          <span className="text-white/20">·</span>
          <Link
            to={project.demoRoute}
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
          >
            <FileText className="w-4 h-4" /> Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}
