'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules'; // Import EffectFade
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import effect-fade CSS
import { urlFor } from '../../../lib/sanityClient';
import Image from 'next/image';
import styles from './HeroSlider.module.css';
import HeroHeadline from './HeroHeadline';
import { motion } from 'framer-motion';

export default function HeroSlider({ items }) {
  return (
    <motion.div
    initial={{ opacity: 0 }} // Start fully transparent
    animate={{ opacity: 1 }} // Fade in
    transition={{
      duration: 0.7, // Duration of the fade-in animation
      ease: [0.42, 0, 0.58, 1], // Smooth easing
    }}
  >
    <div className="overflow-hidden h-screen relative">
      <div className="absolute -translate-y-2/4 top-2/4 z-50  px-5 lg:px-[4rem]">
      <HeroHeadline />            </div>
    <div className={styles['hero-slider-container']} >
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]} // Add EffectFade here
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        effect="fade" // Enable fade effect
        fadeEffect={{
          crossFade: true, // Smooth transition between slides
        }}
        pagination={{
          clickable: true,
          el: `.${styles['custom-pagination']}`,
          bulletClass: `${styles['swiper-pagination-bullet']}`, // Base class for bullets
          bulletActiveClass: `${styles['swiper-pagination-bullet-active']}`, // Active class
          renderBullet: (index, className) =>
            `<div class="${className} pb-6">
          
                <p class="${styles['pagination-index']} text-xl md:text-3xl font-bold">0${index + 1}</p>
                <div class="${styles['case-item-title']}">
                <p class="hidden md:block text-3xl lg:text-5xl py-5">${items[index].title}</p>
                </div>
            </div>`,
        }}
        className={styles['hero-slider']}
        >
        
        {items.map((item) => (
          <SwiperSlide key={item._id} className={styles['hero-slide']}>
            {item.heroImage?.asset && (
  <Image
    src={urlFor(item.heroImage).url()}
    alt={item.title || 'Slide image'}
    width={1920}
    height={1080}
    className={styles['hero-image']}
    priority
  />
)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles['custom-pagination']} px-5 lg:px-[4rem]`}></div>
    </div>
    </div>
    </motion.div>
  );
}
