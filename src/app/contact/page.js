import { client } from '../../../lib/sanityClient';
import ContactPageClient from './ContactPageClient';

async function getTestimonials() {
  const query = `*[_type == "client" && defined(testimonial) && testimonial != ""] {
    _id,
    testimonial
  }`;
  return await client.fetch(query);
}

export default async function ContactPage() {
  const testimonials = await getTestimonials();

  return <ContactPageClient testimonials={testimonials} />;
}