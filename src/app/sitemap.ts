import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { TEMPLATE_REGISTRY } from "@/templates/registry";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = siteConfig.siteUrl;

  const templateEntries: MetadataRoute.Sitemap = TEMPLATE_REGISTRY.map(
    (template) => ({
      url: `${baseUrl}/templates/${template.slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...templateEntries,
  ];
}
