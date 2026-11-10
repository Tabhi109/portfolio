import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function SelectedWorkSection() {
  const featured = PROJECTS.filter((project) => project.featured);
  const rest = PROJECTS.filter((project) => !project.featured);

  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects from the shelves
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Featured systems and experiments. Open any cover for the case
              study, or browse the full archive.
            </p>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium text-accent-orange underline-offset-4 hover:underline"
          >
            Open archive →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
            />
          ))}
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
