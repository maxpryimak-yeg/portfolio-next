export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://thegloriousagency.com/sitemap.xml',
    host: 'https://thegloriousagency.com',
  }
}

