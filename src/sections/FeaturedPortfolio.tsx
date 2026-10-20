import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio";

type Filter = "All" | ProjectCategory;

export default function FeaturedPortfolio() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters: Filter[] = ["All", ...projectCategories];
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-balance">
              Concept projects that show what we can build.
            </h2>
            <p className="mt-4 text-white/55 leading-relaxed">
              Seven demonstration concepts — each designed as a complete, distinct
              brand experience. Tap any project to open its standalone demo page.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white whitespace-nowrap"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f
                  ? "bg-white text-ink-950"
                  : "border border-white/10 text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-white/40 py-12">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
