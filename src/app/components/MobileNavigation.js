'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AnchorLink from './AnchorLink';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  const isCurrentPath = (path) => {
    if (path === '/#expertise') {
      return pathname === '/' || pathname === '/#expertise';
    }
    return pathname === path;
  };

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-black focus:outline-none xs-mono relative z-50"
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[57px] left-0 right-0 bg-background z-100 w-full overflow-hidden"
            style={{ zIndex: 10 }}
          >            
            <nav className="px-4 py-6 border-b border-glorious_border">
              <ul className="pl-4">
              <li className="py-2">
                  <Link 
                    href="/about" 
                    className={`text-xl xs-mono mobile-menu-link ${isCurrentPath('/about') ? 'current' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="py-2">
                  <Link 
                    href="/projects" 
                    className={`text-xl xs-mono mobile-menu-link ${isCurrentPath('/projects') ? 'current' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="py-2">
                <AnchorLink 
                    href="/#expertise" 
                    className={`text-xl xs-mono mobile-menu-link ${isCurrentPath('/#expertise') ? 'current' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Expertise
                    </AnchorLink>
                </li>

                <li className="py-2">
                  <Link 
                    href="/contact" 
                    className={`text-xl xs-mono mobile-menu-link ${isCurrentPath('/contact') ? 'current' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 