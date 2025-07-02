'use client';

import { foodCategories } from '@/const/Card';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import FoodCategoryCard from '@/components/Foodcard';

function Home() {
  return (
    <>
      <Head>
        <title>ලංකා Eats</title>
        <meta name="description" content="Delicious food, fast delivery, and more." />
      </Head>

      <main className="bg-black text-white relative">
        {/* Glowing Blobs Background */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Blob 1 */}
          <motion.div
            className="absolute w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl top-[-100px] left-[-100px] filter drop-shadow-[0_0_25px_rgba(249,115,22,0.7)]"
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />
          {/* Blob 2 */}
          <motion.div
            className="absolute w-[300px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl bottom-[-120px] right-[-80px] filter drop-shadow-[0_0_25px_rgba(139,92,246,0.7)]"
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-10 md:py-12 lg:gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-3/4 space-y-5 lg:space-y-6 text-center lg:text-left z-10">
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
              Pause & Prep: Your Flavor Break Starts Now
            </h1>
            <p className="text-gray-300 text-sm md:text-base w-lg">
              Take a moment to reset while your food is on the way. Breathe, chill, and get in the vibe —
              the best flavors hit different when you&apos;re calm, ready, and hungry.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded font-semibold">
                Find a Restaurant
              </button>
              <button className="border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition">
                How to Order
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative lg:w-lg">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-12 rounded-full text-white font-bold bg-gray-800/50 border border-white focus:outline-none"
              />
              <button
                onClick={() => console.log('Search triggered')}
                className="absolute top-1/2 right-2 -translate-y-1/2 translate-x-1 bg-[#F38400] hover:bg-[#732300] text-white p-2 rounded-full transition"
                aria-label="Search"
              >
                <Search className="w-10 h-5" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:absolute w-full h-[280px] md:h-[350px] lg:w-[800px] lg:h-[600px] z-0">
            <Image
              src="/HeroBanner.svg"
              alt="Burgers"
              fill
              className="opacity-30 md:opacity-100 object-contain translate-x-0 translate-y-15 lg:translate-x-[100%] lg:translate-y-[0%]"
              priority
            />
          </div>
        </section>

        {/* Food Category Cards */}
        <section
          className="flex flex-wrap items-center justify-center gap-4 transform -translate-y-20 md:translate-y-10"
        >
          {foodCategories.map((cat) => (
            <FoodCategoryCard key={cat.title} title={cat.title} image={cat.image} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
