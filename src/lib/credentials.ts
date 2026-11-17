export type Credential = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  dateLabel: string;
  category:
    | "Workplace award"
    | "Skill assessment"
    | "Professional certificate"
    | "Course completion"
    | "Internship completion";
  description: string;
  preview: string;
  document: string;
  fileLabel: string;
  verification?: string;
};

export const credentials: Credential[] = [
  {
    slug: "sparkling-stars",
    title: "NucleusTeq Sparkling Stars",
    issuer: "NucleusTeq",
    date: "2025-05-02",
    dateLabel: "May 2025",
    category: "Workplace award",
    description:
      "Recognition for exceptional performance, innovation, and consistent excellence at work.",
    preview: "/credentials/nucleusteq-sparkling-stars.webp",
    document: "/credentials/nucleusteq-sparkling-stars.webp",
    fileLabel: "WebP · 53 KB",
  },
  {
    slug: "frontend-react",
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2025-02-26",
    dateLabel: "February 2025",
    category: "Skill assessment",
    description:
      "Passed the HackerRank Frontend Developer (React) skill certification test.",
    preview: "/credentials/frontend-developer-react.webp",
    document: "/credentials/frontend-developer-react.pdf",
    fileLabel: "PDF · 7.7 MB",
  },
  {
    slug: "javascript-intermediate",
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "2025-02-26",
    dateLabel: "February 2025",
    category: "Skill assessment",
    description:
      "Passed the HackerRank intermediate JavaScript skill certification test.",
    preview: "/credentials/javascript-intermediate.webp",
    document: "/credentials/javascript-intermediate.pdf",
    fileLabel: "PDF · 7.7 MB",
  },
  {
    slug: "nextjs-course",
    title: "The Ultimate Next.js 15 Course",
    issuer: "JS Mastery",
    date: "2025-10-04",
    dateLabel: "October 2025",
    category: "Course completion",
    description:
      "Completed JS Mastery’s Next.js 15 course, complementing my frontend engineering work.",
    preview: "/credentials/nextjs-course.webp",
    document: "/credentials/nextjs-course.pdf",
    fileLabel: "PDF · 14.1 MB",
  },
  {
    slug: "google-ai",
    title: "Google AI Professional Certificate",
    issuer: "Google · Coursera",
    date: "2026-06-28",
    dateLabel: "June 2026",
    category: "Professional certificate",
    description:
      "Completed a seven-course program on applying AI to research, planning, communication, data analysis, and app building.",
    preview: "/credentials/google-ai.webp",
    document: "/credentials/google-ai.pdf",
    fileLabel: "PDF · 417 KB",
    verification: "https://coursera.org/verify/professional-cert/RA6JPHIR1NB1",
  },
  {
    slug: "mern-ecommerce",
    title: "React Redux Ecommerce — Master MERN Stack Web Development",
    issuer: "Udemy · Ryan Dhungel",
    date: "2025-02-26",
    dateLabel: "February 2025",
    category: "Course completion",
    description:
      "Completed a 43.5-hour course covering ecommerce development with the MERN stack and Redux.",
    preview: "/credentials/mern-ecommerce.webp",
    document: "/credentials/mern-ecommerce.webp",
    fileLabel: "WebP · 209 KB",
  },
  {
    slug: "oasis-internship",
    title: "Web Development and Designing",
    issuer: "Oasis Infobyte",
    date: "2023-08-15",
    dateLabel: "August 2023",
    category: "Internship completion",
    description:
      "Completed a one-month internship in web development and designing.",
    preview: "/credentials/oasis-internship.webp",
    document: "/credentials/oasis-internship.pdf",
    fileLabel: "PDF · 256 KB",
  },
];
