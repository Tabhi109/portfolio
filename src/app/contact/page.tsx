import type { Metadata } from "next";
import { SITE, SOCIAL_LINKS } from "@/data/social";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for engineering roles, collaboration, or freelance enquiries.",
};

export default function ContactPage() {
  const links = [
    ...(SITE.email
      ? [
          {
            label: "Email",
            href: `mailto:${SITE.email}`,
            note: SITE.email,
            external: false,
          },
        ]
      : []),
    ...SOCIAL_LINKS.map((link) => ({
      label: link.label,
      href: link.href,
      note: link.href.replace(/^https?:\/\//, ""),
      external: Boolean(link.external),
    })),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <header className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Every good story has another chapter.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
          Maybe we can build the next one together — roles, systems work,
          product collaboration, or freelance project enquiries.
        </p>
      </header>

      {links.length > 0 ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="surface-card rounded-2xl p-6 transition hover:border-accent-orange"
              {...(link.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <p className="eyebrow">{link.label}</p>
              <p className="mt-3 break-all font-display text-xl font-semibold sm:text-2xl">
                {link.note}
              </p>
            </a>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-text-muted">
          Contact channels can be configured in `src/data/social.ts`.
        </p>
      )}

      {!SITE.email || !SITE.linkedinUrl || !SITE.resumePath ? (
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-text-muted">
          GitHub is live. Add email, LinkedIn, and resume paths in{" "}
          <code className="font-mono text-xs">src/data/social.ts</code> when
          you want them shown here.
        </p>
      ) : null}
    </main>
  );
}
