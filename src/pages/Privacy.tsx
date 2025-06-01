import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: June 2025</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect information that you provide directly to us when making a booking or inquiry.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>To process your bookings and provide our services</li>
          <li>To communicate with you about your bookings</li>
          <li>To send you promotional materials with your consent</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Information Security</h2>
        <p className="mb-4">We implement appropriate security measures to protect your personal information.</p>
      </div>
    </div>
  );
};

export default Privacy;