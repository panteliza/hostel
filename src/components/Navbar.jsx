import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import img1 from "../assets/facebook.png"; // Replace with your actual path
import img2 from "../assets/googlemap.png"; // Replace with your actual path
import img3 from "../assets/whatsapp.png"; // Replace with your actual path

const navLinks = [
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact us" },
];

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
        {/* Logo and Title Section */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Muktinath Girls Hostel Logo" className="h-[70px] w-[80px]" />
          <div>
            <h1 className="text-[12px] sm:text-2xl font-bold text-gray-900">
              Muktinath Girls Hostel
            </h1>
            <p className="text-[8px] sm:text-sm text-gray-500">
              Best Girls Hostel in Kathmandu
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-lg">
          <Link to="/" className="text-[#099BA4] font-medium hover:text-[#038A58]">
            Home
          </Link>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="text-gray-700 hover:text-[#07A2BB] transition-all"
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-4">
            <img src={img1} alt="Facebook Icon" className="h-[40px] w-[40px] object-contain" />
            <img src={img2} alt="Google Map Icon" className="h-[40px] w-[40px] object-contain" />
            <img src={img3} alt="WhatsApp Icon" className="h-[40px] w-[40px] object-contain" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <HiOutlineMenuAlt2 className="text-3xl lg:hidden cursor-pointer" onClick={toggleSidebar} />

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed top-0 left-0 w-[300px] h-full bg-white shadow-lg z-[2] flex flex-col">
            {/* Only Logo in Mobile Sidebar */}
            <div className="flex justify-between items-center px-6 py-4">
              <img src={logo} alt="Muktinath Girls Hostel Logo" className="h-[80px] w-[90px]" />
              <MdOutlineClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
            </div>
            <Link
              to="/"
              className="text-[#099BA4] font-medium py-3 px-6 border-b border-gray-200 hover:bg-gray-100"
              onClick={toggleSidebar}
            >
              Home
            </Link>
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="py-3 px-6 border-b border-gray-200 hover:bg-[#07A2BB]"
                onClick={toggleSidebar}
              >
                {label}
              </Link>
            ))}
            <div className="flex justify-center gap-4 mt-4 px-6">
              <img src={img1} alt="Facebook Icon" className="h-[40px] w-[40px] object-contain" />
              <img src={img2} alt="Google Map Icon" className="h-[40px] w-[40px] object-contain" />
              <img src={img3} alt="WhatsApp Icon" className="h-[40px] w-[40px] object-contain" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
