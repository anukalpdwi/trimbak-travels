import React from 'react';
import ServicesSection from '../components/home/ServicesSection';
import CabServices from '../components/home/CabServices';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <ServicesSection />
      <CabServices />
    </div>
  );
};

export default Services;