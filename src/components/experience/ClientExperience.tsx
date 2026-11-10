"use client";

import dynamic from "next/dynamic";

const MultiverseExperience = dynamic(
  () =>
    import("@/components/experience/MultiverseExperience").then(
      (mod) => mod.MultiverseExperience,
    ),
  {
    ssr: false,
    loading: () => (
      <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-ink-deep px-6 text-center">
        <p className="font-display text-xs uppercase tracking-[0.28em] text-mint">
          abhinavtrip3.space
        </p>
        <h1 className="mt-3 font-display text-3xl text-cream-ink">
          Opening the laboratory…
        </h1>
        <p className="mt-2 max-w-sm text-sm text-fog">
          Warming portals, insulting physics, polishing sarcasm.
        </p>
      </main>
    ),
  },
);

export function ClientExperience() {
  return <MultiverseExperience />;
}
