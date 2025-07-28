// components/HotelGrid.tsx
import { motion } from "framer-motion";

interface Hotel {
    id: string | number;
    name: string;
    location: string;
    description: string;
    image: string;
    badge: string;
    badgeColor: string; // Tailwind class e.g., "bg-orange-500"
    features: string[];
    rating: number | string;
    deliveryTime: string;
    menuItems: number | string;
}

interface HotelGridProps {
    hotels: Hotel[];
}

const HotelGrid: React.FC<HotelGridProps> = ({ hotels = [] }) => {
    return (
        <main className="relative z-10 container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {hotels.map((hotel, index) => (
                    <motion.div
                        key={hotel.id}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md border hover:border-orange-500 transition-all duration-500"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.01 }}
                    >
                        {/* Hotel Image */}
                        <div className="relative h-48 overflow-hidden">
                            <motion.div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${hotel.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div
                                className={`absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-semibold shadow ${hotel.badgeColor}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {hotel.badge}
                            </motion.div>
                        </div>

                        {/* Hotel Content */}
                        <div className="p-5">
                            <motion.h3
                                className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300"
                                whileHover={{ scale: 1.03 }}
                            >
                                {hotel.name}
                            </motion.h3>

                            <div className="flex items-center text-gray-600 text-sm mb-2">
                                <span className="text-orange-500 mr-2">📍</span>
                                <span>{hotel.location}</span>
                            </div>

                            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                                {hotel.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {hotel.features.map((feature, i) => (
                                    <motion.span
                                        key={i}
                                        className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs border border-orange-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {feature}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-3 text-center text-xs bg-orange-50 p-3 rounded-xl mb-5">
                                <div>
                                    <div className="text-lg font-bold text-orange-600">
                                        {hotel.rating}
                                    </div>
                                    <div className="uppercase text-gray-500">Rating</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-orange-600">
                                        {hotel.deliveryTime}
                                    </div>
                                    <div className="uppercase text-gray-500">Min</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-orange-600">
                                        {hotel.menuItems}
                                    </div>
                                    <div className="uppercase text-gray-500">Items</div>
                                </div>
                            </div>

                            {/* Order Button */}
                            <motion.button
                                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-bold uppercase shadow-md"
                                whileHover={{
                                    scale: 1.02,
                                    y: -2,
                                    boxShadow: "0 8px 20px rgba(249, 115, 22, 0.4)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => alert(`Ordering from ${hotel.name}...`)}
                            >
                                Order Now
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
};

export default HotelGrid;
