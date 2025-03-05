'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationLinks from './NavigationLinks';

export default function MobileNav({ setIsNavOpen, alwaysWhite }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsNavOpen(!isOpen);
  };

  const circleVariants = {
    initial: {
      clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
    },
    animate: {
      clipPath: 'circle(150% at calc(100% - 3rem) 3rem)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      clipPath: 'circle(0% at calc(100% - 3rem) 3rem)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const navigationVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={handleToggle}
        className={`uppercase xs-mono font-medium rounded-full transition-all duration-300 relative z-60 ${
          isOpen || alwaysWhite
          ? 'text-white' 
          : 'text-black'
        }`}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-10 pt-40 px-5 bg-glorious"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={circleVariants}
          >
            <motion.div 
              className="flex  h-full"
              variants={navigationVariants}
            >
              <div className="relative w-full">
                <NavigationLinks />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 