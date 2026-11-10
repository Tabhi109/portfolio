import type { Metadata } from "next";
import { ARTICLES } from "@/data/articles";
import { INTEREST_AREAS } from "@/data/skills";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering interests and placeholder notes on systems, tooling, and architecture.",
};

export default function EngineeringPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Engineering notes</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Research notebooks
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          Topics I care about writing through carefully. No fabricated essays —
          only reserved slots and honest placeholders.
        </p>
      </header>

      <section className="mt-10">
        <p className="eyebrow">Current interests</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {INTEREST_AREAS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        {ARTICLES.map((article) => (
          <article key={article.slug} className="surface-card rounded-2xl p-6">
            <p className="eyebrow">
              {article.category} · {article.status}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {article.summary}
            </p>
            <p className="mt-4 font-mono text-[11px] text-text-muted">
              MDX-ready slot · content not written yet
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
