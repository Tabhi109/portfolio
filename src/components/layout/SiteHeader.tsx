"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Command, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/social";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/cn";

interface SiteHeaderProps {
  onOpenCommand: () => void;
}

export function SiteHeader({ onOpenCommand }: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group min-w-0">
          <p className="font-display text-lg font-semibold tracking-tight text-text">
            {SITE.name}
          </p>
          <p className="eyebrow truncate group-hover:text-accent-orange">
            {SITE.domain}
          </p>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition",
                  active
                    ? "bg-bg-muted text-text"
                    : "text-text-muted hover:text-text",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-xs text-text-muted transition hover:border-accent-orange sm:inline-flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-bg-muted"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onOpenCommand();
                }}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-text-muted"
              >
                Open command palette
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
