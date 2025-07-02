'use client';
import React from 'react';

interface FoodCategoryCardProps {
    title: string;
    image: string;
}

const FoodCategoryCard: React.FC<FoodCategoryCardProps> = ({ title, image }) => {
    return (
        <div
            className="
        relative 
        rounded-xl 
        shadow-lg 
        cursor-pointer 
        hover:scale-105 
        transition-transform 
        duration-300

        w-40 h-24           
        sm:w-48 sm:h-28     
        md:w-60 md:h-36    
        "
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

            {/* Centered text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl">{title}</h3>
            </div>
        </div>
    );
};

export default FoodCategoryCard;
