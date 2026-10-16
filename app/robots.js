import { SITE_CONFIG } from "../lib/config";

export default function robots() {
  const baseUrl = SITE_CONFIG.siteUrl || "https://harmonyofcells.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/cart"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
