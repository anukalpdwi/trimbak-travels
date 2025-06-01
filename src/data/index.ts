import { Destination, Service, Testimonial, TourPackage, FAQ, GalleryImage } from '../types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Trimbakeshwar Temple",
    location: "Trimbakeshwar, Nashik",
    description: "One of the twelve Jyotirlingas of Lord Shiva, located near the source of the Godavari River.",
    imageUrl: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/10/History-of-Trimbakeshwar-Temple.jpg",
    price: "₹1,500",
    duration: "1 Day",
    featured: true
  },
  {
    id: 2,
    name: "Brahmagiri Hills",
    location: "Trimbakeshwar, Nashik",
    description: "Sacred hills believed to be the origin of the Godavari River with beautiful trekking trails.",
    imageUrl: "https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/Brahmagiri-Fort-Cover-Photo-840x425.jpg",
    price: "₹2,000",
    duration: "1 Day",
    featured: true
  },
  {
    id: 3,
    name: "Sula Vineyards",
    location: "Nashik",
    description: "India's premier winery offering vineyard tours, wine tasting, and beautiful resort stays.",
    imageUrl: "https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg",
    price: "₹2,500",
    duration: "1 Day"
  },
  {
    id: 4,
    name: "Anjaneri Hills",
    location: "Near Trimbakeshwar, Nashik",
    description: "The birthplace of Lord Hanuman with a moderate trekking experience.",
    imageUrl: "https://images.pexels.com/photos/2440024/pexels-photo-2440024.jpeg",
    price: "₹1,800",
    duration: "1 Day"
  },
  {
    id: 5,
    name: "Panchavati",
    location: "Nashik",
    description: "Ancient pilgrimage site associated with the Ramayana where Lord Rama stayed during exile.",
    imageUrl: "https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg",
    price: "₹1,500",
    duration: "1 Day"
  },
  {
    id: 6,
    name: "Taj Mahal",
    location: "Agra",
    description: "One of the seven wonders of the world, a monument of incredible beauty.",
    imageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    price: "₹5,500",
    duration: "2 Days"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Car Rental",
    description: "Comfortable, well-maintained vehicles for self-drive or with experienced drivers for exploring at your own pace.",
    icon: "car",
    imageUrl: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
  },
  {
    id: 2,
    title: "Taxi Services",
    description: "Reliable taxi services with local drivers who know the area well, available 24/7 for your convenience.",
    icon: "taxi",
    imageUrl: "https://images.pexels.com/photos/2032/cars-africa-street-transport.jpg"
  },
  {
    id: 3,
    title: "Custom Tours",
    description: "Tailor-made tours designed specifically to your interests, preferences, and schedule.",
    icon: "map",
    imageUrl: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg"
  },
  {
    id: 4,
    title: "Pilgrim Packages",
    description: "Special packages for pilgrims visiting sacred sites in and around Trimbakeshwar and Nashik.",
    icon: "church",
    imageUrl: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Delhi",
    rating: 5,
    comment: "Our family trip to Trimbakeshwar was simply amazing! The guides were knowledgeable and friendly, and the arrangements were perfect.",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    rating: 4,
    comment: "Great experience with their car rental service. Clean cars and professional drivers made our trip comfortable.",
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 3,
    name: "Amit Singh",
    location: "Bangalore",
    rating: 5,
    comment: "The custom tour package they arranged for us was perfect. Every detail was taken care of, and we could just relax and enjoy.",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 4,
    name: "Meera Joshi",
    location: "Pune",
    rating: 5,
    comment: "Our pilgrimage to Trimbakeshwar Temple was made so much easier with their services. Highly recommended for spiritual travelers!",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  }
];

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Trimbakeshwar Spiritual Tour",
    description: "Explore the spiritual heart of Nashik with this guided tour of Trimbakeshwar Temple and surrounding sacred sites.",
    price: "₹3,500 per person",
    duration: "2 Days",
    imageUrl: "https://apnayatra.com/wp-content/uploads/2023/07/Trimbakeshwar-Jyotirling1.jpg",
    category: "Spiritual",
    highlights: [
      "Guided tour of Trimbakeshwar Temple",
      "Visit to Kushavarta Kund",
      "Excursion to Brahmagiri Hills",
      "Traditional vegetarian meals",
      "Comfortable accommodation"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Nashik Wine Tour",
    description: "Indulge in the flavors of India's wine capital with visits to premium vineyards and wine tasting sessions.",
    price: "₹4,500 per person",
    duration: "2 Days",
    imageUrl: "https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg",
    category: "Leisure",
    highlights: [
      "Tours of 3 premium vineyards",
      "Wine tasting sessions",
      "Gourmet meals",
      "Luxury accommodation",
      "Transfer in private vehicle"
    ]
  },
  {
    id: 3,
    title: "Maharashtra Heritage Tour",
    description: "Experience the rich cultural heritage of Maharashtra with visits to historical sites and local cultural experiences.",
    price: "₹18,500 per person",
    duration: "6 Days",
    imageUrl: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg",
    category: "Cultural",
    highlights: [
      "Visit to Ellora and Ajanta Caves",
      "Tour of Trimbakeshwar and Nashik",
      "Excursion to Aurangabad",
      "Traditional Maharashtrian cuisine",
      "Cultural performances",
      "Comfortable accommodation"
    ],
    featured: true
  },
  {
    id: 4,
    title: "Trimbakeshwar Adventure Package",
    description: "Combine spirituality with adventure as you trek through the beautiful hills surrounding Trimbakeshwar.",
    price: "₹5,500 per person",
    duration: "3 Days",
    imageUrl: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
    category: "Adventure",
    highlights: [
      "Trek to Brahmagiri Hills",
      "Visit to Trimbakeshwar Temple",
      "Camping experience",
      "Adventure activities",
      "Experienced guides",
      "All meals included"
    ]
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is the best time to visit Trimbakeshwar?",
    answer: "The best time to visit Trimbakeshwar is between October and March when the weather is pleasant. Avoid the monsoon season (June to September) as heavy rainfall may disrupt travel plans."
  },
  {
    id: 2,
    question: "Do you provide pickup services from Nashik Railway Station?",
    answer: "Yes, we provide pickup and drop services from Nashik Railway Station and Nashik Road Railway Station. We also offer airport transfers from Mumbai Airport."
  },
  {
    id: 3,
    question: "How far is Trimbakeshwar from Nashik city center?",
    answer: "Trimbakeshwar is approximately 28 kilometers from Nashik city center. The drive takes about 45-60 minutes depending on traffic conditions."
  },
  {
    id: 4,
    question: "Do you arrange accommodation as part of your packages?",
    answer: "Yes, all our tour packages include accommodation. We offer options ranging from budget hotels to luxury resorts based on your preference and budget."
  },
  {
    id: 5,
    question: "Can you arrange vegetarian food during the tour?",
    answer: "Absolutely! We cater to all dietary preferences. Vegetarian, Jain, and vegan meal options are available on request."
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    imageUrl: "https://i0.wp.com/www.easeindiatrip.com/blog/wp-content/uploads/2025/01/Maharashra-Trimbakeshwar-temple.jpg?resize=1200%2C674&ssl=1",
    title: "Trimbakeshwar Temple",
    location: "Trimbakeshwar, Nashik"
  },
  {
    id: 2,
    imageUrl: "https://t4.ftcdn.net/jpg/08/17/70/53/360_F_817705347_U12Q2002ovjQoV8GEfdKVs2IBI5J6kH1.jpg",
    title: "Godavari River",
    location: "Nashik"
  },
  {
    id: 3,
    imageUrl: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/06/Anjaneri-Hills-to-Get-a-6-km-Ropeway-e1687156488498.webp?fit=1200%2C900&ssl=1",
    title: "Anjaneri Hills",
    location: "Near Trimbakeshwar"
  },
  {
    id: 4,
    imageUrl: "https://images.yourstory.com/cs/2/598ed270c10a11eeaef14be6ff40ae87/2-1706887186380.png?fm=png&auto=format&w=800&blur=500",
    title: "Vineyards of Nashik",
    location: "Nashik"
  },
  {
    id: 5,
    imageUrl: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg",
    title: "Taj Mahal",
    location: "Agra"
  },
  {
    id: 6,
    imageUrl: "https://res.cloudinary.com/kmadmin/image/upload/v1723636434/kiomoi/Brahmagiri_Hill_3581.jpg",
    title: "Brahmagiri Hills",
    location: "Trimbakeshwar"
  },
  {
    id: 7,
    imageUrl: "https://images.pexels.com/photos/17445919/pexels-photo-17445919/free-photo-of-taj-mahal-and-river-in-agra-india.jpeg",
    title: "Golden Triangle Tour",
    location: "North India"
  },
  {
    id: 8,
    imageUrl: "https://images.pexels.com/photos/5227440/pexels-photo-5227440.jpeg",
    title: "Temple Architecture",
    location: "Maharashtra"
  }
];

export const cabServices = [
  {
    id: 1,
    name: "Mumbai City Tour",
    description: "Explore the vibrant city of Mumbai with our comfortable cab service. Visit Gateway of India, Marine Drive, and other iconic locations.",
    imageUrl: "https://res.klook.com/image/upload/activities/hmzeozfxkgwublvwylv0.jpg",
    price: "₹3,500/day"
  },
  {
    id: 2,
    name: "Pune Weekend Gateway",
    description: "Perfect for weekend trips to Pune. Visit Shaniwar Wada, Aga Khan Palace, and other historical sites.",
    imageUrl: "https://thefarmstead.in/wp-content/uploads/2023/02/weekend-getaways-near-pune-4-1024x576.jpeg",
    price: "₹4,000/day"
  },
  {
    id: 3,
    name: "Delhi-Agra-Jaipur",
    description: "Experience the Golden Triangle tour with our luxury cab service. All-inclusive package with experienced driver.",
    imageUrl: "https://royalsamrattravels.in/wp-content/uploads/2023/02/delhi-agra-jaipur-tour.jpg",
    price: "₹15,000/3 days"
  }
];