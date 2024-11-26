import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Import images from assets
import image1 from "../assets/aawaz.jpeg";
import image2 from "../assets/girl-with-book.jpg";
import image3 from "../assets/logo.png";

const Services = () => {
  const images = [image1, image2, image3]; // Array of images for the slider

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* Image Slider Section */}
        <div className="w-full md:w-2/3 lg:w-3/5">
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="rounded-lg shadow-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/3 lg:w-2/5 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Services And Facilities
          </h2>
          <div className="w-16 h-1 bg-red-600 mb-4"></div> {/* Red underline */}
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Witty Girls Hostel, we are committed to providing a safe, secure,
            comfortable, and supportive environment for female students and
            working women. Our buildings are located in prime, peaceful
            locations with easy access to public transportation.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Air-conditioned Rooms with attached washrooms</li>
            <li>Unlimited Veg/Jain meals with a variety of options</li>
            <li>Unlimited Tea/Coffee throughout the day</li>
            <li>High-speed WiFi access and Electricity</li>
            <li>Premium Laundry Service (Wash and Press)</li>
            <li>Personalized Digital Locker for every resident</li>
            <li>Clean white premium bed linen and towels</li>
            <li>Professional housekeeping services daily</li>
            <li>Collaboration and Break-out zones</li>
            <li>
              Pantry area on every floor with refrigerator, toaster, kettle, and
              Aquaguard
            </li>
            <li>Festivals, Events, and much more</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
