import { client } from '../../lib/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';
import HomepageWorkSection from './components/HomepageWorkSection';
import NavBar from './components/Navbar';
import Link from "next/link";
import AnimatedHeadline from './components/AnimatedHeadline';
import FadeInBottom from './components/FadeInBottom';
import RecentProjects from './components/RecentProjects';
import { Suspense } from 'react';

export default async function Page() {
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
  return (
    <div>
        <NavBar />
        <section id="hero" className="flex flex-row pt-24 px-6 pb-40 w-full border-b border-glorious_border">
          <div className='w-full pt-20'>
          <h1 className="text-8xl">Empowering Your Growth with Digital Solutions That Deliver.</h1>
          </div>
        </section>
        <section className="relative min-h-[500px] flex border-b border-glorious_border">
          <div className="min-w-sm border-r border-glorious_border">
            <div className="px-6 py-3 border-b border-glorious_border">
              <p className='section-title-md'>What We Do</p>
            </div>
            <div className="p-4 pl-6">
            <p className='xs-mono'>Digital Strategy</p>
            <p className='xs-mono'>UX Design</p>
            <p className='xs-mono'>UI Design</p>
            <p className='xs-mono'>Digital Strategy</p>
            <p className='xs-mono'>Shopify Development</p>
            <p className='xs-mono'>Custom Shopify Apps</p>
            <p className='xs-mono'>Platform Migrations</p>
            </div> 
          </div>
          <div className="w-xl border-r border-glorious_border">
            <div className="px-4 py-3 border-b border-glorious_border">
              <p className='section-title-md'>About Us</p>
            </div>
            <div className="p-4 pr-10">
            <p className='mb-10'>At The Glorious Agency, we're passionate about empowering businesses with innovative web solutions. We believe that building a website is more than design; It's about creating real connections. Our team combines creativity, skill, and experience to bring every project to life.</p>
            <Link href="/about" className="btn">
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          Learn More</Link>
            </div> 
          </div>
          <div className="w-xl flex-1">
            <RecentProjects />
          </div>
        </section>
        <section id="expertise" className="relative flex border-b border-glorious_border">
          <div className='pl-6  pt-10 pb-40 flex-1'>
            <div className='max-w-[80%] m-auto'>
          <AnimatedHeadline tag="h2" text="We bring together creative design and smart technology to build websites that work beautifully and deliver results. Every project is crafted to reflect each client's unique goals, using a blend of skill, passion, and experience." />
          </div>
          <div className="pl-[40%] mt-14">
          <p className='mb-6  max-w-xl w-full'>At The Glorious Agency, we're passionate about empowering businesses with innovative web solutions. We believe that building a website is more than design; It's about creating real connections. Our team combines creativity, skill, and experience to bring every project to life.</p>
          <Link href="/services" className="btn">
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          View All Services</Link>
          </div>
         
       </div>
        </section>
        <section className="relative bg-foreground border-b border-glorious_border py-20">
          <div className="max-w-[80%] mx-auto">
            <Suspense fallback={<div className="aspect-video bg-gray-100" />}>
              <video 
                className="w-full aspect-video object-cover"
                playsInline
                autoPlay
                muted
                loop
                preload="none"
                poster="/video-poster.jpg"
              >
                <source 
                  src="/video.mp4" 
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Suspense>
          </div>
        </section>
        <section id="services" className="relative">

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
              <p className='max-w-[40rem]'>At The Glorious Agency, we're passionate about empowering businesses with innovative web solutions. We believe that building a website is more than design; It's about creating real connections. Our team combines creativity, skill, and experience to bring every project to life.
<br></br><br></br>
Our transparent, efficient services eliminate complexity, letting you focus on what you do best. Let's build your foundations for tomorrow's success together.
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
          <div className="max-w-(--breakpoint-lg)">
          <AnimatedHeadline 
           tag="h2" text="We bring ideas to life with websites that connect, engage, and support your business goals" />      
          </div>
        </div>
        <HomepageWorkSection items={homepageWorkSectionItems} />
        <div className="flex lg:flex-row flex-col lg:gap-80 lg:px-8 lg:py-[12rem] py-20">
          
          <div className='w-full'>
          <div className="max-w-(--breakpoint-lg) mb-20">
          <AnimatedHeadline 
           tag="h2" text="Showing our commitment to quality, our clients' stories reflect the impact we create together" />      
          </div>

          </div>
          <div className='w-full lg:pt-40'>
          <FadeInBottom delay={ 0.2}>
            <p className="text-grey lg:text-[1.8rem] lg:leading-[2.5rem] max-w-(--breakpoint-lg)">
          Working with The Glorious Agency on our project was an absolute pleasure. Their exceptional skills and deep understanding of WordPress technology were evident from day one, showcasing incredible expertise and precision.
One of their standout qualities was their lightning-fast grasp of the project's intricacies. They didn't require extensive explanations, quickly comprehending our needs and delivering results, which significantly accelerated our project timeline.
The team's flexibility was another invaluable asset. They were always open to feedback, readily adapted to changing project requirements, and consistently went the extra mile to ensure our satisfaction.
<br></br><br></br>
Overall, The Glorious Agency's work on our project exceeded our expectations. Their excellent skills, rapid comprehension, flexibility, and strong technological know-how made them an invaluable asset to our team. We highly recommend The Glorious Agency to anyone in need of top-notch WordPress developers who can excel in complex projects. </p>
<p className='mt-10 lg:text-[2.4rem]'>Mark Dannau, <span className='text-grey'>Korke Travel, Argentina</span></p>
</FadeInBottom>
          </div>
        </div>
        </section>
      </div>
    );
  }
