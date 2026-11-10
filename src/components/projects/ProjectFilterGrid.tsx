"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { PROJECT_CATEGORIES, PROJECTS } from "@/data/projects";
import { cn } from "@/lib/cn";

export function ProjectFilterGrid() {
  const [category, setCategory] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;
      const haystack = `${project.name} ${project.shortDescription} ${project.technologies.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {PROJECT_CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm transition",
                category === item
                  ? "border-text bg-text text-bg"
                  : "border-border text-text-muted hover:border-accent-orange hover:text-text",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="block w-full max-w-sm">
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search the collection…"
            className="w-full rounded-full border border-border bg-bg-elevated px-4 py-2.5 text-sm outline-none placeholder:text-text-muted focus:border-accent-orange"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-text-muted">No projects match that filter.</p>
      ) : null}
    </div>
  );
}
