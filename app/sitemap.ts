import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://shanmugavel.web.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: "2026-10-12",
    },
  ];
}
