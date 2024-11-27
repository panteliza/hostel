import React from "react";
import facebookImg from "../assets/facebook.png"; // Replace with actual image paths
import whatsappImg from "../assets/whatsapp.png";
import linkedinImg from "../assets/googlemap.png";
import muktinathLogo from "../assets/logo.png"; // Replace with the actual logo path
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6c7ee7] text-white py-12 w-full flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-3">
          {/* Muktinath Logo */}
          <img
            src={muktinathLogo}
            alt="Muktinath Logo"
            className="w-[150px] h-auto mb-4"
          />
          <h2 className="text-2xl font-bold">Muktinath Girls Hostel</h2>
          <p className="text-sm">Premium girls' hostel in Kathmandu</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-4">
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt size={18} className="mt-1" />
            <p>
              Anamnagar, Kathmandu, Nepal
              <br />
              <span className="text-sm">Way to Liberty College</span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt size={18} className="mt-1" />
            <p>+977 9851102512</p>
          </div>
          <div className="flex items-start gap-3">
            <FaEnvelope size={18} className="mt-1" />
            <p>muktinathgirlshostel@gmail.com</p>
          </div>
        </div>

        {/* Column 3 - Social Media Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img
                src={facebookImg}
                alt="Facebook"
                className="w-10 h-10 rounded-full"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/9810041641"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img
                src={whatsappImg}
                alt="WhatsApp"
                className="w-10 h-10 rounded-full"
              />
            </a>

            {/* Google Maps */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-500 transform hover:scale-110"
            >
              <img
                src={linkedinImg}
                alt="Google Maps"
                className="w-10 h-10 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm text-gray-200">
        <span>
          &copy; 2024 <span className="font-semibold">Muktinath Girls Hostel</span>. Developed & Designed by{" "}
          <span className="font-semibold">Clouds Nepal Web Pvt. Ltd.</span>
        </span>
        
      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
           .glitter-effect-text {
    position: relative;
    display: inline-block;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    background-image: linear-gradient(90deg, #e5e5e5, #f0f0f0, #e5e5e5);
    background-size: 200% 100%;
    animation: glitter 1.5s infinite linear;
    -webkit-background-clip: text; /* Ensure gradient only applies to text */
    background-clip: text;
  }

  /* Create the glittering animation */
  @keyframes glitter {
    0% {
      background-position: 200% 0;
    }
    50% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  /* Optional: Soft white glow for moon-like shine */
  .glitter-effect-text {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.3);
  }
      `}</style>
      </div>
    </footer>
  );
};

export default Footer;
