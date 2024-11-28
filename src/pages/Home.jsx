import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import Dreamer from '../components/Dreamer';
import Reviews from '../components/Reviews';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center overflow-hidden">
      <Navbar />
      <Slider />
      <Dreamer />
      <div className="w-full flex-shrink-0 mt-0">
        <Facilities />
      </div>
      <div className="w-full flex-shrink-0 mt-0">
        <Gallery />
      </div>
      <div className="w-full flex-shrink-0 mt-0">
        <Contact />
      </div>
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
