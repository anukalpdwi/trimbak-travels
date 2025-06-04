import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Nashik Travels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            About
          </Link>
          <Link to="/tours" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Tours
          </Link>
          <Link to="/services" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Services
          </Link>
          <Link to="/destinations" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Destinations
          </Link>
          <Link to="/gallery" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Gallery
          </Link>
          <Link to="/contact" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'} hover:text-primary-500`}>
            Contact
          </Link>
        </nav>

        {/* Call Button */}
        <a 
          href="tel:+918587921397" 
          className="hidden md:flex items-center px-4 py-2 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors duration-300"
        >
          <Phone size={18} className="mr-2" />
          <span>Call Us Now</span>
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? 
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} /> : 
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/tours" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Tours
              </Link>
              <Link to="/services" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Services
              </Link>
              <Link to="/destinations" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Destinations
              </Link>
              <Link to="/gallery" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link to="/contact" className="nav-link text-gray-800 hover:text-primary-500 py-2" onClick={toggleMenu}>
                Contact
              </Link>
              <a 
                href="tel:+919876543210" 
                className="flex items-center px-4 py-2 bg-secondary-500 text-white rounded-full hover:bg-secondary-600 transition-colors duration-300 w-fit"
                onClick={toggleMenu}
              >
                <Phone size={18} className="mr-2" />
                <span>Call Us Now</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;