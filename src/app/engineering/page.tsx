import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import { INTEREST_AREAS } from "@/data/skills";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Engineering notes on code intelligence, workflow orchestration, and systems languages.",
};

export default function EngineeringPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Engineering notes</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A small technical notebook
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          Published notes only — each one tied to work I have actually been
          doing across Forge, Snip, financial backends, and systems languages.
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
          <Link
            key={article.slug}
            href={`/engineering/${article.slug}`}
            className="surface-card rounded-2xl p-6 transition hover:border-accent-orange"
          >
            <p className="eyebrow">
              {article.category} · {article.date}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold">
              {article.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {article.summary}
            </p>
            <p className="mt-5 text-sm text-accent-orange">Open article →</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
