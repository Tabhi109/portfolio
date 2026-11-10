import Link from "next/link";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export function ExperiencePreview() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Chapters so far
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              From startup engineering at Suggaa to remote financial systems work
              at Opus — a short illustrated career timeline.
            </p>
          </div>
          <Link
            href="/experience"
            className="text-sm font-medium text-accent-orange underline-offset-4 hover:underline"
          >
            Full experience page →
          </Link>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
