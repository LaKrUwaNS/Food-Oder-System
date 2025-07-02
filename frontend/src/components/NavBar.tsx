'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '@/const/Navbar';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('Home');
    const menuRef = useRef<HTMLDivElement | null>(null);



    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="bg-transparent text-white px-4 md:px-8 py-4 shadow-md relative z-50">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Image
                        src="/MainLOGO.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="w-30 h-auto object-contain"
                    />
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-10 items-center">
                    {menuItems.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`text-2xl font-semibold duration-300 hover:scale-110 ${activePage === name ? 'text-[#F38400]' : 'hover:text-[#F38400]'
                                }`}
                            onClick={() => setActivePage(name)}
                        >
                            {name}
                        </Link>
                    ))}
                </nav>
                <button className="bg-[#F38400] text-white px-4 py-2 rounded-xl text-lg hover:bg-[#732300] transition-all hidden md:block">
                    Login
                </button>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-black border-t border-gray-800 flex flex-col items-center gap-4 py-4 absolute top-16 left-0 right-0 z-50"
                    >
                        {menuItems.map(({ name, href }) => (
                            <Link
                                key={name}
                                href={href}
                                className={`text-xl font-semibold ${activePage === name ? 'text-[#F38400]' : 'hover:text-[#F38400]'
                                    }`}
                                onClick={() => {
                                    setActivePage(name);
                                    setIsOpen(false);
                                }}
                            >
                                {name}
                            </Link>
                        ))}
                        <button
                            className="bg-[#F38400] text-white px-4 py-2 rounded-xl text-base hover:bg-[#732300] transition-all md:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;
