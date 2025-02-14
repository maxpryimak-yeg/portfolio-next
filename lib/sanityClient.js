import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
export const client = createClient({
  projectId: 'e91n801t', // Replace with your actual Sanity project ID
  dataset: 'production',     // Replace with your Sanity dataset name
  apiVersion: '2023-01-01',  // Use today's date
  useCdn: true,              // Use the CDN for faster response times
});

// Configure the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source) => builder.image(source);

export async function getPortfolioCount() {
  const query = `count(*[_type == "portfolio"])`;
  return await client.fetch(query);
}
