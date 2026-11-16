import {
  ArrowRight,
  BookOpen,
  Database,
  Layers3,
  Scale,
  ShoppingBag,
  ShieldCheck,
  Bell,
  RotateCcw,
  Check,
  ListOrdered,
} from "lucide-react";

import type { Project } from "@/lib/portfolio";

export function ProjectVisual({
  kind,
  compact = false,
}: {
  kind: Project["visual"];
  compact?: boolean;
}) {
  const titles = {
    commerce: "A clearer architecture.",
    library: "Every book. Every borrower.",
    justice: "From case to hearing.",
    store: "From discovery to checkout.",
  };
  const nodes = {
    commerce: ["React interface", "Next.js server", "Backend services"],
    library: ["React client", "Spring Boot API", "MySQL database"],
    justice: [
      "Case registration",
      "Weighted prioritization",
      "Hearing schedule",
    ],
    store: ["Product catalog", "Cart & checkout", "Order management"],
  };
  const Icon = {
    commerce: Layers3,
    library: BookOpen,
    justice: Scale,
    store: ShoppingBag,
  }[kind];
  return (
    <div
      className={[
        "project-visual",
        `visual-${kind}`,
        compact ? "visual-compact" : "",
      ].join(" ")}
      role="img"
      aria-label={`Conceptual workflow illustration: ${nodes[kind].join(" to ")}`}
    >
      <div className="visual-topline">
        <span>
          {kind === "commerce"
            ? "Frontend architecture"
            : kind === "library"
              ? "Library lifecycle"
              : kind === "justice"
                ? "Rule-based case prioritization"
                : "Commerce workflow"}
        </span>
        <Icon size={19} aria-hidden="true" />
      </div>
      <div className="visual-heading">{titles[kind]}</div>
      {kind === "library" ? (
        <div className="library-workflow">
          <div className="library-record">
            <BookOpen size={26} />
            <div>
              <strong>Book issued</strong>
              <span>Member ↔ Library catalog</span>
            </div>
            <Check size={17} />
          </div>
          <div className="library-lifecycle">
            <div>
              <Bell size={17} />
              <span>Scheduled reminder</span>
            </div>
            <span className="workflow-line" />
            <div>
              <RotateCcw size={17} />
              <span>Return & availability</span>
            </div>
          </div>
        </div>
      ) : kind === "justice" ? (
        <div className="justice-workflow">
          <div className="case-inputs">
            <span>Case details</span>
            <span>Defined weights</span>
          </div>
          <div className="priority-engine">
            <Scale size={23} />
            <div>
              <strong>Weighted prioritization</strong>
              <span>Rules, not machine learning</span>
            </div>
            <ArrowRight size={18} />
          </div>
          <div className="hearing-queue">
            <ListOrdered size={20} />
            <span>Prioritized hearing schedule</span>
            <div className="queue-lines">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : (
        <div className="architecture-flow">
          {nodes[kind].map((label, index) => (
            <div className="flow-step" key={label}>
              <div
                className={`flow-node ${index === 1 ? "flow-node-main" : ""}`}
              >
                {index === 0 ? (
                  <Icon size={23} aria-hidden="true" />
                ) : index === 1 ? (
                  <ShieldCheck size={23} aria-hidden="true" />
                ) : (
                  <Database size={23} aria-hidden="true" />
                )}
                <span>{label}</span>
                <small>
                  {index === 0
                    ? "Experience"
                    : index === 1
                      ? "Application boundary"
                      : "Existing APIs"}
                </small>
              </div>
              {index < 2 && (
                <ArrowRight
                  className="flow-arrow"
                  size={18}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      )}
      <div className="visual-bottomline">
        <span>Conceptual illustration</span>
        <span>
          {kind === "commerce"
            ? "Rendering · Typed boundaries"
            : kind === "library"
              ? "React · Spring Boot · MySQL"
              : kind === "justice"
                ? "Node.js · MongoDB"
                : "React · Express · MongoDB"}
        </span>
      </div>
    </div>
  );
}
