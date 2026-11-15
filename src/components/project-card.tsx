import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { Project } from "@/lib/portfolio";

import { ProjectVisual } from "./project-visual";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        className="project-image-link"
        href={`/work/${project.slug}`}
        aria-label={`Read ${project.title} case study`}
      >
        <ProjectVisual kind={project.visual} compact />
      </Link>
      <div className="project-meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3>
        <Link href={`/work/${project.slug}`}>
          {project.title}
          <ArrowUpRight size={22} aria-hidden="true" />
        </Link>
      </h3>
      <p>{project.summary}</p>
      <div className="project-stack">
        {project.stack.slice(0, 4).join(" / ")}
      </div>
    </article>
  );
}
