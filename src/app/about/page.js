import Navbar from '../components/Navbar';
import AnimatedHeadline from '../components/AnimatedHeadline';
import FadeInBottom from '../components/FadeInBottom';

export default function AboutPage() {
    return (
      <div>
        <Navbar />
        <main className="lg:px-16 px-5">
        <div className="py-16 max-w-[100rem]">
        <AnimatedHeadline 
         tag="h1" 
         className="leading-5 text-[4rem]" 
        text="The Glorious Agency is where ideas are transformed into websites that help brands connect and grow. With over 14 years of experience, we bring together design, technology, and strategy to create digital solutions that make an impact." />
      </div>
      <FadeInBottom>
         <section className="flex lg:mt-40 mt-20 flex-col lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-0"><h2 className="text-[1.5rem] uppercase font-medium ">About</h2></div>
          <div className="flex-1"><p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          The Glorious Agency brings together professionals from design, development, and marketing, uniting our skills to shape tomorrow’s digital landscape. Since our founding, we’ve been dedicated to crafting impactful websites that meet today’s needs and inspire future growth.
<br></br><br></br>
For us, every project is a chance to build something meaningful. We craft websites that go beyond aesthetics, blending function with purpose to elevate each brand’s story. At The Glorious Agency, we’re driven by a shared goal—helping our clients thrive in a digital world that’s always evolving.</p></div>
         </section>
         <hr className='border-backdrop_background lg:my-40 my-20'></hr>
         </FadeInBottom>
         <FadeInBottom>
         <section className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-0"><h2 className="text-[1.5rem] uppercase font-medium ">Mission</h2></div>
          <div className="flex-1"><p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          At The Glorious Agency, our mission is simple yet powerful: to empower brands with digital solutions that connect, inspire, and grow. We believe in creating websites that do more than just look great—they’re built to support real goals, foster connections, and drive success in an ever-evolving digital landscape.</p></div>
         </section>
         <hr className='border-backdrop_background lg:my-40 my-20'></hr>
         </FadeInBottom>
         <FadeInBottom>
         <div className="flex flex-col lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-0"><h2 className="text-[1.5rem] uppercase font-medium ">Vision</h2></div>
          <div className="flex-1"><p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          Our vision is to become a trusted partner for businesses navigating the digital world. By blending creativity, technology, and strategy, we aim to set new standards for how brands connect with their audiences. Together, we’re building a future where every business, regardless of size, has the tools to thrive online.</p></div>
         </div>
         <hr className='border-backdrop_background lg:my-40 my-20'></hr>
         </FadeInBottom>
         <FadeInBottom>
         <section className="flex mb-40 flex-col lg:flex-row">
          <div className="flex-1 mb-8 lg:mb-0"><h2 className="text-[1.5rem] uppercase font-medium ">Our Values</h2></div>
          <div className="flex-1">
            <div className="mb-10">
          <h3 className="mb-4 text-[1.8rem] relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground">Quality</h3>  
          <p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          We’re dedicated to excellence in every project. From the smallest detail to the final launch, quality is at the heart of everything we do.</p></div>
          <div className="mb-10">
          <h3 className="mb-4 text-[1.8rem] relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground">Transparency</h3>  
          <p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          Open, honest communication is our foundation. We keep clients informed at every step, building trust through clarity and consistency.</p></div>
          <div className="mb-10">
          <h3 className="mb-4 text-[1.8rem] relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground">Innovation</h3>  
          <p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          In a world that’s constantly changing, we stay ahead by embracing the latest tools and ideas. Innovation drives our solutions and helps our clients stay competitive.</p></div>
          <div className="mb-10">
          <h3 className="mb-4 text-[1.8rem] relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground">Collaboration</h3>  
          <p className="text-grey lg:text-[1.8rem] text-[1.6rem]ading-[2.5rem] max-w-(--breakpoint-lg)">
          Our success comes from strong partnerships. We work closely with each client, bringing their vision to life through teamwork and shared goals.</p></div>
          <div className="mb-10">
          <h3 className="mb-4 text-[1.8rem] relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground">Flexibility</h3>  
          <p className="text-grey lg:text-[1.8rem] text-[1.6rem] leading-[2.5rem] max-w-(--breakpoint-lg)">
          Every project is unique, and we adapt to meet each client’s needs. Our flexible approach ensures that our solutions are tailored to fit, not forced.</p></div>
         
         </div>
         </section>
         </FadeInBottom>
         
        </main>
      </div>
    );
  }