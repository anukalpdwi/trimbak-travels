import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: June 2025</p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">By accessing and using our services, you agree to be bound by these terms and conditions.</p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">2. Booking and Cancellation</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Advance booking is required for all services</li>
          <li>Cancellation charges may apply based on the timing of cancellation</li>
          <li>Refunds will be processed within 7-14 business days</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">3. Payment Terms</h2>
        <p className="mb-4">We accept all major payment methods including credit cards, debit cards, and UPI payments.</p>
      </div>
    </div>
  );
};

export default Terms;