import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fortrust.ph";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/destinations",
    "/destinations/canada",
    "/destinations/australia",
    "/destinations/new-zealand",
    "/destinations/uk",
    "/refused",
    "/pr-planning",
    "/seminars",
    "/about",
    "/contact",
    "/faq",
    "/success-stories",
    "/blog",
    "/privacy",
    "/terms",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/refused" ? 0.9 : 0.8,
  }));
}
