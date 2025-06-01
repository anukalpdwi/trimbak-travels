import React from 'react';
import { Car, CarTaxiFront as Taxi, Map, Church } from 'lucide-react';
import { services } from '../../data';
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  // Map service icons
  const getIcon = (iconName: string, size = 40) => {
    switch (iconName) {
      case 'car':
        return <Car size={size} className="text-primary-500" />;
      case 'taxi':
        return <Taxi size={size} className="text-primary-500" />;
      case 'map':
        return <Map size={size} className="text-primary-500" />;
      case 'church':
        return <Church size={size} className="text-primary-500" />;
      default:
        return <Car size={size} className="text-primary-500" />;
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of services to make your travel experience comfortable, convenient, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center group"
            >
              <div className="mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary-500 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;