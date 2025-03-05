'use client';

import Navbar from '../components/Navbar';
import AnimatedHeadline from '../components/AnimatedHeadline';
import Image from 'next/image';
import FormspreeForm from '../components/FormspreeForm';
import TestimonialSlider from '../components/TestimonialSlider';

export default function ContactPageClient({ testimonials }) {
  return (
    <div>
      <Navbar />
      <main>
        <div className="lg:pt-32 lg:pb-20 pt-24 pb-20 border-b border-glorious_border lg:px-6 px-4">
          <AnimatedHeadline text="At The Glorious Agency, we create high-impact websites that engage, perform, and evolve with your brand." />
        </div>
        <section className="relative min-h-[500px] flex flex-col lg:flex-row">
          <div className="w-full lg:w-md border-r-0 lg:border-r-1 border-glorious_border lg:border-t-0 lg:border-t pb-20">
            <TestimonialSlider testimonials={testimonials} />
          </div>
          <div className="flex-1 border-r-0 lg:border-r-1 border-glorious_border">
            <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border lg:border-t-0 border-t">
              <p className='section-title-md'>Get in touch</p>
            </div>
            <div className="p-0">
              <div>
                <div className="flex flex-col justify-between lg:flex-row">
                  <div className="lg:w-1/3 p-4">
                    <Image
                      src="/contact.gif"
                      alt="Contact animation"
                      width={300}
                      height={300}
                      className="w-full lg:max-w-xs"
                      priority
                    />
                  </div>
                  <div className="order-first lg:order-last w-full lg:w-3xl lg:pt-4 pb-20 lg:pr-6 p-4">
                    <h2 className="lg:text-3xl text-2xl mb-8">Looking to work together? Please fill out the form below, and we will get in touch with you a.s.a.p.</h2>
                    <FormspreeForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 