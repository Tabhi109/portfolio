import type { Metadata } from "next";
import { PERSONAL_INTERESTS, PRIMARY_TECHNOLOGIES } from "@/data/skills";
import { SITE } from "@/data/social";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name} — software engineer based in ${SITE.location}.`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <header>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {SITE.name}
          </h1>
          <p className="mt-2 text-lg text-text-muted">
            {SITE.role} · {SITE.location}
          </p>
          <div className="prose-journal mt-6 space-y-4 text-base text-text-muted">
            <p>{SITE.intro}</p>
            <p>
              I care about backend engineering, distributed systems, system
              design, and building useful software products. This site is an
              unfinished journal — a place to keep the work, the learning, and
              the curiosity visible without turning them into marketing copy.
            </p>
            <p>
              Away from the editor, I spend time with physics, mathematics,
              philosophy, psychology, and cosmology. Those interests tend to
              sharpen how I think about systems, uncertainty, and trade-offs.
            </p>
          </div>
        </header>

        <aside className="space-y-6">
          <div className="surface-card rounded-2xl p-6">
            <p className="eyebrow">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PRIMARY_TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <p className="eyebrow">Curiosity collage</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {PERSONAL_INTERESTS.map((interest) => (
                <div
                  key={interest}
                  className="rounded-xl border border-border bg-bg-muted/50 px-3 py-4"
                >
                  <p className="font-display text-base font-semibold">
                    {interest}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
