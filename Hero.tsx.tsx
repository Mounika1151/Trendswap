"use client"
// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  // You can add props here if you want to make the content dynamic
  // e.g., title: string; subtitle: string; callToActionText: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const heroTitle = "TrendSwap: The Future of Digital Asset Exchange";
  const heroSubtitle = "Seamlessly Swap Your Digital Assets. Fast, Secure, and Decentralized.";
  const callToActionText = "Start Swapping Now";
  const learnMoreText = "Learn More";

  // Replace with your actual hero image path
  const heroImagePath = '/images/hero-trendswap.png'; // Example path in public/images/

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-16 md:py-24 lg:py-32 overflow-hidden dark:from-gray-900 dark:to-black">
      {/* Background Shapes/Patterns (Optional: enhance visual appeal) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 64L48 80C96 96 192 128 288 160C384 192 480 224 576 208C672 192 768 128 864 128C960 128 1056 192 1152 208C1248 224 1344 192 1392 176L1440 160L1440 0L1392 0C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0L0 0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            {heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 animate-fade-in-up">
            {heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in-up delay-200">
            <Link href="/swap" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-blue-800 bg-white hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 md:py-5 md:px-10 text-lg">
              {callToActionText}
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105 md:py-5 md:px-10 text-lg">
              {learnMoreText}
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          {heroImagePath && (
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-none h-64 md:h-80 lg:h-[400px] xl:h-[500px]">
              <Image
                src={heroImagePath}
                alt="TrendSwap Platform Interface"
                layout="fill"
                objectFit="contain" // Use 'contain' to ensure the whole image is visible
                priority // Preload the image as it's above the fold
                className="rounded-lg shadow-2xl animate-fade-in-right"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;