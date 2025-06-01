import React from 'react';
import { Car } from 'lucide-react';
import { cabServices } from '../../data';

const CabServices: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All India Cab Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Travel anywhere in India with our comfortable and reliable cab services. Fixed rates, experienced drivers, and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={service.imageUrl} 
                  alt={service.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Car className="text-primary-500 mr-2" size={24} />
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-primary-600 font-semibold">Starting from {service.price}</span> */}
                  <a 
                    href="tel:+918587921397"
                    className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors duration-300"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabServices;