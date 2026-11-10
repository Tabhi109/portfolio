"use client";

import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CommandPalette } from "@/components/interactions/CommandPalette";

export function AppShell({ children }: { children: ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <SiteHeader onOpenCommand={() => setCommandOpen(true)} />
      <div className="flex-1">{children}</div>
      <SiteFooter />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
    </>
  );
}
