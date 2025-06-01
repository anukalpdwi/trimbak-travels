import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Trimbak Travels</h3>
            <p className="mb-4 text-gray-300">
              Your trusted travel partner for exploring Trimbakeshwar, Nashik, and beyond. We offer personalized tour packages, taxi services, and unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/tours" className="text-gray-300 hover:text-white transition-colors duration-300">Tour Packages</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tour Packages</h3>
            <ul className="space-y-2">
              <li><Link to="/tours?category=spiritual" className="text-gray-300 hover:text-white transition-colors duration-300">Spiritual Tours</Link></li>
              <li><Link to="/tours?category=adventure" className="text-gray-300 hover:text-white transition-colors duration-300">Adventure Tours</Link></li>
              <li><Link to="/tours?category=cultural" className="text-gray-300 hover:text-white transition-colors duration-300">Cultural Tours</Link></li>
              <li><Link to="/tours?category=leisure" className="text-gray-300 hover:text-white transition-colors duration-300">Leisure Tours</Link></li>
              <li><Link to="/tours?category=custom" className="text-gray-300 hover:text-white transition-colors duration-300">Custom Tours</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-secondary-400" />
                <span className="text-gray-300">Near Trimbakeshwar Temple, Trimbak Road, Nashik, Maharashtra 422212</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-secondary-400" />
                <a href="tel:+918587921397" className="text-gray-300 hover:text-white transition-colors duration-300">+91 85879 21397</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-secondary-400" />
                <a href="mailto:info@trimbaktravels.com" className="text-gray-300 hover:text-white transition-colors duration-300">info@trimbaktravels.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Trimbak Travels. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms & Conditions</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;