'use client';

import { motion } from 'framer-motion';

const HeroHeadline = ({ duration = 0.6 }) => {
  const text = "Empowering Your Growth with Digital Solutions That Deliver.";
  const words = text.split(' '); // Split headline into individual words

  // List of words to highlight
  const highlightedWords = ["Digital", "Solutions"];

  // Calculate delay per word so the total animation duration is `duration`
  const delayPerWord = duration / words.length;

  // Animation configuration for each word
  const wordAnimation = {
    initial: { y: '100%', opacity: 0, rotate: 2 }, // Start below with slight rotation
    animate: { y: '0%', opacity: 1, rotate: 0 }, // Slide into view and straighten
  };

  return (
    <h1 className="split-words justify-start hero-headline flex-wrap text-white text-6xl leading-[3rem] lg:text-9xl lg:leading-[7rem] flex max-w-(--breakpoint-xl) gap-[1rem] text-center">
      {words.map((word, index) => (
        <div
          key={index}
          className="single-word-wrapper relative inline-block lg:h-[8rem] h-[3.6rem] overflow-hidden" // Wrapper for overflow-hidden
        >
          <motion.div
            className={`single-word-inner relative inline-block whitespace-nowrap ${
              highlightedWords.includes(word) ? "text-glorious" : ""
            }`} // Highlight if the word is in the highlightedWords array
            initial="initial"
            animate="animate"
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
    </h1>
  );
};

export default HeroHeadline;
