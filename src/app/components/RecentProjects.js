'use client';

import { useState, useEffect } from 'react';
import { client, urlFor } from '../../../lib/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight, faArrowTurnDownRight } from '@awesome.me/kit-34cea924a0/icons/sharp/solid';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const springConfig = { 
  damping: 25,    // Increased from 15 for faster response
  stiffness: 300, // Increased from 150 for snappier movement
  mass: 0.5       // Added lower mass for lighter feel
};

export default function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const query = `*[_type == "portfolio" && "hero-slider" in categories] {
        _id,
        slug,
        mainHeadline,
        heroImage,
        description
      }`;
      const data = await client.fetch(query);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  if (!projects.length) return null;

  const ProjectContent = ({ project }) => {
    const SlideContent = () => (
      <div 
        className="w-full lg:h-[500px] aspect-video relative group cursor-pointer"
        style={{
          backgroundImage: `url(${urlFor(project.heroImage).url()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="pointer-events-none absolute backdrop-blur-lg bg-backdrop_background bg-opacity-50 text-background p-4 max-w-xs"
          style={{
            x: springX,
            y: springY,
            opacity: isHovered ? 1 : 0,
            transform: 'translate(20px, 20px)',
          }}
          transition={{
            opacity: {
              duration: 0.2
            }
          }}
        >
          <p className="floating-text mb-4">{project.mainHeadline}</p>
          <div className="btn backdrop-blur-lg text-white shadow-none border-none bg-white/20 w-full">
          <FontAwesomeIcon icon={faArrowTurnDownRight} />
            View Project</div>
        </motion.div>
      </div>
    );

    return project.slug?.current ? (
      <Link href={`/projects/${project.slug.current}`} className="block h-full">
        <SlideContent />
      </Link>
    ) : (
      <SlideContent />
    );
  };

  return (
    <>
      <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border flex justify-between items-center">
        <p className='section-title-md'>Recent Projects</p>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="xs-mono hover:text-grey transition-colors">
            <FontAwesomeIcon icon={faCaretLeft} className="text-lg" />
          </button>
          <button onClick={handleNext} className="xs-mono hover:text-grey transition-colors">
            <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
          </button>
        </div>
      </div>
      <div className="p-4" onMouseMove={handleMouseMove}>
        <Swiper
          onSwiper={setSwiper}
          modules={[Navigation]}
          speed={800}
          loop={true}
          slidesPerView={1}
          effect="slide"
          direction="horizontal"
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project._id}>
              <ProjectContent project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
} 