"use client";

import type { ReactNode } from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import type { ProjectMachine } from "@/lib/types";

interface ProjectPanelProps {
  project: ProjectMachine;
  accentClassName?: string;
}

export function ProjectPanel({
  project,
  accentClassName = "text-mint",
}: ProjectPanelProps) {
  const { content } = project;

  return (
    <article className="lab-scroll max-h-[min(70dvh,640px)] space-y-5 overflow-y-auto rounded-2xl p-1 pr-2">
      <header>
        <p className={`font-display text-xs uppercase tracking-[0.22em] ${accentClassName}`}>
          Project dossier
        </p>
        <h2 className="font-display text-3xl text-cream-ink">{project.name}</h2>
        <p className="mt-1 text-fog">{project.tagline}</p>
      </header>

      <Section title="What it is" accentClassName={accentClassName}>
        <p>{content.overview}</p>
      </Section>

      <Section title="Problem" accentClassName={accentClassName}>
        <p>{content.problem}</p>
      </Section>

      <Section title="Capabilities" accentClassName={accentClassName}>
        <ul className="list-disc space-y-1 pl-5">
          {content.capabilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Architecture" accentClassName={accentClassName}>
        <p>{content.architecture}</p>
      </Section>

      <Section title="Technical decisions" accentClassName={accentClassName}>
        <ul className="list-disc space-y-1 pl-5">
          {content.technicalDecisions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Stack" accentClassName={accentClassName}>
        <div className="flex flex-wrap gap-2">
          {content.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-fog/30 bg-ink-elevated px-3 py-1 text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Engineering challenges" accentClassName={accentClassName}>
        <ul className="list-disc space-y-1 pl-5">
          {content.challenges.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Links" accentClassName={accentClassName}>
        <div className="flex flex-wrap gap-2">
          {content.links.github ? (
            <a
              href={content.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm"
            >
              <GitBranch className="h-4 w-4" aria-hidden />
              GitHub
            </a>
          ) : (
            <span className="rounded-full border border-dashed border-fog/40 px-3 py-2 text-xs text-fog">
              GitHub link placeholder
            </span>
          )}
          {content.links.demo ? (
            <a
              href={content.links.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Live demo
            </a>
          ) : (
            <span className="rounded-full border border-dashed border-fog/40 px-3 py-2 text-xs text-fog">
              Live demo placeholder
            </span>
          )}
        </div>
      </Section>
    </article>
  );
}

function Section({
  title,
  children,
  accentClassName,
}: {
  title: string;
  children: ReactNode;
  accentClassName: string;
}) {
  return (
    <section>
      <h3 className={`font-display text-sm uppercase tracking-[0.16em] ${accentClassName}`}>
        {title}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-cream-ink/90">
        {children}
      </div>
    </section>
  );
}
