'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import NavigationLinks from './NavigationLinks.js';
import MobileNav from './MobileNav';
import { useState } from 'react';

// Animation configuration for fade-in from top to bottom
const navbarAnimation = {
  initial: { opacity: 0, y: -10 }, // Start slightly above and invisible
  animate: {
    opacity: 1,
    y: 0, // End at its original position and fully visible
    transition: {
      duration: 0.2, // Adjust duration as needed
      ease: [0.42, 0, 0.58, 1], // Smooth easing
    },
  },
};

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <motion.div
      className="lg:px-[2rem] lg:py-[1.2rem] pb-0 relative z-[55]"
      initial={navbarAnimation.initial}
      animate={navbarAnimation.animate}
    >
      <nav className="px-5 pt-8 bg-gloriouss rounded-[1.8rem] text-black flex justify-between items-center lg:[padding:3rem_2rem] w-full transition-all duration-300 ease-in-out">
        <div className="relative z-[60]">
          <Link href="/" aria-label="Go to homepage">
          <svg
  width="110"
  height="22"
  viewBox="0 0 110 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M96.5131 10.539C96.5131 9.83451 96.6522 9.23201 96.9303 8.73147C97.2269 8.23093 97.644 7.81382 98.1816 7.48013C98.7377 7.14644 99.4051 6.90544 100.184 6.75713C100.981 6.60882 101.889 6.53467 102.909 6.53467C105.263 6.53467 107.006 6.94251 108.137 7.7582C109.268 8.55536 109.833 9.86231 109.833 11.6791H107.442C107.442 11.1229 107.33 10.6595 107.108 10.2887C106.885 9.91793 106.561 9.63058 106.135 9.42666C105.727 9.2042 105.217 9.04662 104.605 8.95393C104.012 8.86124 103.317 8.81489 102.52 8.81489C101.76 8.81489 101.138 8.87051 100.656 8.98174C100.193 9.07443 99.8222 9.2042 99.5442 9.37105C99.2846 9.51935 99.1085 9.69547 99.0158 9.89939C98.9231 10.1033 98.8768 10.3072 98.8768 10.5112C98.8768 10.7336 98.9509 10.9468 99.0992 11.1507C99.2661 11.3547 99.5256 11.5493 99.8779 11.7347C100.23 11.9015 100.694 12.0777 101.268 12.263C101.861 12.4299 102.584 12.5967 103.437 12.7636C104.457 12.949 105.365 13.1343 106.162 13.3197C106.978 13.5051 107.664 13.7554 108.22 14.0705C108.795 14.3672 109.23 14.7657 109.527 15.2663C109.842 15.7483 110 16.3878 110 17.185C110 18.6681 109.453 19.7248 108.359 20.3551C107.284 20.9668 105.708 21.2727 103.632 21.2727C101.129 21.2727 99.3032 20.8741 98.1538 20.077C97.0229 19.2613 96.4575 17.9451 96.4575 16.1283H98.8768C98.8768 16.6659 98.9973 17.1201 99.2383 17.4909C99.4793 17.8616 99.8222 18.1583 100.267 18.3807C100.712 18.6032 101.24 18.7608 101.852 18.8534C102.483 18.9461 103.168 18.9925 103.91 18.9925C104.596 18.9925 105.171 18.9554 105.634 18.8813C106.116 18.7886 106.505 18.6681 106.802 18.5198C107.099 18.3714 107.312 18.1861 107.442 17.9636C107.571 17.7411 107.636 17.5094 107.636 17.2684C107.636 16.8791 107.525 16.5732 107.302 16.3508C107.099 16.1283 106.793 15.9522 106.385 15.8224C105.977 15.6741 105.476 15.5536 104.883 15.4609C104.29 15.3497 103.595 15.2199 102.798 15.0716C102.038 14.9418 101.287 14.775 100.545 14.5711C99.8037 14.3671 99.1271 14.0983 98.5153 13.7647C97.9221 13.431 97.4401 13.0046 97.0693 12.4855C96.6985 11.9664 96.5131 11.3176 96.5131 10.539Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M80.3335 6.95215H82.9196V14.5992C82.9196 15.2481 82.9752 15.832 83.0865 16.3511C83.2162 16.8517 83.4387 17.2873 83.7538 17.6581C84.069 18.0289 84.4861 18.3162 85.0052 18.5201C85.5428 18.724 86.238 18.826 87.0908 18.826C88.5924 18.826 89.7232 18.4182 90.4833 17.6025C91.2619 16.7682 91.6512 15.5447 91.6512 13.9319V13.626H92.7079V13.9041C92.7079 14.9978 92.6059 15.9989 92.402 16.9073C92.2166 17.8157 91.8829 18.5943 91.4009 19.2431C90.9189 19.892 90.2701 20.3925 89.4544 20.7447C88.6572 21.097 87.6654 21.2731 86.479 21.2731C85.4223 21.2731 84.5046 21.1433 83.726 20.8838C82.966 20.6428 82.3264 20.2535 81.8073 19.7158C81.3068 19.1782 80.936 18.5016 80.695 17.6859C80.454 16.8702 80.3335 15.8969 80.3335 14.7661V6.95215ZM91.6512 6.95215H94.2373V20.856H91.6512V6.95215Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M62.9473 13.9037C62.9473 11.4752 63.5776 9.63985 64.8382 8.39778C66.0988 7.1557 68.0361 6.53467 70.65 6.53467C73.2639 6.53467 75.2012 7.1557 76.4618 8.39778C77.7409 9.63985 78.3805 11.4752 78.3805 13.9037C78.3805 16.3322 77.7409 18.1675 76.4618 19.4096C75.2012 20.6517 73.2639 21.2727 70.65 21.2727C68.0361 21.2727 66.0988 20.6517 64.8382 19.4096C63.5776 18.1675 62.9473 16.3322 62.9473 13.9037ZM65.6724 13.9037C65.6724 15.5165 66.0803 16.7401 66.896 17.5743C67.7116 18.4085 68.963 18.8256 70.65 18.8256C72.337 18.8256 73.5883 18.4085 74.404 17.5743C75.2382 16.7401 75.6554 15.5165 75.6554 13.9037C75.6554 12.2908 75.2382 11.0673 74.404 10.2331C73.5883 9.39885 72.337 8.98174 70.65 8.98174C68.9259 8.98174 67.6653 9.39885 66.8681 10.2331C66.071 11.0673 65.6724 12.2908 65.6724 13.9037Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M58.1265 20.856V6.95218H60.7126V20.856H58.1265ZM57.5703 2.72542C57.5703 2.09511 57.7093 1.63165 57.9874 1.33503C58.284 1.01988 58.766 0.862305 59.4334 0.862305C60.0823 0.862305 60.5457 1.01988 60.8238 1.33503C61.1204 1.63165 61.2687 2.09511 61.2687 2.72542C61.2687 3.35572 61.1204 3.82845 60.8238 4.14361C60.5457 4.44022 60.0823 4.58853 59.4334 4.58853C58.766 4.58853 58.284 4.44022 57.9874 4.14361C57.7093 3.82845 57.5703 3.35572 57.5703 2.72542Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M46.5915 20.8556H44.0054V6.95178H46.5915V20.8556ZM56.1851 12.5689H53.7658C53.7658 12.0313 53.7102 11.5493 53.599 11.1229C53.4878 10.678 53.3024 10.298 53.0428 9.98281C52.8019 9.66766 52.4682 9.42666 52.0418 9.25982C51.6339 9.07443 51.1241 8.98174 50.5124 8.98174C49.2888 8.98174 48.3248 9.39885 47.6204 10.2331C46.9344 11.0488 46.5915 12.263 46.5915 13.8759V14.1818H45.5348V13.9037C45.5348 12.8099 45.6368 11.8088 45.8407 10.9005C46.0446 9.99208 46.369 9.21347 46.8139 8.56463C47.2589 7.91578 47.8243 7.41524 48.5102 7.06301C49.2147 6.71078 50.0489 6.53467 51.0129 6.53467C51.8842 6.53467 52.635 6.66444 53.2653 6.92397C53.9142 7.18351 54.4518 7.56355 54.8782 8.06409C55.3231 8.56462 55.6475 9.19493 55.8514 9.95501C56.0739 10.6965 56.1851 11.5678 56.1851 12.5689Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M26.3413 13.9037C26.3413 11.4752 26.9716 9.63985 28.2322 8.39778C29.4928 7.1557 31.4301 6.53467 34.044 6.53467C36.6579 6.53467 38.5952 7.1557 39.8558 8.39778C41.135 9.63985 41.7745 11.4752 41.7745 13.9037C41.7745 16.3322 41.135 18.1675 39.8558 19.4096C38.5952 20.6517 36.6579 21.2727 34.044 21.2727C31.4301 21.2727 29.4928 20.6517 28.2322 19.4096C26.9716 18.1675 26.3413 16.3322 26.3413 13.9037ZM29.0665 13.9037C29.0665 15.5165 29.4743 16.7401 30.29 17.5743C31.1057 18.4085 32.357 18.8256 34.044 18.8256C35.731 18.8256 36.9824 18.4085 37.7981 17.5743C38.6323 16.7401 39.0494 15.5165 39.0494 13.9037C39.0494 12.2908 38.6323 11.0673 37.7981 10.2331C36.9824 9.39885 35.731 8.98174 34.044 8.98174C32.3199 8.98174 31.0593 9.39885 30.2622 10.2331C29.465 11.0673 29.0665 12.2908 29.0665 13.9037Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M24.1066 20.8557H21.5205V0H24.1066V20.8557Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
  <path
    d="M8.92625 21.2727C7.49879 21.2727 6.22891 21.0688 5.1166 20.6609C4.02284 20.2346 3.09592 19.6043 2.33584 18.77C1.57577 17.9173 0.991806 16.8513 0.58396 15.5721C0.194653 14.293 0 12.8007 0 11.0951C0 7.64698 0.778614 5.09794 2.33584 3.44802C3.91161 1.7981 6.3216 0.973145 9.56582 0.973145C11.0489 0.973145 12.3651 1.10291 13.5145 1.36245C14.6824 1.62199 15.6557 2.0391 16.4343 2.6138C17.2315 3.18849 17.834 3.93002 18.2418 4.8384C18.6682 5.74679 18.8814 6.84982 18.8814 8.14751H16.2953C16.2953 7.16498 16.0913 6.37709 15.6835 5.78386C15.2757 5.1721 14.7473 4.69937 14.0985 4.36568C13.4496 4.03198 12.7174 3.80952 11.9017 3.69829C11.086 3.58706 10.261 3.53145 9.42679 3.53145C8.22179 3.53145 7.20218 3.67975 6.36795 3.97637C5.53372 4.25445 4.8478 4.70864 4.31018 5.33894C3.79111 5.95071 3.41107 6.72932 3.17007 7.67478C2.94761 8.62024 2.83638 9.75109 2.83638 11.0673C2.83638 12.4021 2.98469 13.5515 3.2813 14.5155C3.57791 15.4795 4.0043 16.2766 4.56045 16.9069C5.1166 17.5187 5.80253 17.9729 6.61822 18.2695C7.43391 18.5661 8.3701 18.7144 9.42679 18.7144C10.3352 18.7144 11.1416 18.5105 11.8461 18.1026C12.569 17.6763 13.2086 17.1294 13.7648 16.462C14.3395 15.7761 14.8493 15.016 15.2942 14.1818C15.7577 13.329 16.1655 12.4855 16.5177 11.6513L18.1028 12.0962C17.7135 13.1714 17.2407 14.2559 16.6846 15.3497C16.1284 16.4435 15.4796 17.4353 14.738 18.3251C13.9965 19.1964 13.1437 19.9101 12.1797 20.4663C11.2157 21.0039 10.1312 21.2727 8.92625 21.2727ZM16.4343 20.8556V12.5133H19.0204V20.8556H16.4343ZM9.64925 13.3197V10.9283H19.0204V13.3197H9.64925Z"
    fill={isNavOpen ? "#FFFFFF" : "#121212"}
  />
</svg>

          </Link>
        </div>
        <div className='hidden lg:block'>
          <NavigationLinks />
        </div>
        <MobileNav setIsNavOpen={setIsNavOpen} />
      </nav>
    </motion.div>
  );
}
