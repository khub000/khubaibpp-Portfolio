import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

const siteUrl = "https://www.khubaibpp.online";

const sectionPaths = ["/", "/#about", "/#projects", "/#certifications", "/#contact", "/resume.pdf"];

function normalizeRoute(routePath: string) {
  const normalized = routePath.replaceAll("\\", "/").replace(/^\/?app/, "").replace(/\/page\.(tsx|ts|jsx|js)$/, "");
  if (!normalized || normalized === "/") return "/";
  return normalized
    .split("/")
    .filter((segment) => segment && !segment.startsWith("(") && !segment.startsWith("_") && !segment.startsWith("["))
    .join("/")
    .replace(/^/, "/");
}

function discoverAppRoutes() {
  const appDirectory = path.join(process.cwd(), "app");
  const routes = new Set<string>();

  function walk(directory: string) {
    if (!fs.existsSync(directory)) return;

    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const currentPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        walk(currentPath);
        continue;
      }

      if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
        routes.add(normalizeRoute(path.relative(process.cwd(), currentPath)));
      }
    }
  }

  walk(appDirectory);
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Set([...sectionPaths, ...discoverAppRoutes()]);
  const now = new Date();

  return Array.from(routes).map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/resume.pdf" ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route === "/resume.pdf" ? 0.7 : 0.8
  }));
}
