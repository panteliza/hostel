import React from "react";
import facebookImg from "../assets/facebook.png"; // Replace with actual image paths

import whatsappImg from "../assets/whatsapp.png";
import linkedinImg from "../assets/googlemap.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
            <p>E-11-A, Block E, East of Kailash, New Delhi - 110065</p>
          </div>
          <div className="flex items-start gap-2 mb-4">
            <FaPhoneAlt size={18} className="mt-1" />
            <p>+91 98100 41641, +91 99101 00122</p>
          </div>
          <div className="flex items-start gap-2">
            <FaEnvelope size={18} className="mt-1" />
            <p>lambahousedelhi@gmail.com</p>
          </div>
        </div>

        {/* Column 3 - Social Media Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          {/* Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:scale-110"
          >
            <img src={facebookImg} alt="Facebook" className="w-10 h-10 rounded-full" />
          </a>

      
          {/* WhatsApp */}
          <a
            href="https://wa.me/9810041641"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:scale-110"
          >
            <img src={whatsappImg} alt="WhatsApp" className="w-10 h-10 rounded-full" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-500 transform hover:scale-110"
          >
            <img src={linkedinImg} alt="LinkedIn" className="w-10 h-10 rounded-full" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm text-gray-200">
        <span>
          &copy; 2024 <span className="font-semibold">Muktinath Girls Hostel</span>. Developed & Designed by{" "}
          <span className="font-semibold">Clouds Nepal Web Pvt. Ltd.</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
