'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import FoodCategoryCard from '@/components/Foodcard';
import { foodCategories } from '@/const/Card';
import FeaturedRestaurants from '@/components/Resturent';
import Footer from '@/components/Footer';
import City from '@/components/city';

const LankaEats = () => {
  const [searchQuery, setSearchQuery] = useState('');



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 via-orange-300/15 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-orange-300/15 via-amber-200/10 to-yellow-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-200/20 via-orange-100/15 to-amber-200/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>


      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight order w-fit md:w-4xl mx-auto lg:mx-0">
                  <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Pause & Prep:
                  </span>
                  <br />
                  Your Flavor Break Starts Now
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Take a moment to reset while your food is on the way. Breathe, chill, and get in the vibe — the best flavors hit different when you&apos;re calm, ready, and hungry.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  Find a Restaurant
                </button>
                <button className="border-2 border-orange-300 hover:border-orange-500 bg-white hover:bg-orange-50 text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  How to Order
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-lg mx-auto lg:mx-0">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for restaurants, cuisines..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pr-16 rounded-2xl text-gray-900 bg-white border-2 border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 shadow-lg hover:shadow-xl transition-all"
                  />
                  <button className="absolute top-1/2 right-3 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-110">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <Image
              src="/HeroBanner.svg"
              alt="Delicious Sri Lankan Food"
              className="object-cover absolute bottom-10 right-0 scale-120 md:scale-100 opacity-80 md:opacity-100 md:-right-120 transform -translate-x-1/2 -z-1"
              width={800}
              height={600}
            />

          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="flex items-center justify-center gap-4 ml-5 mr-5">
        {foodCategories.map((category) => (
          <FoodCategoryCard key={category.title} title={category.title} image={category.image} />
        ))}
      </section>

      {/* Featured Restaurants */}
      <FeaturedRestaurants />

      {/* Cities Section */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Select a City</h1>
      <City />

      {/* Contact Section */}
      <Footer />
    </div>
  );
};

export default LankaEats;