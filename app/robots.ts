import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/politica-confidentialitate',
        '/termeni-conditii',
        '/politica-cookie',
        '/_next/',
        '/admin/',
      ],
    },
    sitemap: 'https://trustvet.ro/sitemap.xml',
  }
}
