import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  "/bg img.png", // Place this image in your public folder
  "https://i0.wp.com/www.easeindiatrip.com/blog/wp-content/uploads/2025/01/Maharshtra-Trimbakeshwar-temple-02.jpg?fit=1200%2C675&ssl=1",
  "https://images.yourstory.com/cs/2/598ed270c10a11eeaef14be6ff40ae87/2-1706887186380.png?fm=png&auto=format&w=800&blur=500",
  "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/06/Anjaneri-Hills-to-Get-a-6-km-Ropeway-e1687156488498.webp?fit=1200%2C900&ssl=1"
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url('${images[current]}')`,
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Best outstation taxi service in Trimbakeshwar,<span className="text-secondary-400"> Nashik 🚗</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Experience the perfect blend of spirituality, culture, and natural beauty with our customized tour packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/918587921397"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center sm:justify-start"
              >
                Book Now
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a 
                href="tel:+918587921397"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-3 px-6 rounded-full transition duration-300 flex items-center justify-center sm:justify-start"
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="animate-bounce w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;