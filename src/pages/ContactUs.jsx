import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/Contact';
import aawazlocation from '../assets/map.png';

const mapImageUrl =
  'https://www.google.com/maps/place/Muktinath+Girls+Hostel/@27.6933617,85.3281371,15z/data=!4m6!3m5!1s0x39eb19a11a4a2c07:0xe98d0534f09bb47!8m2!3d27.6933617!4d85.3281371!16s%2Fg%2F11g2m2500s?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D';

const Contact = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when Contact page is loaded

    const observerOptions = {
      threshold: 0.1, // Trigger animation when 10% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1'; // Make it visible
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
             Welcome to Muktinath Girls Hostel
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-600 to-red-700 opacity-0"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Your home away from home, where comfort meets ambition. Empowering young women to dream,
        achieve, and lead in a supportive and vibrant community. Join us in building a future full
        of possibilities.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={aawazlocation}
              alt="Map"
              className="mx-auto max-w-full h-auto"
            />
          </a>
        </div>
      </div>

      <ContactForm />
      <Footer />

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Media queries for better performance on smaller screens */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem; /* Adjust heading size */
            animation-duration: 0.8s; /* Faster animations */
          }
          p {
            font-size: 1rem; /* Adjust text size */
            animation-duration: 0.8s; /* Faster animations */
          }
          img {
            animation-duration: 0.8s; /* Faster animations */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
