"use client"
// components/GalleryS
import React from 'react';
import Image from 'next/image'; // For optimized image handling in Next.js

interface GalleryImage {
  src: string;
  alt: string;
  description?: string; // Optional description for each image
}

interface GallerySectionProps {
  // You can pass the images data as a prop if it's dynamic
  // images: GalleryImage[];
}

const Gallery: React.FC<GallerySectionProps> = () => {
  // Define your gallery images here. Replace with your actual image paths and descriptions.
  const galleryImages: GalleryImage[] = [
    { src: '/images/gallery/trendswap-ui-1.png', alt: 'TrendSwap Dashboard Overview', description: 'Clean and intuitive dashboard design.' },
    { src: '/images/gallery/trendswap-swap-interface.png', alt: 'Token Swap Interface', description: 'Effortless token swapping in a few clicks.' },
    { src: '/images/gallery/trendswap-wallet-connect.png', alt: 'Wallet Connection Options', description: 'Securely connect your favorite crypto wallets.' },
    { src: '/images/gallery/trendswap-charts.png', alt: 'Price Charts Integration', description: 'Real-time price data and analytical tools.' },
    { src: '/images/gallery/trendswap-mobile-view.png', alt: 'Mobile Responsive Design', description: 'Access TrendSwap anytime, anywhere on any device.' },
    { src: '/images/gallery/trendswap-security.png', alt: 'Security Features Highlight', description: 'Learn about our robust security protocols.' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 dark:text-white">
          A Glimpse of TrendSwap
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-16 dark:text-gray-400">
          Explore the intuitive interface and powerful features that make TrendSwap your go-to platform for seamless digital asset exchange.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index} // Use a more stable key if images are dynamic (e.g., image ID)
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] dark:bg-gray-850 dark:shadow-xl"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover" // or 'contain' depending on your image aspect ratio and desired fit
                  className="rounded-t-lg"
                />
              </div>
              {image.description && (
                <div className="p-4 text-center">
                  <p className="text-md font-semibold text-gray-800 dark:text-white">
                    {image.alt}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {image.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;