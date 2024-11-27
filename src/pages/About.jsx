import React from "react";
import HostelImage from "../assets/4.jpeg"; // Ensure this path is correct
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="w-full flex-shrink-0">
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 animate-fadeIn">
          About Us
        </h1>
        <div className="max-w-7xl w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section - Image */}
          <div className="w-full md:w-1/2">
            <img
              src={HostelImage}
              alt="Hostel"
              className="w-full h-[300px] md:h-auto object-cover transition-transform transform hover:scale-105 duration-500"
            />
          </div>

          {/* Right Section - Description */}
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 animate-fadeIn">
              Welcome to Muktinath Girls Hostel
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed animate-slideIn">
              Nestled in the vibrant heart of Anamnagar, Kathmandu, Muktinath
              Girls Hostel offers more than just a residence—it’s a sanctuary
              for growth, empowerment, and achievement. Designed for independent
              thinkers, high achievers, and visionary dreamers, our hostel
              provides an environment where futures are built, and dreams come
              alive.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed animate-slideIn delay-200">
              Our state-of-the-art facilities, coupled with a dedicated and
              supportive management team, ensure the perfect blend of comfort
              and productivity. Whether it’s academics, personal growth, or
              career aspirations, we prioritize creating a nurturing space where
              young women can thrive as leaders, innovators, and pioneers in
              their fields.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed animate-slideIn delay-400">
              Join us at Muktinath Girls Hostel, where inspiration meets comfort,
              and together, we pave the way to a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
