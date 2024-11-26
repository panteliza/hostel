import React from 'react';
import Navbar from '../components/Navbar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
import Dreamer from '../components/Dreamer';
import Services from '../components/Services';
const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#FFFFFF] ">
      <Navbar />
      <Dreamer/>
      <Facilities/>
      <Services/>
      <Footer/>
    </div>
     );
};
export default Home;
