import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, getArticle } from "@/data/articles";
import { ReadingProgress } from "@/components/interactions/ReadingProgress";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/engineering/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Note" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function EngineeringArticlePage({
  params,
}: PageProps<"/engineering/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <ReadingProgress />
      <main id="case-study" className="pb-20">
        <header className="border-b border-border bg-bg-muted/40">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
            <p className="eyebrow">
              {article.category} · {article.date}
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              {article.summary}
            </p>
            <Link
              href="/engineering"
              className="mt-6 inline-flex text-sm text-accent-orange underline-offset-4 hover:underline"
            >
              ← All notes
            </Link>
          </div>
        </header>

        <article className="prose-journal mx-auto max-w-3xl px-4 py-12 sm:px-6">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
