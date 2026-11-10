import Link from "next/link";
import type { Project } from "@/types";
import { PROJECTS } from "@/data/projects";
import { ProjectCover } from "@/components/illustrations/ProjectCover";
import {
  ForgeArchitecture,
  SimpleStoreArchitecture,
} from "@/components/projects/ArchitectureDiagram";
import { ReadingProgress } from "@/components/interactions/ReadingProgress";

export function CaseStudy({ project }: { project: Project }) {
  const others = PROJECTS.filter((item) => item.slug !== project.slug).slice(
    0,
    3,
  );

  return (
    <>
      <ReadingProgress />
      <article id="case-study" className="pb-20">
        <header className="border-b border-border bg-bg-muted/40">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">
                Case study · {project.category} · {project.status}
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
                {project.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-text px-4 py-2 text-sm text-bg"
                  >
                    GitHub
                  </a>
                ) : (
                  <span className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-text-muted">
                    GitHub URL placeholder
                  </span>
                )}
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border px-4 py-2 text-sm"
                  >
                    Live demo
                  </a>
                ) : (
                  <span className="rounded-full border border-dashed border-border px-4 py-2 text-sm text-text-muted">
                    Live demo placeholder
                  </span>
                )}
                <Link
                  href="/work"
                  className="rounded-full border border-border px-4 py-2 text-sm"
                >
                  Back to archive
                </Link>
              </div>
            </div>
            <ProjectCover
              project={project}
              className="aspect-[16/11] w-full shadow-[var(--shadow)]"
            />
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <div className="prose-journal">
            <h2>Introduction</h2>
            <p>{project.longDescription}</p>

            <h2>Problem</h2>
            <p>{project.caseStudy.problem}</p>

            <h2>Goals</h2>
            <ul>
              {project.caseStudy.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>

            <h2>Architecture overview</h2>
            <p>{project.caseStudy.architecture}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border">
              {project.slug === "forge" ? (
                <ForgeArchitecture />
              ) : project.slug === "simplestore" ? (
                <SimpleStoreArchitecture />
              ) : (
                <div className="bg-bg-muted px-5 py-10 text-sm text-text-muted">
                  Architecture diagram placeholder for {project.name}.
                </div>
              )}
            </div>

            <h2>Technical decisions</h2>
            <ul>
              {project.caseStudy.technicalDecisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Engineering challenges</h2>
            <ul>
              {project.caseStudy.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Technology stack</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-bg-muted px-3 py-1 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h2>Results and limitations</h2>
            <p>{project.caseStudy.results}</p>
            <p>{project.caseStudy.limitations}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <hr className="editorial-rule" />
          <div className="py-10">
            <p className="eyebrow">Continue reading</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {others.map((item) => (
                <Link
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  className="rounded-full border border-border px-4 py-2 text-sm hover:border-accent-orange"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
