'use client';

import { useEffect } from 'react';

export default function ScrollBackgroundChange() {
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      const pageBody = document.querySelector('#pagebody');
      if (!aboutSection || !pageBody) return; 

      const aboutTop = aboutSection.getBoundingClientRect().top;
      const aboutHeight = aboutSection.offsetHeight;

      if (aboutTop < window.innerHeight && aboutTop > -aboutHeight) {
        pageBody.classList.add('dark');
        pageBody.classList.remove('bg-background');
      } else {
        pageBody.classList.add('bg-background');
        pageBody.classList.remove('dark');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
