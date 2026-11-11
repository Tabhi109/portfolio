import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import { INTEREST_AREAS } from "@/data/skills";

export function EngineeringNotes() {
  return (
    <section className="border-b border-border bg-bg-muted/25 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Engineering notes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Field notes from the workbench
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Short technical writing grounded in projects and systems I actually
              work on — code intelligence, orchestration, and language choices.
            </p>
          </div>
          <Link
            href="/engineering"
            className="text-sm font-medium text-accent-orange underline-offset-4 hover:underline"
          >
            Engineering index →
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {INTEREST_AREAS.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/engineering/${article.slug}`}
              className="surface-card rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-accent-orange sm:p-6"
            >
              <p className="eyebrow">
                {article.category} · {article.date}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                {article.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                {article.summary}
              </p>
              <p className="mt-4 text-sm text-accent-orange">Read note →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
