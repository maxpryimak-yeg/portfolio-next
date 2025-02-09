import { client } from '../../lib/sanityClient';
import HeroSlider from './components/HeroSlider';
import HomepageWorkSection from './components/HomepageWorkSection';
import TransparentNavBar from './components/TransparentNavbar';
import Link from "next/link";
import AnimatedHeadline from './components/AnimatedHeadline';
import FadeInBottom from './components/FadeInBottom';

export default async function Page() {
  // Fetch posts for Hero Slider
  const heroSliderQuery = `*[_type == "portfolio" && defined(categories) && "hero-slider" in categories]{
  _id,
  title,
  description,
  heroImage
}`;
  const heroSliderItems = await client.fetch(heroSliderQuery);

  // Fetch posts for Homepage Work Section
  const homepageWorkSectionQuery = `*[_type == "portfolio" && defined(categories) && "homepage-work-section" in categories] | order(orderRank) [0...6]  {
    _id,
    title,
    description,
    image,
    slug {
      current
    },
    industries[] { label, value },
    services[] { label, value },
    orderRank
  }`;
const homepageWorkSectionItems = await client.fetch(homepageWorkSectionQuery);

  console.log('Hero Slider Items:', heroSliderItems);
  console.log('Homepage Work Section Items:', homepageWorkSectionItems);

  return (
    <div>
      <section className="md:sticky w-full top-0">
        <TransparentNavBar />
        <HeroSlider items={heroSliderItems} />
      </section>
      <section id="expertise" className="px-5 lg:px-8 relative bg-background">
      <div className="lg:px-8 lg:py-[12rem] py-20">
        <div className='md:max-w-screen-lg max-w-full'>
        <AnimatedHeadline tag="h2" text="We bring together creative design and smart technology to build websites that work beautifully and deliver results. Every project is crafted to reflect each client’s unique goals, using a blend of skill, passion, and experience." />

        </div>
      </div>
      <div className="lg:px-8 lg:pb-[6rem] pb-8">
      
        <ul className="space-y-6">
          {[
            { title: "Custom Website Design & Development", slug: "custom-web-design" },
            { title: "E-Commerce Solutions", slug: "ecommerce-solutions" },
            { title: "Website Redesign and Modernization", slug: "website-redesign" },
            { title: "Branding and Visual Identity", slug: "web-application-development" },
            { title: "Website Maintenance and Support", slug: "website-maintenance" },
            { title: "Web Application Development", slug: "web-application-development" },
          ].map((service, index) => (
            <FadeInBottom key={index}>
              <li key={index} className="flex items-center justify-between border-t border-foreground py-[2rem] text-xl">
              <div
                href={`/services/${service.slug}`}
                className="flex items-center justify-between w-full group lg:py-[4rem] py-0"
              >
                <div className="md:flex-row flex-col flex items-start md:space-x-8 w-full">
                  <span className="text-xl lg:text-[1.8rem]">0{index + 1}</span>
                  <p className="mt-4 md: mt-0 lg:text-[5rem] lg:leading-[5.2rem] text-4xl">{service.title}</p>
                </div>
              </div>
            </li>
            </FadeInBottom>
          ))}
        </ul>
      </div>
      <FadeInBottom>
      <div className="lg:px-12 px-5 py-20 lg:py-[8rem] rounded-[1.8rem] text-white about-section bg-foreground">
      <FadeInBottom delay={ 0.2}>
        <div className='flex md:flex-row flex-col'>
          <div className=' w-full'>
            <h2 className='mb-12 text-4xl lg:text-[4rem] leading-[2.5rem] lg:leading-[5.6rem]'>Committed to creating effective websites that empower businesses to thrive and connect with their audiences</h2>
            <Link
      href="/about"
      className="hidden md:inline-block lg:text-[1.8rem] lg:leading-[1.8rem] text-2xl inline-block bg-white text-black md:py-7 md:px-8 px-6 py-5 rounded-full hover:bg-glorious transition-background duration-200"
    >
      Learn More
    </Link>
          </div>
          <div className='flex md:flex-row flex-col justify-center w-full items-start'>
            <p className='max-w-[40rem]'>At The Glorious Agency, we&#39;re passionate about empowering businesses with innovative web solutions. We believe that building a website is more than design; It’s about creating real connections. Our team combines creativity, skill, and experience to bring every project to life.
<br></br><br></br>
Our transparent, efficient services eliminate complexity, letting you focus on what you do best. Let&#39;s build your foundations for tomorrow&#39;s success together.
            </p>
            <Link
      href="/about"
      className="mt-12 md:hidden lg:text-[1.8rem] lg:leading-[1.8rem] text-2xl inline-block bg-white text-black md:py-7 md:px-8 px-6 py-5 rounded-full hover:bg-glorious transition-background duration-200"
    >
      Learn More
    </Link>
          </div>
          
        </div>
        <FadeInBottom>
        <div className='lg:mt-40 mt-20 md:flex flex-row justify-between flex-wrap grid grid-cols-2 gap-x-5 gap-y-10'>
            <div className='flex flex-col'>
              <span className='lg:text-[5rem] text-6xl mb-3 md:mb-0'>14+</span>
              <span className='lg:text-[1.8rem]'>Years of Experience</span>
            </div>
            <div className='flex flex-col'>
              <span className='lg:text-[5rem] text-6xl mb-3 md:mb-0'>94+</span>
              <span className='lg:text-[1.8rem]'>Clients</span>
            </div>
            <div className='flex flex-col'>
              <span className='lg:text-[5rem] text-6xl mb-3 md:mb-0'>131+</span>
              <span className='lg:text-[1.8rem]'>Projects Completed</span>
            </div>
            <div className='flex flex-col'>
              <span className='lg:text-[5rem] text-6xl mb-3 md:mb-0'>100%</span>
              <span className='lg:text-[1.8rem]'>Satisfaction Score</span>
            </div>
          </div>
          </FadeInBottom>
          </FadeInBottom>
      </div>
      </FadeInBottom>
      <div className="lg:px-8 lg:py-[12rem] py-20">
        <div className="max-w-screen-lg">
        <AnimatedHeadline 
         tag="h2" text="We bring ideas to life with websites that connect, engage, and support your business goals" />      
        </div>
      </div>
      <HomepageWorkSection items={homepageWorkSectionItems} />
      <div className="flex lg:flex-row flex-col lg:gap-80 lg:px-8 lg:py-[12rem] py-20">
        
        <div className='w-full'>
        <div className="max-w-screen-lg mb-20">
        <AnimatedHeadline 
         tag="h2" text="Showing our commitment to quality, our clients&#39; stories reflect the impact we create together" />      
        </div>

        </div>
        <div className='w-full lg:pt-40'>
        <FadeInBottom delay={ 0.2}>
          <p className="text-grey lg:text-[1.8rem] lg:leading-[2.5rem] max-w-screen-lg">
        Working with The Glorious Agency on our project was an absolute pleasure. Their exceptional skills and deep understanding of WordPress technology were evident from day one, showcasing incredible expertise and precision.
One of their standout qualities was their lightning-fast grasp of the project&#39;s intricacies. They didn&#39;t require extensive explanations, quickly comprehending our needs and delivering results, which significantly accelerated our project timeline.
The team&#39;s flexibility was another invaluable asset. They were always open to feedback, readily adapted to changing project requirements, and consistently went the extra mile to ensure our satisfaction.
<br></br><br></br>
Overall, The Glorious Agency&#39;s work on our project exceeded our expectations. Their excellent skills, rapid comprehension, flexibility, and strong technological know-how made them an invaluable asset to our team. We highly recommend The Glorious Agency to anyone in need of top-notch WordPress developers who can excel in complex projects. </p>
<p className='mt-10 lg:text-[2.4rem]'>Mark Dannau, <span className='text-grey'>Korke Travel, Argentina</span></p>
</FadeInBottom>
        </div>
      </div>
      </section>
    </div>
  );
}
