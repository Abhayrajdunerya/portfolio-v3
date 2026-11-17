import type { MetadataRoute } from "next";

import { projects } from "@/lib/portfolio";
import { siteUrl } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    "",
    "/work",
    "/credentials",
    ...projects.map((project) => `/work/${project.slug}`),
  ].map((path) => ({ url: `${siteUrl}${path}` }));
}
