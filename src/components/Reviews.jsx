import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";

const reviews = [
  {
    image: "https://source.unsplash.com/100x100/?face",
    name: "Alice Johnson",
    review:
      "This hostel provided me with the perfect blend of comfort, safety, and a homely atmosphere. Highly recommended!",
    rating: 5,
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait",
    name: "James Smith",
    review:
      "The facilities are excellent, and the staff is incredibly supportive. My stay has been truly wonderful.",
    rating: 4,
  },
  {
    image: "https://source.unsplash.com/100x100/?person",
    name: "Emily Davis",
    review:
      "I loved how everything was so well organized here. It truly feels like a second home.",
    rating: 5,
  },
  {
    image: "https://source.unsplash.com/100x100/?human",
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
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          What Our Guests Say
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>

        {/* Slider Section */}
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="rounded-lg shadow-lg"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                {/* Profile Image */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mb-4"
                />

                {/* Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {review.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center items-center mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className="text-yellow-500 text-lg mr-1"
                    />
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <AiFillStar
                      key={`empty-${i}`}
                      className="text-gray-300 text-lg mr-1"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed">
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
