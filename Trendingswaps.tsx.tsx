// components/Home/TrendingSwaps.tsx.
'use client';
import React, { useState, useEffect } from 'react';

// Define the type for a single trending swap item for type safety
interface TrendingSwapItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  // You might add metrics like 'views', 'recentSwaps', 'likes' for trending calculation
  trendScore?: number;
}

const TrendingSwaps: React.FC = () => {
  const [trendingItems, setTrendingItems] = useState<TrendingSwapItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingSwaps = async () => {
      try {
        setLoading(true);
        setError(null);

        // --- Simulate API Call (Replace with your actual API endpoint) ---
        // In a real application, you'd fetch data from your backend.
        // Example: const response = await fetch('/api/trending-swaps');
        // const data: TrendingSwapItem[] = await response.json();
        // setTrendingItems(data);

        // --- Dummy Data for Demonstration ---
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network delay
        const dummyData: TrendingSwapItem[] = [
          {
            id: 'ts1',
            title: 'Cryptocurrency',
            description: 'Cryptocurrency swapping useful for faster,cheaper and more private transactions',
            imageUrl: '/images/Cryptocurrency.jpg', // Ensure this path exists or update
            category: 'Financial transactions',
            trendScore: 80
          },
          {
            id: 'ts2',
            title: 'Vintage Denim Jacket',
            description: 'Classic Levi\'s jacket, perfect for a retro look.',
            imageUrl: '/images/trending-denim.jpg', // Ensure this path exists or update
            category: 'Fashion',
            trendScore: 92
          },
          {
            id: 'ts3',
            title: 'Collectible Vinyl Records',
            description: 'Rare first pressings of classic rock albums.',
            imageUrl: '/images/trending-vinyl.jpg', // Ensure this path exists or update
            category: 'Music & Media',
            trendScore: 88
          },
          {
            id: 'ts4',
            title: 'Smartwatch Series 8',
            description: 'Lightly used, in excellent condition, with extra bands.',
            imageUrl: '/images/trending-watch.jpg', // Ensure this path exists or update
            category: 'Electronics',
            trendScore: 85
          },
          {
            id: 'ts5',
            title: 'Handmade Ceramic Mug Set',
            description: 'Unique artisanal mugs, perfect for coffee lovers.',
            imageUrl: '/images/trending-mug.jpg', // Ensure this path exists or update
            category: 'Home Goods',
            trendScore: 80
          },
          
        ];
        setTrendingItems(dummyData);
        // --- End of Dummy Data ---

      } catch (err) {
        console.error("Error fetching trending swaps:", err);
        setError('Failed to load trending swaps. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingSwaps();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <section className="py-16 text-center text-gray-700">
        <div className="container mx-auto px-4">Loading Trending Swaps...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 text-center text-red-600">
        <div className="container mx-auto px-4">{error}</div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">✨ Trending Swaps Right Now!</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
              <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.category}</p>
                <p className="text-gray-700 text-base mb-4 line-clamp-2">{item.description}</p>
                {item.trendScore && (
                  <div className="flex items-center justify-between text-indigo-700 font-bold text-lg">
                    <span>Trend Score: {item.trendScore}</span>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      View Swap
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSwaps;
