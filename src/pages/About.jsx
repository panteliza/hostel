import React from "react";
import HostelImage from "../assets/4.jpeg"; // Ensure this path is correct
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

const About = () => {
  return (
    <div className="w-full flex-shrink-0 overflow-hidden">
      <Navbar />
      <div className=" min-h-screen flex flex-col items-center py-10 animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-slideDown">
          About Us
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden animate-zoomIn">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 group relative">
            <img
              src={HostelImage}
              alt="Hostel"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <p className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Muktinath Girls Hostel: Where Dreams Begin
            </p>
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-white animate-fadeIn delay-300">
              Welcome to Muktinath Girls Hostel
            </h2>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent animate-gradientReveal">
              Nestled in the vibrant heart of Anamnagar, Kathmandu, Muktinath
              Girls Hostel offers more than just a residence—it’s a sanctuary
              for growth, empowerment, and achievement. Designed for independent
              thinkers, high achievers, and visionary dreamers, our hostel
              provides an environment where futures are built, and dreams come
              alive.
            </p>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent animate-gradientReveal delay-500">
              Our state-of-the-art facilities, coupled with a dedicated and
              supportive management team, ensure the perfect blend of comfort
              and productivity. Whether it’s academics, personal growth, or
              career aspirations, we prioritize creating a nurturing space where
              young women can thrive as leaders, innovators, and pioneers in
              their fields.
            </p>
            <p className="text-lg leading-relaxed text-justify bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent animate-gradientReveal delay-700">
              Join us at Muktinath Girls Hostel, where inspiration meets comfort,
              and together, we pave the way to a brighter future.
            </p>
            
          </div>
        </div>
      </div>
      <Reviews />
      <Footer />
      <style>{`
        /* Fade-in effect */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Slide-down effect */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Zoom-in effect */
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

        /* Bounce-in effect for buttons */
        @keyframes bounceIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
          }
        }

        /* Gradient shimmer effect */
        @keyframes gradientCycle {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Gradient reveal animation */
        @keyframes gradientReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        /* Classes */
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 1.5s ease-out forwards;
        }

        .animate-zoomIn {
          animation: zoomIn 1.5s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 1s ease-out forwards;
        }

        .animate-gradientReveal {
          animation: gradientReveal 1.2s ease-in-out forwards;
          display: inline-block;
          transform-origin: bottom;
          background-size: 400% 400%;
          animation: gradientCycle 6s ease infinite;
        }

        .animate-gradientReveal.delay-500 {
          animation-delay: 0.5s;
        }

        .animate-gradientReveal.delay-700 {
          animation-delay: 0.7s;
        }

        /* Darker gradients */
        .bg-gradient-to-r {
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  );
};

export default About;
