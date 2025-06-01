import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/bg img.png" 
                alt="About Trimbak Travels" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500">20+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Trimbak Travels</h2>
              <div className="w-20 h-1 bg-secondary-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Trimbak Travels, your trusted travel partner based in the spiritual town of Trimbakeshwar, Nashik. For over two decades, we've been providing exceptional travel experiences to visitors exploring the cultural and spiritual heritage of Maharashtra and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced travel experts specializes in creating personalized itineraries that cater to your specific needs and preferences, ensuring that every journey with us is memorable and hassle-free.
              </p>
            </div>
            
            {/* Why Choose Us */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <Award size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Local experts with extensive knowledge of destinations.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <Users size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Service</h3>
                  <p className="text-gray-600">Tailored experiences to match your preferences.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <Clock size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock assistance throughout your journey.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-full mr-4">
                  <ThumbsUp size={24} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Best value for money without compromising quality.</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;