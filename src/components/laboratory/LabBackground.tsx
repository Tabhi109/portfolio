"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface LabBackgroundProps {
  interactive?: boolean;
}

export function LabBackground({ interactive = true }: LabBackgroundProps) {
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const farX = useTransform(sx, (v) => v * 8);
  const farY = useTransform(sy, (v) => v * 5);
  const midX = useTransform(sx, (v) => v * 18);
  const midY = useTransform(sy, (v) => v * 10);
  const nearX = useTransform(sx, (v) => v * 28);
  const nearY = useTransform(sy, (v) => v * 16);

  useEffect(() => {
    if (!interactive || reduced) return;
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [interactive, mx, my, reduced]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{ background: "var(--lab-gradient)" }}
      />

      {/* Atmospheric haze */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(4,11,18,0.55)_100%)]" />

      {/* Far wall layer */}
      <motion.svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 h-full w-full"
        style={{ x: farX, y: farY }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="wallShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A3A52" />
            <stop offset="100%" stopColor="#0C2233" />
          </linearGradient>
          <pattern id="tile" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M48 0 H0 V48"
              fill="none"
              stroke="#244860"
              strokeWidth="1"
              opacity="0.35"
            />
          </pattern>
        </defs>

        <rect width="1440" height="900" fill="url(#wallShade)" />
        <rect width="1440" height="900" fill="url(#tile)" />

        {/* Ceiling pipes */}
        <path
          d="M0 90 H1440"
          stroke="#D4894A"
          strokeWidth={14}
        />
        <path
          d="M0 120 H1440"
          stroke="#8FB4C9"
          strokeWidth="8"
          opacity="0.7"
        />
        <path
          d="M180 90 V210 H260"
          fill="none"
          stroke="#5AD0FF"
          strokeWidth="6"
          className="animate-wire-flow"
        />
        <path
          d="M980 90 V180 H1100 V260"
          fill="none"
          stroke="#3DFFB5"
          strokeWidth="5"
          className="animate-wire-flow"
        />

        {/* Window portals on wall */}
        <rect
          x="160"
          y="220"
          width="220"
          height="140"
          rx="18"
          fill="#082033"
          stroke="#041018"
          strokeWidth="6"
        />
        <rect
          x="175"
          y="235"
          width="190"
          height="110"
          rx="12"
          fill="#12304A"
        />
        <circle cx="270" cy="290" r="36" fill="#1FA87A" opacity="0.35" className="animate-pulse-glow" />
        <circle cx="250" cy="275" r="10" fill="#3DFFB5" opacity="0.8" />

        <rect
          x="1060"
          y="200"
          width="200"
          height="160"
          rx="18"
          fill="#082033"
          stroke="#041018"
          strokeWidth="6"
        />
        <path
          d="M1080 320 Q1160 220 1240 300"
          fill="none"
          stroke="#FFC857"
          strokeWidth="4"
          opacity="0.7"
        />

        {/* Wall shelves / odd devices */}
        <rect x="520" y="250" width="160" height="20" rx="4" fill="#163247" stroke="#041018" strokeWidth="3" />
        <circle cx="550" cy="230" r="18" fill="#FF6B6B" stroke="#041018" strokeWidth="3" className="animate-pulse-glow" />
        <rect x="590" y="200" width="40" height="50" rx="8" fill="#E8F1F6" stroke="#041018" strokeWidth="3" />
        <rect x="640" y="210" width="28" height="40" rx="6" fill="#FFC857" stroke="#041018" strokeWidth="3" />
      </motion.svg>

      {/* Mid layer: benches & floor perspective */}
      <motion.svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 h-full w-full"
        style={{ x: midX, y: midY }}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Floor */}
        <path
          d="M0 620 L720 520 L1440 620 L1440 900 L0 900 Z"
          fill="#0A1C2B"
        />
        <path
          d="M0 620 L720 520 L1440 620"
          fill="none"
          stroke="#041018"
          strokeWidth="8"
        />
        <path
          d="M720 520 V900"
          stroke="#143652"
          strokeWidth="3"
          opacity="0.7"
        />
        {[1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M${720 - i * 140} 520 L${i * 160} 900`}
            stroke="#143652"
            strokeWidth="2"
            opacity="0.45"
          />
        ))}
        {[1, 2, 3, 4].map((i) => (
          <path
            key={`r-${i}`}
            d={`M${720 + i * 140} 520 L${1440 - i * 160} 900`}
            stroke="#143652"
            strokeWidth="2"
            opacity="0.45"
          />
        ))}

        {/* Left workbench */}
        <g>
          <rect x="40" y="560" width="280" height="90" rx="12" fill="#163247" stroke="#041018" strokeWidth="5" />
          <rect x="50" y="500" width="120" height="70" rx="10" fill="#1C3D52" stroke="#041018" strokeWidth="4" />
          <circle cx="110" cy="530" r="16" fill="#3DFFB5" opacity="0.7" className="animate-pulse-glow" />
          <rect x="190" y="510" width="100" height="50" rx="8" fill="#0F2433" stroke="#5AD0FF" strokeWidth="3" />
          <path d="M205 525 H275 M205 540 H255" stroke="#5AD0FF" strokeWidth="3" className="animate-wire-flow" />
        </g>

        {/* Right tower machine */}
        <g>
          <rect x="1180" y="430" width="180" height="220" rx="16" fill="#1C3D52" stroke="#041018" strokeWidth="5" />
          <rect x="1210" y="460" width="120" height="80" rx="10" fill="#082033" stroke="#D4894A" strokeWidth="4" />
          <circle cx="1270" cy="500" r="24" fill="#D4894A" className="animate-pulse-glow" />
          <rect x="1220" y="560" width="20" height="20" rx="4" fill="#3DFFB5" className="animate-blink-led" />
          <rect x="1260" y="560" width="20" height="20" rx="4" fill="#FF6B6B" className="animate-blink-led" />
          <rect x="1300" y="560" width="20" height="20" rx="4" fill="#FFC857" />
        </g>

        {/* Steam vents */}
        <g opacity="0.5">
          <circle cx="220" cy="470" r="10" fill="#8FB4C9" className="animate-steam" />
          <circle cx="250" cy="460" r="8" fill="#8FB4C9" className="animate-steam" style={{ animationDelay: "0.8s" }} />
          <circle cx="1260" cy="400" r="12" fill="#8FB4C9" className="animate-steam" style={{ animationDelay: "1.2s" }} />
        </g>
      </motion.svg>

      {/* Near foreground props */}
      <motion.svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 h-full w-full"
        style={{ x: nearX, y: nearY }}
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M0 780 C200 740 400 820 720 760 C1000 700 1200 820 1440 780 L1440 900 L0 900 Z"
          fill="#07141F"
          opacity="0.55"
        />
        <g>
          <rect x="80" y="760" width="70" height="50" rx="10" fill="#FFC857" stroke="#041018" strokeWidth="4" />
          <rect x="170" y="780" width="40" height="30" rx="8" fill="#E8F1F6" stroke="#041018" strokeWidth="3" />
          <circle cx="1320" cy="800" r="28" fill="#163247" stroke="#041018" strokeWidth="4" />
          <circle cx="1320" cy="800" r="12" fill="#3DFFB5" className="animate-pulse-glow" />
        </g>
      </motion.svg>
    </div>
  );
}
