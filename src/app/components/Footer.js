import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-black text-white py-14 md:py-8">
      <div className="flex md:flex-row flex-col justify-between items-center px-8 gap-10">
        {/* Left Section */}
        <div className="order-1 md:order-first flex md:justify-start justify-center w-full items-center">
          {currentYear} ©
        </div>

        {/* Center Section */}
        <div className="w-full justify-center flex">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/logo-white.svg" // White logo for homepage
              alt="Glorious Logo"
              width={120}
              height={40}
              className="logo-image"
              priority
            />
          </Link>
        </div>
        <div className='hidden md:block w-full'></div>
        {/* Right Section */}
        <div className="hidden w-full gap-8 justify-end  items-center flex md:flex-row flex-col md:space-x-[3.2rem]">
          <FooterLink
            href="https://www.instagram.com"
            label="Instagram"
          />
          <FooterLink
            href="https://www.facebook.com"
            label="Facebook"
          />
          <FooterLink
            href="https://www.linkedin.com"
            label="Linkedin"
          />
        </div>
        
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:left-0 after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-glorious"
      aria-label={`Visit ${label}`}
    >
      {label}
    </Link>
  );
}