// components/Home/HowItWorks.tsx
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: 'List Your Item',
      description: 'Take photos of your gently-used fashion items and describe them in detail.',
    },
    {
      title: 'Find Your Swap',
      description: 'Browse our community for items you love and find perfect matches for your style.',
    },
    {
      title: 'Agree & Swap',
      description: 'Connect with other swappers, agree on terms, and securely exchange items.',
    },
    {
      title: 'Enjoy Your New Finds!',
      description: 'Receive your swapped items and refresh your wardrobe sustainably.',
    },
  ];

  return (
    <section className="how-it-works-section bg-gray-100 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">How Trendswap Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-500 text-4xl font-bold mb-4">{index + 1}.</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;