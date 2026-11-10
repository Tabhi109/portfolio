"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DestinationShell } from "./DestinationShell";
import { ProjectPanel } from "./ProjectPanel";
import { B3Robot } from "@/components/robot/B3Robot";
import type { ProjectId, ProjectMachine } from "@/lib/types";

interface SimpleStoreWorldProps {
  project: ProjectMachine;
  onReturnLab: () => void;
  onReturnArrival: () => void;
  onNavigateProject: (id: ProjectId) => void;
}

const STALLS = [
  { id: "overview", label: "Overview stall", color: "#FFF7ED" },
  { id: "problem", label: "Problem stall", color: "#ECFEFF" },
  { id: "features", label: "Features stall", color: "#F0FDF4" },
  { id: "dossier", label: "Ledger booth", color: "#FDF4FF" },
] as const;

export function SimpleStoreWorld({
  project,
  onReturnLab,
  onReturnArrival,
  onNavigateProject,
}: SimpleStoreWorldProps) {
  const [active, setActive] =
    useState<(typeof STALLS)[number]["id"]>("dossier");

  return (
    <DestinationShell
      title="SimpleStore"
      subtitle="A colourful illustrated marketplace for commerce-shaped experiments."
      onReturnLab={onReturnLab}
      onReturnArrival={onReturnArrival}
      currentId={project.id}
      onNavigateProject={onNavigateProject}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#7DD3FC_0%,#FDE68A_38%,#FB7185_100%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {/* Sky shapes */}
        <circle cx="220" cy="140" r="48" fill="#FFF7ED" opacity="0.85" />
        <circle cx="1180" cy="120" r="36" fill="#FEF3C7" opacity="0.9" />

        {/* Market awnings */}
        <g>
          <path d="M80 260 H420 L400 320 H100 Z" fill="#FB7185" stroke="#041018" strokeWidth="5" />
          <rect x="100" y="320" width="300" height="160" fill="#FFF7ED" stroke="#041018" strokeWidth="5" />
          <path d="M480 240 H820 L800 300 H500 Z" fill="#38BDF8" stroke="#041018" strokeWidth="5" />
          <rect x="500" y="300" width="300" height="180" fill="#ECFEFF" stroke="#041018" strokeWidth="5" />
          <path d="M900 250 H1280 L1260 310 H920 Z" fill="#34D399" stroke="#041018" strokeWidth="5" />
          <rect x="920" y="310" width="340" height="170" fill="#F0FDF4" stroke="#041018" strokeWidth="5" />
        </g>

        {/* Street */}
        <path
          d="M0 560 C320 520 640 600 960 540 C1200 500 1340 560 1440 540 L1440 900 L0 900 Z"
          fill="#F8FAFC"
          stroke="#041018"
          strokeWidth="6"
        />
        <path
          d="M0 620 H1440"
          stroke="#CBD5E1"
          strokeWidth="10"
          strokeDasharray="40 28"
        />

        {/* Carts / crates */}
        <rect x="200" y="600" width="90" height="60" rx="8" fill="#FDBA74" stroke="#041018" strokeWidth="4" />
        <rect x="720" y="580" width="70" height="70" rx="10" fill="#A7F3D0" stroke="#041018" strokeWidth="4" />
        <circle cx="1100" cy="640" r="34" fill="#FDA4AF" stroke="#041018" strokeWidth="4" />
        <rect x="1280" y="600" width="80" height="50" rx="8" fill="#FDE68A" stroke="#041018" strokeWidth="4" />
      </svg>

      <div className="pointer-events-auto absolute inset-x-0 bottom-0 top-36 z-30 flex flex-col gap-4 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 lg:flex-row lg:items-end">
        <div className="flex flex-1 flex-col gap-3">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {STALLS.map((stall) => (
              <motion.button
                key={stall.id}
                type="button"
                onClick={() => setActive(stall.id)}
                whileTap={{ scale: 0.97 }}
                className={`rounded-2xl border-3 border-outline px-3 py-3 text-left shadow-[4px_4px_0_#041018] ${
                  active === stall.id ? "ring-4 ring-white/70" : ""
                }`}
                style={{ background: stall.color, color: "#041018" }}
              >
                <span className="font-display text-sm">{stall.label}</span>
              </motion.button>
            ))}
          </div>

          <B3Robot
            size="sm"
            lines={[
              "Welcome to the market. Prices are metaphorical. The code is hopefully less so.",
              "White portal. Bright stalls. Zero invented revenue metrics — I checked.",
            ]}
            mood="excited"
          />
        </div>

        <div className="panel-surface w-full max-w-lg rounded-2xl border-white/40 p-4 sm:p-5">
          {active === "overview" ? (
            <p className="text-sm leading-relaxed">{project.content.overview}</p>
          ) : active === "problem" ? (
            <p className="text-sm leading-relaxed">{project.content.problem}</p>
          ) : active === "features" ? (
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {project.content.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <ProjectPanel
              project={project}
              accentClassName="text-copper-bright"
            />
          )}
        </div>
      </div>
    </DestinationShell>
  );
}
