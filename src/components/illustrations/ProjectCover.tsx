import type { Project } from "@/types";

export function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border ${className}`}
      style={{ background: `color-mix(in srgb, ${project.accent} 18%, var(--bg-elevated))` }}
      aria-hidden
    >
      <svg viewBox="0 0 400 260" className="h-full w-full">
        <rect width="400" height="260" fill="transparent" />
        <rect
          x="28"
          y="28"
          width="150"
          height="204"
          rx="8"
          fill="var(--bg-elevated)"
          stroke="var(--text)"
          strokeWidth="2.5"
        />
        <rect
          x="48"
          y="52"
          width="110"
          height="12"
          rx="3"
          fill={project.accent}
        />
        <rect x="48" y="78" width="90" height="7" rx="2" fill="var(--border)" />
        <rect x="48" y="94" width="100" height="7" rx="2" fill="var(--border)" />
        <circle cx="90" cy="160" r="28" fill={project.accent} opacity="0.75" />
        <path
          d="M210 70 H360 M210 100 H330 M210 130 H350"
          stroke="var(--text-muted)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <rect
          x="210"
          y="160"
          width="140"
          height="72"
          rx="10"
          fill="var(--bg-muted)"
          stroke="var(--border)"
          strokeWidth="2"
        />
        <text
          x="280"
          y="202"
          textAnchor="middle"
          fill="var(--text-muted)"
          fontSize="14"
          fontFamily="var(--font-mono)"
        >
          {project.category.split(" ")[0]}
        </text>
      </svg>
    </div>
  );
}
