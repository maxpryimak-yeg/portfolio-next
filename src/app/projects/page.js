import Navbar from '../components/Navbar';
import ProjectsGrid from '../components/ProjectsGrid';
import { client } from '../../../lib/sanityClient';
import AnimatedHeadline from '../components/AnimatedHeadline';

export default async function WorkPage() {
  // Fetch portfolio items
  const projectsQuery = `*[_type == "portfolio"] | order(orderRank) {
    _id,
    title,
    description,
    image,
    industries[] { label, value },
    services[] { label, value },
    slug
  }`;
  const items = await client.fetch(projectsQuery);

  return (
    <div>
      <Navbar />
      <main className="lg:px-16 px-5 pb-20">
        <div className="py-16 max-w-[100rem]">
        <AnimatedHeadline text="Combining innovation, technical expertise, and a vision for the future, we build websites that push boundaries" />
        </div>
        {/* Pass items as a prop to ProjectsGrid */}
        <ProjectsGrid items={items} />
      </main>
    </div>
  );
}