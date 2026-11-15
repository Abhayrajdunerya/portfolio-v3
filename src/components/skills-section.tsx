import {
  _React as ReactLogo,
  Java,
  MysqlIcon,
  NextjsIcon,
  Playwright,
  Spring,
  TypescriptIcon,
  Vitest,
} from "@dev.icons/react/mono";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const skillGroups = [
  {
    title: "Frontend & architecture",
    context: "Commercial application experience",
    technologies: [
      { name: "React", Icon: ReactLogo },
      { name: "Next.js", Icon: NextjsIcon },
      { name: "TypeScript", Icon: TypescriptIcon },
    ],
    practices: [
      "Server rendering, caching & client state",
      "Accessible components, forms & validation",
      "Authentication & API integration",
    ],
    href: "/work/commerce-modernization",
    evidence: "Frontend modernization",
  },
  {
    title: "Backend & data",
    context: "Capstone and project experience",
    technologies: [
      { name: "Java", Icon: Java },
      { name: "Spring Boot", Icon: Spring },
      { name: "MySQL", Icon: MysqlIcon },
    ],
    practices: [
      "Spring Security & role-based access",
      "Node.js, Express & REST APIs",
      "MongoDB & relational data modeling",
    ],
    href: "/work/bookwise",
    evidence: "BookWise full-stack capstone",
  },
  {
    title: "Testing & collaboration",
    context: "Practices across my work",
    technologies: [
      { name: "Vitest", Icon: Vitest },
      { name: "Playwright", Icon: Playwright },
    ],
    practices: [
      "React Testing Library & static analysis",
      "Code reviews & shared conventions",
      "Technical proposals, training & mentoring",
    ],
    href: "/work/commerce-modernization",
    evidence: "Engineering practices in context",
  },
];

export function SkillsSection() {
  return (
    <section
      className="section-block skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label">Skills & technologies</p>
          <h2 id="skills-title">Skills, put to work.</h2>
        </div>
        <p className="skills-intro">
          The tools I use, the problems I apply them to, and the work behind
          them.
        </p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title} data-reveal>
            <h3>{group.title}</h3>
            <p className="skill-context">{group.context}</p>
            <ul
              className="skill-technologies"
              aria-label={`${group.title} technologies`}
            >
              {group.technologies.map(({ name, Icon }) => (
                <li key={name}>
                  <Icon size={26} aria-hidden="true" focusable="false" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <ul className="skill-practices">
              {group.practices.map((practice) => (
                <li key={practice}>{practice}</li>
              ))}
            </ul>
            <Link className="text-link skill-evidence" href={group.href}>
              {group.evidence}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
