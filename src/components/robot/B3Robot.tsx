"use client";

import { motion } from "framer-motion";
import { SpeechBubble } from "./SpeechBubble";

interface B3RobotProps {
  lines?: string[];
  lineIndex?: number;
  showBubble?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  mood?: "idle" | "excited" | "smug";
}

const sizes = {
  sm: "w-20 h-24",
  md: "w-28 h-32",
  lg: "w-36 h-40",
};

export function B3Robot({
  lines = [],
  lineIndex = 0,
  showBubble = true,
  size = "md",
  className = "",
  mood = "idle",
}: B3RobotProps) {
  const bounce = mood === "excited" ? 10 : 5;

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {showBubble && lines.length > 0 ? (
        <SpeechBubble
          lines={lines}
          lineIndex={lineIndex}
          className="mb-3 self-center"
        />
      ) : null}

      <motion.div
        className={`${sizes[size]} animate-float-y`}
        animate={
          mood === "excited"
            ? { rotate: [-4, 4, -4] }
            : { rotate: [-1.5, 1.5, -1.5] }
        }
        transition={{
          duration: mood === "excited" ? 0.6 : 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "50% 80%" }}
        aria-hidden={false}
        role="img"
        aria-label="B-3, a small sarcastic guide robot"
      >
        <svg viewBox="0 0 120 140" className="h-full w-full drop-shadow-lg">
          {/* Antenna */}
          <line
            x1="60"
            y1="18"
            x2="60"
            y2="4"
            className="cartoon-stroke"
            strokeWidth="4"
          />
          <circle
            cx="60"
            cy="4"
            r="5"
            fill="#3DFFB5"
            className="cartoon-stroke animate-pulse-glow"
            strokeWidth="2.5"
          />

          {/* Head */}
          <rect
            x="28"
            y="18"
            width="64"
            height="48"
            rx="16"
            fill="#E8F1F6"
            className="cartoon-stroke"
          />
          {/* Visor */}
          <rect
            x="36"
            y="30"
            width="48"
            height="22"
            rx="8"
            fill="#0B2433"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          {/* Eyes */}
          <motion.ellipse
            cx="48"
            cy="41"
            rx="5"
            ry={mood === "smug" ? 2.5 : 6}
            fill="#3DFFB5"
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <motion.ellipse
            cx="72"
            cy="41"
            rx="5"
            ry={mood === "smug" ? 2.5 : 6}
            fill="#3DFFB5"
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 0.15 }}
          />
          {/* Mouth plate */}
          <path
            d={
              mood === "smug"
                ? "M46 58 Q60 66 74 58"
                : "M46 58 Q60 52 74 58"
            }
            fill="none"
            stroke="#041018"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Ear bolts */}
          <circle
            cx="28"
            cy="40"
            r="6"
            fill="#D4894A"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <circle
            cx="92"
            cy="40"
            r="6"
            fill="#D4894A"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />

          {/* Neck */}
          <rect
            x="52"
            y="64"
            width="16"
            height="10"
            fill="#8FB4C9"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />

          {/* Body */}
          <rect
            x="32"
            y="72"
            width="56"
            height="46"
            rx="14"
            fill="#FFC857"
            className="cartoon-stroke"
          />
          <rect
            x="42"
            y="82"
            width="36"
            height="18"
            rx="6"
            fill="#0F2433"
            className="cartoon-stroke"
            strokeWidth="2.5"
          />
          <text
            x="60"
            y="95"
            textAnchor="middle"
            fill="#3DFFB5"
            fontSize="11"
            fontFamily="monospace"
            fontWeight="700"
          >
            B-3
          </text>

          {/* Arms */}
          <motion.g
            animate={{ rotate: [-bounce / 2, bounce / 2, -bounce / 2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "34px 80px" }}
          >
            <rect
              x="18"
              y="78"
              width="16"
              height="28"
              rx="8"
              fill="#E8F1F6"
              className="cartoon-stroke"
              strokeWidth="2.5"
            />
          </motion.g>
          <motion.g
            animate={{ rotate: [bounce / 2, -bounce / 2, bounce / 2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "86px 80px" }}
          >
            <rect
              x="86"
              y="78"
              width="16"
              height="28"
              rx="8"
              fill="#E8F1F6"
              className="cartoon-stroke"
              strokeWidth="2.5"
            />
          </motion.g>

          {/* Treads */}
          <rect
            x="36"
            y="116"
            width="48"
            height="14"
            rx="7"
            fill="#163247"
            className="cartoon-stroke"
          />
          <circle cx="46" cy="123" r="4" fill="#D4894A" />
          <circle cx="60" cy="123" r="4" fill="#D4894A" />
          <circle cx="74" cy="123" r="4" fill="#D4894A" />
        </svg>
      </motion.div>
    </div>
  );
}
