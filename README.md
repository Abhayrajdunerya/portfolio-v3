# portfolio-v3

Abhay Raj Dunerya’s personal engineering portfolio. Built locally with Next.js 16 App Router, TypeScript, React Compiler, Cache Components, Tailwind CSS 4, shadcn/Base UI, and pnpm.

## Development

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000. Use the `localhost` hostname for Next.js development resources. Production:

```sh
pnpm lint
pnpm build
pnpm start
```

## Content and design

- `/`: introduction, selected work, experience, skills and technologies, education, and contact.
- `/work`: project archive with URL-persisted category filtering through nuqs.
- `/work/[slug]`: four case studies, including clear individual/team contributions and project context.
- `src/lib/portfolio.ts`: typed project content and contact links.
- `src/app/globals.css`: semantic theme, layout, responsive styles, and conceptual illustrations.
- `src/components/project-visual.tsx`: code-generated project workflow illustrations; these are not product screenshots.
- `public/resume/`: the user-supplied, unchanged download PDF.

Pages and project cards are Server Components. Only navigation and filtering need client state. The archive wraps its query-state reader in Suspense. Zod validates the optional deployment origin. Contact uses a real email link instead of a nonfunctional submission form.

## Public URL

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the verified public origin before deployment. It controls metadataBase and sitemap URLs. Until it is set, sitemap.xml contains no invented domain and Next.js uses its localhost fallback for social images. The Open Graph image and favicon are generated locally.

## Disclosure

The professional case study is anonymized and attributed to employment at NucleusTeq. The supplied resume PDF still names the commercial product. It has been retained exactly as authorized; review that distinction before publishing. The master career profile and reference screenshots are not served as public assets.

## Current stage

The first animation pass adds short hero entrances, viewport reveals, and interaction feedback, with reduced-motion support. Deployment remains deferred. See `DESIGN-HANDOFF.md` for verified checks and remaining work. Ignored `cook/` contains local screenshots and the iteration ledger.

`src/components/skills-section.tsx` uses monochrome technology logos from [Devicons](https://devicons.io/) through `@dev.icons/react`. The Devicons MCP is configured globally; this repository does not duplicate that configuration.
