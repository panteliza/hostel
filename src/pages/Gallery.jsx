import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import Image5 from "../assets/5.jpeg";
import Image6 from "../assets/6.jpeg";
import Image7 from "../assets/7.jpeg";
import Image8 from "../assets/8 (2).jpeg";
import Reviews from "../components/Reviews";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Gallery = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full flex-shrink-0">
      <Navbar />
      <div className="min-h-screen py-10">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-8 animate-fadeIn">
          Hostel Gallery
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg animate-zoomIn delay-200"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover transition-transform duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      <Reviews />
      <Footer />
      <style>{`
        /* Fade-in effect for the title */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Zoom-in effect for images */
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1s ease-out forwards;
        }

        .animate-zoomIn.delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
