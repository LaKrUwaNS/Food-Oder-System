'use client';
import React from 'react';

interface ButtonProps {
    name: string;
    onClick?: () => void;
    className?: string;
}

export const LoginButtons = ({ name, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`${className} text-white bg-[#F38400] w-30 h-13 rounded-4xl font-semibold text-xl transition-all duration-500 ease-in-out hover:bg-[#732300] shadow-white`}>
            {name}
        </button>
    );
};
