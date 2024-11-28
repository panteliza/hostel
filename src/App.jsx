import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling

import Home from './pages/Home';



import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/ContactUs';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
        
          
          <Route path="/" element={<Home />} />
          <Route path="/muktinath" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* WhatsApp button as an image */}
        <a
          href="https://wa.me/9779851102512"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <img src={whatsappImage} alt="WhatsApp" />
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
