
// components/FeaturesSection.tsx
import React from 'react';
// If you're using Heroicons or a similar library, import them here:
// import { BoltIcon, LockClosedIcon, ChartBarIcon, WalletIcon } from '@heroicons/react/24/outline';

interface FeatureItemProps {
  icon: React.ReactNode; // Can be an icon component or an SVG/text
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform duration-300 hover:scale-105 dark:bg-gray-800 dark:shadow-xl">
      <div className="flex justify-center items-center mb-6 text-blue-600 dark:text-blue-400">
        {/* Replace with actual icon component if using a library */}
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

interface FeaturesSectionProps {
  // Define any props if needed, e.g., featuresData: FeatureItemProps[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  const features = [
    {
      icon: <span className="text-5xl">⚡</span>, // Placeholder icon
      title: 'Fast Performance',
      description: 'Experience a highly responsive platform with optimized functionality.',
    },
    {
      icon: <span className="text-5xl">🔒</span>, // Placeholder icon
      title: 'Enhanced Security',
      description: 'Your data and activities are protected with robust security measures.',
    },
    {
      icon: <span className="text-5xl">🌐</span>, // Placeholder icon
      title: 'Broad Compatibility',
      description: 'Access and use the platform across various devices and systems.',
    },
    {
      icon: <span className="text-5xl">💸</span>, // Placeholder icon
      title: 'Cost-Effective Usage',
      description: 'Benefit from efficient operations and minimal associated costs.',
    },
    {
      icon: <span className="text-5xl">✨</span>, // Placeholder icon
      title: 'Intuitive Interface',
      description: 'Navigate and utilize the platform with ease thanks to a user-friendly design.',
    },
    {
      icon: <span className="text-5xl">📊</span>, // Placeholder icon
      title: 'Valuable Insights',
      description: 'Gain access to relevant data and information to inform your decisions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-100 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 dark:text-white">
          Why Choose Our App?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureItem
              key={index} // Consider using a unique ID if features are dynamic/from an API
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
