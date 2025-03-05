'use client';

import { useState } from 'react';
import { urlFor } from '../../../lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@awesome.me/kit-34cea924a0/icons/sharp/light';
import { faArrowUpRight } from '@awesome.me/kit-34cea924a0/icons/sharp/light';
import FadeInBottom from './FadeInBottom';

export default function ProjectsGrid({ items }) {
  const ITEMS_PER_PAGE = 6; // Number of items to load per click
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [filter, setFilter] = useState({ industries: [], services: [] });
  const [isOpen, setIsOpen] = useState(false);

  const uniqueIndustries = [...new Set(items.flatMap((item) => item.industries?.map((ind) => ind.label) || []))];
  const uniqueServices = [...new Set(items.flatMap((item) => item.services?.map((svc) => svc.label) || []))];

  const handleFilterChange = (type, value) => {
    setFilter((prevFilter) => {
      const values = prevFilter[type];
      if (values.includes(value)) {
        return { ...prevFilter, [type]: values.filter((v) => v !== value) };
      } else {
        return { ...prevFilter, [type]: [...values, value] };
      }
    });
  };

  const filteredItems = items.filter((item) => {
    const matchesIndustry = !filter.industries.length || item.industries?.some((ind) => filter.industries.includes(ind.label));
    const matchesService = !filter.services.length || item.services?.some((svc) => filter.services.includes(svc.label));
    return matchesIndustry && matchesService;
  });

  const visibleProjects = filteredItems.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prevVisible) => prevVisible + ITEMS_PER_PAGE);
  };

  const handleClearFilter = () => {
    setFilter({ industries: [], services: [] });
  };

  return (
    <div className="work-section-container">
      {/* Filter and Clear Buttons */}
      <div className="flex gap-4 w-full justify-end items-center mb-8">
        <button
          onClick={() => setIsOpen(true)}
          className="relative before:block before:absolute before:w-5 before:h-5 before:bg-glorious before:left-0 pl-8 before:top-2/4 before:-translate-y-2/4 before:rounded-full before:border before:border-foreground no-underline text-[2rem] transition-colors duration-300 ease-in-out relative after:content-[&quot;&quot;] after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-0 after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
        >
          Filter Projects
        </button>
      </div>

      {/* Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 ${
            isOpen ? 'transition-opacity ease-in-out duration-500' : ''
          }`}
          onClick={() => setIsOpen(false)} // Close when clicking outside
        ></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none  fixed inset-y-0 right-0 flex w-full lg:w-1/3 pl-10">
              <div
                className={`pointer-events-auto relative w-screen backdrop-blur-md  transform transition-transform ease-in-out duration-500 ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
               

                {/* Drawer Content */}
                <div className="flex h-full flex-col overflow-y-scroll  shadow-2xl bg-backdrop_background py-6 ">
                  <div className=" flex justify-end px-4 sm:px-6">
                     {/* Close Button */}
                <div className="">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="relative flex w-12 h-12  hover:bg-glorious justify-center items-center text-black bg-white rounded-full  text-black focus:outline-hidden focus:ring-2 focus:ring-black"
                  >
                    <span className="sr-only">Close panel</span>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    {/* Industries */}
                    <h3 className="text-5xl mb-6">Industries</h3>
                    {uniqueIndustries.map((industry, index) => (
    <div key={industry} className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`industry-${index}`} // Unique ID for each input
        checked={filter.industries.includes(industry)}
        onChange={() => handleFilterChange('industries', industry)}
        className="mr-2"
      />
      <label htmlFor={`industry-${index}`} className="cursor-pointer">
        {industry}
      </label>
    </div>
  ))}

                    {/* Services */}
                    <h3 className="text-5xl  mt-20 mb-6">Services</h3>
                    {uniqueServices.map((service, index) => (
    <div key={service} className="flex items-center mb-2">
      <input
        type="checkbox"
        id={`service-${index}`} // Unique ID for each input
        checked={filter.services.includes(service)}
        onChange={() => handleFilterChange('services', service)}
        className="mr-2"
      />
      <label htmlFor={`service-${index}`} className="cursor-pointer">
        {service}
      </label>
    </div>
  ))}
<div className="flex gap-4 mt-14 ">
                    <button 
                     onClick={() => setIsOpen(false)}
                    className='text-[1.8rem] leading-[1.8rem] inline-block bg-backdrop_background text-black py-7 px-8 rounded-full hover:bg-glorious transition-background duration-200'>Show Results</button>
                   {filter.industries.length || filter.services.length ? (
          <button
            onClick={handleClearFilter}
            className="text-[1.8rem] leading-[1.8rem] inline-block bg-backdrop_background text-black py-7 px-8 rounded-full hover:bg-glorious transition-background duration-200"
          >
            Clear
          </button>
        ) : null}
        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      {/* Project Grid */}
      <div className="work-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((item, index) => (
           <FadeInBottom disableWhileInView key={item._id}>
          <div
            key={item._id}
            className={`before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:pointer-events-none before:bg-linear-to-t before:from-[rgba(0,0,0,0.3)] before:via-transparent before:to-transparent before:z-20 relative group ${
              index % 3 === 1 ? 'aspect-4/5' : 'aspect-square'
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

      {visibleItems < filteredItems.length && ( // Show the button only if there are more items to load
        <div className="flex justify-center mt-14">
          <button
            onClick={handleLoadMore}
            className="text-[1.8rem] leading-[1.8rem] inline-block bg-backdrop_background text-black py-7 px-8 rounded-full hover:bg-glorious transition-background duration-200"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

function Content({ item, hasInnerPage = false }) {
  return (
    <>
      <div className="z-20 absolute flex flex-col justify-between p-8 bottom-0 left-0 w-full h-full">
        <div className="text-black">
          <ul className="flex flex-wrap gap-2">
            {item.industries?.map((industry, i) => (
              <li
                key={i}
                className="shadow-[0_0_2px_rgba(0,0,0,0.25)] text-[1.5rem] backdrop-blur-lg bg-backdrop_background bg-opacity-50 py-[1.4rem] px-[2rem] leading-none rounded-full"
              >
                {industry.label}
              </li>
            ))}
            {item.services?.map((service, i) => (
              <li
                key={i}
                className=" shadow-[0_0_2px_rgba(0,0,0,0.25)] text-[1.5rem] backdrop-blur-lg bg-backdrop_background bg-opacity-50 py-[1.4rem] px-[2rem] leading-none rounded-full"
              >
                {service.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <h3 className="text-white text-5xl">{item.title}</h3>
          {hasInnerPage && (
            <FontAwesomeIcon
              className="text-[2.8rem] text-white group-hover:-translate-y-1 group-hover:text-glorious translate-y-1 group-hover:translate-x-1 duration-200"
              icon={faArrowUpRight}
            />
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
