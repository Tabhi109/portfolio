"use client";

import { motion } from "framer-motion";
import { Portal } from "@/components/portal/Portal";
import { PORTAL_COLORS } from "@/data/portal-colors";
import type { ProjectMachine as ProjectMachineData } from "@/lib/types";

interface ProjectMachineProps {
  project: ProjectMachineData;
  selected: boolean;
  activating: boolean;
  onSelect: (id: string) => void;
  onActivate: (id: string) => void;
  layout: "desktop" | "mobile";
  placement?: "absolute" | "grid";
}

function MachineBody({
  project,
  lit,
}: {
  project: ProjectMachineData;
  lit: boolean;
}) {
  const colors = PORTAL_COLORS[project.portal];
  const variant = project.id;

  return (
    <svg viewBox="0 0 160 180" className="h-full w-full">
      {/* Base pedestal */}
      <ellipse
        cx="80"
        cy="168"
        rx="54"
        ry="10"
        fill="#041018"
        opacity="0.45"
      />
      <rect
        x="40"
        y="140"
        width="80"
        height="24"
        rx="8"
        fill="#163247"
        className="cartoon-stroke"
        strokeWidth="3"
      />

      {/* Chassis variants */}
      {variant === "forge" && (
        <>
          <path
            d="M34 128 L48 56 H112 L126 128 Z"
            fill="#1C3D52"
            className="cartoon-stroke"
          />
          <rect
            x="58"
            y="70"
            width="44"
            height="44"
            rx="8"
            fill="#0B2433"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <circle
            cx="80"
            cy="92"
            r="16"
            fill={lit ? colors.primary : "#24445A"}
            className={lit ? "animate-pulse-glow" : undefined}
            stroke={colors.secondary}
            strokeWidth="3"
          />
          <path
            d="M50 48 H110 L100 34 H60 Z"
            fill="#D4894A"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
        </>
      )}

      {variant === "simplestore" && (
        <>
          <rect
            x="36"
            y="48"
            width="88"
            height="90"
            rx="12"
            fill="#F8FAFC"
            className="cartoon-stroke"
          />
          <rect
            x="48"
            y="60"
            width="64"
            height="40"
            rx="6"
            fill="#0F2433"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <circle
            cx="80"
            cy="80"
            r="12"
            fill={lit ? "#FFFFFF" : "#64748B"}
            className={lit ? "animate-pulse-glow" : undefined}
            stroke="#CBD5E1"
            strokeWidth="3"
          />
          <rect
            x="52"
            y="112"
            width="56"
            height="14"
            rx="4"
            fill="#FFC857"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <path
            d="M50 48 L80 28 L110 48"
            fill="#E2E8F0"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
        </>
      )}

      {variant === "snip" && (
        <>
          <rect
            x="44"
            y="40"
            width="72"
            height="100"
            rx="10"
            fill="#0F2433"
            className="cartoon-stroke"
          />
          <rect
            x="54"
            y="52"
            width="52"
            height="54"
            rx="6"
            fill="#082033"
            stroke={colors.primary}
            strokeWidth="3"
          />
          <path
            d="M62 66 H98 M62 78 H88 M62 90 H94"
            stroke={lit ? colors.primary : "#1E4A63"}
            strokeWidth="3"
            strokeLinecap="round"
            className={lit ? "animate-wire-flow" : undefined}
          />
          <circle
            cx="80"
            cy="124"
            r="8"
            fill={lit ? colors.primary : "#24445A"}
            className={lit ? "animate-blink-led" : undefined}
          />
        </>
      )}

      {variant === "investwise" && (
        <>
          <path
            d="M80 34 L124 128 H36 Z"
            fill="#1C3D52"
            className="cartoon-stroke"
          />
          <rect
            x="58"
            y="78"
            width="44"
            height="36"
            rx="6"
            fill="#0B2433"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <path
            d="M66 104 L76 88 L86 96 L96 76"
            fill="none"
            stroke={lit ? colors.primary : "#8B6914"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="80"
            cy="54"
            r="10"
            fill={lit ? colors.primary : "#6B5420"}
            className={lit ? "animate-pulse-glow" : undefined}
            stroke="#F59E0B"
            strokeWidth="3"
          />
        </>
      )}

      {variant === "foooo" && (
        <>
          <rect
            x="38"
            y="50"
            width="84"
            height="86"
            rx="28"
            fill="#1C3D52"
            className="cartoon-stroke"
          />
          <circle
            cx="64"
            cy="88"
            r="14"
            fill={lit ? "#FB7185" : "#5A3040"}
            className={lit ? "animate-pulse-glow" : undefined}
          />
          <circle
            cx="96"
            cy="88"
            r="14"
            fill={lit ? "#34D399" : "#2A5A48"}
            className={lit ? "animate-pulse-glow" : undefined}
          />
          <circle
            cx="80"
            cy="112"
            r="10"
            fill={lit ? "#818CF8" : "#353A68"}
            className={lit ? "animate-blink-led" : undefined}
          />
          <path
            d="M54 50 Q80 24 106 50"
            fill="none"
            stroke="#FFC857"
            strokeWidth="4"
            className="cartoon-stroke"
          />
        </>
      )}

      {/* Status LEDs */}
      <circle
        cx="52"
        cy="150"
        r="4"
        fill={lit ? "#3DFFB5" : "#3D5A4A"}
        className={lit ? "animate-blink-led" : undefined}
      />
      <circle
        cx="68"
        cy="150"
        r="4"
        fill={lit ? colors.primary : "#3A4550"}
      />
      <circle
        cx="84"
        cy="150"
        r="4"
        fill={lit ? colors.secondary : "#3A4550"}
      />
    </svg>
  );
}

export function ProjectMachine({
  project,
  selected,
  activating,
  onSelect,
  onActivate,
  layout,
  placement = "absolute",
}: ProjectMachineProps) {
  const colors = PORTAL_COLORS[project.portal];
  const pos =
    layout === "mobile" ? project.position.mobile : project.position.desktop;
  const lit = selected || activating;
  const isGrid = placement === "grid";

  return (
    <motion.div
      className={isGrid ? "relative z-20 w-full" : "absolute z-20"}
      style={
        isGrid
          ? undefined
          : {
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -50%)",
            }
      }
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <button
        type="button"
        onClick={() => onSelect(project.id)}
        onDoubleClick={() => onActivate(project.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            if (selected) onActivate(project.id);
            else onSelect(project.id);
          }
        }}
        aria-pressed={selected}
        aria-label={`${project.machineNumber} ${project.name}. ${project.shortDescription}`}
        className={`group relative flex flex-col items-center rounded-2xl border-3 p-2 text-left transition ${
          isGrid
            ? "w-full min-h-[11.5rem]"
            : "w-[7.5rem] sm:w-[9rem] md:w-[10rem]"
        } ${
          selected
            ? "border-mint bg-ink-elevated/80 shadow-[0_0_0_3px_rgba(61,255,181,0.25)]"
            : "border-transparent bg-ink-elevated/40 hover:border-fog/40 hover:bg-ink-elevated/70"
        }`}
      >
        <div className="relative h-28 w-full sm:h-32 md:h-36">
          <MachineBody project={project} lit={lit} />
          <div className="pointer-events-none absolute left-1/2 top-[18%] -translate-x-1/2">
            <Portal
              colors={colors}
              open={activating}
              size={selected && activating ? 88 : 64}
              multicolour={project.portal === "foooo"}
            />
          </div>
        </div>

        <div className="mt-1 w-full px-1">
          <p className="font-display text-[0.65rem] uppercase tracking-[0.18em] text-copper-bright">
            Machine {project.machineNumber}
          </p>
          <p className="font-display text-sm text-cream-ink sm:text-base">
            {project.name}
          </p>
          <p className="mt-0.5 line-clamp-2 text-[0.7rem] leading-snug text-fog sm:text-xs">
            {project.shortDescription}
          </p>
          {project.status === "coming-soon" ? (
            <span className="mt-1 inline-block rounded-full bg-panel px-2 py-0.5 text-[0.65rem] text-amber-glow">
              Calibrating
            </span>
          ) : (
            <span className="mt-1 inline-block rounded-full bg-mint/15 px-2 py-0.5 text-[0.65rem] text-mint">
              Portal ready
            </span>
          )}
        </div>
      </button>
    </motion.div>
  );
}
