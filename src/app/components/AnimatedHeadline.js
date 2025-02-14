'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeadline = ({ text, duration = 0.6, tag: Tag = 'h1', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef(null);

  // Split the text into individual words
  const words = text.split(' ');

  // Calculate delay per word so the total animation duration is `duration` (in seconds)
  const delayPerWord = duration / words.length;

  // Animation configuration for each word
  const wordAnimation = {
    initial: { y: '100%', opacity: 0, rotate: 2 }, // Start below with slight rotation
    animate: { y: '0%', opacity: 1, rotate: 0 }, // Slide into view and straighten
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={headlineRef}
      className={`split-words gap-[0.7rem] text-center flex-wrap flex ${className}`}
    >
      {words.map((word, index) => (
        <div
          key={index}
          className="single-word-wrapper relative inline-block h-12 overflow-hidden" // Wrapper for overflow-hidden
        >
          <motion.div
            className="single-word-inner relative inline-block whitespace-nowrap  text-5xl leading-3xl" // Inner div for animation
            initial="initial"
            animate={isVisible ? 'animate' : 'initial'} // Animate only if visible
            transition={{
              duration: 0.3, // Individual word animation duration
              delay: index * delayPerWord, // Calculate staggered delay
              ease: [0.42, 0, 0.58, 1], // Smooth easing
            }}
            variants={wordAnimation}
          >
            {word}
          </motion.div>
        </div>
      ))}
    </Tag>
  );
};

export default AnimatedHeadline;
