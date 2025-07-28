'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cog, Hammer, Settings, Clock } from 'lucide-react';

const ServiceImprovementPage = () => {
    const [countdown, setCountdown] = useState(10);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsRedirecting(true);
            setTimeout(() => {
                window.location.href = '/';
            }, 500);
        }
    }, [countdown]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    const toolIcons = [
        { Icon: Wrench, delay: 0 },
        { Icon: Cog, delay: 1 },
        { Icon: Hammer, delay: 2 },
        { Icon: Settings, delay: 3 },
    ];

    return (
        <main className="w-screen h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="w-full h-full "
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 10,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                className="w-screen h-screen flex flex-col items-center justify-center text-center px-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Floating Tool Icons */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {toolIcons.map(({ Icon, delay }, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${index === 0
                                    ? 'top-20 left-20'
                                    : index === 1
                                        ? 'top-32 right-32'
                                        : index === 2
                                            ? 'bottom-40 left-40'
                                            : 'bottom-20 right-20'
                                }`}
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: delay * 0.5,
                            }}
                        >
                            <motion.div
                                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Icon className="w-6 h-6 text-gray-600" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Main Construction Icon */}
                <motion.div variants={itemVariants} className="mb-8">
                    <motion.div
                        className="relative"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center mb-4">
                            <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className="text-4xl">🚧</span>
                            </motion.div>
                        </div>

                        {/* Animated rings around the icon */}
                        <motion.div
                            className="absolute inset-0 border-4 border-orange-300/50 rounded-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.div
                            className="absolute inset-0 border-4 border-orange-400/30 rounded-3xl"
                            animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.3, 0, 0.3],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 mb-6 leading-tight"
                >
                    <motion.span
                        className="inline-block"
                        animate={{
                            y: [0, -10, 0],
                            rotateX: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            repeatDelay: 3,
                        }}
                    >
                        Service Under
                    </motion.span>
                    <br />
                    <motion.span
                        className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent inline-block"
                        animate={{
                            y: [0, -10, 0],
                            rotateX: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 0.2,
                            repeatDelay: 3,
                        }}
                    >
                        Improvement
                    </motion.span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed mb-8 font-medium"
                >
                    We&apos;re currently working hard to improve this service. Please check back soon for updates and improvements.
                </motion.p>

                {/* Countdown Timer */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Clock className="w-5 h-5 text-orange-500" />
                            <span className="text-gray-700 font-semibold">Auto-redirecting in</span>
                        </div>

                        <div className="relative w-20 h-20 mx-auto mb-4">
                            <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    className="text-gray-200"
                                    fill="none"
                                />
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    className="text-orange-500"
                                    fill="none"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 1 }}
                                    animate={{ pathLength: countdown / 10 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    style={{
                                        strokeDasharray: '283',
                                        strokeDashoffset: '0',
                                    }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.span
                                    className="text-2xl font-black text-gray-800"
                                    key={countdown}
                                    initial={{ scale: 1.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {countdown}
                                </motion.span>
                            </div>
                        </div>

                        <motion.p className="text-sm text-gray-600 text-center" animate={{ opacity: isRedirecting ? 1 : 0.7 }}>
                            {isRedirecting ? 'Redirecting now...' : 'Redirecting to homepage'}
                        </motion.p>
                    </div>
                </motion.div>

            </motion.div>
        </main>
    );
};

export default ServiceImprovementPage;
