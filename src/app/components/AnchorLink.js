'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function AnchorLink({ href, children, className }) {
  const router = useRouter();
  const currentPath = usePathname(); // Get the current path in the App Router

  const handleClick = (e) => {
    e.preventDefault();
    const [path, hash] = href.split('#'); // Split the href into path and hash

    if (currentPath === path) {
      // If already on the same page, scroll to the section
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to the new page
      router.push(path);

      // Wait for a short delay before scrolling
      const checkElement = () => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Retry after a short delay
          setTimeout(checkElement, 100);
        }
      };
      checkElement();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}