import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JournalMark } from "@/components/illustrations/JournalMark";
import { PRIMARY_TECHNOLOGIES } from "@/data/skills";
import { SITE, SOCIAL_LINKS } from "@/data/social";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
        <div>
          <p className="eyebrow">
            {SITE.role} · {SITE.location}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {SITE.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent-orange"
            >
              Browse the collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm transition hover:border-accent-orange"
            >
              Contact
            </Link>
            {SOCIAL_LINKS.filter((link) =>
              ["GitHub", "Resume"].includes(link.label),
            ).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center rounded-full border border-transparent px-3 py-2.5 text-sm text-text-muted underline-offset-4 hover:text-text hover:underline"
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-10">
            <p className="eyebrow">Primary technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PRIMARY_TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-accent-green/20 blur-2xl lg:block" />
          <div className="surface-card relative rounded-[1.75rem] p-4 sm:p-6">
            <JournalMark className="mx-auto h-auto w-full max-w-md" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
              An illustrated journal of systems, experiments, and unfinished
              questions — part editorial, part toolbox.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
