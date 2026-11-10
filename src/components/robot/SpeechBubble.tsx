"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpeechBubbleProps {
  lines: string[];
  lineIndex?: number;
  className?: string;
}

export function SpeechBubble({
  lines,
  lineIndex = 0,
  className = "",
}: SpeechBubbleProps) {
  const text = lines[Math.min(lineIndex, lines.length - 1)] ?? "";

  return (
    <div className={`relative max-w-[16rem] sm:max-w-[18rem] ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.28 }}
          className="panel-surface relative rounded-2xl px-4 py-3 text-sm leading-snug text-cream-ink sm:text-[0.95rem]"
          role="status"
          aria-live="polite"
        >
          <p className="m-0">{text}</p>
          <span
            aria-hidden
            className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-b-3 border-r-3 border-outline bg-panel"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
