import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, IndianRupee, Check } from 'lucide-react';
import { tourPackages } from '../../data';

const FeaturedTours: React.FC = () => {
  // Filter featured tour packages
  const featuredTours = tourPackages.filter(tour => tour.featured);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Tour Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular tour packages designed to provide you with the best travel experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.imageUrl} 
                  alt={tour.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-secondary-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  {tour.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-primary-600">
                    <Clock size={16} className="mr-1" />
                    <span>{tour.duration}</span>
                  </div>
                  {/* <div className="text-secondary-600 font-bold">
                    <div className="flex items-center">
                      <IndianRupee size={16} className="mr-1" />
                      <span>{tour.price.split(' ')[0]}</span>
                    </div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div> */}
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {tour.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-1" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={`/tours/${tour.id}`} 
                  className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 rounded-lg transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/tours" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;