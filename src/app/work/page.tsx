import type { Metadata } from "next";
import { Suspense } from "react";

import { ProjectCard } from "@/components/project-card";
import { WorkFilter } from "@/components/work-filter";
import { projects } from "@/lib/portfolio";
export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Professional frontend modernization, full-stack capstones, and hackathon projects by Abhay Raj Dunerya.",
};
export default function WorkPage() {
  return (
    <main id="main-content" className="shell">
      <header className="page-intro archive-intro">
        <p className="section-label">Work & projects</p>
        <h1>
          Ideas, built into
          <br />
          <span className="text-muted-foreground">working systems.</span>
        </h1>
        <p>
          A selection of commercial engineering, full-stack projects, and
          collaborative problem solving. Each with its own context.
        </p>
      </header>
      <h2 className="sr-only">Selected projects</h2>
      <Suspense
        fallback={
          <div className="archive-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        }
      >
        <WorkFilter
          items={projects.map((project) => ({
            slug: project.slug,
            category: project.category,
            card: <ProjectCard project={project} />,
          }))}
        />
      </Suspense>
    </main>
  );
}
