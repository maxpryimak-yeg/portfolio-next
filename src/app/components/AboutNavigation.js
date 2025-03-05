'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

const scrollWithOffset = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 112;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const sections = [
  { id: 'about', label: 'About' },
  { id: 'vision-and-mission', label: 'Vision and Mission' },
  { id: 'values', label: 'Values' },
  { id: 'clients', label: 'Clients' }
];

export default function AboutNavigation() {
  const [activeSection, setActiveSection] = useState('about');

  const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      setActiveSection('about');
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '-10% 0px -70% 0px'
    });

    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="hidden lg:block relative w-xs py-6 px-4 lg:px-6 border-r-0 lg:border-r-1 border-glorious_border">
      <ul className="sticky top-[137.5px] list-none xs-mono about-nav flex flex-col gap-2">
        {sections.map(({ id, label }) => (
          <li key={id} className={activeSection === id ? 'active' : ''}>
            <Link 
              href={`#${id}`}
              className="hover:text-glorious transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollWithOffset(id);
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 