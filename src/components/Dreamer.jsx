import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import dreamer1 from "../assets/girl-with-book.jpg"; // Replace with your image paths
import dreamer2 from "../assets/girls.jpeg";  // Replace with your image paths

const ImageWithDescription = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger animation when 30% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        } else {
          entry.target.style.animationPlayState = "paused";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        {/* Slider Section */}
    

        {/* Description Section */}
        <div
  ref={textRef}
  className="text-center md:text-left opacity-0 max-w-4xl mx-auto px-4 md:px-0"
  style={{
    animation: "fadeInRight 0.8s ease-out forwards",
    animationPlayState: "paused",
  }}
>
  {/* Heading with animation */}
  <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
    About Muktinath Girls Hostel
  </h2>

  {/* Paragraph with justified text */}
  <p className="text-[12px] md:text-lg lg:text-xl leading-relaxed tracking-wide text-justify text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-600 to-purple-700">
    Muktinath Girls Hostel, strategically located in the heart of Anamnagar,
    Kathmandu, offers more than just a place to stay—it provides a community
    where dreams are nurtured, and futures are built. Tailored to cater to the
    needs of independent thinkers, high-achievers, and visionary dreamers, our
    hostel ensures a secure and empowering environment for young women.
    <br />
    <br />
    With state-of-the-art facilities, a supportive management team, and a focus
    on personal and academic growth, we go beyond conventional lodging.
    Muktinath Girls Hostel creates a space where students thrive as leaders,
    innovators, and pioneers in their respective fields. Join us in
    experiencing a harmonious blend of comfort, inspiration, and achievement,
    designed to elevate the journey of every resident.
  </p>
</div>

      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ImageWithDescription;
