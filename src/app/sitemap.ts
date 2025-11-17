// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://murman-diesel.ru/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://murman-diesel.ru/privacy",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: "https://murman-diesel.ru/cookie",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}