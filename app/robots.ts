import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },

      // Bloqueia páginas internas do Next
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
    ],

    sitemap:
      "https://arena-rio-verde-beach-sports.vercel.app/sitemap.xml",

    host:
      "https://arena-rio-verde-beach-sports.vercel.app",
  };
}