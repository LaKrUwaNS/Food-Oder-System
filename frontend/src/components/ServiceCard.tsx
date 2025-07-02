'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    icon: string;
    label: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, label }) => (
    <motion.div
        className="
        w-1/4 h-full p-4 
        rounded-xl flex items-center justify-center gap-3
        bg-[#1E1E1E]/80 
        border-2 
        border-transparent 
        bg-clip-padding
        transition-all duration-300 ease-in-out
        text-white 
        hover:scale-105
        hover:border-[3px] 
        hover:border-transparent 
        hover:bg-clip-padding
        hover:bg-[#1E1E1E]/90
        relative
        overflow-hidden
    "
        style={{
            borderImage: 'linear-gradient(90deg, #F38400, #FFD700) 1',
        }}
        whileHover={{ scale: 1.05 }}
    >
        <span className="text-3xl">{icon}</span>
        <p className="text-lg font-semibold">{label}</p>
    </motion.div>
);

export default ServiceCard;
