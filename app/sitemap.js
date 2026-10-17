import { SITE_CONFIG } from "../lib/config";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.siteUrl || "https://harmonyofcells.com";
  const now = new Date().toISOString();

  // 12 Canonical Core Content & Inquiry Routes
  const routes = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/approach`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/individuals`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/corporate-wellness`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/professionals`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/hospitality`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/education`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/essential-oil-safety`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/research-and-evidence`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/resources/7-day-wellness-routine`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Note: Consolidated redirected routes (/wellness -> /approach, /research-evidence -> /resources,
    // /faq -> /resources) and draft policy routes are excluded from the public sitemap.
  ];

  return routes;
}
