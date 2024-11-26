import React from "react";
import dreamer from '../assets/girl-with-book.jpg'

const ImageWithDescription = () => {
  return (
    <section className=" py-8 ">
      <div className="max-w-4xl mx-auto">
        {/* Image Section */}
        <div className="mb-6">
          <img
            src={dreamer}
            alt="Sample"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">About Witty</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Witty Hostels is designed for independent thinkers, achievers, and dreamers. Our hostel
            provides a safe and nurturing environment for students, enabling them to thrive as
            leaders, path-breakers, and successful individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImageWithDescription;
