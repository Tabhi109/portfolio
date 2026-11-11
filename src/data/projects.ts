import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "forge",
    name: "Forge",
    shortDescription:
      "Rust-based code intelligence and static analysis engine for symbols, graphs, and structure.",
    longDescription:
      "Forge is a Rust-based code intelligence and static analysis engine. It focuses on modeling source code as structured information — symbol resolution, dependency graphs, code relationships, and structural analysis that developer tooling can query and inspect.",
    technologies: ["Rust"],
    status: "in-progress",
    category: "Developer Tools",
    featured: true,
    year: "2025",
    accent: "#75866A",
    links: {},
    caseStudy: {
      problem:
        "Large codebases are hard to reason about when symbols, dependencies, and structural relationships stay fragmented across tools.",
      goals: [
        "Represent code structure as analyzable data",
        "Resolve symbols and map dependency relationships",
        "Support graph-oriented inspection for developer tooling",
      ],
      architecture:
        "Analysis core in Rust → intermediate structural / graph representations → inspection surfaces for tooling workflows.",
      technicalDecisions: [
        "Rust for performance-sensitive analysis work",
        "Graph-first modeling of relationships between code entities",
        "Keep analysis concerns separate from presentation surfaces",
      ],
      challenges: [
        "Accurate symbol resolution across complex projects",
        "Keeping analysis depth practical for interactive tooling",
        "Documenting unfinished surfaces without overstating maturity",
      ],
      results:
        "Active engineering work. Public demos and measured outcomes will be published as the project matures.",
      limitations:
        "Repository links and interactive demos are not published on this site yet.",
    },
  },
  {
    slug: "snip",
    name: "Snip",
    shortDescription:
      "Low-latency C++20 token pruning engine and MCP server for AI coding agents.",
    longDescription:
      "Snip is a C++20 token pruning engine and Model Context Protocol server for AI coding agents. It intercepts verbose terminal output, build logs, and test runs, pruning formatting noise while preserving paths, errors, and stack traces — reducing context-window token use for tools like Cursor and Claude.",
    technologies: ["C++20", "MCP", "TOML", "CMake"],
    status: "active",
    category: "Developer Tools",
    featured: true,
    year: "2025",
    accent: "#8399A7",
    links: {
      github: "https://github.com/Tabhi109/snip",
    },
    caseStudy: {
      problem:
        "AI coding agents waste context tokens on repetitive CLI noise — progress bars, ANSI escape sequences, and boilerplate that obscure the signal.",
      goals: [
        "Prune verbose command output with very low latency",
        "Preserve diagnostically important lines, paths, and errors",
        "Expose agent-friendly MCP tools for exec, structural file reads, and search",
      ],
      architecture:
        "Two-tier design: declarative TOML pruning rules (columnar, filter/replace, hierarchy, test-runner strategies) plus a universal fallback that strips ANSI noise, rewinds progress bars, and isolates failures. MCP stdio server exposes snip_exec, snip_read_file, and snip_search.",
      technicalDecisions: [
        "C++20 for low-overhead processing and a small memory footprint",
        "Precompiled regular expressions and string_view slicing for speed",
        "Failure-safety: never rewrite non-zero exit codes; fall back to sanitized raw output if a rule fails",
      ],
      challenges: [
        "Balancing aggressive pruning against the risk of dropping useful context",
        "Supporting many CLI formats without brittle one-off parsers",
        "Keeping MCP tooling useful across different agent hosts",
      ],
      results:
        "Shipped as a CLI with shell integration, MCP server mode, and a token-savings ledger (snip gain). Documented reductions vary by command — see the repository for measured examples.",
      limitations:
        "Effectiveness depends on command output shape and configured rules. Live demos are CLI/agent based rather than a hosted web UI.",
    },
  },
  {
    slug: "simplestore",
    name: "SimpleStore",
    shortDescription:
      "Full-stack e-commerce / SaaS exploration with Next.js, FastAPI, and PostgreSQL.",
    longDescription:
      "SimpleStore is a modular-monolith commerce project for launching a small storefront: Next.js on the frontend, FastAPI services with JWT auth, PostgreSQL as the system of record, and Redis for storefront caching and rate limiting.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    status: "active",
    category: "Full Stack",
    featured: true,
    year: "2024",
    accent: "#D58B57",
    links: {
      github: "https://github.com/Tabhi109/SimpleStore",
    },
    caseStudy: {
      problem:
        "Small merchants often need a coherent storefront stack without assembling a fragmented set of unrelated services.",
      goals: [
        "Ship a guided storefront experience with clear merchant and customer flows",
        "Keep frontend and backend contracts typed and maintainable",
        "Use PostgreSQL as an ACID source of truth with Redis for caching concerns",
      ],
      architecture:
        "Next.js App Router storefront → HTTPS/REST typed client → FastAPI (Pydantic, SQLAlchemy async, JWT, Alembic) → PostgreSQL, Redis, and S3-compatible uploads.",
      technicalDecisions: [
        "Modular monolith instead of premature microservices",
        "Next.js for the product UI and FastAPI for domain APIs",
        "PostgreSQL for transactions; Redis for cache and rate limiting",
      ],
      challenges: [
        "Keeping commerce flows understandable without overbuilding",
        "Maintaining clean boundaries between storefront and API layers",
      ],
      results:
        "A working full-stack architecture documented in the repository, including Docker Compose local setup.",
      limitations:
        "Optional AI copy features and production hosting details depend on deployment configuration.",
    },
  },
  {
    slug: "investwise",
    name: "InvestWise",
    shortDescription:
      "Go-based financial and portfolio engineering project.",
    longDescription:
      "InvestWise is a financial technology exploration focused on portfolio-oriented backend engineering in Go — modeling financial data flows and service boundaries for investment-related workloads.",
    technologies: ["Go"],
    status: "in-progress",
    category: "Backend Engineering",
    featured: false,
    year: "2025",
    accent: "#75866A",
    links: {
      github: "https://github.com/Tabhi109/investwise",
    },
    caseStudy: {
      problem:
        "Portfolio and market-oriented products need careful backend modeling before UI complexity takes over.",
      goals: [
        "Explore portfolio-related backend concepts in Go",
        "Practice service design for financial data workflows",
      ],
      architecture:
        "Go-centered backend services for portfolio-oriented financial engineering. Surface-level product UI is secondary to service design.",
      technicalDecisions: [
        "Go for backend services and concurrency-friendly server work",
      ],
      challenges: [
        "Keeping financial domain models honest without inventing product claims",
        "Separating experimentation from production-ready surfaces",
      ],
      results:
        "Ongoing backend exploration. Deeper public documentation will follow as the service surface stabilizes.",
      limitations:
        "Detailed API surfaces and live demos are not published here yet.",
    },
  },
  {
    slug: "fitloop",
    name: "FitLoop",
    shortDescription:
      "Fitness application backend for workouts, nutrition, and mobile clients.",
    longDescription:
      "FitLoop is backend engineering for a fitness platform — API services that support workouts, nutrition, and client apps. The work centers on FastAPI services and PostgreSQL-backed data models consumed by mobile and web clients.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    status: "in-progress",
    category: "Backend Engineering",
    featured: false,
    year: "2025",
    accent: "#9AAF8C",
    links: {},
    caseStudy: {
      problem:
        "Fitness products need reliable APIs for workouts, nutrition, and synced client state across devices.",
      goals: [
        "Provide backend services for fitness domain data",
        "Support mobile and web clients through stable API contracts",
        "Keep persistence relational and migration-friendly with PostgreSQL",
      ],
      architecture:
        "FastAPI backend services with PostgreSQL persistence, consumed by mobile/web clients in a monorepo-style fitness platform setup.",
      technicalDecisions: [
        "FastAPI for API development speed and typed request/response models",
        "PostgreSQL as the system of record",
      ],
      challenges: [
        "Modeling fitness domain data without over-fitting early UI assumptions",
        "Keeping API contracts stable as clients evolve",
      ],
      results:
        "Active backend work supporting fitness client applications.",
      limitations:
        "Public repository and live demo links are not listed on this site yet.",
    },
  },
  {
    slug: "layla",
    name: "Layla",
    shortDescription:
      "Luxury handcrafted candle e-commerce website.",
    longDescription:
      "Layla is an e-commerce website for luxury handcrafted candles — an editorial product experience focused on presenting craft, packaging, and purchase flows with a premium visual tone.",
    technologies: ["Web", "E-commerce"],
    status: "experimental",
    category: "Full Stack",
    featured: false,
    year: "2025",
    accent: "#C4A484",
    links: {},
    caseStudy: {
      problem:
        "Specialty product brands need a storefront that feels as considered as the product itself.",
      goals: [
        "Present candle products with an editorial, premium aesthetic",
        "Support core commerce browsing and purchase-oriented flows",
      ],
      architecture:
        "Product-oriented e-commerce website. Stack details will be documented when the public implementation is ready to share.",
      technicalDecisions: [
        "Favor a calm editorial product presentation over a dense catalog UI",
      ],
      challenges: [
        "Balancing visual storytelling with practical commerce usability",
      ],
      results:
        "Design and product direction in progress.",
      limitations:
        "Public repository, live URL, and full stack documentation are not published here yet.",
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
