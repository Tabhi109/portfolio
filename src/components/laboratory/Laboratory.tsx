"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, DoorOpen, Info, Zap } from "lucide-react";
import { LabBackground } from "./LabBackground";
import { ProjectMachine } from "./ProjectMachine";
import { B3Robot } from "@/components/robot/B3Robot";
import { Portal } from "@/components/portal/Portal";
import { EXPERIENCE, PROJECTS } from "@/data/projects";
import { PORTAL_COLORS } from "@/data/portal-colors";
import type { ProjectId, ProjectMachine as ProjectMachineType } from "@/lib/types";

interface LaboratoryProps {
  selectedId: ProjectId | null;
  activatingId: ProjectId | null;
  onSelect: (id: ProjectId) => void;
  onActivate: (id: ProjectId) => void;
  onExit: () => void;
  onOpenAbout: () => void;
}

function useLabLayout(): "desktop" | "mobile" {
  const [layout, setLayout] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setLayout(media.matches ? "mobile" : "desktop");
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return layout;
}

export function Laboratory({
  selectedId,
  activatingId,
  onSelect,
  onActivate,
  onExit,
  onOpenAbout,
}: LaboratoryProps) {
  const layout = useLabLayout();
  const [lineIndex, setLineIndex] = useState(0);
  const selected = PROJECTS.find((p) => p.id === selectedId) ?? null;

  useEffect(() => {
    const id = window.setInterval(() => {
      setLineIndex((prev) => (prev + 1) % EXPERIENCE.robot.labIdleLines.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (id: string) => onSelect(id as ProjectId);
  const handleActivate = (id: string) => onActivate(id as ProjectId);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-ink-deep">
      <LabBackground />

      <a
        href="#lab-machines"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-3 focus:py-2"
      >
        Skip to machines
      </a>

      <header className="relative z-30 flex items-start justify-between gap-3 px-4 pb-2 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
        <div>
          <p className="font-display text-xs uppercase tracking-[0.24em] text-mint">
            {EXPERIENCE.siteName}
          </p>
          <h1 className="font-display text-xl text-cream-ink sm:text-2xl">
            Questionable Laboratory
          </h1>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={onOpenAbout}
            className="btn-ghost inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold sm:text-sm"
          >
            <Info className="h-4 w-4" aria-hidden />
            About
          </button>
          <button
            type="button"
            onClick={onExit}
            className="btn-ghost inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold sm:text-sm"
          >
            <DoorOpen className="h-4 w-4" aria-hidden />
            Exit
          </button>
        </div>
      </header>

      {layout === "mobile" ? (
        <div
          id="lab-machines"
          className="relative z-20 mx-auto grid max-h-[52dvh] w-full max-w-lg grid-cols-2 gap-3 overflow-y-auto px-4 py-2 lab-scroll"
        >
          {PROJECTS.map((project) => (
            <ProjectMachine
              key={project.id}
              project={project}
              selected={selectedId === project.id}
              activating={activatingId === project.id}
              onSelect={handleSelect}
              onActivate={handleActivate}
              layout="mobile"
              placement="grid"
            />
          ))}
        </div>
      ) : (
        <div
          id="lab-machines"
          className="relative z-20 mx-auto h-[min(68dvh,640px)] w-full max-w-6xl sm:h-[min(72dvh,720px)]"
        >
          {PROJECTS.map((project) => (
            <ProjectMachine
              key={project.id}
              project={project}
              selected={selectedId === project.id}
              activating={activatingId === project.id}
              onSelect={handleSelect}
              onActivate={handleActivate}
              layout="desktop"
            />
          ))}

          <AnimatePresence>
            {selected && activatingId === selected.id ? (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-[48%] z-10 -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <Portal
                  colors={PORTAL_COLORS[selected.portal]}
                  open
                  size={200}
                  multicolour={selected.portal === "foooo"}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      )}

      <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="order-2 sm:order-1">
          <B3Robot
            lines={[...EXPERIENCE.robot.labIdleLines]}
            lineIndex={lineIndex}
            size={layout === "mobile" ? "sm" : "md"}
            mood={activatingId ? "excited" : selected ? "smug" : "idle"}
          />
        </div>

        <MachineInspector
          project={selected}
          onActivate={() => selected && onActivate(selected.id)}
          className="order-1 sm:order-2"
        />
      </div>
    </section>
  );
}

function MachineInspector({
  project,
  onActivate,
  className = "",
}: {
  project: ProjectMachineType | null;
  onActivate: () => void;
  className?: string;
}) {
  return (
    <div
      className={`panel-surface w-full max-w-md rounded-2xl p-4 sm:p-5 ${className}`}
    >
      {project ? (
        <>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-copper-bright">
            Machine {project.machineNumber}
          </p>
          <h2 className="font-display text-2xl text-cream-ink">{project.name}</h2>
          <p className="mt-1 text-sm text-fog">{project.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream-ink/90">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onActivate}
              className="btn-enter inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold"
            >
              <Zap className="h-4 w-4" aria-hidden />
              {project.status === "ready" ? "Activate portal" : "Peek ahead"}
            </button>
            <p className="self-center text-xs text-fog">
              Tap to inspect · activate to travel
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="font-display text-xs uppercase tracking-[0.2em] text-mint">
            Guidance
          </p>
          <h2 className="font-display text-xl text-cream-ink">
            Pick a machine
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Five experimental devices are humming. Forge and SimpleStore can
            open full destinations. The others are still calibrating.
          </p>
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-cream-ink/80">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Select any glowing chassis to begin
          </p>
        </>
      )}
    </div>
  );
}
