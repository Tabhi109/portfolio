import Link from "next/link";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/data/social";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-muted">
            {SITE.tagline}
          </p>
        </div>
        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent-orange">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Elsewhere</p>
          <ul className="mt-3 space-y-2 text-sm">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-accent-orange"
                  {...(link.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 {SITE.name}</p>
          <p className="font-mono">{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}
