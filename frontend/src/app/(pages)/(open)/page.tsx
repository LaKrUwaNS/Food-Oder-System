'use client';

import { foodCategories } from '@/const/Card';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import FoodCategoryCard from '@/components/Foodcard';
import Link from 'next/link';
import ContactSection from '@/sections/Contact';

function Home() {
  const cities = [
    "Kurunegala", "Colombo", "Kandy", "Galle Fort", "Matara", "Anuradhapura", "Jaffna", "Negombo", "Batticaloa", "Trincomalee",
    "Badulla", "Ratnapura", "Hambantota", "Polonnaruwa", "Gampaha", "Kalutara", "Nuwara Eliya", "Vavuniya", "Puttalam", "Chilaw",
    "Ampara", "Monaragala", "Kilinochchi", "Mannar", "Mulaitivu", "Hatton", "Panadura", "Dehiwala", "Moratuwa", "Beruwala"
  ];

  return (
    <>
      <Head>
        <title>ලංකා Eats</title>
        <meta name="description" content="Delicious food, fast delivery, and more." />
      </Head>

      <main className="text-white relative overflow-hidden h-fit">

        {/* 🌟 Ultra-Enhanced Animated Background */}
        <motion.div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Primary Orange Glow Blob */}
          <motion.div
            className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-full blur-[200px] opacity-50"
            animate={{
              x: [0, 50, -30, 0],
              y: [0, 30, -20, 0],
              scale: [1, 1.3, 0.9, 1],
              rotate: [0, 90, 180, 360]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Secondary Blue/Purple Glow Blob */}
          <motion.div
            className="absolute bottom-[-180px] right-[-180px] w-[450px] h-[450px] bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-[180px] opacity-40"
            animate={{
              x: [0, -60, 40, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.25, 0.85, 1],
              rotate: [360, 270, 90, 0]
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Accent Blob - Top Right */}
          <motion.div
            className="absolute top-[20%] right-[10%] w-[200px] h-[200px] bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 rounded-full blur-[100px] opacity-25"
            animate={{
              x: [0, 25, -15, 0],
              y: [0, -20, 35, 0],
              scale: [1, 1.4, 0.7, 1]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Accent Blob - Bottom Left */}
          <motion.div
            className="absolute bottom-[30%] left-[15%] w-[180px] h-[180px] bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 rounded-full blur-[90px] opacity-20"
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 25, -40, 0],
              scale: [1, 0.8, 1.5, 1]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Central Mist Glow */}
          <motion.div
            className="absolute top-[45%] left-[50%] w-[300px] h-[300px] bg-white rounded-full blur-[140px] opacity-8"
            animate={{
              scale: [1, 1.6, 0.6, 1],
              opacity: [0.08, 0.15, 0.04, 0.08],
              x: [0, 15, -25, 0],
              y: [0, -10, 20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />

          {/* Orbiting Particle Effects */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${i % 3 === 0 ? 'from-orange-400 to-pink-500' :
                i % 3 === 1 ? 'from-blue-400 to-purple-500' :
                  'from-green-400 to-teal-500'
                } opacity-60 blur-[1px]`}
              style={{
                top: `${20 + (i * 12)}%`,
                left: `${15 + (i * 15)}%`,
              }}
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -80, 120, 0],
                scale: [0.5, 1.5, 0.3, 0.5],
                opacity: [0.6, 0.9, 0.3, 0.6]
              }}
              transition={{
                duration: 15 + (i * 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2
              }}
            />
          ))}

          {/* Gradient Overlay for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

          {/* Subtle Grid Pattern Overlay */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-6 lg:px-12 py-10 md:py-12 lg:gap-10 z-10">
          <motion.div
            className="w-full lg:w-3/4 space-y-5 lg:space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              Pause & Prep: Your Flavor Break Starts Now
            </motion.h1>
            <motion.p className="text-gray-300 text-sm md:text-base w-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Take a moment to reset while your food is on the way. Breathe, chill, and get in the vibe — the best flavors hit different when you&apos;re calm, ready, and hungry.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
              <motion.button whileHover={{ scale: 1.05 }} className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded font-semibold">
                Find a Restaurant
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} className="border border-white px-4 py-2 rounded font-semibold hover:bg-white hover:text-black transition">
                How to Order
              </motion.button>
            </motion.div>

            {/* Search Bar */}
            <motion.div className="relative lg:w-lg" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
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
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:absolute w-full h-[280px] md:h-[350px] lg:w-[800px] lg:h-[600px]">
            <Image
              src="/HeroBanner.svg"
              alt="Burgers"
              fill
              className="opacity-30 md:opacity-100 object-contain translate-x-0 translate-y-15 lg:translate-x-[100%] lg:translate-y-[0%]"
              priority
            />
          </motion.div>
        </section>

        {/* Food Categories */}
        <section className="mt-10 flex flex-wrap items-center justify-center gap-4 transform -translate-y-30 md:translate-y-10 z-10">
          {foodCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <FoodCategoryCard title={cat.title} image={cat.image} />
            </motion.div>
          ))}
        </section>

        {/* City Tags */}
        <h1 className="mt-20 text-2xl md:text-3xl font-bold text-center mb-2">Cities We Provide Our Service</h1>
        <h4 className="text-md md:text-lg text-gray-300 text-center mb-6">Select your city to proceed</h4>

        <motion.section
          className="mt-10 flex flex-wrap justify-center items-center gap-4 p-6 bg-gray-500/20 rounded-2xl shadow-xl w-full z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {cities.map((city) => (
            <motion.div
              key={city}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/${city}`}
                className="bg-gray-500/10 px-4 py-2 rounded-full shadow hover:bg-[#F38400] hover:text-black transition duration-300 ease-in-out text-sm font-semibold"
              >
                {city}
              </Link>
            </motion.div>
          ))}
        </motion.section>

        {/* Services Section */}
        <section className="h-fit flex flex-wrap justify-center md:justify-between items-center gap-y-10 gap-x-6 px-4 sm:px-8 md:px-12 lg:px-20 mt-10 z-10">
          {[
            "/SERVICE/Rectangle5.png",
            "/SERVICE/Rectangle6.png",
            "/SERVICE/Rectangle7.png",
            "/SERVICE/Rectangle8.png"
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="w-full sm:w-[45%] md:w-[22%] flex justify-center"
            >
              <Image
                src={src}
                alt="services"
                width={300}
                height={200}
                className={`hover:scale-110 transition-transform duration-500 ${index % 2 !== 0 ? 'md:translate-y-10 lg:translate-y-20' : ''
                  }`}
              />
            </motion.div>
          ))}
        </section>
        
        {/* Contact Section */}
        <section className="z-10">
          <ContactSection />
        </section>
      </main>
    </>
  );
}

export default Home;