"use client";

import { DestinationShell } from "./DestinationShell";
import { B3Robot } from "@/components/robot/B3Robot";
import { Portal } from "@/components/portal/Portal";
import { PORTAL_COLORS } from "@/data/portal-colors";
import type { ProjectId, ProjectMachine } from "@/lib/types";

interface ComingSoonWorldProps {
  project: ProjectMachine;
  onReturnLab: () => void;
  onReturnArrival: () => void;
  onNavigateProject: (id: ProjectId) => void;
}

export function ComingSoonWorld({
  project,
  onReturnLab,
  onReturnArrival,
  onNavigateProject,
}: ComingSoonWorldProps) {
  const colors = PORTAL_COLORS[project.portal];

  return (
    <DestinationShell
      title={project.name}
      subtitle="This universe is still being sketched into existence."
      onReturnLab={onReturnLab}
      onReturnArrival={onReturnArrival}
      currentId={project.id}
      onNavigateProject={onNavigateProject}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${colors.glow}, #07141f 60%)`,
        }}
      />

      <div className="pointer-events-auto absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 px-4 pb-10 pt-28">
        <Portal
          colors={colors}
          open
          size={160}
          multicolour={project.portal === "foooo"}
        />
        <div className="panel-surface max-w-md rounded-2xl p-5 text-center">
          <p className="font-display text-xs uppercase tracking-[0.2em] text-amber-glow">
            Machine {project.machineNumber} · calibrating
          </p>
          <h2 className="mt-2 font-display text-2xl">{project.name}</h2>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            {project.shortDescription}
          </p>
          <p className="mt-4 text-sm text-cream-ink/90">
            Destination content is intentionally unfinished. Return to the
            laboratory and try Forge or SimpleStore for a full visit.
          </p>
        </div>
        <B3Robot
          size="sm"
          lines={[
            "Coming soon means coming soon. I don't do fake launch dates.",
            "Want a fact while we wait? Infinity is larger than your backlog.",
          ]}
          mood="smug"
        />
      </div>
    </DestinationShell>
  );
}
