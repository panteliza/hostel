import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Add this for styling

import Home from './pages/Home';



import whatsappImage from './assets/whatsapp.png'; // Import WhatsApp image


const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Routes for different pages */}
        <Routes>
        
          
          <Route path="/" element={<Home />} />
          <Route path="/aawaz" element={<Home />} />
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
