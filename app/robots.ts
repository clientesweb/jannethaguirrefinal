import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Ejemplo: si tuvieras rutas privadas
    },
    sitemap: "https://www.jannethaguirre.com/sitemap.xml",
  }
}
