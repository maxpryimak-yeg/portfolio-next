'use client';

import Link from 'next/link';
import AnchorLink from './AnchorLink';

export default function NavigationLinks({ isTransparent }) {
    const linkClasses = `no-underline lg:text-[2rem] text-4xl transition-colors duration-300 ease-in-out relative after:content-[&quot;&quot;] after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-0 after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
      isTransparent ? 'hover:text-glorious' : ''
    }`;

    return (
      <ul className="flex ld:[gap:3.2rem] gap-20 flex-col lg:flex-row">
        <li>
          <Link href="/" className={linkClasses}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={linkClasses}>About</Link>
        </li>
        <li>
          <Link href="/projects" className={linkClasses}>Projects</Link>
        </li>
        <li>
          <AnchorLink href="/#expertise" className={linkClasses}>Expertise</AnchorLink>
        </li>
        <li>
          <Link href="/contact" className={linkClasses}>Contact</Link>
        </li>
      </ul>
    );
}