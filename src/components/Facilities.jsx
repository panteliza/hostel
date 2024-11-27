import React, { useEffect, useRef, useState } from "react";
import {
  FaBed,
  FaBath,
  FaWifi,
  FaCouch,
  FaSnowflake,
  FaPlug,
  FaChair,
} from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { MdLocalLaundryService, MdFoodBank } from "react-icons/md";

const Facilities = () => {
  const [showAll, setShowAll] = useState(false); // Toggles "View More / View Less" on mobile screens
  const [isMobile, setIsMobile] = useState(false); // Detects if the screen is mobile
  const facilityRefs = useRef([]);

  useEffect(() => {
    // Detect screen size to determine if the layout is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile screens are <= 768px
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
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

    facilityRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      facilityRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const facilities = [
    { icon: <FaBed size={32} className="text-yellow-600" />, title: "Spacious Rooms", description: "Spacious and naturally well-lit rooms." },
    { icon: <FaBath size={32} className="text-yellow-600" />, title: "Attached Bathrooms", description: "Rooms have attached bathrooms." },
    { icon: <FaSnowflake size={32} className="text-yellow-600" />, title: "Air-conditioner", description: "Rooms equipped with air-conditioners." },
    { icon: <BiFridge size={32} className="text-yellow-600" />, title: "Refrigerator", description: "Each room has a refrigerator." },
    { icon: <FaWifi size={32} className="text-yellow-600" />, title: "Internet", description: "Free high-speed WiFi available." },
    { icon: <FaCouch size={32} className="text-yellow-600" />, title: "Lobby Area", description: "Spacious communal lobby areas." },
    { icon: <MdFoodBank size={32} className="text-yellow-600" />, title: "Food", description: "Nutritious meals provided daily." },
    { icon: <MdLocalLaundryService size={32} className="text-yellow-600" />, title: "Laundry Service", description: "Laundry facilities available." },
    { icon: <FaChair size={32} className="text-yellow-600" />, title: "Study Table", description: "Each room has a study table." },
    { icon: <FaPlug size={32} className="text-yellow-600" />, title: "Power Backup", description: "24/7 power backup available." },
  ];

  const displayedFacilities = isMobile && !showAll ? facilities.slice(0, 6) : facilities;

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Our Facilities</h2>
        <p className="text-gray-600">Premium amenities for a comfortable stay</p>
      </div>
      <div className="grid gap-6 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {displayedFacilities.map((facility, index) => (
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
            <div className="mb-4">{facility.icon}</div>
            <h3 className="font-semibold text-lg text-yellow-700">{facility.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{facility.description}</p>
          </div>
        ))}
      </div>

      {/* View More / View Less Button - Visible only on mobile */}
      {isMobile && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}

      {/* Inline CSS for animations */}
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

export default Facilities;
