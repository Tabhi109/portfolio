import Link from "next/link";
import { PERSONAL_INTERESTS } from "@/data/skills";

export function AboutTeaser() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="surface-card rounded-[1.75rem] p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-3">
            {PERSONAL_INTERESTS.map((interest, index) => (
              <div
                key={interest}
                className="rounded-2xl border border-border bg-bg-muted/50 px-4 py-5"
                style={{
                  transform: index % 2 === 0 ? "translateY(6px)" : "translateY(-4px)",
                }}
              >
                <p className="font-mono text-[11px] text-text-muted">Interest</p>
                <p className="mt-1 font-display text-lg font-semibold">{interest}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Curious beyond the compiler
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            Outside of shipping software, I&apos;m drawn to physics, mathematics,
            philosophy, psychology, and cosmology — the kinds of questions that
            make systems thinking feel larger than any one codebase.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex text-sm font-medium text-accent-orange underline-offset-4 hover:underline"
          >
            More about me →
          </Link>
        </div>
      </div>
    </section>
  );
}
