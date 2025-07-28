"use client";

import Image from "next/image";
import { Heart, Star, Clock } from "lucide-react";

const restaurants = [
    {
        id: 1,
        name: "Spice Garden",
        cuisine: "Sri Lankan",
        rating: 4.8,
        time: "25-35 min",
        delivery: "Free",
        image: "/images/burger.jpeg",
        featured: true,
    },
    {
        id: 2,
        name: "Curry House",
        cuisine: "Traditional",
        rating: 4.6,
        time: "30-40 min",
        delivery: "Rs. 50",
        image: "/images/pasta.jpg",
        featured: false,
    },
    {
        id: 3,
        name: "Ocean Breeze",
        cuisine: "Seafood",
        rating: 4.9,
        time: "20-30 min",
        delivery: "Free",
        image: "/images/sushi.jpg",
        featured: true,
    },
];

export default function FeaturedRestaurants() {
    return (
        <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-black text-center text-gray-900 mb-12">
                    <span style={{ color: "#F38400" }}>Featured</span> Restaurants
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="group cursor-pointer">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-2">
                                <div className="relative">
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={restaurant.image}
                                            alt={restaurant.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Like button */}
                                    <div className="absolute top-4 right-4">
                                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Featured label */}
                                    {restaurant.featured && (
                                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                            {restaurant.name}
                                        </h3>
                                        <p className="text-gray-600">{restaurant.cuisine}</p>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            <span className="font-semibold">{restaurant.rating}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{restaurant.time}</span>
                                        </div>
                                        <div className="font-semibold text-orange-600">
                                            {restaurant.delivery}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
