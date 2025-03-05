import Navbar from '../components/Navbar';
import ProjectsGrid from '../components/ProjectsGrid';
import { client } from '../../../lib/sanityClient';
import AnimatedHeadline from '../components/AnimatedHeadline';
import FilterDrawer from '../components/FilterDrawer';

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

  // Get unique industries and services for filters
  const industries = [...new Set(items.flatMap(item => item.industries?.map(i => i.label) || []))];
  const services = [...new Set(items.flatMap(item => item.services?.map(s => s.label) || []))];

  return (
    <div>
      <Navbar />
      <main>
        <div className="lg:pt-32 lg:pb-20 pt-24 pb-20 border-b border-glorious_border lg:px-6 px-4">
        <AnimatedHeadline text="Combining innovation, technical expertise, and a vision for the future, we build websites that push boundaries" />
        </div>
        
        <div className="sticky top-[57px] lg:top-[67.5px] bg-background z-20 lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border flex justify-between items-center">
          <p className='section-title-md'>case studies</p>
          <FilterDrawer 
            industries={industries} 
            services={services} 
            className="lg:hidden block flex justify-start" 
          />
        </div>
          
        {/* Pass items as a prop to ProjectsGrid */}
        <ProjectsGrid items={items} />
      </main>
    </div>
  );
}