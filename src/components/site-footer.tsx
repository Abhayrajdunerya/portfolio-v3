import { ArrowUpRight, ArrowUp } from "lucide-react";

import { profile } from "@/lib/portfolio";
export function SiteFooter() {
  return (
    <footer className="shell" id="contact">
      <div className="contact-section">
        <div>
          <p className="section-label">Contact</p>
          <h2>
            Let’s talk about
            <br />
            <span className="text-muted-foreground">what comes next.</span>
          </h2>
          <p className="contact-description">
            Open to conversations about frontend and full-stack engineering
            roles.
          </p>
        </div>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <div className="flex flex-wrap gap-6">
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={15} />
            </a>
            <a className="text-link" href={profile.resume} download>
              Résumé <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Abhay Raj Dunerya</span>
        <span>Built with Next.js & care.</span>
        <a href="#top">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
