import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#384692] text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">Muktinath Girls Hostel</h2>
          <p className="text-sm">Premium girls' hostel in Kathmandu</p>
        </div>

        {/* Column 2 */}
        <div>
          <div className="flex items-start gap-2 mb-4">
            <FaMapMarkerAlt size={18} className="mt-1" />
            <div>
              <p>E-11-A, Block E, East of Kailash, New Delhi - 110065</p>
              <p className="text-sm">Landmark: Croma Store (1 min walk from Kailash Colony metro station)</p>
            </div>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <FaPhoneAlt size={18} className="mt-1" />
            <div>
              <p>+91 98100 41641</p>
              <p>+91 99101 00122</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaEnvelope size={18} className="mt-1" />
            <p>lambahousedelhi@gmail.com</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="https://wa.me/9810041641"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm text-gray-200">
        © 2024 Lamba House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
