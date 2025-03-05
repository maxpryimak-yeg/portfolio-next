'use client';

import { useState, useEffect } from 'react';
import { urlFor } from '../../../lib/sanityClient';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@awesome.me/kit-34cea924a0/icons/sharp/light';
import FadeInBottom from './FadeInBottom';

export default function ProjectsGrid({ items }) {
  const ITEMS_PER_PAGE = 6;
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [filter, setFilter] = useState({ industries: [], services: [] });
  const [isOpen, setIsOpen] = useState(false);

  const uniqueIndustries = [
    ...new Set(items.flatMap((item) => item.industries?.map((ind) => ind.label) || []))
  ];
  const uniqueServices = [
    ...new Set(items.flatMap((item) => item.services?.map((svc) => svc.label) || []))
  ];

  // Listen for filter changes from mobile drawer
  useEffect(() => {
    const handleMobileFilterChange = (event) => {
      if (event.detail) {
        const { type, value } = event.detail;
        handleFilterChange(type, value);
      }
    };

    const handleClearFilters = () => {
      handleClearFilter();
    };

    // Broadcast filter changes to mobile drawer
    const broadcastFilterChange = () => {
      window.dispatchEvent(new CustomEvent('filterChanged', { 
        detail: { filter }
      }));
    };

    window.addEventListener('mobileFilterChanged', handleMobileFilterChange);
    window.addEventListener('clearFilters', handleClearFilters);
    
    // Broadcast initial filter state
    broadcastFilterChange();
    
    return () => {
      window.removeEventListener('mobileFilterChanged', handleMobileFilterChange);
      window.removeEventListener('clearFilters', handleClearFilters);
    };
  }, [filter]);

  const handleFilterChange = (type, value) => {
    setFilter((prevFilter) => {
      const values = prevFilter[type];
      if (values.includes(value)) {
        return { ...prevFilter, [type]: values.filter((v) => v !== value) };
      } else {
        return { ...prevFilter, [type]: [...values, value] };
      }
    });
    // Reset visible items when the filter changes
    setVisibleItems(ITEMS_PER_PAGE);
  };

  const filteredItems = items.filter((item) => {
    const matchesIndustry =
      !filter.industries.length ||
      item.industries?.some((ind) => filter.industries.includes(ind.label));
    const matchesService =
      !filter.services.length ||
      item.services?.some((svc) => filter.services.includes(svc.label));
    return matchesIndustry && matchesService;
  });

  const visibleProjects = filteredItems.slice(0, visibleItems);

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleClearFilter = () => {
    setFilter({ industries: [], services: [] });
    setVisibleItems(ITEMS_PER_PAGE);
  };

  return (
    <div className="work-section-container flex">
      <div className="relative w-xs py-6 px-4 lg:px-6 border-r-0 lg:border-r-1 border-glorious_border hidden lg:block">
        <div className="sticky top-[137.5px]">
        {/* Industries */}
        <p className="xs-mono mb-4 font-medium">Industries</p>
        {uniqueIndustries.map((industry, index) => (
          <div key={industry} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`industry-${index}`}
              checked={filter.industries.includes(industry)}
              onChange={() => handleFilterChange('industries', industry)}
              className="hidden"
            />
            <label 
              htmlFor={`industry-${index}`} 
              className={`xs-mono cursor-pointer filterItem ${filter.industries.includes(industry) ? 'checked' : ''}`}
            >
              {industry}
            </label>
          </div>
        ))}

        {/* Services */}
        <p className="xs-mono mb-2 mt-10 font-medium">Services</p>
        {uniqueServices.map((service, index) => (
          <div key={service} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`service-${index}`}
              checked={filter.services.includes(service)}
              onChange={() => handleFilterChange('services', service)}
              className="hidden"
            />
            <label 
              htmlFor={`service-${index}`} 
              className={`xs-mono cursor-pointer filterItem ${filter.services.includes(service) ? 'checked' : ''}`}
            >
              {service}
            </label>
          </div>
        ))}
        </div>
      </div>

      <div className="flex-1 p-6">
        {/* Project Grid */}
        <div className="work-section grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleProjects.map((item) => (
            <FadeInBottom disableWhileInView key={item._id}>
              <div>
                {item.slug?.current ? (
                  <Link href={`/projects/${item.slug.current}`}>
                    <Content item={item} />
                  </Link>
                ) : (
                  <Content item={item} />
                )}
              </div>
            </FadeInBottom>
          ))}
        </div>

        {visibleItems < filteredItems.length && (
          <div className="flex justify-center mt-14">
            <button
              onClick={handleLoadMore}
              className="btn"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Content({ item, hasInnerPage = false }) {
  return (
    <>
      {item.image && (
        <Image
          src={urlFor(item.image).url()}
          alt={item.title}
          width={800}
          height={533}
          className="w-full h-auto aspect-3/2 object-cover"
        />
      )}
      <h3 className="font-(family-name:--font-glorious) font-normal mt-4 text-xl font-bold">
        {item.title}
      </h3>
      <ul className="mt-2 flex gap-2">
        {item.industries?.map((industry, i) => (
          <li className="badge" key={`industry-${i}`}>
            {industry.label}
          </li>
        ))}
        {item.services?.map((service, i) => (
          <li className="badge" key={`service-${i}`}>
            {service.label}
          </li>
        ))}
      </ul>
    </>
  );
}
