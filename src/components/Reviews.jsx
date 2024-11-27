import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

// Importing images from assets
import image1 from "../assets/beautiful-female-half-length-portrait-yellow-studio.jpg"; // Replace with your actual file paths
import image2 from "../assets/front-view-cute-japanese-girl-tokyo.jpg";
import image3 from "../assets/smiling-black-haired-vietnamese-girl-standing-bridge.jpg";
import image4 from "../assets/preteen-girl-holding-hands-her-waist-while-smiling-t-shirt.jpg";

const reviews = [
  {
    image: image1,
    name: "Alice Johnson",
    review:
      "This hostel provided me with the perfect blend of comfort, safety, and a homely atmosphere. Highly recommended!",
    rating: 5,
  },
  {
    image: image2,
    name: "James Smith",
    review:
      "The facilities are excellent, and the staff is incredibly supportive. My stay has been truly wonderful.",
    rating: 4,
  },
  {
    image: image3,
    name: "Emily Davis",
    review:
      "I loved how everything was so well organized here. It truly feels like a second home.",
    rating: 5,
  },
  {
    image: image4,
    name: "Michael Brown",
    review:
      "Staying here was the best decision! Great food, amazing people, and a peaceful environment.",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <section className="bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-4 sm:mb-6">
          What Our Guests Say
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>

        {/* Slider Section */}
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center max-w-xs mx-auto">
                {/* Profile Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 object-cover"
                />

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 text-center break-words">
                  {review.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-sm sm:text-lg mr-0.5"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center break-words">
                  "{review.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
