"use client";

import { Home, FlaskConical } from "lucide-react";
import type { ReactNode } from "react";
import { PROJECTS } from "@/data/projects";
import type { ProjectId } from "@/lib/types";

interface DestinationShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  onReturnLab: () => void;
  onReturnArrival: () => void;
  currentId: ProjectId;
  onNavigateProject: (id: ProjectId) => void;
}

export function DestinationShell({
  title,
  subtitle,
  children,
  onReturnLab,
  onReturnArrival,
  currentId,
  onNavigateProject,
}: DestinationShellProps) {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {children}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-deep/50 via-transparent to-ink-deep/80" />

      <div className="relative z-20 flex min-h-[100dvh] flex-col">
        <header className="flex flex-wrap items-start justify-between gap-3 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.24em] text-cream-ink/80">
              Destination
            </p>
            <h1 className="font-display text-3xl text-cream-ink sm:text-4xl">
              {title}
            </h1>
            <p className="mt-1 max-w-lg text-sm text-cream-ink/85">{subtitle}</p>
          </div>
          <div className="pointer-events-auto flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onReturnLab}
              className="btn-enter inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold sm:text-sm"
            >
              <FlaskConical className="h-4 w-4" aria-hidden />
              Laboratory
            </button>
            <button
              type="button"
              onClick={onReturnArrival}
              className="btn-ghost inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold sm:text-sm"
            >
              <Home className="h-4 w-4" aria-hidden />
              Main
            </button>
          </div>
        </header>

        <nav
          aria-label="Project navigation"
          className="pointer-events-auto mt-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:px-6"
        >
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onNavigateProject(project.id)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                project.id === currentId
                  ? "border-mint bg-mint/15 text-mint"
                  : "border-fog/30 bg-ink-elevated/70 text-cream-ink hover:border-fog/60"
              }`}
            >
              {project.name}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}
