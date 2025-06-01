import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, IndianRupee } from 'lucide-react';
import { destinations } from '../../data';

const FeaturedDestinations: React.FC = () => {
  // Filter featured destinations
  const featuredDestinations = destinations.filter(destination => destination.featured);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of must-visit destinations in and around Trimbakeshwar, Nashik, and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.imageUrl} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span>{destination.location}</span>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-primary-600">
                    <Calendar size={16} className="mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                  {/* <div className="flex items-center text-secondary-600 font-semibold">
                    <IndianRupee size={16} className="mr-1" />
                    <span>{destination.price}</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/destinations" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;