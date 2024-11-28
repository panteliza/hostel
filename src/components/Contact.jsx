import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const refs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1'; // Ensure the element is visible
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs]);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-4">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Location Box */}
        <div
          ref={refs[0]}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInLeft 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4 shiver-icon transition duration-300 hover:text-blue-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Our Location
          </h3>
          <p className="text-center text-gray-700">Anamnagar, Kathmandu</p>
        </div>

        {/* Contact Box */}
        <div
          ref={refs[1]}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInRight 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaPhoneAlt className="text-blue-500 text-4xl mb-4 shiver-icon transition duration-300 hover:text-blue-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Our Contact
          </h3>
          <p className="text-center text-gray-700">+977 9851102512</p>
        </div>

        {/* Mail Box */}
        <div
          ref={refs[2]}
          className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg transform opacity-0 transition-opacity duration-700"
          style={{
            animation: 'fadeInLeft 1.2s ease-out forwards',
            animationPlayState: 'paused',
          }}
        >
          <FaEnvelope className="text-blue-500 text-4xl mb-4 shiver-icon transition duration-300 hover:text-blue-800" />
          <h3 className="font-bold sm:text-[20px] text-[18px] text-gray-800 mb-2">
            Mail Us
          </h3>
          <p className="text-center text-gray-700">muktinathgirlshostel@gmail.com</p>
        </div>
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* Stronger Shiver effect for icons */
        @keyframes shiver {
          0% { transform: translate(0, 0) rotate(0); }
          25% { transform: translate(-3px, 3px) rotate(-1deg); }
          50% { transform: translate(3px, -3px) rotate(1deg); }
          75% { transform: translate(-3px, -3px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0); }
        }

        .shiver-icon {
          animation: shiver 1s infinite ease-in-out; /* Faster and more noticeable shiver effect */
        }

        /* Media queries for responsive adjustments */
        @media (max-width: 768px) {
          .transform {
            animation-duration: 0.8s; /* Faster animations on smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
