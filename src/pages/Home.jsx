import React from 'react';
import Navbar from '../components/Navbar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import Dreamer from '../components/Dreamer';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
const Home = () => {
  return (
    <div className="w-full min-h-screen  ">
      <Navbar />
      <Dreamer/>
      <Facilities/>
      <Services/>
      <Reviews/>
      <Footer/>
    </div>
     );
};
export default Home;
