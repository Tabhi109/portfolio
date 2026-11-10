import Link from "next/link";
import { ARTICLES } from "@/data/articles";

export function EngineeringNotes() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Engineering notes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Topics on the desk
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              Placeholders for future writing — not invented essays. The shelf is
              reserved for notes that actually get written.
            </p>
          </div>
          <Link
            href="/engineering"
            className="text-sm font-medium text-accent-orange underline-offset-4 hover:underline"
          >
            Engineering index →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="surface-card rounded-2xl p-5 sm:p-6"
            >
              <p className="eyebrow">
                {article.category} · {article.date} · {article.status}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {article.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
