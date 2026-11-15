import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Download,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { SkillsSection } from "@/components/skills-section";
import { profile, projects } from "@/lib/portfolio";

export default function Home() {
  return (
    <main id="main-content">
      <div className="shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-intro">
            <p className="section-label">
              <span className="brand-square" />
              Software engineer · Abhay Raj Dunerya
            </p>
            <h1 id="hero-title">
              Building the web.
              <br />
              <span className="text-muted-foreground">
                Thinking beyond
                <br className="desktop-break" /> the interface.
              </span>
            </h1>
            <p className="hero-description">
              I build and modernize web applications with React and Next.js,
              connecting thoughtful interfaces with the architecture behind
              them.
            </p>
            <div className="hero-actions">
              <Link className="primary-link" href="/work">
                View my work <ArrowUpRight size={18} />
              </Link>
              <a className="secondary-link" href={profile.resume} download>
                Download résumé <Download size={16} />
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={14} />
              <span>Indore, India</span>
              <span className="inline-divider" />
              <span>Software Engineer at NucleusTeq</span>
            </div>
          </div>
          <div className="hero-aside">
            <div className="hero-note">
              <span className="section-label">Current focus</span>
              <span className="text-brand">↗</span>
            </div>
            <div className="hero-architecture">
              <div className="migration-before">
                <span>From</span>
                <strong>React 17</strong>
                <small>Legacy frontend</small>
              </div>
              <div className="migration-connector">
                <span>Frontend modernization</span>
                <ArrowDown size={16} />
              </div>
              <div className="migration-after">
                <span>My contribution</span>
                <strong>
                  Architecture.
                  <br />
                  Implementation.
                  <br />
                  Team enablement<span className="text-brand">.</span>
                </strong>
                <div>
                  <span>Next.js 15</span>
                  <span>Typed boundaries</span>
                  <span>Testing standards</span>
                </div>
              </div>
            </div>
            <p className="hero-aside-copy">
              From a legacy frontend to a modern,
              <br />
              maintainable application.
            </p>
            <Link href="/work/commerce-modernization" className="text-link">
              See the modernization story <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
        <div className="hero-baseline">
          <span>Frontend architecture. Full-stack perspective.</span>
          <a href="#selected-work">
            Selected work <ArrowDown size={15} />
          </a>
        </div>
        <section className="section-block" id="selected-work">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-label">Selected work</p>
              <h2>Engineering, in practice.</h2>
            </div>
            <Link className="text-link" href="/work">
              All projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <article className="featured-project" data-reveal>
            <div className="featured-copy">
              <div className="project-meta">
                <span>Professional work / NucleusTeq</span>
              </div>
              <h3>
                Commerce,
                <br />
                modernized.
              </h3>
              <p>
                Proposing and driving a commercial platform’s move from legacy
                React to Next.js. Architecture, implementation, and the
                engineering practices to sustain it.
              </p>
              <div className="featured-tags">
                <span>Frontend modernization</span>
                <span>Next.js 15</span>
                <span>TypeScript</span>
              </div>
              <Link href="/work/commerce-modernization" className="text-link">
                Read the case study <ArrowUpRight size={18} />
              </Link>
            </div>
            <Link
              href="/work/commerce-modernization"
              className="featured-visual-link"
              aria-label="Read the commerce modernization case study"
            >
              <ProjectVisual kind="commerce" />
            </Link>
          </article>
          <div className="project-grid">
            {projects.slice(1, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <section className="section-block experience-section" id="experience">
          <div className="section-heading" data-reveal>
            <div>
              <p className="section-label">Experience</p>
              <h2>Ownership, from the start.</h2>
            </div>
            <span className="subtle-note">July 2024 — present</span>
          </div>
          <div className="experience-grid" data-reveal>
            <div>
              <h3>Software Engineer</h3>
              <p className="employer">NucleusTeq</p>
              <p className="text-sm text-muted-foreground">Indore, India</p>
            </div>
            <div className="experience-points">
              <div>
                <h4>Initiating a frontend modernization</h4>
                <p>
                  Proposed a React-to-Next.js migration, developed the initial
                  implementation, and became the primary active developer on the
                  migrated frontend.
                </p>
              </div>
              <div>
                <h4>Making quality part of the workflow</h4>
                <p>
                  Introduced automated frontend testing and static analysis,
                  established reusable patterns, and reviewed teammates’
                  contributions.
                </p>
              </div>
              <div>
                <h4>Sharing what I learn</h4>
                <p>
                  Delivered Next.js training for frontend engineers and mentored
                  junior developers through capstone projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        <SkillsSection />
        <section className="section-block about-section" id="about" data-reveal>
          <div>
            <p className="section-label">A little about me</p>
            <h2>
              Curiosity that turns
              <br />
              into working software.
            </h2>
            <p>
              I’m Abhay, a software engineer based in Indore. My work spans
              commercial frontend engineering and hands-on backend projects in
              Java and JavaScript.
            </p>
            <p>
              My work often starts with a question about the existing system:
              how a page renders, where state belongs, or how the next developer
              will understand it.
            </p>
            <a className="text-link" href={profile.resume} download>
              More in my résumé <ArrowRight size={16} />
            </a>
          </div>
          <div className="recognition">
            <div>
              <span className="section-label">Education</span>
              <h3>B.E. Information Technology</h3>
              <p>IET DAVV, Indore · 2020–2024</p>
              <span className="small-detail">CGPA 8.36 / 10</span>
            </div>
            <div>
              <span className="section-label">Recognition</span>
              <h3>NucleusTeq Sparkling Stars</h3>
              <p>Certificate of Achievement · May 2025</p>
            </div>
            <div>
              <h3>Smart India Hackathon</h3>
              <p>Grand Finalist · 2023</p>
              <span className="small-detail">
                Nyaya Sanchalak · Team Justice League
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
