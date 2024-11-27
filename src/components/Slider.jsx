import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import all images
import hearing1 from '../assets/girl-with-book.jpg';

import hearing6 from '../assets/girls.jpeg';

// Define the images in an array
const images = [
  { src: hearing1, alt: 'Slide 1' },
  { src: hearing6, alt: 'Slide 2' },
 
];

export default function Slider() {
  return (
    <div className="w-full relative z-[0] mb-2">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Only include the Autoplay module
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[350px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
