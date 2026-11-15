import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/lib/portfolio";

type CaseStudyProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Abhay Raj Dunerya`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="main-content" className="shell">
      <header className="page-intro">
        <Link href="/work" className="text-link mb-12 inline-flex gap-2">
          <span aria-hidden="true">←</span> All work
        </Link>
        <p className="section-label">{project.subtitle}</p>
        <h1 className="max-w-4xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {project.description}
        </p>
      </header>

      <ProjectVisual kind={project.visual} />

      <div className="case-grid section-block">
        <aside className="case-sidebar" aria-label="Project details">
          <dl className="flex flex-col gap-7">
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">Context</dt>
              <dd className="text-sm leading-relaxed">{project.subtitle}</dd>
            </div>
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">My role</dt>
              <dd className="text-sm leading-relaxed">{project.role}</dd>
            </div>
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">Period</dt>
              <dd className="text-sm">{project.year}</dd>
            </div>
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">Stack</dt>
              <dd className="text-sm leading-7">{project.stack.join(" · ")}</dd>
            </div>
          </dl>
          {project.links.length > 0 && (
            <div className="mt-8 flex flex-col items-start gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-link text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </div>
          )}
        </aside>

        <article className="prose min-w-0">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="mb-14 last:mb-0"
              data-reveal
            >
              <h2 className="mb-5 text-2xl font-medium tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-4 text-base leading-8 text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 text-base leading-7 text-muted-foreground marker:text-brand">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>

      <section
        className="section-block border-t border-border"
        aria-labelledby="outcomes-title"
        data-reveal
      >
        <h2
          id="outcomes-title"
          className="mb-9 text-2xl font-medium tracking-tight"
        >
          What the work delivered
        </h2>
        <dl className="grid gap-8 md:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <div key={outcome.label}>
              <dt className="text-sm text-muted-foreground">{outcome.label}</dt>
              <dd className="mt-3 text-3xl font-medium tracking-tight">
                {outcome.value}
              </dd>
              <dd className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                {outcome.context}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <nav
        className="section-block flex flex-col items-start gap-4 border-t border-border sm:flex-row sm:items-end sm:justify-between"
        aria-label="Related work"
      >
        <div>
          <p className="mb-3 text-sm text-muted-foreground">Next case study</p>
          <Link
            href={`/work/${nextProject.slug}`}
            className="text-link case-next-link font-medium"
          >
            {nextProject.title} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link href="/work" className="text-link text-sm">
          Back to all work
        </Link>
      </nav>
    </main>
  );
}
