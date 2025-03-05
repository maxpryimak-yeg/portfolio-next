'use client';

import { useState, useEffect } from 'react';
import { client } from '../../../lib/sanityClient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@awesome.me/kit-34cea924a0/icons/sharp/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const query = `*[_type == "client" && defined(testimonial) && testimonial != ""] {
        _id,
        testimonial
      }`;
      const data = await client.fetch(query);
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

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

  if (!testimonials.length) return null;

  return (
    <>
      <div className="lg:px-6 px-4 lg:py-3 py-2 border-b border-glorious_border flex justify-between items-center">
        <p className='section-title-md'>
        what clients say</p>
        <div className="flex gap-4">
          <button onClick={handlePrev} className="xs-mono hover:text-grey transition-colors">
            <FontAwesomeIcon icon={faCaretLeft} className="text-lg" />
          </button>
          <button onClick={handleNext} className="xs-mono hover:text-grey transition-colors">
            <FontAwesomeIcon icon={faCaretRight} className="text-lg" />
          </button>
        </div>
      </div>
      <div className="lg:px-6 px-4 lg:py-3 py-2">
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
                <p>{testimonial.testimonial}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
} 