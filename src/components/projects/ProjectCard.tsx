import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/illustrations/ProjectCover";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group surface-card block overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent-orange",
        featured ? "md:col-span-2" : "",
      )}
    >
      <ProjectCover
        project={project}
        className={featured ? "aspect-[16/8]" : "aspect-[16/10]"}
      />
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
              {project.name}
            </h3>
          </div>
          <span className="rounded-full border border-border p-2 text-text-muted transition group-hover:border-accent-orange group-hover:text-accent-orange">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text-muted sm:text-[0.95rem]">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
            >
              {tech}
            </span>
          ))}
          <span className="rounded-full bg-bg-muted px-2.5 py-1 font-mono text-[11px] text-text-muted">
            {project.status}
          </span>
        </div>
      </div>
    </Link>
  );
}
