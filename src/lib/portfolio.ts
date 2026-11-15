export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Professional" | "Full-stack" | "Hackathon";
  year: string;
  role: string;
  stack: string[];
  summary: string;
  description: string;
  sections: { title: string; body: string[]; bullets?: string[] }[];
  outcomes: { value: string; label: string; context: string }[];
  links: { label: string; href: string }[];
  visual: "commerce" | "library" | "justice" | "store";
};

export const profile = {
  name: "Abhay Raj Dunerya",
  email: "abhayrajdunerya@gmail.com",
  github: "https://github.com/abhayrajdunerya",
  linkedin: "https://linkedin.com/in/abhay-raj-dunerya",
  resume: "/resume/Abhay_Raj_Dunerya_Full_Stack_Java_Resume.pdf",
};

export const projects: Project[] = [
  {
    slug: "commerce-modernization",
    title: "Commerce, modernized.",
    subtitle: "React to Next.js · NucleusTeq",
    category: "Professional",
    year: "2024–present",
    role: "Software Engineer · Frontend architecture & implementation",
    stack: [
      "Next.js 15",
      "TypeScript",
      "React",
      "TanStack Query",
      "Zustand",
      "Vitest",
    ],
    summary:
      "Initiating and driving the modernization of a commercial commerce platform, from a legacy React frontend to Next.js.",
    description:
      "Professional work at NucleusTeq spanning frontend architecture, application migration, authentication, product integrations, and engineering quality. This case study presents my contribution at a public architectural level.",
    visual: "commerce",
    sections: [
      {
        title: "A growing product on an aging frontend",
        body: [
          "The existing React application carried aging dependencies, inconsistent conventions, and limitations around rendering and search visibility. The migration also needed to preserve the product workflows people already relied on.",
          "I proposed a Next.js modernization, built an initial implementation, and worked with my manager to establish it as an approved engineering initiative.",
        ],
      },
      {
        title: "Architecture that follows the work",
        body: [
          "I became the primary active developer on the migrated frontend. I organized the application around shared responsibilities and domain-specific components, with TypeScript connecting routes, forms, server operations, and client state.",
        ],
        bullets: [
          "Selected server and client rendering boundaries according to each page’s data and interaction needs.",
          "Used server rendering, static generation, and revalidation where appropriate.",
          "Separated authentication responsibilities from interactive account state and server-data caching.",
          "Built reusable forms and validation patterns for business, catalog, and commerce workflows.",
        ],
      },
      {
        title: "Product features across system boundaries",
        body: [
          "My work included frontend payment-related interfaces, review integrations, and a publishing experience. These features required close coordination with backend engineers, designers, and product stakeholders.",
          "For image-heavy publishing, I researched and proposed direct browser uploads using presigned URLs, then implemented the frontend integration after architectural review. Backend engineers owned URL generation and asset cleanup.",
        ],
      },
      {
        title: "Making the architecture usable by the team",
        body: [
          "I introduced frontend testing and static analysis, established coding conventions, reviewed contributions, and delivered practical Next.js training. The work extended beyond individual screens to the practices needed to maintain them.",
          "One recurring decision was balancing server-rendered content with interactive account and commerce workflows. Rendering and caching choices followed the page’s requirements rather than a single application-wide strategy.",
        ],
      },
    ],
    outcomes: [
      {
        value: "Next.js",
        label: "Modernized frontend",
        context: "Migration from the existing React application.",
      },
      {
        value: "Testing",
        label: "Engineering practice",
        context: "Introduced automated frontend tests and static analysis.",
      },
      {
        value: "Enablement",
        label: "Shared knowledge",
        context: "Practical Next.js training and reusable coding conventions.",
      },
    ],
    links: [],
  },
  {
    slug: "bookwise",
    title: "BookWise",
    subtitle: "Library management · NucleusTeq capstone",
    category: "Full-stack",
    year: "Completed capstone",
    role: "Full-stack development · React & Spring Boot",
    stack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "MySQL",
      "Twilio",
    ],
    summary:
      "A complete library workflow, from role-based access and book issuance to scheduled return reminders.",
    description:
      "A completed NucleusTeq capstone combining a React interface with a Java and Spring Boot backend. BookWise brings account, catalog, and lending operations into one application.",
    visual: "library",
    sections: [
      {
        title: "Following a book through its lifecycle",
        body: [
          "The application supports managing users, books, and categories, issuing and returning books, and finding records through search, sorting, and pagination. Administrative views bring these workflows together.",
        ],
      },
      {
        title: "A layered backend",
        body: [
          "I implemented REST APIs using a Controller–Service–Repository structure, with DTOs and mappers separating API contracts from persistent entities. Spring Data JPA and MySQL handle persistence, transactions, and reusable auditing fields.",
        ],
        bullets: [
          "Validated requests and centralized error handling with custom exceptions.",
          "Protected endpoints with Spring Security, JWT access tokens, and role-based authorization.",
          "Used BCrypt for password hashing.",
          "Connected Twilio SMS notifications to book issuance and scheduled return reminders.",
        ],
      },
      {
        title: "Connecting the interface and domain",
        body: [
          "The React frontend uses Redux and SCSS to support the library’s account and lending workflows. Building both sides made API boundaries, validation feedback, and state synchronization tangible engineering decisions.",
        ],
      },
      {
        title: "Scope and lessons",
        body: [
          "BookWise was completed as a training capstone. Frontend Jest testing covered one module, while backend automated tests were outside the completed scope. Authentication used access tokens without a refresh-token flow.",
          "The project gave me practical experience designing layered Spring Boot services and connecting scheduled backend work to a user-facing application.",
        ],
      },
    ],
    outcomes: [
      {
        value: "Full-stack",
        label: "Completed capstone",
        context: "React interface with a Java and Spring Boot backend.",
      },
      {
        value: "Role-based",
        label: "Protected workflows",
        context: "Spring Security and JWT access-token authentication.",
      },
      {
        value: "Scheduled",
        label: "Return reminders",
        context: "Spring scheduled jobs connected to Twilio SMS.",
      },
    ],
    links: [
      {
        label: "Frontend repository",
        href: "https://github.com/Abhayraj-nqt/BookWise_Frontend_React",
      },
      {
        label: "Backend repository",
        href: "https://github.com/Abhayraj-nqt/BookWise_Backend",
      },
    ],
  },
  {
    slug: "nyaya-sanchalak",
    title: "Nyaya Sanchalak",
    subtitle: "Case scheduling · Smart India Hackathon",
    category: "Hackathon",
    year: "2023",
    role: "Backend APIs, data modeling & scheduling · Team project",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    summary:
      "Backend APIs and weighted case prioritization for a Smart India Hackathon 2023 Grand Finalist project.",
    description:
      "Built with team Justice League for the Ministry of Law & Justice problem statement on Differentiated Case Flow Management at the Smart India Hackathon 2023 Grand Finale.",
    visual: "justice",
    sections: [
      {
        title: "Structuring a complex scheduling problem",
        body: [
          "The brief asked teams to streamline case listing through Differentiated Case Flow Management. Our six-person team explored how case information and scheduling rules could support that workflow.",
          "We discussed judicial processes and algorithm parameters with law faculty to inform the approach.",
        ],
      },
      {
        title: "My contribution",
        body: [
          "I developed backend APIs and MongoDB schemas, including case registration and updates, hearing scheduling, authentication-related operations, and judge management.",
        ],
        bullets: [
          "Modeled application data using MongoDB and Mongoose.",
          "Implemented REST endpoints with Node.js and Express.",
          "Worked with a teammate on weighted case-prioritization rules.",
          "Coded scheduling functionality informed by case age, filing date, severity, and category.",
        ],
      },
      {
        title: "Rules that can be explained",
        body: [
          "The prioritization approach used explicit weighted rules. That made the scheduling inputs inspectable and allowed us to discuss the parameters with subject-matter advisers.",
          "The project reached the national Grand Finale in December 2023. It remained a hackathon implementation and was not deployed in a court, so real-world backlog or efficiency outcomes were not measured.",
        ],
      },
    ],
    outcomes: [
      {
        value: "Grand Finalist",
        label: "SIH 2023",
        context: "Qualified for the national Smart India Hackathon finale.",
      },
      {
        value: "6 people",
        label: "Team Justice League",
        context: "My focus was backend APIs, schemas, and scheduling.",
      },
      {
        value: "Rule-based",
        label: "Case prioritization",
        context: "Weighted scheduling logic developed with a teammate.",
      },
    ],
    links: [
      {
        label: "Team repository",
        href: "https://github.com/Ayansaxena24/Nyaya-Sanchalak",
      },
    ],
  },
  {
    slug: "clothify",
    title: "Clothify",
    subtitle: "E-commerce application · Academic project",
    category: "Full-stack",
    year: "2022",
    role: "Full-stack development · React, Express & MongoDB",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Razorpay",
    ],
    summary:
      "An academic commerce application connecting product discovery, carts, checkout, and administrative workflows.",
    description:
      "A completed full-stack academic project built with React, Node.js, Express, and MongoDB. Clothify connects a customer storefront with product and order management.",
    visual: "store",
    sections: [
      {
        title: "From browsing to an order",
        body: [
          "The customer experience includes product browsing, search and filtering, a cart, wishlist, coupons, checkout, and product ratings and reviews. Administrative workflows cover products, categories, and orders.",
        ],
      },
      {
        title: "Integrating the application",
        body: [
          "I worked across the React frontend and Express backend, with MongoDB for application data. Firebase Authentication, Razorpay, and Cloudinary supported authentication, payment integration, and media handling.",
        ],
        bullets: [
          "Connected storefront interactions to backend APIs.",
          "Implemented product and category management.",
          "Built cart, wishlist, and order workflows.",
          "Used Tailwind CSS for the frontend interface.",
        ],
      },
      {
        title: "Project context",
        body: [
          "Clothify was developed as an academic application, primarily during September–November 2022. It provided an early foundation in building connected full-stack workflows and integrating external services.",
          "Its scope reflects an academic implementation. Commercial transaction volume, revenue, and production reliability were not measured.",
        ],
      },
    ],
    outcomes: [
      {
        value: "MERN",
        label: "Full-stack application",
        context: "React, Express, Node.js, and MongoDB.",
      },
      {
        value: "End-to-end",
        label: "Commerce workflows",
        context: "Product discovery through checkout and order management.",
      },
      {
        value: "Completed",
        label: "Academic project",
        context:
          "Implemented during 2022 with subsequent academic presentation.",
      },
    ],
    links: [
      {
        label: "Frontend repository",
        href: "https://github.com/Abhayrajdunerya/Clothify_Frontend",
      },
      {
        label: "Backend repository",
        href: "https://github.com/Abhayrajdunerya/Clothify_Backend",
      },
    ],
  },
];
