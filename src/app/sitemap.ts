import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/social";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const staticRoutes = [
    "",
    "/work",
    "/experience",
    "/engineering",
    "/about",
    "/contact",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
    })),
    ...PROJECTS.map((project) => ({
      url: `${base}/work/${project.slug}`,
    })),
    ...ARTICLES.map((article) => ({
      url: `${base}/engineering/${article.slug}`,
    })),
  ];
}
