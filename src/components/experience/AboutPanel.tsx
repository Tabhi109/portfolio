"use client";

import { X } from "lucide-react";
import { EXPERIENCE } from "@/data/projects";

interface AboutPanelProps {
  open: boolean;
  onClose: () => void;
}

export function AboutPanel({ open, onClose }: AboutPanelProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-deep/70 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close about panel"
        onClick={onClose}
      />
      <div className="panel-surface relative z-10 max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-2xl p-5 lab-scroll">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-mint">
              Protagonist file
            </p>
            <h2 id="about-title" className="font-display text-2xl">
              {EXPERIENCE.characterName}
            </h2>
            <p className="text-sm text-fog">
              {EXPERIENCE.role} · {EXPERIENCE.location}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost rounded-full p-2"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <section className="mt-5">
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-copper-bright">
            Technologies
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {EXPERIENCE.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-ink-elevated px-3 py-1 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h3 className="font-display text-sm uppercase tracking-[0.16em] text-copper-bright">
            Experience
          </h3>
          <ul className="mt-2 space-y-3">
            {EXPERIENCE.experience.map((item) => (
              <li key={item.company} className="text-sm leading-relaxed">
                <p className="font-semibold text-cream-ink">{item.company}</p>
                <p className="text-fog">{item.summary}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-5 text-xs text-fog">
          Details that are not listed here are intentionally omitted rather than
          invented.
        </p>
      </div>
    </div>
  );
}
