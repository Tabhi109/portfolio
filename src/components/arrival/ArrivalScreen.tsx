"use client";

import { useEffect, useState } from "react";
import { B3Robot } from "@/components/robot/B3Robot";
import { LabBackground } from "@/components/laboratory/LabBackground";
import { EXPERIENCE } from "@/data/projects";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ArrivalScreenProps {
  onEnter: () => void;
  onSkip: () => void;
}

export function ArrivalScreen({ onEnter, onSkip }: ArrivalScreenProps) {
  const reduced = usePrefersReducedMotion();
  const lines = EXPERIENCE.robot.arrivalLines;
  const [lineIndex, setLineIndex] = useState(0);
  const visibleLineIndex = reduced ? lines.length - 1 : lineIndex;

  useEffect(() => {
    if (reduced) return;
    if (lineIndex >= lines.length - 1) return;
    const timeout = window.setTimeout(() => {
      setLineIndex((prev) => Math.min(prev + 1, lines.length - 1));
    }, 2400);
    return () => window.clearTimeout(timeout);
  }, [lineIndex, lines.length, reduced]);

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <LabBackground interactive={false} />
      <div className="absolute inset-0 bg-ink-deep/45" />

      <div className="relative z-10 flex flex-1 flex-col justify-between px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-8">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
              {EXPERIENCE.siteName}
            </p>
            <h1 className="mt-2 max-w-xl font-display text-4xl leading-none text-cream-ink sm:text-5xl md:text-6xl">
              Abhinav&apos;s Laboratory
            </h1>
            <p className="mt-3 max-w-md text-sm text-fog sm:text-base">
              An interactive cartoon science-fiction pocket universe — not a
              résumé PDF with gradients.
            </p>
          </div>
          <button
            type="button"
            onClick={onSkip}
            className="btn-ghost shrink-0 rounded-full px-3 py-2 text-xs font-semibold sm:text-sm"
          >
            Skip intro
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 py-8 sm:flex-row sm:items-end sm:justify-center sm:gap-10">
          <B3Robot
            lines={[...lines]}
            lineIndex={visibleLineIndex}
            size="lg"
            mood={visibleLineIndex > 0 ? "smug" : "idle"}
          />

          <div className="flex flex-col items-center gap-3 sm:items-start">
            <button
              type="button"
              onClick={onEnter}
              className="btn-enter rounded-full px-8 py-3 text-lg font-bold tracking-wide"
            >
              ENTER
            </button>
            <p className="text-center text-xs text-fog sm:text-left">
              Guided by {EXPERIENCE.robot.name}. Sarcasm included free of charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
