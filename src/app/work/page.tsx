import type { Metadata } from "next";
import { ProjectFilterGrid } from "@/components/projects/ProjectFilterGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "An illustrated archive of projects — backend systems, developer tools, and experiments.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Project library</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          The collection
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          Browse projects like shelves in a curated library. Filter by category,
          open a cover, and read the case study.
        </p>
      </header>
      <div className="mt-12">
        <ProjectFilterGrid />
      </div>
    </main>
  );
}
