import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { credentials } from "@/lib/credentials";

export function CredentialsSection() {
  const award = credentials[0];
  const selected = credentials.filter((item) =>
    ["frontend-react", "nextjs-course", "google-ai"].includes(item.slug)
  );
  return (
    <section
      className="section-block credentials-section"
      id="credentials"
      aria-labelledby="credentials-title"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-label">Recognition & learning</p>
          <h2 id="credentials-title">
            Work recognized.
            <br />
            Learning continued.
          </h2>
        </div>
        <Link className="text-link" href="/credentials">
          All credentials <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="credentials-highlight">
        <article className="credential-award" data-reveal>
          <Link
            className="certificate-preview"
            href="/credentials#sparkling-stars"
            aria-label="Explore the NucleusTeq Sparkling Stars award"
          >
            <Image
              src={award.preview}
              alt="NucleusTeq Sparkling Stars certificate awarded to Abhay Raj Dunerya"
              width={1600}
              height={1131}
              sizes="(max-width: 800px) 90vw, 40vw"
            />
          </Link>
          <div className="credential-meta">
            <span>{award.category}</span>
            <time dateTime={award.date}>{award.dateLabel}</time>
          </div>
          <h3>{award.title}</h3>
          <p>{award.description}</p>
        </article>
        <div className="credential-shortlist">
          {selected.map((item) => (
            <article key={item.slug} data-reveal>
              <div className="credential-meta">
                <span>{item.category}</span>
                <time dateTime={item.date}>{item.dateLabel}</time>
              </div>
              <h3>
                <Link href={`/credentials#${item.slug}`}>
                  {item.title}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              </h3>
              <p>{item.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
