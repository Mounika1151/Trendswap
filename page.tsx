// app/page.tsx
import React from "react";
import { Metadata } from "next";

// Import all your custom components
import Hero from "@/components/Home/Hero"; // Assuming you have a Hero component
import Features from "@/components/Home/Features"; // Assuming you have a Features component
import HowItWorks from "@/components/Home/HowItWorks"; // New component for steps
import TrendingSwaps from "@/components/Home/TrendingSwaps";
import CategoryBrowser from "@/components/Home/CategoryBrowser";
import Reviews from "@/components/Home/Reviews";
import FAQ from "@/components/Home/FAQ";
export const metadata: Metadata = {
  title: "Trendswap: Swap & Discover Trending Items",
  description: "Discover, swap, and connect with a community passionate about trending items on Trendswap.",
};
export default function Home()
{
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <TrendingSwaps />
      <CategoryBrowser />
      <Reviews />
      <FAQ /> {/* Placed before Wishlist as it's general info */}
       {/* Assuming Wishlist is user-specific and might be further down or for logged-in users */}
      
      {/* You might also have a Footer component */}
    </main>
  );
}
