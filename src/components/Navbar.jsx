import React, { useState } from "react";
import logo from "../assets/logo.png"; // Replace with the actual path to your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Radiant Girls Hostel Logo" className="h-[90px] w-[98px]" /> {/* Increased size */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Muktinath Girls Hostel</h1>
            <p className="text-sm text-gray-500">Best Girls Hostel in Kathmandu</p>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#anamnagar" className="text-gray-800 hover:text-purple-600">
           Facilities
          </a>
          <a href="#putalisadak" className="text-gray-800 hover:text-purple-600">
            Putalisadak Branch
          </a>
          
          <a href="#contact" className="text-gray-800 hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col items-start space-y-2 px-6 py-4 text-sm font-medium">
            <a href="#anamnagar" className="block text-gray-800 hover:text-purple-600">
              Anamnagar Branch
            </a>
            <a href="#putalisadak" className="block text-gray-800 hover:text-purple-600">
              Putalisadak Branch
            </a>
            <a href="#dhobidhara" className="block text-gray-800 hover:text-purple-600">
              Dhobidhara Branch
            </a>
            <a href="#contact" className="block text-gray-800 hover:text-purple-600">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
