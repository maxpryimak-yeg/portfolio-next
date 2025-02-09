'use client';

import { urlFor } from '../../../lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light'
import FadeInBottom from './FadeInBottom';

export default function HomepageWorkSection({ items }) {
  return (
    <div className="work-section-container">
      <div className="work-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-6">
        {items.map((item, index) => (
          <FadeInBottom key={item._id} delay={index * 0.1}>
          <div
            key={item._id}
            className={`relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:pointer-events-none before:bg-gradient-to-t before:from-[rgba(0,0,0,0.3)] before:via-transparent before:to-transparent before:z-20 relative group ${
              index % 3 === 1 ? 'aspect-[4/5]' : 'aspect-square'
            } rounded-[1.6rem] overflow-hidden`}
          >
            {item.slug?.current ? (
              <Link
                href={`/projects/${item.slug.current}`}
                key={item._id}
                className="block w-full h-full"
              >
                <Content item={item} hasInnerPage />
              </Link>
            ) : (
              <div className="block w-full h-full">
                <Content item={item} />
              </div>
            )}
          </div>
          </FadeInBottom>
        ))}
      </div>
      {/* Add View More Button */}
      <div className="flex justify-center mt-14">
        <Link
          href="/projects"
          className="lg:text-[1.8rem] lg:leading-[1.8rem] text-2xl inline-block bg-backdrop_background text-black md:py-7 md:px-8 px-6 py-5 rounded-full hover:bg-glorious transition-background duration-200"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

function Content({ item, hasInnerPage = false }) {
  return (
    <>
      <div className="z-20 absolute flex flex-col justify-between md:p-8 p-5 bottom-0 left-0 w-full h-full">
        <div className="text-black">
          <ul className="flex flex-wrap gap-2">
            {item.industries?.map((industry, i) => (
              <li
                key={i}
                className="shadow-[0_0_2px_rgba(0,0,0,0.25)] lg:text-[1.5rem] text-xl backdrop-blur-lg bg-backdrop_background bg-opacity-50 lg:py-[1.4rem] lg:px-[2rem] px-6 py-5 leading-none rounded-full"
              >
                {industry.label}
              </li>
            ))}
            {item.services?.map((service, i) => (
              <li
                key={i}
                className="shadow-[0_0_2px_rgba(0,0,0,0.25)] lg:text-[1.5rem] text-xl backdrop-blur-lg bg-backdrop_background bg-opacity-50 lg:py-[1.4rem] lg:px-[2rem] px-6 py-5 leading-none rounded-full"
              >
                {service.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex  justify-between items-center">
          <h3 className="text-white lg:text-5xl text-4xl">{item.title}</h3>
          {hasInnerPage && (
            <FontAwesomeIcon className="text-[2.8rem] text-white group-hover:-translate-y-1 translate-y-1 group-hover:translate-x-1 duration-200" icon={faArrowUpRight} />
          )}
        </div>
      </div>
      {item.image && (
        <Image
          src={urlFor(item.image).url()}
          alt={item.title}
          width={600}
          height={400}
          className="z-10 duration-200 h-full w-full absolute group-hover:scale-105 object-cover"
        />
        
      )}
    </>
  );
}