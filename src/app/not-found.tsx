import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        This page left the journal
      </h1>
      <p className="mt-4 max-w-lg text-text-muted">
        The entry you asked for is missing — or never existed. Return home and
        keep exploring the collection.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-text px-5 py-2.5 text-sm text-bg"
      >
        Back home
      </Link>
    </main>
  );
}
