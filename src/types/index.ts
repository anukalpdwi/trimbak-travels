export interface Destination {
  id: number;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  price: string;
  duration: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

export interface TourPackage {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
  category: string;
  highlights: string[];
  featured?: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  title: string;
  location: string;
}