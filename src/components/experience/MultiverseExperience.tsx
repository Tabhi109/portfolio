"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import { ArrivalScreen } from "@/components/arrival/ArrivalScreen";
import { Laboratory } from "@/components/laboratory/Laboratory";
import { WormholeTransition } from "@/components/wormhole/WormholeTransition";
import { AboutPanel } from "@/components/experience/AboutPanel";
import { pickTravelFact } from "@/data/facts";
import { getProject, PROJECTS } from "@/data/projects";
import { PORTAL_COLORS } from "@/data/portal-colors";
import type { ExperiencePhase, ProjectId, TravelFact } from "@/lib/types";

const ForgeWorld = dynamic(
  () =>
    import("@/components/destinations/ForgeWorld").then((m) => m.ForgeWorld),
  { ssr: false, loading: () => <DestinationFallback label="Forge" /> },
);

const SimpleStoreWorld = dynamic(
  () =>
    import("@/components/destinations/SimpleStoreWorld").then(
      (m) => m.SimpleStoreWorld,
    ),
  { ssr: false, loading: () => <DestinationFallback label="SimpleStore" /> },
);

const ComingSoonWorld = dynamic(
  () =>
    import("@/components/destinations/ComingSoonWorld").then(
      (m) => m.ComingSoonWorld,
    ),
  { ssr: false, loading: () => <DestinationFallback label="Destination" /> },
);

function DestinationFallback({ label }: { label: string }) {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-ink-deep text-fog">
      Materializing {label}…
    </div>
  );
}

export function MultiverseExperience() {
  const [phase, setPhase] = useState<ExperiencePhase>("arrival");
  const [selectedId, setSelectedId] = useState<ProjectId | null>(null);
  const [activatingId, setActivatingId] = useState<ProjectId | null>(null);
  const [destinationId, setDestinationId] = useState<ProjectId | null>(null);
  const [travelFact, setTravelFact] = useState<TravelFact | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  const destination = useMemo(
    () => (destinationId ? getProject(destinationId) : undefined),
    [destinationId],
  );

  const beginTravel = useCallback((id: ProjectId) => {
    const project = getProject(id);
    if (!project) return;

    setSelectedId(id);
    setActivatingId(id);
    setPhase("activating");
    setTravelFact(pickTravelFact(`${id}-${Date.now()}`));

    window.setTimeout(() => {
      setPhase("wormhole");
    }, 900);
  }, []);

  const completeTravel = useCallback(() => {
    if (!activatingId) return;
    setDestinationId(activatingId);
    setActivatingId(null);
    setPhase("destination");
  }, [activatingId]);

  const skipWormhole = useCallback(() => {
    completeTravel();
  }, [completeTravel]);

  const returnToLab = useCallback(() => {
    setPhase("laboratory");
    setDestinationId(null);
    setActivatingId(null);
  }, []);

  const returnToArrival = useCallback(() => {
    setPhase("arrival");
    setDestinationId(null);
    setActivatingId(null);
    setSelectedId(null);
  }, []);

  const navigateProject = useCallback((id: ProjectId) => {
    const project = getProject(id);
    if (!project) return;
    if (project.status === "ready" || project.status === "coming-soon") {
      setDestinationId(id);
      setSelectedId(id);
      setPhase("destination");
    }
  }, []);

  return (
    <main className="relative min-h-[100dvh] bg-ink-deep">
      {phase === "arrival" ? (
        <ArrivalScreen
          onEnter={() => setPhase("laboratory")}
          onSkip={() => setPhase("laboratory")}
        />
      ) : null}

      {phase === "laboratory" || phase === "activating" ? (
        <Laboratory
          selectedId={selectedId}
          activatingId={activatingId}
          onSelect={(id) => setSelectedId(id)}
          onActivate={beginTravel}
          onExit={returnToArrival}
          onOpenAbout={() => setAboutOpen(true)}
        />
      ) : null}

      {phase === "wormhole" && activatingId && travelFact ? (
        <WormholeTransition
          colors={PORTAL_COLORS[getProject(activatingId)!.portal]}
          fact={travelFact}
          onComplete={completeTravel}
          onSkip={skipWormhole}
        />
      ) : null}

      {phase === "destination" && destination ? (
        destination.id === "forge" ? (
          <ForgeWorld
            project={destination}
            onReturnLab={returnToLab}
            onReturnArrival={returnToArrival}
            onNavigateProject={navigateProject}
          />
        ) : destination.id === "simplestore" ? (
          <SimpleStoreWorld
            project={destination}
            onReturnLab={returnToLab}
            onReturnArrival={returnToArrival}
            onNavigateProject={navigateProject}
          />
        ) : (
          <ComingSoonWorld
            project={destination}
            onReturnLab={returnToLab}
            onReturnArrival={returnToArrival}
            onNavigateProject={navigateProject}
          />
        )
      ) : null}

      <AboutPanel open={aboutOpen} onClose={() => setAboutOpen(false)} />

      {/* Prefetch hint for ready destinations once lab is entered */}
      {(phase === "laboratory" || phase === "activating") && (
        <span className="hidden" aria-hidden>
          {PROJECTS.filter((p) => p.status === "ready").map((p) => p.id).join(",")}
        </span>
      )}
    </main>
  );
}
