import { COMPANY } from "@/data/company";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/privacy", "/terms"] }],
    sitemap: `${COMPANY.siteUrl}/sitemap.xml`,
  };
}
