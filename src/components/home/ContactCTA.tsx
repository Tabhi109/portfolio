import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/data/social";

export function ContactCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface-card overflow-hidden rounded-[1.75rem] px-6 py-10 sm:px-10 sm:py-14">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Every good story has another chapter. Maybe we can build the next
            one together.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            Open to conversations about engineering roles, backend systems,
            product collaboration, and freelance enquiries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {SITE.email ? (
              <a
                href={`mailto:${SITE.email}`}
                className="rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg hover:bg-accent-orange"
              >
                Email me
              </a>
            ) : null}
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-border bg-bg-elevated px-4 py-2.5 text-sm hover:border-accent-orange"
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/contact"
              className="rounded-full border border-border bg-bg-elevated px-4 py-2.5 text-sm hover:border-accent-orange"
            >
              Contact page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
