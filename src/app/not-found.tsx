import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="shell page-intro flex min-h-[65vh] flex-col items-start justify-center"
    >
      <p className="mb-6 font-mono text-6xl tracking-tight text-brand sm:text-8xl">
        404
      </p>
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        This page is missing.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-8 text-muted-foreground">
        The link may have changed. You can find my selected projects and
        experience back on the homepage.
      </p>
      <Link href="/" className="text-link mt-8 inline-flex gap-3">
        <span aria-hidden="true">←</span> Back to home
      </Link>
    </main>
  );
}
