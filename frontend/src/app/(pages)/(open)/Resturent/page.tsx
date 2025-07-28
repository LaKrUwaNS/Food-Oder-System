'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Restaurant {
    id: number
    name: string
    cuisine: string
    rating: number
    deliveryTime: string
    deliveryFee: string
    image: string
    description: string
    isOpen: boolean
    distance: string
    priceRange: string
    tags: string[]
    promotions?: string
    featured: boolean
}

// Mock restaurant data moved outside component to avoid dependency issues
const mockRestaurants: Restaurant[] = [
    {
        id: 1,
        name: "Mario's Italian Kitchen",
        cuisine: "Italian",
        rating: 4.8,
        deliveryTime: "25-35 min",
        deliveryFee: "Free",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Authentic Italian cuisine with fresh pasta and wood-fired pizzas",
        isOpen: true,
        distance: "1.2 km",
        priceRange: "$$",
        tags: ["Italian", "Pizza", "Pasta", "Family-friendly"],
        promotions: "20% off orders over $30",
        featured: true
    },
    {
        id: 2,
        name: "Sakura Sushi Bar",
        cuisine: "Japanese",
        rating: 4.9,
        deliveryTime: "30-40 min",
        deliveryFee: "$2.99",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fresh sushi and traditional Japanese dishes made by expert chefs",
        isOpen: true,
        distance: "0.8 km",
        priceRange: "$$$",
        tags: ["Japanese", "Sushi", "Fresh", "Premium"],
        featured: true
    },
    {
        id: 3,
        name: "Burger Palace",
        cuisine: "American",
        rating: 4.5,
        deliveryTime: "15-25 min",
        deliveryFee: "$1.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Gourmet burgers with premium ingredients and crispy fries",
        isOpen: true,
        distance: "0.5 km",
        priceRange: "$$",
        tags: ["American", "Burgers", "Fast Food", "Casual"],
        promotions: "Buy 2 get 1 free",
        featured: false
    },
    {
        id: 4,
        name: "Spice Route",
        cuisine: "Indian",
        rating: 4.7,
        deliveryTime: "35-45 min",
        deliveryFee: "Free",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Authentic Indian flavors with traditional spices and recipes",
        isOpen: true,
        distance: "2.1 km",
        priceRange: "$$",
        tags: ["Indian", "Spicy", "Vegetarian", "Traditional"],
        featured: false
    },
    {
        id: 5,
        name: "Dragon Palace",
        cuisine: "Chinese",
        rating: 4.6,
        deliveryTime: "20-30 min",
        deliveryFee: "$1.49",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Traditional Chinese dishes with modern presentation",
        isOpen: false,
        distance: "1.5 km",
        priceRange: "$$",
        tags: ["Chinese", "Dim Sum", "Noodles", "Traditional"],
        featured: false
    },
    {
        id: 6,
        name: "Mediterranean Breeze",
        cuisine: "Mediterranean",
        rating: 4.8,
        deliveryTime: "30-40 min",
        deliveryFee: "Free",
        image: "https://images.unsplash.com/photo-1544510285-4f47185d76b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fresh Mediterranean cuisine with healthy options",
        isOpen: true,
        distance: "1.8 km",
        priceRange: "$$$",
        tags: ["Mediterranean", "Healthy", "Fresh", "Vegetarian"],
        promotions: "Free dessert with main course",
        featured: true
    },
    {
        id: 7,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.4,
        deliveryTime: "20-30 min",
        deliveryFee: "$2.49",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Authentic Mexican street food and vibrant flavors",
        isOpen: true,
        distance: "1.0 km",
        priceRange: "$",
        tags: ["Mexican", "Street Food", "Spicy", "Casual"],
        featured: false
    },
    {
        id: 8,
        name: "Le Bistro",
        cuisine: "French",
        rating: 4.9,
        deliveryTime: "40-50 min",
        deliveryFee: "$3.99",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Fine French dining with exquisite flavors and presentation",
        isOpen: true,
        distance: "2.5 km",
        priceRange: "$$$$",
        tags: ["French", "Fine Dining", "Romantic", "Premium"],
        featured: true
    }
]

export default function RestaurantsPage() {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCuisine, setSelectedCuisine] = useState('All')
    const [sortBy, setSortBy] = useState('featured')
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
    const [favorites, setFavorites] = useState<Set<number>>(new Set())
    const [isLoading, setIsLoading] = useState(true)

    const cuisines = ['All', 'Italian', 'Japanese', 'American', 'Indian', 'Chinese', 'Mediterranean', 'Mexican', 'French']

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setRestaurants(mockRestaurants)
            setFilteredRestaurants(mockRestaurants)
            setIsLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        const filtered = restaurants.filter(restaurant => {
            const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
                restaurant.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))

            const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine

            return matchesSearch && matchesCuisine
        })

        // Sort restaurants
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'featured':
                    if (a.featured && !b.featured) return -1
                    if (!a.featured && b.featured) return 1
                    return b.rating - a.rating
                case 'rating':
                    return b.rating - a.rating
                case 'deliveryTime':
                    return parseInt(a.deliveryTime) - parseInt(b.deliveryTime)
                case 'distance':
                    return parseFloat(a.distance) - parseFloat(b.distance)
                default:
                    return 0
            }
        })

        setFilteredRestaurants(filtered)
    }, [searchQuery, selectedCuisine, sortBy, restaurants])

    const toggleFavorite = (id: number) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(id)) {
            newFavorites.delete(id)
        } else {
            newFavorites.add(id)
        }
        setFavorites(newFavorites)
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.p
                        className="mt-4 text-lg text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Loading delicious restaurants...
                    </motion.p>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <motion.section
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">
                            Discover Amazing Restaurants
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            From local favorites to international cuisine, find your next meal
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Search and Filters */}
            <motion.section
                className="bg-white shadow-lg sticky top-0 z-40"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <span className="text-gray-400 text-xl">🔍</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search restaurants, cuisines, or dishes..."
                                value={searchQuery}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            />
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-4 items-center">
                            {/* Cuisine Filter */}
                            <select
                                value={selectedCuisine}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedCuisine(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                {cuisines.map(cuisine => (
                                    <option key={cuisine} value={cuisine}>{cuisine}</option>
                                ))}
                            </select>

                            {/* Sort Filter */}
                            <select
                                value={sortBy}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                                <option value="featured">Featured</option>
                                <option value="rating">Rating</option>
                                <option value="deliveryTime">Delivery Time</option>
                                <option value="distance">Distance</option>
                            </select>

                            {/* View Mode Toggle */}
                            <div className="flex rounded-lg border border-gray-300 overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`px-4 py-3 transition-colors duration-200 ${viewMode === 'grid'
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    ⊞
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`px-4 py-3 transition-colors duration-200 ${viewMode === 'list'
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-white text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    ☰
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Results Count */}
            <motion.div
                className="container mx-auto px-6 py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <p className="text-gray-600">
                    Showing {filteredRestaurants.length} restaurants
                    {selectedCuisine !== 'All' && ` in ${selectedCuisine} cuisine`}
                </p>
            </motion.div>

            {/* Restaurants Grid/List */}
            <main className="container mx-auto px-6 pb-12">
                <AnimatePresence>
                    <motion.div
                        className={viewMode === 'grid'
                            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            : "space-y-6"
                        }
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredRestaurants.map((restaurant) => (
                            <motion.div
                                key={restaurant.id}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-orange-500 transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''
                                    }`}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                layout
                            >
                                {/* Restaurant Image */}
                                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-32' : 'h-48'
                                    }`}>
                                    <motion.img
                                        src={restaurant.image}
                                        alt={restaurant.name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Status Badge */}
                                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold ${restaurant.isOpen ? 'bg-green-500' : 'bg-red-500'
                                        }`}>
                                        {restaurant.isOpen ? 'Open' : 'Closed'}
                                    </div>

                                    {/* Featured Badge */}
                                    {restaurant.featured && (
                                        <div className="absolute top-3 right-3 px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold">
                                            Featured
                                        </div>
                                    )}

                                    {/* Favorite Button */}
                                    <motion.button
                                        onClick={() => toggleFavorite(restaurant.id)}
                                        className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <span className={`text-lg ${favorites.has(restaurant.id) ? 'text-red-500' : 'text-gray-400'
                                            }`}>
                                            {favorites.has(restaurant.id) ? '❤️' : '🤍'}
                                        </span>
                                    </motion.button>

                                    {/* Promotions */}
                                    {restaurant.promotions && (
                                        <div className="absolute bottom-3 left-3 px-2 py-1 bg-red-500 text-white rounded text-xs font-semibold">
                                            {restaurant.promotions}
                                        </div>
                                    )}
                                </div>

                                {/* Restaurant Info */}
                                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-200">
                                            {restaurant.name}
                                        </h3>
                                        <span className="text-lg font-bold text-orange-600">
                                            {restaurant.priceRange}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4">
                                        {restaurant.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {restaurant.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Restaurant Stats */}
                                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                        <div className="flex items-center gap-1">
                                            <span className="text-yellow-500">⭐</span>
                                            <span className="font-semibold">{restaurant.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>🚚</span>
                                            <span>{restaurant.deliveryTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span>📍</span>
                                            <span>{restaurant.distance}</span>
                                        </div>
                                    </div>

                                    {/* Delivery Fee */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-gray-600">Delivery fee:</span>
                                        <span className={`text-sm font-semibold ${restaurant.deliveryFee === 'Free' ? 'text-green-600' : 'text-gray-800'
                                            }`}>
                                            {restaurant.deliveryFee}
                                        </span>
                                    </div>

                                    {/* Order Button */}
                                    <motion.button
                                        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${restaurant.isOpen
                                                ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                        whileHover={restaurant.isOpen ? { scale: 1.02, y: -2 } : {}}
                                        whileTap={restaurant.isOpen ? { scale: 0.98 } : {}}
                                        disabled={!restaurant.isOpen}
                                        onClick={() => alert(`Viewing menu for ${restaurant.name}...`)}
                                    >
                                        {restaurant.isOpen ? 'View Menu' : 'Currently Closed'}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Results */}
                {filteredRestaurants.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No restaurants found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                        <motion.button
                            onClick={() => {
                                setSearchQuery('')
                                setSelectedCuisine('All')
                                setSortBy('featured')
                            }}
                            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Clear Filters
                        </motion.button>
                    </motion.div>
                )}
            </main>
        </div>
    )
}