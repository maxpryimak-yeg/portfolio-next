import { client } from '../../lib/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';
import HomepageWorkSection from './components/HomepageWorkSection';
import NavBar from './components/Navbar';
import Link from "next/link";
import AnimatedHeadline from './components/AnimatedHeadline';
import RecentProjects from './components/RecentProjects';
import { Suspense } from 'react';
import ServiceItem from './components/ServiceItem';
import { services } from './data/services';

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

  // Fetch posts for Recent Projects slider
  const recentProjectsQuery = `*[_type == "portfolio" && "hero-slider" in categories] {
    _id,
    slug,
    mainHeadline,
    heroImage,
    description
  }`;

  const [homepageWorkSectionItems, recentProjects] = await Promise.all([
    client.fetch(homepageWorkSectionQuery),
    client.fetch(recentProjectsQuery)
  ]);

  return (
    <div>
        <NavBar />
        <section id="hero" className="flex flex-row lg:pt-24 lg:pb-40 pt-12 pb-20 lg:px-6 px-4 w-full border-b border-glorious_border">
          <div className='w-full pt-20'>
          <h1 className="lg:text-8xl text-3xl">Empowering Your Growth with Digital Solutions That Deliver.</h1>
          </div>
        </section>
        <section className="relative min-h-[500px] flex border-b border-glorious_border flex-col lg:flex-row">
          <div className="w-fulllg:w-xs border-r-0 lg:border-r-1 border-glorious_border lg:border-t-0 border-t">
            <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border">
              <p className='section-title-md'>What We Do</p>
            </div>
            <div className="p-4 lg:pl-6 py-8 lg:py-4">
            <p className='xs-mono'>Website Development</p>
            <p className='xs-mono'>UX Design</p>
            <p className='xs-mono'>UI Design</p>
            <p className='xs-mono'>Digital Strategy</p>
            <p className='xs-mono'>Ecommerce Solutions</p>
            <p className='xs-mono'>Mobile Apps</p>
            <p className='xs-mono'>Web Applications</p>
            </div> 
          </div>
          <div className="lg:w-xl w-full border-r-0 lg:border-r-1 border-glorious_border">
            <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border lg:border-t-0 border-t">
              <p className='section-title-md'>About Us</p>
            </div>
            <div className="p-4 lg:pr-10 py-8 lg:py-4">
            <p className='mb-10'>At The Glorious Agency, we turn ideas into seamless digital experiences. For us, a website is more than just design—it&apos;s a powerful tool for connection, engagement, and growth. With a blend of creativity, strategy, and innovation, we craft solutions that help brands stand out and succeed in an ever-evolving digital world.</p>
            <Link href="/about" className="btn">
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          Learn More</Link>
            </div> 
          </div>
          <div className="order-first lg:order-last lg:w-xl w-full flex-1">
            <RecentProjects projects={recentProjects} />
          </div>
        </section>
        <section id="expertise" className="relative flex border-b border-glorious_border">
          <div className='lg:pl-6  lg:pt-10 lg:pb-40  px-4 pt-8 pb-10 flex-1'>
            <div className='lg:max-w-[80%] lg:m-auto'>
          <AnimatedHeadline tag="h2" text="We bring together creative design and smart technology to build websites that work beautifully and deliver results. Every project is crafted to reflect each client&apos;s unique goals, using a blend of skill, passion, and experience." />
          </div>
          <div className="lg:pl-[40%] lg:mt-14 mt-6">
          <p className='mb-6  lg:max-w-xl w-full'>We approach every project with a balance of creativity, technical expertise, and strategic thinking, ensuring that each website we create is tailored to our clients&apos; needs. Whether it&apos;s a sleek portfolio, a dynamic e-commerce platform, or a robust business site, we build digital experiences that connect, perform, and grow with you.</p>
          <Link href="#services" className="btn">
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          View All Services</Link>
          </div>
         
       </div>
        </section>
        <section className="relative  border-b border-glorious_border">

            <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border">
              <p className='section-title-md'>Latest Projects</p>
            </div>
            <div className="lg:pt-10 lg:pb-20 lg:px-6 py-10 px-4">
            <div className="lg:max-w-[60%] lg:m-auto w-full"><AnimatedHeadline 
           tag="h2" text="We create, design, and develop websites that connect, engage, and support your business goals." />    
                 {/* Add View More Button */}
      <div className="flex justify-start mt-6 mb-12">
        <Link
          href="/projects"
          className="btn"
        >
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
          View All
        </Link>
      </div>
           </div>  
           <HomepageWorkSection items={homepageWorkSectionItems} />
            </div> 
           

          
        </section>
        
        {/* <section className="relative bg-foreground border-b border-glorious_border lg:py-20 p-6">
          <div className="lg:max-w-[80%] mx-auto">
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
        </section> */}
        <section className="relative lg:min-h-[500px] min-h-[340px] flex flex-col lg:flex-row border-b border-glorious_border">
          <div className=" w-full lg:w-xs lg:border-r border-glorious_border">
            <div className="p-4 pl-6 hidden lg:block">
            <p className='xs-mono'>Our Approach</p>
            </div>
            <div className="lg:hidden lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border">
              <p className='section-title-md'>Our Approach</p>
            </div>
          </div>
          <div className="w-full">
            <div className="p-4 pr-10">
            <AnimatedHeadline tag="h2" text="By taking a collaborative, transparent, and results-driven approach, we craft digital solutions that elevate brands, drive engagement, and fuel long-term growth." />
            </div> 
          </div>
        </section>
        <section id="services" className="relative flex flex-col lg:flex-row border-b border-glorious_border">
          <div className="w-full lg:w-xs border-r-0 lg:border-r-1 border-glorious_border">
            <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border">
              <p className='section-title-md'>Our Services</p>
            </div>
            <div className="p-4 pl-6 hidden lg:block">
            </div> 
          </div>
          <div className="w-full">
            <div className="px-6 py-3 hidden lg:block min-h-[46px] border-b border-glorious_border">
            </div>
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                title={service.title}
                description={service.description}
                isLast={index === services.length - 1}
              />
            ))}
          </div>
        </section>
        <section className="relative min-h-[500px] flex flex-col lg:flex-row">
          <div className="w-xs border-r border-glorious_border">
          </div>
          <div className="w-full ">
            <div className="pl-4 lg:py-12 lg:pr-8 px-4 py-8">
            <AnimatedHeadline tag="h2" text="Committed to creating effective websites that empower businesses to thrive and connect with their audiences." />
            <div className="lg:pl-[40%] mt-10 lg:mt-20">
          <p className='mb-6  max-w-xl w-full'>At The Glorious Agency, we&apos;re passionate about empowering businesses with innovative web solutions. We believe that building a website is more than design; It&apos;s about creating real connections. Our team combines creativity, skill, and experience to bring every project to life.</p>
          <p className='mb-6  max-w-xl w-full'>Our transparent, efficient services eliminate complexity, letting you focus on what you do best. Let&apos;s build your foundations for tomorrow&apos;s success together.</p>
          
          </div>
          
            </div> 
            <div className='border-t border-glorious_border lg:flex grid grid-cols-2'>
              <div className='w-full border-r border-b-1 lg:border-b-0 border-glorious_border px-4 py-8 lg:p-10'>
                <h2 className="text-3xl">14+</h2>
                <p className="xs-mono">Years of Experience</p>
              </div>
              <div className='w-full lg:border-r border-b-1 lg:border-b-0 border-glorious_border  px-4 py-8 lg:p-10'>
                <h2 className="text-3xl">94+</h2>
                <p className="xs-mono">Clients</p>
              </div> <div className='w-full border-r border-glorious_border  px-4 py-8 lg:p-10'>
                <h2 className="text-3xl">131+</h2>
                <p className="xs-mono">Projects Completed</p>
              </div> <div className='w-full  px-4 py-8 lg:p-10'>
                <h2 className="text-3xl">100%</h2>
                <p className="xs-mono">Satisfaction Score</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
