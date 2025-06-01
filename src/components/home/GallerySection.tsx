import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '../../data';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Only show 6 images in the homepage gallery
  const displayImages = galleryImages.slice(0, 6);
  
  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of stunning photos from various destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayImages.map((image) => (
            <div 
              key={image.id} 
              className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.imageUrl} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-500 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/gallery" 
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/80 transition-colors duration-300"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <div className="max-w-4xl w-full">
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.imageUrl} 
              alt={galleryImages.find(img => img.id === selectedImage)?.title} 
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">
                {galleryImages.find(img => img.id === selectedImage)?.title}
              </h3>
              <p className="text-gray-300">
                {galleryImages.find(img => img.id === selectedImage)?.location}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((img) => (
              <button
                key={img.id}
                className={`w-2 h-2 rounded-full ${
                  selectedImage === img.id ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => setSelectedImage(img.id)}
                aria-label={`View ${img.title}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;