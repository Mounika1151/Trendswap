// components/Home/FAQ.tsx
'use client' ;
import React, { useState } from 'react';

// Define the type for a single FAQ item
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Dummy data for FAQs
const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How does Trendswap work?',
    answer: 'Trendswap allows you to list items you no longer need and swap them for items you want. Simply create a listing, browse for items you like, propose a swap, and arrange the exchange!',
  },
  {
    id: 'faq2',
    question: 'What kind of items can I swap?',
    answer: 'You can swap a wide variety of items including fashion accessories, electronics, home goods, collectibles, books, media, and more. As long as it’s in good condition and permitted by our guidelines, you can swap it!',
  },
  {
    id: 'faq3',
    question: 'Is Trendswap safe to use?',
    answer: 'Yes, we prioritize user safety. We encourage clear communication between swappers and offer guidelines for safe exchanges. Always meet in public places for in-person swaps and be cautious when sharing personal information.',
  },
  {
    id: 'faq4',
    question: 'How do I handle shipping for swapped items?',
    answer: 'Shipping arrangements are typically agreed upon by both parties involved in a swap. You can decide who covers shipping costs and which shipping method to use. We recommend using tracked shipping for valuable items.',
  },
  {
    id: 'faq5',
    question: 'What if I receive an item that is not as described?',
    answer: 'If an item is significantly not as described, you should contact the other swapper immediately to resolve the issue. Our community guidelines provide steps for dispute resolution, and our support team can assist if needed.',
  },
];

const FAQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                onClick={() => toggleQuestion(item.id)}
              >
                {item.question}
                <span className="text-gray-500 text-2xl">
                  {openQuestion === item.id ? '−' : '+'}
                </span>
              </button>
              {openQuestion === item.id && (
                <div className="p-5 border-t border-gray-200 bg-white text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;