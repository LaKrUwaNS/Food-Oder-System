'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, easeInOut, easeOut } from 'framer-motion';

const cities = [
    "Kurunegala", "Colombo", "Kandy", "Galle Fort", "Matara", "Anuradhapura", "Jaffna", "Negombo",
    "Batticaloa", "Trincomalee", "Badulla", "Ratnapura", "Hambantota", "Polonnaruwa", "Gampaha",
    "Kalutara", "Nuwara Eliya", "Vavuniya", "Puttalam", "Chilaw"
];

const buttonVariants = {
    idle: {
        scale: 1,
        borderColor: [
            "rgba(156, 163, 175, 0.3)",
            "rgba(156, 163, 175, 0.7)",
            "rgba(156, 163, 175, 0.3)"
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: easeInOut
        }
    },
    hover: {
        scale: 1.1,
        backgroundColor: "rgba(156, 163, 175, 0.4)", 
        boxShadow: "0 0 20px rgba(156, 163, 175, 0.8)",
        borderColor: "rgba(156, 163, 175, 1)",
        transition: {
            duration: 0.3,
            ease: easeOut
        }
    },
    tap: {
        scale: 0.95,
        boxShadow: "0 0 10px rgba(156, 163, 175, 0.5)",
        borderColor: "rgba(156, 163, 175, 0.8)",
        transition: {
            duration: 0.1,
            ease: easeInOut
        }
    }
};

const CityListPage = () => {
    const router = useRouter();

    const handleCityClick = (city: string) => {
        const citySlug = city.toLowerCase().replace(/\s+/g, '-');
        router.push(`/${citySlug}`);
    };

    return (
        <div className='flex justify-center items-center mb-10'>
            <div className="flex flex-wrap items-center justify-center gap-4  w-full">
                {cities.map((city) => (
                    <motion.button
                        key={city}
                        onClick={() => handleCityClick(city)}
                        className="
                            bg-gray-400/20 
                            backdrop-blur-md 
                            border rounded-full 
                            px-6 py-3 
                            text-gray-800 
                            font-semibold
                            shadow-md
                            focus:outline-none
                            focus:ring-2
                            focus:ring-gray-500/50
                            cursor-pointer
                        "
                        variants={buttonVariants}
                        initial="idle"
                        animate="idle"
                        whileHover="hover"
                        whileTap="tap"
                        style={{ borderStyle: "solid", borderWidth: "1.5px" }}
                    >
                        {city}
                    </motion.button>
                ))}
            </div>

        </div>
    );
};

export default CityListPage;
