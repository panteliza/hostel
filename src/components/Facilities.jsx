import React, { useEffect, useRef } from "react";
import {
  FaBed,
  FaBath,
  FaWifi,
  FaCouch,
  FaSnowflake,
  FaPlug,
  FaChair,
} from "react-icons/fa";
import { MdLocalLaundryService, MdFoodBank } from "react-icons/md";

const Facilities = () => {
  const facilityRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    facilityRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      facilityRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  const facilities = [
    { icon: <FaBed size={32} className="text-yellow-600" />, title: "Spacious Rooms", description: "Spacious and naturally well-lit rooms." },
    { icon: <FaSnowflake size={32} className="text-yellow-600" />, title: "Air-conditioner", description: "Rooms equipped with air-conditioners." },
    { icon: <FaWifi size={32} className="text-yellow-600" />, title: "Internet", description: "Free high-speed WiFi available." },
    { icon: <FaCouch size={32} className="text-yellow-600" />, title: "Lobby Area", description: "Spacious communal lobby areas." },
    { icon: <MdFoodBank size={32} className="text-yellow-600" />, title: "Food", description: "Nutritious meals provided daily." },
    { icon: <MdLocalLaundryService size={32} className="text-yellow-600" />, title: "Laundry Service", description: "Laundry facilities available." },
    { icon: <FaChair size={32} className="text-yellow-600" />, title: "Study Table", description: "Each room has a study table." },
    { icon: <FaPlug size={32} className="text-yellow-600" />, title: "Power Backup", description: "24/7 power backup available." },
    { icon: <FaBath size={32} className="text-yellow-600" />, title: "Geyser Services", description: "Hot water available through geysers." },
  ];

  return (
    <section className="py-12 bg-gray-50">
      {/* Heading Section */}
      <div
        ref={headingRef}
        className="text-center mb-8 opacity-0"
        style={{
          animation: "zoomIn 1s ease-out forwards",
          animationPlayState: "paused",
        }}
      >
        <h2 className="text-3xl font-bold text-blue-900 leading-tight animate-headingGlow">
          Our Facilities
        </h2>
        <p className="text-gray-600">Premium amenities for a comfortable stay</p>
      </div>

      {/* Facilities Grid */}
      <div className="grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {facilities.map((facility, index) => (
          <div
            key={index}
            ref={(el) => (facilityRefs.current[index] = el)}
            className="bg-yellow-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
            style={{
              animation: `${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"} 1s ease-out forwards`,
              animationPlayState: "paused",
              opacity: 0,
            }}
          >
            {/* Animated Icon */}
            <div
              className="mb-4"
              style={{
                animation: "bounceIn 1.2s ease-out",
                animationDelay: `${0.3 * index}s`,
              }}
            >
              {facility.icon}
            </div>
            <h3 className="font-semibold text-lg text-yellow-700">{facility.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{facility.description}</p>
          </div>
        ))}
      </div>

      {/* Inline CSS for animations */}
      <style>{`
        /* Heading Animation */
        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes headingGlow {
          0% { text-shadow: 0 0 5px #4a90e2; }
          50% { text-shadow: 0 0 15px #4a90e2; }
          100% { text-shadow: 0 0 5px #4a90e2; }
        }

        /* Icon Bounce Animation */
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3) translateY(-50px); }
          50% { opacity: 0.7; transform: scale(1.1) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Existing Animations */
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* Media Query for Small Screens */
        @media (max-width: 768px) {
          .opacity-0 {
            animation-play-state: running !important;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Facilities;
