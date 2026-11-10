import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "forge",
    name: "Forge",
    shortDescription:
      "Rust-based code intelligence and static analysis engine.",
    longDescription:
      "Forge explores how source code can be modeled as structured, queryable information — focusing on symbols, relationships, dependency graphs, and developer-facing tooling surfaces.",
    technologies: ["Rust"],
    status: "in-progress",
    category: "Developer Tools",
    featured: true,
    year: "2025",
    accent: "#75866A",
    links: {
      github: undefined,
      live: undefined,
    },
    caseStudy: {
      problem:
        "Understanding large codebases is difficult when structural signals are fragmented across tools and formats. [Details TBD]",
      goals: [
        "Represent code structure as analyzable data",
        "Resolve symbols and map dependency relationships",
        "Support graph-oriented inspection for developer tooling",
        "[Additional goals TBD]",
      ],
      architecture:
        "High-level shape: parsing / analysis core → intermediate graph representation → query or inspection interfaces. Exact module boundaries are still being documented.",
      technicalDecisions: [
        "Rust for performance-sensitive analysis work",
        "Graph-first modeling of relationships",
        "Separate analysis concerns from presentation surfaces [placeholder]",
      ],
      challenges: [
        "Accurate symbol resolution across complex projects",
        "Keeping analysis depth practical for interactive tooling",
        "[Additional challenges TBD]",
      ],
      results:
        "Work in progress. Results and measurable outcomes will be documented as the project matures. [Placeholder]",
      limitations:
        "Public repository, demos, and complete architecture docs are not yet published here.",
    },
  },
  {
    slug: "snip",
    name: "Snip",
    shortDescription: "Developer tooling and experimentation.",
    longDescription:
      "Snip is a space for developer tooling experiments. Verified stack details and product capabilities will be filled in from the actual project sources.",
    technologies: ["[Stack TBD]"],
    status: "experimental",
    category: "Developer Tools",
    featured: true,
    year: "2025",
    accent: "#8399A7",
    links: {},
    caseStudy: {
      problem: "[Problem statement TBD — verify from project sources]",
      goals: ["[Goals TBD]"],
      architecture: "[Architecture TBD]",
      technicalDecisions: ["[Technical decisions TBD]"],
      challenges: ["[Challenges TBD]"],
      results: "[Results TBD]",
      limitations:
        "Technology stack and functionality will only be listed once verified from available project information.",
    },
  },
  {
    slug: "simplestore",
    name: "SimpleStore",
    shortDescription:
      "Full-stack e-commerce / SaaS exploration with a product-shaped architecture.",
    longDescription:
      "SimpleStore is a full-stack commerce/SaaS project used to practice storefront flows, service boundaries, and PostgreSQL-backed infrastructure with Next.js and FastAPI.",
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    status: "active",
    category: "Full Stack",
    featured: true,
    year: "2024",
    accent: "#D58B57",
    links: {},
    caseStudy: {
      problem:
        "Commerce products often tangle catalog, checkout, and admin concerns early. SimpleStore explores cleaner slices of those flows. [Details TBD]",
      goals: [
        "Build a coherent storefront-oriented product surface",
        "Practice FastAPI service boundaries with PostgreSQL",
        "Keep the stack honest and maintainable",
      ],
      architecture:
        "Likely shape: Next.js storefront → FastAPI application services → PostgreSQL persistence. Exact topology still being filled in.",
      technicalDecisions: [
        "Next.js for the product UI",
        "FastAPI for backend services",
        "PostgreSQL as the system of record",
      ],
      challenges: [
        "Modeling commerce complexity without inventing scale claims",
        "Keeping frontend and backend contracts clear",
      ],
      results: "[Results TBD]",
      limitations:
        "GitHub and live demo links are placeholders until published.",
    },
  },
  {
    slug: "investwise",
    name: "InvestWise",
    shortDescription:
      "Financial technology and portfolio exploration — backend engineering in Go.",
    longDescription:
      "InvestWise explores portfolio-oriented fintech ideas with a Go backend focus. Product surfaces and verified outcomes will be documented as details become available.",
    technologies: ["Go"],
    status: "in-progress",
    category: "Backend Engineering",
    featured: false,
    year: "2025",
    accent: "#75866A",
    links: {},
    caseStudy: {
      problem: "[Problem statement TBD]",
      goals: ["Explore portfolio-related fintech backend concepts", "[Goals TBD]"],
      architecture: "Go-centered backend service design. [Architecture TBD]",
      technicalDecisions: ["Go for backend services", "[Additional decisions TBD]"],
      challenges: ["[Challenges TBD]"],
      results: "[Results TBD]",
      limitations: "Case study content is intentionally incomplete.",
    },
  },
  {
    slug: "foooo",
    name: "FooOO",
    shortDescription: "Experimental project — details to be added later.",
    longDescription:
      "FooOO is an experimental project reserved for future documentation. This entry exists so the archive can grow without redesign.",
    technologies: ["[Stack TBD]"],
    status: "experimental",
    category: "Experiments",
    featured: false,
    year: "—",
    accent: "#77766F",
    links: {},
    caseStudy: {
      problem: "[TBD]",
      goals: ["[TBD]"],
      architecture: "[TBD]",
      technicalDecisions: ["[TBD]"],
      challenges: ["[TBD]"],
      results: "[TBD]",
      limitations: "Details to be added later.",
    },
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Backend Engineering",
  "Full Stack",
  "Developer Tools",
  "Experiments",
] as const;

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}
