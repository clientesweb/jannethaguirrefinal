import type { MetadataRoute } from "next"
import { properties } from "@/lib/properties" // Importar las propiedades

export default function sitemap(): MetadataRoute.Sitemap {
  const propertyEntries = properties.map((property) => ({
    url: `https://www.jannethaguirre.com/propiedades/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const, // Cast para asegurar el tipo correcto
    priority: 0.7,
  }))

  return [
    {
      url: "https://www.jannethaguirre.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://www.jannethaguirre.com/nosotros",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.jannethaguirre.com/propiedades",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...propertyEntries, // Añadir todas las propiedades al sitemap
  ]
}
