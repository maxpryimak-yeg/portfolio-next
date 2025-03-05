import Navbar from '../components/Navbar';
import AnimatedHeadline from '../components/AnimatedHeadline';
import { client } from '../../../lib/sanityClient';
import AboutNavigation from '../components/AboutNavigation';
import Image from 'next/image';

async function getClients() {
  const query = `*[_type == "client"] | order(_createdAt desc) {
    _id,
    title,
    "logo": logo.asset->url
  }`;
  
  return await client.fetch(query);
}

export default async function AboutPage() {
  const clients = await getClients();
  
  return (
    <div>
      <Navbar />
      <div className="fixed w-full top-[57px] lg:top-[67.5px] bg-background z-20 lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border">
      <p className="section-title-md">About</p>
      </div>
      <main className="mt-[95px] lg:mt-[113.5px] flex">
          <AboutNavigation />
          <div className="flex-1">
            <div id="about">
              <div className="lg:p-6 p-4">
            <AnimatedHeadline 
       tag="h1" 
       className="leading-5 text-[4rem] mb-12" 
      text="The Glorious Agency is where ideas are transformed into websites that help brands connect and grow. With over 14 years of experience, we bring together design, technology, and strategy to create digital solutions that make an impact." />
      <p className='mb-6  lg:max-w-xl w-full mx-auto'>
      The Glorious Agency brings together professionals from design, development, and marketing, uniting our skills to shape tomorrow&apos;s digital landscape. Since our founding, we&apos;ve been dedicated to crafting impactful websites that meet today&apos;s needs and inspire future growth.
      </p><p className="mb-14  lg:max-w-xl w-full mx-auto">
For us, every project is a chance to build something meaningful. We craft websites that go beyond aesthetics, blending function with purpose to elevate each brand&apos;s story. At The Glorious Agency, we&apos;re driven by a shared goal—helping our clients thrive in a digital world that&apos;s always evolving.
      </p>
      </div>
      <div id="vision-and-mission" className="lg:px-6 px-4 lg:py-3 py-2 border-y border-glorious_border">
        <p className="section-title-md">Our Vision and Mission</p>
        </div>
        <div className="px-4 pt-6 lg:p-6 flex flex-col lg:flex-row gap-8 lg:gap-20 w-full pb-20 max-w-4xl">
            <div className='w-full mb-14'>
              <h3 className="xs-mono mb-4 lg:mb-8">Vision</h3>
              <p>
                Our vision is to become a trusted partner for businesses navigating the digital world. By blending creativity, technology, and strategy, we aim to set new standards for how brands connect with their audiences. Together, we&apos;re building a future where every business, regardless of size, has the tools to thrive online.
                </p>
            </div>
            <div className='w-full'>
              <h3 className="xs-mono mb-4 lg:mb-8">Mission</h3>
              <p>
              At The Glorious Agency, our mission is simple yet powerful: to empower brands with digital solutions that connect, inspire, and grow. We believe in creating websites that do more than just look great—they&apos;re built to support real goals, foster connections, and drive success in an ever-evolving digital landscape.                </p>
            </div>
        </div>
        <div id="values" className="lg:px-6 px-4 lg:py-3 py-2 border-y border-glorious_border">
        <p className="section-title-md">Our Values</p>
        </div>
        <div className="lg:px-6 px-4 pt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 w-full pb-20">
            <div className='w-full '>
              <h3 className="xs-mono mb-2 lg:mb-4 relative pl-4 before:absolute before:w-[8px] before:h-[8px] before:bg-glorious before:border-black before:border-1 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">Quality</h3>
              <p>We&apos;re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p>
            </div>
            <div className='w-full'>
              <h3 className="xs-mono mb-2 lg:mb-4 relative pl-4 before:absolute before:w-[8px] before:h-[8px] before:bg-glorious before:border-black before:border-1 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">Quality</h3>
              <p>We&apos;re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p>
            </div>
            <div className='w-full'>
              <h3 className="xs-mono mb-2 lg:mb-4 relative pl-4 before:absolute before:w-[8px] before:h-[8px] before:bg-glorious before:border-black before:border-1 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">Quality</h3>
              <p>We&apos;re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p>
            </div>
            <div className='w-full'>
              <h3 className="xs-mono mb-2 lg:mb-4 relative pl-4 before:absolute before:w-[8px] before:h-[8px] before:bg-glorious before:border-black before:border-1 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">Quality</h3>
              <p>We&apos;re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p>
            </div>
            <div className='w-full'>
              <h3 className="xs-mono mb-2 lg:mb-4 relative pl-4 before:absolute before:w-[8px] before:h-[8px] before:bg-glorious before:border-black before:border-1 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2">Quality</h3>
              <p>We&apos;re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p>
            </div>
        </div>
        <div id="clients" className="lg:px-6 px-4 lg:py-3 py-2 border-t border-glorious_border">
        <p className="section-title-md">Our Clients</p>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
          {clients?.map((client) => (
            <div key={client._id} className="hover:bg-glorious/60 aspect-video relative flex items-center justify-center p-6 border-t border-r border-glorious_border transition-colors">
              <Image
                src={client.logo}
                alt={client.title}
                width={120}
                height={120}
                className="lg:w-30 lg:h-30 w-20 h-20 object-contain"
              />
            </div>
          ))}
        </div>
            </div>
          </div>

          </main>
    </div>
  );
}