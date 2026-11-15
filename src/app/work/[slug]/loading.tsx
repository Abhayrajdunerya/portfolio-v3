import Link from "next/link";

export default function LoadingCaseStudy() {
  return (
    <main id="main-content" className="shell page-intro" aria-busy="true">
      <Link href="/work" className="text-link">
        ← All work
      </Link>
      <div className="case-loading" role="status">
        <p className="section-label">Selected work</p>
        <h1>Opening the case study.</h1>
        <p>The project details will appear here.</p>
      </div>
    </main>
  );
}
