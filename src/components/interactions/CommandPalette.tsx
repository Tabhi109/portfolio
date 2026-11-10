"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight, FileText, FolderKanban, Mail, Search } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/data/social";
import { cn } from "@/lib/cn";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  href: string;
  group: string;
  external?: boolean;
};

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  if (!open) return null;
  return <CommandPaletteDialog onClose={onClose} />;
}

function CommandPaletteDialog({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const items = useMemo<CommandItem[]>(() => {
    const nav = NAV_LINKS.map((link) => ({
      id: `nav-${link.href}`,
      label: link.label,
      hint: "Page",
      href: link.href,
      group: "Navigate",
    }));

    const projects = PROJECTS.map((project) => ({
      id: `project-${project.slug}`,
      label: project.name,
      hint: project.category,
      href: `/work/${project.slug}`,
      group: "Projects",
    }));

    const actions: CommandItem[] = [
      {
        id: "experience",
        label: "Open experience",
        href: "/experience",
        group: "Actions",
      },
      {
        id: "contact",
        label: "Open contact",
        href: "/contact",
        group: "Actions",
      },
      {
        id: "resume",
        label: "Download resume",
        hint: "PDF placeholder",
        href: SITE.resumePath,
        group: "Actions",
        external: true,
      },
      ...SOCIAL_LINKS.filter((link) => link.label !== "Resume").map((link) => ({
        id: `social-${link.label}`,
        label: link.label,
        href: link.href,
        group: "Contact",
        external: link.external,
      })),
    ];

    const all = [...nav, ...projects, ...actions];
    const normalized = query.trim().toLowerCase();
    if (!normalized) return all;
    return all.filter(
      (item) =>
        item.label.toLowerCase().includes(normalized) ||
        item.hint?.toLowerCase().includes(normalized) ||
        item.group.toLowerCase().includes(normalized),
    );
  }, [query]);

  const activeIndex = Math.min(active, Math.max(items.length - 1, 0));

  const run = useCallback(
    (item: CommandItem) => {
      onClose();
      if (item.external || item.href.startsWith("mailto:")) {
        window.open(item.href, item.external ? "_blank" : undefined);
        return;
      }
      router.push(item.href);
    },
    [onClose, router],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((value) => Math.min(value + 1, Math.max(items.length - 1, 0)));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((value) => Math.max(value - 1, 0));
      }
      if (event.key === "Enter" && items[activeIndex]) {
        event.preventDefault();
        run(items[activeIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items, onClose, run]);

  const groups = [...new Set(items.map((item) => item.group))];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-text/30 px-4 pt-[12vh] backdrop-blur-sm dark:bg-black/50">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close command palette"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-bg-elevated shadow-[var(--shadow)]"
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <Search className="h-4 w-4 text-text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            placeholder="Search pages, projects, actions…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-text-muted"
          />
        </div>
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {items.length === 0 ? (
            <p className="px-3 py-6 text-sm text-text-muted">No matches.</p>
          ) : (
            groups.map((group) => (
              <div key={group} className="mb-2">
                <p className="eyebrow px-3 py-2">{group}</p>
                <ul>
                  {items
                    .filter((item) => item.group === group)
                    .map((item) => {
                      const index = items.findIndex((entry) => entry.id === item.id);
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActive(index)}
                            onClick={() => run(item)}
                            className={cn(
                              "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm",
                              index === activeIndex
                                ? "bg-bg-muted text-text"
                                : "text-text-muted hover:bg-bg-muted/70 hover:text-text",
                            )}
                          >
                            <span className="inline-flex items-center gap-2">
                              {item.group === "Projects" ? (
                                <FolderKanban className="h-4 w-4" />
                              ) : item.group === "Contact" ? (
                                <Mail className="h-4 w-4" />
                              ) : item.id === "resume" ? (
                                <FileText className="h-4 w-4" />
                              ) : (
                                <ArrowUpRight className="h-4 w-4" />
                              )}
                              {item.label}
                            </span>
                            {item.hint ? (
                              <span className="font-mono text-[11px] text-text-muted">
                                {item.hint}
                              </span>
                            ) : null}
                          </button>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
