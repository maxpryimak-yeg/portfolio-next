'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import FrozenRoute from './FrozenRoute';

const slideVariants = {
  initial: { y: '100vh' }, // Slide in from bottom
  enter: { y: '100vh' },   // Stay off-screen initially
  exit: {
    y: 0, // Slide up to cover page
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const perspectiveVariants = {
  initial: { scale: 1, y: 0 },
  enter: { scale: 1, y: 0 },
  exit: {
    scale: 0.9,
    y: -550,
    top: 0,
    opacity: 0.5,
    transition: { duration: 0.8, ease: [1, 1, 0.89, 1] },
  },
};

const opacityVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const PageAnimatePresence = ({ children }) => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  /**
   * 1) Freeze scroll when pathname changes
   */
  useEffect(() => {
    // If the route changed, freeze scroll
    if (pathname !== prevPathname.current) {
      // Grab current scroll
      const scrollY = window.scrollY;

      // Fix body at current scroll position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden'; 
    }

    // Always store latest pathname in ref for next comparison
    return () => {
      prevPathname.current = pathname;
    };
  }, [pathname]);

  /**
   * 2) Unfreeze scroll once old page exit is finished
   */
  const handleExitComplete = () => {
    // The offset we froze at (negative in style.top)
    const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10)) || 0;

    // Remove fixed positioning
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';

    // If you want the new page to start at the top:
    // window.scrollTo(0, 0);

    // Or if you prefer to restore the old scroll position:
    window.scrollTo(0, scrollY);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <motion.div key={pathname} className="relative motion-div">
        {/* Slide animation */}
        <motion.div
          className="slide fixed top-0 left-0 w-full h-full bg-white z-50"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={slideVariants}
        />
        {/* Page animation */}
        <motion.div
          className="page relative z-10"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={perspectiveVariants}
        >
          {/* Content animation */}
          <motion.div
            className="content"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={opacityVariants}
          >
            <FrozenRoute>{children}</FrozenRoute>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
