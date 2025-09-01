// components/Home/Reviews.tsx
import React from 'react';

// Define the type for a single review item
interface ReviewItem {
  id: string;
  author: string;
  rating: number; // 1-5 stars
  text: string;
  avatarUrl?: string; // Optional URL for author's avatar
}

// Dummy data for reviews
const reviews: ReviewItem[] = [
  {
    id: 'rev1',
    author: 'Alice M.',
    rating: 5,
    text: "Trendswap is amazing! I finally traded my old camera for a vintage handbag I adore. The process was so smooth and easy!",
    avatarUrl: '/images/avatar-alice.jpg', // Placeholder, ensure path exists or remove
  },
  {
    id: 'rev2',
    author: 'John D.',
    rating: 4,
    text: "Great concept! Found some rare vinyl records I've been looking for. The community is vibrant and trustworthy.",
    avatarUrl: '/images/avatar-john.jpg', // Placeholder, ensure path exists or remove
  },
  {
    id: 'rev3',
    author: 'Sarah P.',
    rating: 5,
    text: "Swapped my extra smartwatch for a high-end blender. Everything was as described, and the communication was excellent.",
    avatarUrl: '/images/avatar-sarah.jpg', // Placeholder, ensure path exists or remove
  },
  {
    id: 'rev4',
    author: 'Michael B.',
    rating: 4,
    text: "User-friendly platform. It's a fantastic way to declutter and find unique items. Highly recommend Trendswap!",
    avatarUrl: '/images/avatar-michael.jpg', // Placeholder, ensure path exists or remove
  },
];

const Reviews: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="text-yellow-400">★</span>); // Filled star
      } else {
        stars.push(<span key={i} className="text-gray-300">★</span>); // Empty star
      }
    }
    return <div className="flex justify-center mb-3">{stars}</div>;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center justify-between">
              <div>
                {review.avatarUrl && (
                  <img src={review.avatarUrl} alt={review.author} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-purple-300" />
                )}
                {renderStars(review.rating)}
                <p className="text-lg text-gray-700 italic mb-5">"{review.text}"</p>
              </div>
              <p className="font-semibold text-purple-700">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;