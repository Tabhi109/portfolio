"use client";

import { motion } from "framer-motion";
import type { PortalColors } from "@/lib/types";

interface PortalProps {
  colors: PortalColors;
  open: boolean;
  size?: number;
  multicolour?: boolean;
  className?: string;
}

export function Portal({
  colors,
  open,
  size = 180,
  multicolour = false,
  className = "",
}: PortalProps) {
  const rings = multicolour
    ? [colors.primary, colors.secondary, colors.ring, "#FBBF24", "#38BDF8"]
    : [colors.primary, colors.secondary, colors.ring, colors.primary];

  return (
    <motion.div
      className={`pointer-events-none relative ${className}`}
      style={{ width: size, height: size }}
      initial={false}
      animate={{
        opacity: open ? 1 : 0,
        scale: open ? 1 : 0.2,
      }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ background: colors.glow }}
      />

      {rings.map((color, index) => {
        const inset = 8 + index * 14;
        const reverse = index % 2 === 1;
        return (
          <div
            key={`${color}-${index}`}
            className={`absolute rounded-full border-[3px] ${
              reverse ? "animate-portal-spin-rev" : "animate-portal-spin"
            }`}
            style={{
              inset,
              borderColor: color,
              boxShadow: `0 0 18px ${color}`,
              borderStyle: index === 1 ? "dashed" : "solid",
            }}
          />
        );
      })}

      <motion.div
        className="absolute inset-[28%] rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 30%, #fff8, ${colors.primary} 35%, ${colors.secondary} 70%, #041018 100%)`,
          boxShadow: `inset 0 0 30px ${colors.glow}`,
        }}
        animate={
          open
            ? { scale: [1, 1.08, 1], rotate: [0, 20, 0] }
            : { scale: 0.5 }
        }
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Distortion shards */}
      {[0, 45, 90, 135].map((deg) => (
        <div
          key={deg}
          className="absolute left-1/2 top-1/2 h-[46%] w-[3px] origin-bottom rounded-full opacity-70"
          style={{
            background: `linear-gradient(to top, transparent, ${colors.primary})`,
            transform: `translate(-50%, -100%) rotate(${deg}deg)`,
          }}
        />
      ))}
    </motion.div>
  );
}
