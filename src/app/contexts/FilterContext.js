'use client';

import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  return (
    <FilterContext.Provider value={{ 
      selectedIndustries, 
      setSelectedIndustries, 
      selectedServices, 
      setSelectedServices 
    }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
} 