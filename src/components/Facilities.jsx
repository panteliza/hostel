import React, { useEffect, useRef } from "react";
import { FaBed, FaBath, FaWifi, FaCouch, FaSnowflake, FaPlug, FaShoePrints, FaLock, FaChair } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";
import { MdLocalLaundryService, MdFoodBank, MdCameraAlt, MdBalcony } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const Facilities = () => {
  const facilityRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger animation when 50% of the element is in view
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
    {
      icon: <FaBed size={32} className="text-yellow-600" />,
      title: "Spacious well-lit Rooms",
      description: "All rooms are spacious with lots of natural light",
    },
    {
      icon: <FaBath size={32} className="text-yellow-600" />,
      title: "Attached Bathrooms",
      description: "All rooms have attached bathrooms with geysers & exhaust fans",
    },
    {
      icon: <FaSnowflake size={32} className="text-yellow-600" />,
      title: "Air-conditioner",
      description: "Each room is equipped with a brand new split/window AC",
    },
    {
      icon: <BiFridge size={32} className="text-yellow-600" />,
      title: "Refrigerator",
      description: "Each room has a sufficiently sized new refrigerator",
    },
    {
      icon: <FaWifi size={32} className="text-yellow-600" />,
      title: "Internet",
      description: "Free & unlimited WiFi",
    },
    {
      icon: <FaCouch size={32} className="text-yellow-600" />,
      title: "Lobby Area",
      description: "Each floor has a large & open communal lobby area with sitting",
    },
    {
      icon: <MdFoodBank size={32} className="text-yellow-600" />,
      title: "Food",
      description: "Delicious home-cooked meals (breakfast, lunch & dinner)",
    },
    {
      icon: <MdLocalLaundryService size={32} className="text-yellow-600" />,
      title: "Laundry",
      description: "In-house laundry & ironing services",
    },
    {
      icon: <FaChair size={32} className="text-yellow-600" />,
      title: "Study Table",
      description: "Individual designated study table with a chair adjacent to the bed",
    },
    {
      icon: <FaPlug size={32} className="text-yellow-600" />,
      title: "Power Backup",
      description: "100% power backup round the clock",
    },
    {
      icon: <FaLock size={32} className="text-yellow-600" />,
      title: "Storage",
      description: "Individual box-bed with large cupboard with locks for storage",
    },
    {
      icon: <FaShoePrints size={32} className="text-yellow-600" />,
      title: "Shoe Cabinet",
      description: "Each room has a large shoe cabinet in addition to the cupboard",
    },
    {
      icon: <MdCameraAlt size={32} className="text-yellow-600" />,
      title: "CCTV Surveillance",
      description: "All common areas are under 24x7 CCTV surveillance",
    },
    {
      icon: <MdBalcony size={32} className="text-yellow-600" />,
      title: "Terrace & Balcony",
      description: "Access to a large open terrace & front balcony",
    },
    {
      icon: <AiOutlineUser size={32} className="text-yellow-600" />,
      title: "Facility Manager",
      description: "Experienced in-house warden for supervision",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Our Facilities</h2>
        <p className="text-gray-600">Premium amenities for a comfortable stay</p>
      </div>
      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
            <div className="mb-4">{facility.icon}</div>
            <h3 className="font-semibold text-lg text-yellow-700">{facility.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{facility.description}</p>
          </div>
        ))}
      </div>

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
