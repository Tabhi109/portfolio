import type { Article } from "@/types";

export const ARTICLES: Article[] = [
  {
    slug: "rust-code-intelligence",
    title: "Building a code intelligence engine with Rust",
    summary:
      "Why Forge uses Rust to turn source into symbols, relationships, and inspectable structure.",
    category: "Developer Tools",
    date: "2025",
    status: "published",
    sections: [
      {
        heading: "The problem",
        paragraphs: [
          "Code intelligence starts with a boring truth: editors and tools are only as good as their model of the program. If symbols, imports, and ownership relationships stay fuzzy, every downstream feature — navigation, refactoring hints, impact analysis — inherits that fuzziness.",
          "Forge approaches this as a systems problem. The goal is not a prettier UI first; it is a reliable intermediate representation of code structure that tooling can query.",
        ],
      },
      {
        heading: "Why Rust fits",
        paragraphs: [
          "Static analysis workloads are repetitive, memory-sensitive, and intolerant of accidental shared-mutable state. Rust’s ownership model is a practical match for graph construction and long-lived analysis pipelines where correctness bugs are expensive to debug later.",
          "The language also makes it natural to separate parsing / analysis cores from any presentation layer. That boundary matters when the same structural data might later feed a CLI, an editor integration, or an internal inspection UI.",
        ],
      },
      {
        heading: "What Forge focuses on",
        paragraphs: [
          "The current emphasis is structural: symbol resolution, dependency relationships, and graph-oriented views of how code entities connect. Those are the foundations. Productized surfaces can grow once the model is trustworthy.",
          "The unfinished parts are intentional. Publishing a thinner, honest architecture note is more useful than claiming a finished platform.",
        ],
      },
    ],
  },
  {
    slug: "symbol-graphs",
    title: "Symbol resolution and dependency graphs",
    summary:
      "A short field note on why graphs are a useful intermediate form for code intelligence.",
    category: "Static Analysis",
    date: "2025",
    status: "published",
    sections: [
      {
        heading: "Symbols are the atoms",
        paragraphs: [
          "Before a tool can answer “what uses this?” it needs a stable idea of what “this” is. Symbol resolution is the unglamorous work of binding names to definitions across files, modules, and packages.",
          "Ambiguity here cascades. Wrong edges in a dependency graph do not look dramatic in a demo — they quietly poison every higher-level insight.",
        ],
      },
      {
        heading: "Graphs as working memory",
        paragraphs: [
          "A dependency graph is a convenient intermediate form: nodes for entities, edges for relationships such as imports, calls, or containment. Once you have that, impact questions become traversals instead of ad-hoc text search.",
          "Forge leans on that representation because it keeps analysis composable. Different queries can reuse the same structural substrate without each feature inventing its own partial parser.",
        ],
      },
      {
        heading: "Practical constraints",
        paragraphs: [
          "Perfect resolution across every language corner case is a research career. Engineering work has to choose which relationships matter first and keep the model extensible.",
          "The useful discipline is to prefer explicit, inspectable structure over opaque heuristics that cannot be explained when they fail.",
        ],
      },
    ],
  },
  {
    slug: "workflow-orchestration",
    title: "Designing reliable workflow orchestration",
    summary:
      "Lessons from financial systems work where processes span audits, securitization steps, and multi-tenant platforms.",
    category: "Backend Architecture",
    date: "2025",
    status: "published",
    sections: [
      {
        heading: "Workflows are products too",
        paragraphs: [
          "In financial software, a “feature” is often a multi-step process: validations, hand-offs, retries, and tenant-specific rules. Treating that as a pile of ad-hoc endpoints creates invisible state machines that only exist in people’s heads.",
          "Orchestration makes those steps explicit — what runs, in what order, what can fail, and how the system recovers without losing auditability.",
        ],
      },
      {
        heading: "What reliability looks like here",
        paragraphs: [
          "Reliability is less about peak throughput slogans and more about clear transitions. If a QC audit step fails, the system should leave a recoverable, observable trail rather than a half-written side effect.",
          "Multi-tenant finance platforms amplify this. Isolation boundaries, authorization, and process definitions have to stay coherent when many organizations share infrastructure.",
        ],
      },
      {
        heading: "Engineering posture",
        paragraphs: [
          "Good orchestration work is mostly boundary work: APIs that represent domain steps honestly, services that own a stage of the process, and coordination that does not hide failure modes.",
          "That is the through-line from backend architecture into day-to-day product delivery — make the process legible enough that humans and systems can both reason about it.",
        ],
      },
    ],
  },
  {
    slug: "go-and-rust",
    title: "Go and Rust for backend and systems work",
    summary:
      "A practical comparison grounded in portfolio work: Go services, Rust analysis engines, and when each earns its complexity.",
    category: "Languages",
    date: "2025",
    status: "published",
    sections: [
      {
        heading: "Different jobs",
        paragraphs: [
          "Go and Rust both show up in systems-leaning backend work, but they optimize for different pressures. Go tends to win when the priority is straightforward service structure, fast iteration, and readable concurrency for network APIs.",
          "Rust tends to win when the workload is closer to an engine: parsers, graphs, memory-sensitive pipelines, and long-lived analysis where undefined behavior is not an acceptable surprise.",
        ],
      },
      {
        heading: "How that maps to this journal",
        paragraphs: [
          "InvestWise leans on Go for financial backend exploration. Forge leans on Rust for code intelligence. That split is not branding — it mirrors the shape of the problems.",
          "Snip sits closer to the systems end of the spectrum as well: a C++ engine for low-overhead token pruning, which shares Rust’s concern for predictable performance even though the implementation language differs.",
        ],
      },
      {
        heading: "Choosing without mythology",
        paragraphs: [
          "Language choice is a product decision disguised as a technical one. Prefer the tool that keeps the dominant risk small: operational clarity for services, memory and correctness pressure for engines.",
          "The wrong failure mode is choosing a language to look serious, then spending the project paying tax that the problem never asked for.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}
