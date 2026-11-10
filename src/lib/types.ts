export type PortalPalette =
  | "forge"
  | "simplestore"
  | "snip"
  | "investwise"
  | "foooo";

export type ProjectStatus = "ready" | "coming-soon";

export type ProjectId =
  | "forge"
  | "simplestore"
  | "snip"
  | "investwise"
  | "foooo";

export interface ProjectLinks {
  github?: string;
  demo?: string;
}

export interface ProjectContent {
  overview: string;
  problem: string;
  capabilities: string[];
  architecture: string;
  technicalDecisions: string[];
  stack: string[];
  challenges: string[];
  links: ProjectLinks;
}

export interface ProjectMachine {
  id: ProjectId;
  machineNumber: string;
  name: string;
  tagline: string;
  shortDescription: string;
  portal: PortalPalette;
  status: ProjectStatus;
  content: ProjectContent;
  /** Desktop/tablet percentage positions within the lab stage */
  position: {
    desktop: { x: number; y: number };
    mobile: { x: number; y: number };
  };
}

export type ExperiencePhase =
  | "arrival"
  | "laboratory"
  | "activating"
  | "wormhole"
  | "destination";

export type FactCategory =
  | "physics"
  | "mathematics"
  | "psychology"
  | "philosophy";

export interface TravelFact {
  id: string;
  category: FactCategory;
  text: string;
}

export interface PortalColors {
  primary: string;
  secondary: string;
  glow: string;
  ring: string;
}
