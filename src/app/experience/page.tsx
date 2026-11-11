import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Illustrated career chapters from Suggaa to Opus Capital Market & Consultant.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Career timeline</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Suggaa → Opus
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          From internship to Node.js backend work at Suggaa, then into software
          engineering at Opus. Expand any chapter for responsibilities and
          contributions.
        </p>
      </header>
      <div className="mt-12">
        <ExperienceTimeline />
      </div>
    </main>
  );
}
