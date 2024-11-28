import React, { useEffect, useRef } from "react";
import image1 from "../assets/8 (1).jpeg"; // Replace with your actual paths
import image2 from "../assets/1.jpeg"; // Replace with your actual paths
import image3 from "../assets/2.jpeg"; // Add your images here
import image4 from "../assets/3.jpeg";
import image5 from "../assets/4.jpeg";
import image6 from "../assets/5.jpeg";
import image7 from "../assets/6.jpeg";
import image8 from "../assets/7.jpeg";

const images = [
  { src: image1, alt: "Muktinath Hostel - Image 1" },
  { src: image2, alt: "Muktinath Hostel - Image 2" },
  { src: image3, alt: "Muktinath Hostel - Image 3" },
  { src: image4, alt: "Muktinath Hostel - Image 4" },
  { src: image5, alt: "Muktinath Hostel - Image 5" },
  { src: image6, alt: "Muktinath Hostel - Image 6" },
  { src: image7, alt: "Muktinath Hostel - Image 7" },
  { src: image8, alt: "Muktinath Hostel - Image 8" },
];

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Trigger animation when 20% of the element is visible
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (galleryRef.current) {
      Array.from(galleryRef.current.children).forEach((child) => observer.observe(child));
    }

    return () => {
      if (galleryRef.current) {
        Array.from(galleryRef.current.children).forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <section className="py-8">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
        Muktinath Hostel Gallery
      </h2>
      <div
        ref={galleryRef}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-6xl mx-auto px-4"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md opacity-0"
            style={{
              animation: `fadeInUp 0.8s ease-out forwards`,
              animationDelay: `${index * 0.2}s`, // Delay animation for each image
              animationPlayState: "paused",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[150px] sm:h-[200px] md:h-[250px] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
