"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DestinationShell } from "./DestinationShell";
import { ProjectPanel } from "./ProjectPanel";
import { B3Robot } from "@/components/robot/B3Robot";
import type { ProjectId, ProjectMachine } from "@/lib/types";

interface ForgeWorldProps {
  project: ProjectMachine;
  onReturnLab: () => void;
  onReturnArrival: () => void;
  onNavigateProject: (id: ProjectId) => void;
}

const NODES = [
  { id: "overview", label: "Core", x: 22, y: 34 },
  { id: "graph", label: "Graph", x: 48, y: 26 },
  { id: "analysis", label: "Analysis", x: 72, y: 38 },
  { id: "stack", label: "Stack", x: 36, y: 58 },
  { id: "dossier", label: "Dossier", x: 64, y: 62 },
] as const;

export function ForgeWorld({
  project,
  onReturnLab,
  onReturnArrival,
  onNavigateProject,
}: ForgeWorldProps) {
  const [active, setActive] = useState<(typeof NODES)[number]["id"]>("dossier");
  const [openPanel, setOpenPanel] = useState(true);

  return (
    <DestinationShell
      title="Forge"
      subtitle="A mechanical world of interconnected analysis nodes."
      onReturnLab={onReturnLab}
      onReturnArrival={onReturnArrival}
      currentId={project.id}
      onNavigateProject={onNavigateProject}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#1a3d2a_0%,#07141f_55%,#040b12_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-90"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="forgeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="url(#forgeGlow)" />

        {/* Interconnected machinery */}
        <g stroke="#4ADE80" strokeWidth="3" fill="none" opacity="0.55">
          <path d="M200 300 H520 V180 H780" className="animate-wire-flow" />
          <path d="M520 300 V520 H860 V360" className="animate-wire-flow" />
          <path d="M860 360 H1120 V560" className="animate-wire-flow" />
          <path d="M320 560 H700 V700" />
        </g>

        <g>
          <rect x="160" y="220" width="140" height="100" rx="16" fill="#123526" stroke="#041018" strokeWidth="5" />
          <circle cx="230" cy="270" r="28" fill="#4ADE80" opacity="0.7" className="animate-pulse-glow" />
          <rect x="700" y="140" width="120" height="120" rx="20" fill="#2A1848" stroke="#041018" strokeWidth="5" />
          <rect x="720" y="160" width="80" height="80" rx="12" fill="#0B2433" stroke="#A855F7" strokeWidth="4" />
          <rect x="1040" y="500" width="160" height="140" rx="18" fill="#163247" stroke="#041018" strokeWidth="5" />
          <path d="M1070 560 H1170 M1070 590 H1140" stroke="#A855F7" strokeWidth="4" className="animate-wire-flow" />
          <polygon points="620,480 700,440 780,480 700,620" fill="#1C3D52" stroke="#041018" strokeWidth="5" />
          <circle cx="700" cy="520" r="22" fill="#A855F7" className="animate-blink-led" />
        </g>

        {/* Symbol glyphs */}
        <g fill="#3DFFB5" opacity="0.45" fontFamily="monospace" fontSize="18">
          <text x="260" y="400">{"{ }"}</text>
          <text x="900" y="280">{"</>"}</text>
          <text x="480" y="640">λ</text>
          <text x="1180" y="420">Σ</text>
        </g>
      </svg>

      <div className="pointer-events-auto absolute inset-x-0 bottom-0 top-36 z-30 flex flex-col gap-4 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 lg:flex-row lg:items-end">
        <div className="relative min-h-[220px] flex-1">
          {NODES.map((node) => (
            <motion.button
              key={node.id}
              type="button"
              onClick={() => {
                setActive(node.id);
                if (node.id === "dossier") setOpenPanel(true);
              }}
              className={`absolute rounded-full border-3 px-3 py-2 font-display text-xs sm:text-sm ${
                active === node.id
                  ? "border-mint bg-mint text-ink-deep"
                  : "border-outline bg-ink-elevated/90 text-cream-ink"
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {node.label}
            </motion.button>
          ))}

          <div className="absolute bottom-0 left-0">
            <B3Robot
              size="sm"
              showBubble
              lines={[
                "Welcome to the Forge lattice. Touch a node — or open the dossier if you prefer paperwork with better lighting.",
                "Green means structure. Purple means intrigue. Together they mean 'please document your APIs'.",
              ]}
              mood="smug"
            />
          </div>
        </div>

        <div className="panel-surface w-full max-w-lg rounded-2xl p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="font-display text-sm text-mint">
              {active === "dossier"
                ? "Interactive dossier"
                : `Node · ${NODES.find((n) => n.id === active)?.label}`}
            </p>
            <button
              type="button"
              className="btn-ghost rounded-full px-3 py-1 text-xs"
              onClick={() => setOpenPanel((v) => !v)}
            >
              {openPanel ? "Collapse" : "Expand"}
            </button>
          </div>

          {openPanel ? (
            active === "overview" ? (
              <p className="text-sm leading-relaxed">{project.content.overview}</p>
            ) : active === "graph" ? (
              <p className="text-sm leading-relaxed">
                Graph-like structures connect symbols, modules, and analysis
                outputs. Exact schema: [placeholder].
              </p>
            ) : active === "analysis" ? (
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {project.content.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : active === "stack" ? (
              <div className="flex flex-wrap gap-2">
                {project.content.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-ink-elevated px-3 py-1 text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : (
              <ProjectPanel project={project} accentClassName="text-mint" />
            )
          ) : (
            <p className="text-sm text-fog">Panel collapsed. Expand to read.</p>
          )}
        </div>
      </div>
    </DestinationShell>
  );
}
