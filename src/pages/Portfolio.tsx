import { useState } from "react";
import Seo from "@/components/Seo";
import { SectionLabel } from "@/components/ui";
import ProjectCard from "@/components/ProjectCard";
import FinalCta from "@/sections/FinalCta";
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio";

type Filter = "All" | ProjectCategory;

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = ["All", ...projectCategories];
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Seo
        title="Portfolio — AR Studio"
        description="Concept projects showcasing premium website design across luxury brands, portfolios, business sites, e-commerce, and landing pages."
        path="/portfolio"
      />
      <section className="pt-36 pb-16 lg:pt-44">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Portfolio</SectionLabel>
          <h1 className="mt-4 font-display font-extrabold text-4xl sm:text-5xl text-balance max-w-3xl">
            Selected concept projects.
          </h1>
          <p className="mt-5 text-white/55 max-w-2xl leading-relaxed">
            Seven distinct demo concepts — each a complete brand experience. Open
            any project to view its standalone demo page.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
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

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-white/40 py-16">No projects in this category yet.</p>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
