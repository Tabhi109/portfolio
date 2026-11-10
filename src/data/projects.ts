import type { ProjectMachine } from "@/lib/types";

export const PROJECTS: ProjectMachine[] = [
  {
    id: "forge",
    machineNumber: "01",
    name: "Forge",
    tagline: "Code intelligence & static analysis",
    shortDescription:
      "An experimental engine for understanding code structure, relationships, and static signals.",
    portal: "forge",
    status: "ready",
    position: {
      desktop: { x: 18, y: 42 },
      mobile: { x: 12, y: 28 },
    },
    content: {
      overview:
        "Forge is a code intelligence and static analysis engine. It explores how programs can be modeled, inspected, and reasoned about without inventing claims beyond what is currently documented here.",
      problem:
        "Understanding large codebases is slow when signals are scattered across tools. Forge investigates consolidating structural analysis into a clearer mechanical view. [Details TBD]",
      capabilities: [
        "Static analysis exploration",
        "Code structure modeling",
        "Intelligence / inspection workflows [placeholder]",
        "Extensible analysis pipeline [placeholder]",
      ],
      architecture:
        "High-level architecture: analysis core → intermediate representations / graphs → query or inspection surfaces. Exact module boundaries are still being documented.",
      technicalDecisions: [
        "Prioritize analyzable structure over opaque magic",
        "Keep the analysis surface composable [placeholder]",
        "Separate engine concerns from presentation [placeholder]",
      ],
      stack: ["[Stack TBD — likely systems + analysis languages]"],
      challenges: [
        "Representing complex code graphs clearly",
        "Balancing depth of analysis with responsiveness [placeholder]",
        "Documenting capabilities without overselling unfinished work",
      ],
      links: {
        github: undefined,
        demo: undefined,
      },
    },
  },
  {
    id: "simplestore",
    machineNumber: "02",
    name: "SimpleStore",
    tagline: "E-commerce / SaaS experiment",
    shortDescription:
      "A colourful marketplace-shaped project exploring commerce flows and product surfaces.",
    portal: "simplestore",
    status: "ready",
    position: {
      desktop: { x: 42, y: 58 },
      mobile: { x: 58, y: 34 },
    },
    content: {
      overview:
        "SimpleStore is an e-commerce / SaaS exploration — a place to practice product flows, catalog thinking, and service boundaries in a lively illustrated marketplace.",
      problem:
        "Building commerce experiences often mixes inventory, checkout, and admin concerns too early. SimpleStore is a sandbox for cleaner slices of that problem. [Details TBD]",
      capabilities: [
        "Product / catalog oriented flows [placeholder]",
        "Commerce-shaped UI experiments",
        "SaaS-flavoured service boundaries [placeholder]",
      ],
      architecture:
        "Likely layered as storefront surfaces → application services → persistence. Exact topology still being filled in.",
      technicalDecisions: [
        "Keep domain language close to the marketplace metaphor",
        "Prefer clear placeholders over invented metrics",
      ],
      stack: ["[Stack TBD]"],
      challenges: [
        "Modeling real commerce complexity without fake scale claims",
        "Keeping UX delightful while architecture stays honest",
      ],
      links: {
        github: undefined,
        demo: undefined,
      },
    },
  },
  {
    id: "snip",
    machineNumber: "03",
    name: "Snip",
    tagline: "Developer tooling & experimentation",
    shortDescription:
      "Tooling for experimentation — terminals, snippets, and sharp developer utilities.",
    portal: "snip",
    status: "coming-soon",
    position: {
      desktop: { x: 68, y: 38 },
      mobile: { x: 18, y: 52 },
    },
    content: {
      overview:
        "Snip is developer tooling and experimentation. Destination universe coming soon.",
      problem: "[Problem statement TBD]",
      capabilities: ["[Capabilities TBD]"],
      architecture: "[Architecture TBD]",
      technicalDecisions: ["[Technical decisions TBD]"],
      stack: ["[Stack TBD]"],
      challenges: ["[Challenges TBD]"],
      links: {},
    },
  },
  {
    id: "investwise",
    machineNumber: "04",
    name: "InvestWise",
    tagline: "Fintech & portfolio exploration",
    shortDescription:
      "Financial technology experiments around portfolios, signals, and careful money UIs.",
    portal: "investwise",
    status: "coming-soon",
    position: {
      desktop: { x: 78, y: 62 },
      mobile: { x: 62, y: 58 },
    },
    content: {
      overview:
        "InvestWise explores financial technology and portfolio ideas. Destination universe coming soon.",
      problem: "[Problem statement TBD]",
      capabilities: ["[Capabilities TBD]"],
      architecture: "[Architecture TBD]",
      technicalDecisions: ["[Technical decisions TBD]"],
      stack: ["[Stack TBD]"],
      challenges: ["[Challenges TBD]"],
      links: {},
    },
  },
  {
    id: "foooo",
    machineNumber: "05",
    name: "FooOO",
    tagline: "Experimental / unclassified",
    shortDescription:
      "A deliberately weird experimental project. The machine refuses to explain itself fully.",
    portal: "foooo",
    status: "coming-soon",
    position: {
      desktop: { x: 30, y: 68 },
      mobile: { x: 40, y: 72 },
    },
    content: {
      overview:
        "FooOO is an experimental project with a multicolour portal and unfinished lore. Destination universe coming soon.",
      problem: "[Problem statement TBD]",
      capabilities: ["[Capabilities TBD]"],
      architecture: "[Architecture TBD]",
      technicalDecisions: ["[Technical decisions TBD]"],
      stack: ["[Stack TBD]"],
      challenges: ["[Challenges TBD]"],
      links: {},
    },
  },
];

export const EXPERIENCE = {
  siteName: "abhinavtrip3.space",
  characterName: "Abhinav Tripathi",
  role: "Software Engineer",
  location: "India",
  technologies: [
    "Go",
    "Rust",
    "Python",
    "C++",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
    "PostgreSQL",
    "Redis",
  ],
  experience: [
    {
      company: "Opus Capital Market & Consultant",
      summary:
        "Remote engineering work across financial software, workflow orchestration, and backend systems.",
    },
    {
      company: "Suggaa",
      summary: "Earlier startup experience, including on-site engineering work.",
    },
  ],
  robot: {
    name: "B-3",
    arrivalLines: [
      "Well, well. Another visitor. Welcome to Abhinav's extremely questionable collection of inventions.",
      "Pick a machine. Let's see where it takes you.",
    ],
    labIdleLines: [
      "Those lights mean something. Probably. Don't ask me for a warranty.",
      "Green-purple is Forge. White is SimpleStore. The rest are still calibrating reality.",
      "I contain jokes, facts, and exactly one emergency off switch. Guess which one is labeled.",
    ],
  },
} as const;

export function getProject(id: string): ProjectMachine | undefined {
  return PROJECTS.find((project) => project.id === id);
}
