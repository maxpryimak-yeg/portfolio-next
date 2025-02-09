'use client';

import { motion } from 'framer-motion';

const FadeInBottom = ({ children, delay = 0, duration = 0.3, disableWhileInView = false }) => {
  const animationVariants = {
    initial: { opacity: 0, y: 100 }, // Start slightly below and invisible
    animate: { opacity: 1, y: 0 }, // Move to original position and visible
  };

  const motionProps = {
    initial: "initial",
    animate: disableWhileInView ? "animate" : undefined, // Directly animate if whileInView is disabled
    whileInView: disableWhileInView ? undefined : "animate", // Trigger animation on view if not disabled
    viewport: disableWhileInView ? undefined : { once: true, amount: 0.1 }, // Apply viewport props only when whileInView is enabled
    transition: {
      delay,
      duration,
      ease: [0.42, 0, 0.58, 1],
    },
    variants: animationVariants,
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default FadeInBottom;
