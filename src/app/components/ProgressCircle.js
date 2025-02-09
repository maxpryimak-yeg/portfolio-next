'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@awesome.me/kit-34cea924a0/icons/sharp/light'

export default function ProgressCircle() {
    const [progress, setProgress] = useState(0);
    const router = useRouter();
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (scrollTop / documentHeight) * 100;
        setProgress(scrollProgress);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleBackClick = () => {
      router.back();
    };
  
    return (
      <div
        className="group fixed z-[9999] top-5 md:left-8 left-5 w-20 h-20 cursor-pointer mix-blend-difference"
        onClick={handleBackClick}
        role="button"
        aria-label="Go back"
      >
        {/* Close Icon */}
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 text-white group-hover:scale-125 transition-transform"
        />
  
        {/* Progress Circle */}
        <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Background Circle */}
          <circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            strokeWidth="2"
            className="stroke-white opacity-20"
          />
          {/* Progress Circle */}
          <motion.circle
            cx="30"
            cy="30"
            r="28"
            fill="none"
            strokeWidth="2"
            className="stroke-white"
            strokeDasharray="176"
            strokeDashoffset="176"
            animate={{
              strokeDashoffset: 176 - (progress / 100) * 176,
            }}
            transition={{
              ease: 'linear',
              duration: 0.1,
            }}
          />
        </svg>
      </div>
    );
  }