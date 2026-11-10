"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import type { PortalColors, TravelFact } from "@/lib/types";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface WormholeTransitionProps {
  colors: PortalColors;
  fact: TravelFact;
  onComplete: () => void;
  onSkip: () => void;
  durationMs?: number;
}

export function WormholeTransition({
  colors,
  fact,
  onComplete,
  onSkip,
  durationMs = 4200,
}: WormholeTransitionProps) {
  const reduced = usePrefersReducedMotion();
  const tunnelRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onComplete();
  };

  const rings = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        size: 40 + i * 55,
        delay: i * 0.08,
        reverse: i % 2 === 1,
      })),
    [],
  );

  useEffect(() => {
    finishedRef.current = false;

    if (reduced || !tunnelRef.current) {
      const timeout = window.setTimeout(
        finish,
        reduced ? Math.min(durationMs, 900) : durationMs,
      );
      return () => window.clearTimeout(timeout);
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: finish,
      });

      timeline.fromTo(
        tunnelRef.current,
        { scale: 0.85, filter: "blur(0px) saturate(1)" },
        {
          scale: 1.2,
          filter: "blur(1.5px) saturate(1.35)",
          duration: durationMs / 1000,
          ease: "power2.inOut",
        },
      );
    }, tunnelRef);

    return () => ctx.revert();
    // finish closes over latest onComplete via render; intentional mount-driven effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationMs, reduced, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ink-deep"
      role="dialog"
      aria-modal="true"
      aria-label="Wormhole transition"
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at center, ${colors.glow}, transparent 55%), radial-gradient(circle at 30% 20%, ${colors.secondary}33, transparent 40%)`,
        }}
      />

      <div
        ref={tunnelRef}
        className="relative flex h-[min(90vw,560px)] w-[min(90vw,560px)] items-center justify-center"
        style={{ perspective: "900px" }}
      >
        {rings.map((ring) => (
          <motion.div
            key={ring.id}
            className="absolute rounded-full border-2"
            style={{
              width: ring.size,
              height: ring.size,
              borderColor: ring.reverse ? colors.secondary : colors.primary,
              boxShadow: `0 0 24px ${colors.glow}`,
            }}
            initial={{ opacity: 0, scale: 0.2, rotateX: 70 }}
            animate={
              reduced
                ? { opacity: 0.8, scale: 1 }
                : {
                    opacity: [0.2, 1, 0.35],
                    scale: [0.35, 1.35, 2.1],
                    rotate: ring.reverse ? -180 : 180,
                    rotateX: [65, 55, 70],
                  }
            }
            transition={{
              duration: reduced ? 0.4 : 2.8,
              repeat: reduced ? 0 : Infinity,
              delay: ring.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute h-24 w-24 rounded-full"
          style={{
            background: `radial-gradient(circle, #fff 0%, ${colors.primary} 40%, ${colors.secondary} 75%, transparent 100%)`,
            filter: "blur(2px)",
          }}
          animate={reduced ? { scale: 1 } : { scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-4 px-5 pb-10 pt-16 bg-gradient-to-t from-ink-deep via-ink-deep/90 to-transparent">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-mint">
          {fact.category} observation
        </p>
        <p className="max-w-xl text-center text-base leading-relaxed text-cream-ink sm:text-lg">
          {fact.text}
        </p>
        <button
          type="button"
          onClick={() => {
            finishedRef.current = true;
            onSkip();
          }}
          className="btn-ghost rounded-full px-5 py-2 text-sm font-semibold"
        >
          Skip transition
        </button>
      </div>
    </div>
  );
}
