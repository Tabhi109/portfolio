"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE } from "@/data/experience";
import { cn } from "@/lib/cn";

export function ExperienceTimeline() {
  const [openId, setOpenId] = useState<string | null>(EXPERIENCE[0]?.id ?? null);

  return (
    <ol className="relative space-y-4 border-l border-border pl-6 sm:pl-8">
      {EXPERIENCE.map((role, index) => {
        const open = openId === role.id;
        return (
          <li key={role.id} className="relative">
            <span
              className="absolute -left-[1.9rem] top-5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent-orange sm:-left-[2.4rem]"
              aria-hidden
            />
            <article className="surface-card rounded-2xl p-5 sm:p-6">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : role.id)}
              >
                <div>
                  <p className="eyebrow">
                    Chapter {String(index + 1).padStart(2, "0")} · {role.start} — {role.end}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold">
                    {role.company}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {role.position} · {role.employmentType}
                  </p>
                </div>
                <ChevronDown
                  className={cn(
                    "mt-1 h-5 w-5 shrink-0 text-text-muted transition",
                    open ? "rotate-180" : "",
                  )}
                />
              </button>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {role.summary}
              </p>

              {open ? (
                <div className="mt-5 grid gap-5 border-t border-border pt-5 md:grid-cols-2">
                  <div>
                    <p className="eyebrow">Responsibilities</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                      {role.responsibilities.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow">Key contributions</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed">
                      {role.contributions.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                    <p className="eyebrow mt-5">Technologies</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {role.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </article>
          </li>
        );
      })}
    </ol>
  );
}
