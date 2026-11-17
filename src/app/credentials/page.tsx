import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { credentials } from "@/lib/credentials";

export const metadata: Metadata = {
  title: "Recognition & credentials",
  description:
    "Selected workplace recognition, technical assessments, and learning credentials from Abhay Raj Dunerya’s engineering journey.",
};

export default function CredentialsPage() {
  return (
    <main id="main-content" className="shell">
      <header className="page-intro credential-intro">
        <Link href="/#credentials" className="text-link mb-12 inline-flex">
          ← Back to home
        </Link>
        <p className="section-label">Recognition & learning</p>
        <h1>
          Evidence of growth.
          <br />
          <span className="text-muted-foreground">Beyond the projects.</span>
        </h1>
        <p>
          Workplace recognition, assessed skills, and continued learning. Each
          credential is labeled by what it represents.
        </p>
      </header>
      <div className="credential-collection">
        {credentials.map((item) => (
          <article
            key={item.slug}
            id={item.slug}
            className="credential-detail"
            aria-labelledby={`${item.slug}-title`}
          >
            <a
              className="certificate-preview"
              href={item.document}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${item.title} certificate (${item.fileLabel}, opens in a new tab)`}
            >
              <Image
                src={item.preview}
                alt={`${item.title} certificate issued to Abhay Raj Dunerya by ${item.issuer}`}
                width={1200}
                height={900}
                sizes="(max-width: 800px) 90vw, 40vw"
              />
            </a>
            <div className="credential-detail-copy">
              <p className="section-label">{item.category}</p>
              <h2 id={`${item.slug}-title`}>{item.title}</h2>
              <p className="credential-issuer">
                {item.issuer} ·{" "}
                <time dateTime={item.date}>{item.dateLabel}</time>
              </p>
              <p>{item.description}</p>
              <div className="credential-actions">
                <a
                  className="text-link"
                  href={item.document}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View certificate <ArrowUpRight size={16} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <span className="credential-file">{item.fileLabel}</span>
                {item.verification && (
                  <a
                    className="text-link"
                    href={item.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verify with issuer{" "}
                    <ArrowUpRight size={16} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
