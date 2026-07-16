import type { MetadataRoute } from "next";

const baseUrl =
  "https://arena-rio-verde-beach-sports.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    // Futuras páginas
    // "/beach-tennis",
    // "/futevolei",
    // "/beach-volley",
    // "/eventos",
    // "/galeria",
    // "/contato",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}