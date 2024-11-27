import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

// Import images
import hearing1 from "../assets/girl-with-book.jpg";
import hearing6 from "../assets/girls.jpeg";

// Define the images in an array
const images = [
  { src: hearing1, alt: "Slide 1" },
  { src: hearing6, alt: "Slide 2" },
];

export default function Slider() {
  return (
    <div className="w-full relative z-[0] mb-4">
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
                className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] 2xl:h-[700px] object-contain mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
