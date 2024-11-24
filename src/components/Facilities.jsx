import React from "react";
import { FaBed, FaBath, FaWifi, FaCouch, FaSnowflake } from "react-icons/fa";
import { BiFridge } from "react-icons/bi";

const Facilities = () => {
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
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900">Our Facilities</h2>
        <p className="text-gray-600">Premium amenities for a comfortable stay</p>
      </div>
      <div className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-yellow-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="mb-4">{facility.icon}</div>
            <h3 className="font-semibold text-lg text-yellow-700">{facility.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
