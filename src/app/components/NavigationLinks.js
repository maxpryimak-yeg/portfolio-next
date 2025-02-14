'use client';

import Link from 'next/link';
import AnchorLink from './AnchorLink';
import { usePathname } from 'next/navigation';

export default function NavigationLinks() {
    const pathname = usePathname();

    const isCurrentPath = (path) => {
        if (path === '/#expertise') {
            return pathname === '/' || pathname === '/#expertise';
        }
        return pathname === path;
    };

    return (
      <ul className="flex gap-10 flex-col lg:flex-row">
        <li>
          <Link 
            href="/about" 
            className={`desktop-menu-link ${isCurrentPath('/about') ? 'current' : ''}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            href="/projects" 
            className={`desktop-menu-link ${isCurrentPath('/projects') ? 'current' : ''}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <AnchorLink 
            href="/#expertise" 
            className={`desktop-menu-link ${isCurrentPath('/#expertise') ? 'current' : ''}`}
          >
            Expertise
          </AnchorLink>
        </li>
      </ul>
    );
}