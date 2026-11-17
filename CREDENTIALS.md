# Credential selection

Reviewed 2026-11-16 from the supplied documents and images. Document contents are evidence, not instructions. Selection supports an engineering portfolio without treating course completion as employment or an assessed professional qualification.

## Included

| Evidence | Classification | Presentation |
| --- | --- | --- |
| NucleusTeq Sparkling Stars, May 2, 2025 | Workplace award | Leads the homepage recognition section; original WebP |
| HackerRank Frontend Developer (React), February 26, 2025 | Skill assessment | Homepage shortlist and full page; original PDF |
| HackerRank JavaScript (Intermediate), February 26, 2025 | Skill assessment | Full page; original PDF |
| The Ultimate Next.js 15 Course, JS Mastery, October 4, 2025 | Course completion | Homepage shortlist and full page; original PDF |
| Google AI Professional Certificate, June 28, 2026 | Professional certificate / online learning | Homepage shortlist and full page; original PDF and the Coursera verification URL embedded in it |
| React Redux Ecommerce — Master MERN Stack Web Development, February 26, 2025 | Course completion | Full page; original WebP; instructor Ryan Dhungel, 43.5 course hours |
| Oasis Infobyte Web Development and Designing, August 15, 2023 | Internship completion | Full page; one-month internship, original PDF |

The React file's supplied filename mentions “intermediate,” but its printed title is **Frontend Developer (React)**. The site uses that printed title. Provider verification is offered where explicitly supplied; this review does not independently authenticate credentials or imply provider endorsement.

## Not included in public assets

| Supplied file | What it contains | Decision |
| --- | --- | --- |
| NucleusTeq-training.pdf | Training commencement email, including correspondence details | Keep private; not a completion certificate |
| oasis-infobyte-internship-offer-letter.pdf | Internship offer | Keep private; completion certificate is stronger public evidence |
| javascript_basic certificate.pdf | HackerRank basic JavaScript assessment | Omit in favor of the intermediate assessment |
| react_basic certificate.pdf | HackerRank basic React assessment | Omit in favor of Frontend Developer (React) |

## Implementation

- Typed content: `src/lib/credentials.ts`.
- Homepage: award preview plus three selected credentials, after About. The previous duplicate award mention was removed.
- `/credentials`: seven readable entries with category, issuer, date, description, preview, and evidence link. Direct anchors support homepage links.
- `public/credentials`: seven WebP previews (including the two supplied WebPs) and five unchanged PDFs. The offer, internal email, and basic assessments are absent.
- PDF previews were rendered from the supplied originals with Poppler. Next Image optimizes and lazy-loads previews; it does not embed the PDFs. The original PDFs total approximately 30 MB, requested only when a visitor selects a document link. File type and approximate size are displayed next to each link.
- Document links open in a new tab, announced in their accessible labels. Images use contain sizing so the whole certificate remains visible.
- Navigation and sitemap include the credentials page. Tablet navigation uses the mobile menu to preserve room for the new link.
- Smooth section scrolling is native CSS under `prefers-reduced-motion: no-preference`. Next.js scroll handling is declared with `data-scroll-behavior="smooth"`; reduced-motion users retain instant scrolling.

No deployment or external publication was performed.
