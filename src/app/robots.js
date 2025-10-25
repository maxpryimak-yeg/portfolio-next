export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://theglorious.agency/sitemap.xml',
    host: 'https://theglorious.agency',
  }
}

