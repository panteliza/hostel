import React from 'react';
import Navbar from '../components/Navbar';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 ">
      <Navbar />
      <Facilities/>
      <Footer/>
    </div>
     );
};
export default Home;
