import type { MetadataRoute } from "next"

export async function GET() {
  // Base URL for Prisma Visual
  const baseUrl = "https://prisma-visual.com"

  // Define routes matching your Spanish website structure
  const routes = [
    "", // Inicio
    "/quienes-somos", // ¿Quiénes Somos?
    "/servicios", // Servicios
    "/por-que-prisma", // ¿Por qué PRISMA?
    "/galeria", // Galería
    "/clientes", // Clientes
    "/contacto", // Contacto
  ]

  // Generate sitemap XML
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }))

  // Set the Content-Type header to XML
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemap
        .map((page) => {
          return `
            <url>
              <loc>${page.url}</loc>
              <lastmod>${page.lastModified.toISOString()}</lastmod>
              <changefreq>${page.changeFrequency}</changefreq>
              <priority>${page.priority}</priority>
            </url>
          `
        })
        .join("")}
    </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  )
}
