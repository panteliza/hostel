import React from 'react';
import Navbar from '../components/Navbar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import Dreamer from '../components/Dreamer';

import Reviews from '../components/Reviews';
const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center  overflow-hidden">
      <Navbar />
      <Dreamer/>
      <div className="w-full flex-shrink-0 mt-0">
        <Facilities />
      </div>
     
      <Reviews/>
      <Footer/>
    </div>
     );
};
export default Home;
