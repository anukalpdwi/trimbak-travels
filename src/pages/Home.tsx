import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import ServicesSection from '../components/home/ServicesSection';
import CabServices from '../components/home/CabServices';
import FeaturedTours from '../components/home/FeaturedTours';
import Testimonials from '../components/home/Testimonials';
import TravelVlog from '../components/home/TravelVlog';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';
import WhatsAppButton from '../components/common/WhatsAppButton';
import BackToTopButton from '../components/common/BackToTopButton';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <AboutSection />
      <FeaturedDestinations />
      <ServicesSection />
      <CabServices />
      <FeaturedTours />
      <TravelVlog />
      <Testimonials />
      <GallerySection />
      <ContactSection />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
};

export default Home;