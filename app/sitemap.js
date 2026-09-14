import { COMPANY } from "@/data/company";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/approach", "/contact"];
  const now = new Date();
  return routes.map((route) => ({
    url: `${COMPANY.siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
