import React, { useEffect, useRef } from "react";
import dreamer from "../assets/girl-with-book.jpg";

const ImageWithDescription = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger animation when 50% of the element is visible
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

    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        {/* Image Section */}
        <div
          ref={imageRef}
          className="mb-6 opacity-0"
          style={{
            animation: "fadeInLeft 1s ease-out forwards",
            animationPlayState: "paused",
          }}
        >
          <img
            src={dreamer}
            alt="Girl reading a book"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description Section */}
        <div
          ref={textRef}
          className="text-center md:text-left opacity-0"
          style={{
            animation: "fadeInRight 1s ease-out forwards",
            animationPlayState: "paused",
          }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            About Muktinath Girls Hostel
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Muktinath Girls Hostel, strategically located in the heart of
            Anamnagar, Kathmandu, offers more than just a place to stay—it
            provides a community where dreams are nurtured, and futures are
            built. Tailored to cater to the needs of independent thinkers,
            high-achievers, and visionary dreamers, our hostel ensures a secure
            and empowering environment for young women.
            <br />
            <br />
            With state-of-the-art facilities, a supportive management team, and
            a focus on personal and academic growth, we go beyond conventional
            lodging. Muktinath Girls Hostel creates a space where students
            thrive as leaders, innovators, and pioneers in their respective
            fields. Join us in experiencing a harmonious blend of comfort,
            inspiration, and achievement, designed to elevate the journey of
            every resident.
          </p>
        </div>
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default ImageWithDescription;
