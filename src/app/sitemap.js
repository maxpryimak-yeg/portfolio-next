import { client } from '../../lib/sanityClient';

export default async function sitemap() {
  const baseUrl = 'https://theglorious.agency';

  // Fetch all portfolio projects from Sanity
  const projects = await client.fetch(`
    *[_type == "portfolio"]{
      "slug": slug.current,
      _updatedAt
    }
  `);

  // Static pages with SEO priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Homepage - highest priority
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8, // About page - high priority
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9, // Services - high priority for business
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8, // Portfolio listing - updated frequently
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7, // Contact page - standard priority
    },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6, // Individual projects - moderate priority
  }));

  return [...staticPages, ...projectPages];
}

