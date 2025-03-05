'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilterList } from '@awesome.me/kit-34cea924a0/icons/sharp/light';

export default function FilterDrawer({ industries, services, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({ industries: [], services: [] });
  const drawerRef = useRef(null);

  // Get the ProjectsGrid component's filter state
  useEffect(() => {
    const handleFilterChange = (event) => {
      if (event.detail && event.detail.filter) {
        setFilter(event.detail.filter);
      }
    };

    window.addEventListener('filterChanged', handleFilterChange);
    
    return () => {
      window.removeEventListener('filterChanged', handleFilterChange);
    };
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsOpen(!isOpen);
    
    // Prevent body scrolling when drawer is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleFilterChange = (type, value) => {
    const newFilter = { ...filter };
    const values = newFilter[type];
    
    if (values.includes(value)) {
      newFilter[type] = values.filter(v => v !== value);
    } else {
      newFilter[type] = [...values, value];
    }
    
    setFilter(newFilter);
    
    // Dispatch custom event to update ProjectsGrid
    window.dispatchEvent(new CustomEvent('mobileFilterChanged', { 
      detail: { type, value }
    }));
  };

  const clearFilters = () => {
    setFilter({ industries: [], services: [] });
    
    // Dispatch custom event to clear filters in ProjectsGrid
    window.dispatchEvent(new CustomEvent('clearFilters'));
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target) && isOpen) {
        toggleDrawer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDrawer]);

  // Clean up body overflow style when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={className}>
      <button 
        onClick={toggleDrawer}
        className="xs-mono text-black focus:outline-none"
      >
        Show filters
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-[1.5px] z-40" onClick={toggleDrawer}></div>
      )}

      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-glorious_border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-glorious_border flex justify-between items-center">
          <h3 className="xs-mono">Filters</h3>
          <button onClick={toggleDrawer} className="xs-mono">CLOSE</button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
          {/* Industries */}
          <div className="mb-8">
            <h4 className="xs-mono mb-4 font-medium">Industries</h4>
            <div className="space-y-2">
              {industries.map((industry, index) => (
                <div key={industry} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`mobile-industry-${index}`}
                    checked={filter.industries.includes(industry)}
                    onChange={() => handleFilterChange('industries', industry)}
                    className="hidden"
                  />
                  <label 
                    htmlFor={`mobile-industry-${index}`} 
                    className={`xs-mono cursor-pointer filterItem ${filter.industries.includes(industry) ? 'checked' : ''}`}
                  >
                    {industry}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h4 className="xs-mono mb-4 font-medium">Services</h4>
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={service} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={`mobile-service-${index}`}
                    checked={filter.services.includes(service)}
                    onChange={() => handleFilterChange('services', service)}
                    className="hidden"
                  />
                  <label 
                    htmlFor={`mobile-service-${index}`} 
                    className={`xs-mono cursor-pointer filterItem ${filter.services.includes(service) ? 'checked' : ''}`}
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Filter action buttons */}
          <div className="space-y-3">
            {/* Clear filters button - only shown when filters are active */}
            {(filter.industries.length > 0 || filter.services.length > 0) && (
              <button
                onClick={clearFilters}
                className="w-full py-2 border border-black text-center xs-mono hover:bg-glorious hover:text-white transition-colors"
              >
                Clear Filters
              </button>
            )}
            
            {/* Close button - always shown */}
            <button
              onClick={toggleDrawer}
              className="w-full py-2 border border-black text-center xs-mono hover:bg-glorious hover:text-white transition-colors"
            >
              Close Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 