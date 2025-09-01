// components/Home/CategoryBrowser.tsx
import React from 'react';
import Link from 'next/link'; // Assuming you are using Next.js for routing

// Define the type for a single category item
interface CategoryItem {
  id: string;
  name: string;
  slug: string; // URL-friendly string for the category page
  icon?: string; // Optional path to an icon or emoji character
  imageUrl?: string; // Optional path to a category image
}

const categories: CategoryItem[] = [
  { id: 'cat1', name: 'Fashion', slug: 'fashion', icon: '👕' },
  { id: 'cat2', name: 'Electronics', slug: 'electronics', icon: '📱' },
  { id: 'cat3', name: 'Home Goods', slug: 'home-goods', icon: '🛋️' },
  { id: 'cat4', name: 'Collectibles', slug: 'collectibles', icon: '💎' },
  { id: 'cat5', name: 'Books & Media', slug: 'books-media', icon: '📚' },
  { id: 'cat6', name: 'Sports & Outdoors', slug: 'sports-outdoors', icon: '🏋️' },
];

const CategoryBrowser: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`} className="block">
              <div className="bg-purple-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center hover:bg-purple-100 transition-colors duration-200 transform hover:scale-105">
                {category.imageUrl ? (
                  <img src={category.imageUrl} alt={category.name} className="w-16 h-16 object-cover rounded-full mb-3" />
                ) : (
                  <span className="text-5xl mb-3" role="img" aria-label={category.name}>{category.icon}</span>
                )}
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBrowser;
