import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">

            {/* Enhanced Animated Background - Food Theme */}
            <motion.div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Floating Gradient Orbs */}
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 via-amber-200/15 to-yellow-300/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 80, -40, 0],
                        y: [0, -60, 40, 0],
                        scale: [1, 1.3, 0.8, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-orange-200/20 via-amber-100/15 to-yellow-200/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -70, 50, 0],
                        y: [0, 50, -30, 0],
                        scale: [1, 1.4, 0.9, 1],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating Food Particles */}
                <motion.div
                    className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-[#F38400] to-orange-500 rounded-full opacity-50"
                    animate={{
                        y: [0, -120, 0],
                        x: [0, 60, 0],
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-orange-400 to-[#F38400] rounded-full opacity-40"
                    animate={{
                        y: [0, 100, 0],
                        x: [0, -80, 0],
                        scale: [1, 2, 1],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </motion.div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 md:px-6 lg:px-12 py-12 gap-8">

                {/* Enhanced Food-Themed Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2 max-w-2xl z-10"
                >
                    <motion.form
                        className="bg-white/90 backdrop-blur-xl border border-orange-200/50 rounded-3xl shadow-2xl p-8 md:p-10 space-y-6 hover:shadow-3xl transition-all duration-500"
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                                <span className="bg-gradient-to-r from-[#F38400] to-orange-600 bg-clip-text text-transparent">
                                    Hungry for Something Special?
                                </span>
                            </h2>
                            <p className="text-gray-600 text-lg font-medium">
                                Let&#39;s create a delicious experience together. Tell us what you&#39;re craving!
                            </p>
                        </motion.div>

                        {/* Name Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                Your Name
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="text"
                                id="name"
                                placeholder="What name should we call out when your order is ready?"
                                className="w-full px-5 py-4 bg-orange-50 text-gray-900 border-2 border-orange-200 rounded-2xl focus:outline-none focus:border-[#F38400] focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-300 font-medium text-base"
                            />
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        >
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                Email Address
                            </label>
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                id="email"
                                placeholder="Where should we send your foodie updates?"
                                className="w-full px-5 py-4 bg-orange-50 text-gray-900 border-2 border-orange-200 rounded-2xl focus:outline-none focus:border-[#F38400] focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-300 font-medium text-base"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                Tell Us About Your Food Dreams
                            </label>
                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                id="message"
                                rows={5}
                                placeholder="Describe your favorite flavors, dietary needs, special occasions, or any culinary adventures you have in mind..."
                                className="w-full px-5 py-4 bg-orange-50 text-gray-900 border-2 border-orange-200 rounded-2xl focus:outline-none focus:border-[#F38400] focus:ring-4 focus:ring-orange-100 focus:bg-white transition-all duration-300 resize-none font-medium text-base"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#F38400] to-orange-600 hover:from-orange-600 hover:to-red-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg relative overflow-hidden group"
                            >
                                <span className="relative z-10">🔥 Let&#39;s Cook Together!</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={false}
                                />
                            </motion.button>
                        </motion.div>
                    </motion.form>
                </motion.div>

                {/* Enhanced Food Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
                >
                    <motion.div
                        className="relative max-w-md lg:max-w-lg xl:max-w-xl"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Floating Food Decorative Elements */}
                        <motion.div
                            className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#F38400] to-orange-500 rounded-full opacity-70 blur-sm"
                            animate={{
                                y: [0, -20, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.div
                            className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full opacity-80 blur-sm"
                            animate={{
                                y: [0, 15, 0],
                                scale: [1, 1.3, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        />

                        <motion.div
                            className="absolute top-1/3 -right-8 w-6 h-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-60"
                            animate={{
                                x: [0, 20, 0],
                                y: [0, -25, 0],
                                scale: [1, 1.4, 1],
                                opacity: [0.6, 0.9, 0.6]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        />

                        {/* Enhanced Image Container */}
                        <motion.div
                            className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-orange-200/30"
                            whileHover={{
                                boxShadow: "0 25px 50px rgba(243, 132, 0, 0.2)",
                                borderColor: "rgba(243, 132, 0, 0.3)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/SERVICE/chef.png"
                                alt="Expert Chef - Ready to Create Your Perfect Meal"
                                width={500}
                                height={400}
                                className="object-cover rounded-2xl w-full h-auto drop-shadow-2xl"
                                priority
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-4 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
                        </motion.div>

                        {/* Background Glow Effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-[#F38400]/20 to-orange-400/20 rounded-3xl blur-3xl -z-10"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact