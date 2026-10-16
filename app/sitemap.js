import { SITE_CONFIG } from "../lib/config";

export default function sitemap() {
  const baseUrl = SITE_CONFIG.siteUrl || "https://harmonyofcells.com";
  const now = new Date().toISOString();

  const routes = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/approach`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/wellness`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/individuals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/corporate-wellness`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/professionals`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/hospitality`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/education`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/essential-oil-safety`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/resources/7-day-wellness-routine`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/research-evidence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/consultation`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // Note: Draft legal/policy pages (/privacy, /terms, /disclaimer, /shipping-returns)
    // are excluded from public sitemap until formally reviewed & approved by client legal counsel.
  ];

  return routes;
}
