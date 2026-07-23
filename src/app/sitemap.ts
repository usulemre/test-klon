import type { MetadataRoute } from "next";
import { allRoutes, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allRoutes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" || route.startsWith("/fonlar") ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.startsWith("/fonlar") ? 0.9 : 0.6,
  }));
}
