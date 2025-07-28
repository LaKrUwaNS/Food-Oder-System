'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ShoppingCart, User, Search, Bell, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '@/const/Navbar';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activePage, setActivePage] = useState('Home');
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showCartPopup, setShowCartPopup] = useState(false);
    const [showNotificationPopup, setShowNotificationPopup] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const cartRef = useRef<HTMLDivElement | null>(null);
    const notificationRef = useRef<HTMLDivElement | null>(null);

    // Sample cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Pepperoni Pizza', price: 15.99, quantity: 1, image: '/pizza.jpg' },
        { id: 2, name: 'Burger Deluxe', price: 12.50, quantity: 2, image: '/burger.jpg' },
        { id: 3, name: 'Caesar Salad', price: 8.99, quantity: 1, image: '/salad.jpg' }
    ]);

    // Sample notifications
    const notifications = [
        { id: 1, title: 'Order Confirmed', message: 'Your order #1234 has been confirmed', time: '2 min ago', unread: true },
        { id: 2, title: 'Delivery Update', message: 'Your pizza is out for delivery', time: '15 min ago', unread: true },
        { id: 3, title: 'Special Offer', message: '20% off on your next order', time: '1 hour ago', unread: false },
        { id: 4, title: 'Payment Successful', message: 'Payment of $28.49 completed', time: '2 hours ago', unread: false }
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setShowCartPopup(false);
            }
            if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
                setShowNotificationPopup(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Cart functions
    const updateQuantity = (id: number, change: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(0, item.quantity + change) }
                    : item
            ).filter(item => item.quantity > 0)
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getUnreadNotifications = () => {
        return notifications.filter(notification => notification.unread).length;
    };

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 text-white h-fit md:px-8 px-4 py-4 z-50 transition-all duration-300"
            animate={scrolled ? {
                backgroundColor: "rgba(0, 0, 0, 0.98)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(243, 132, 0, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
            } : {
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid rgba(243, 132, 0, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)"
            }}
            style={{
                background: scrolled
                    ? "rgba(0, 0, 0, 0.98)"
                    : "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%)"
            }}
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-600/5 opacity-50"></div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
                        style={{
                            left: `${20 + i * 30}%`,
                            top: `${20 + i * 20}%`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    />
                ))}
            </div>

            <div className="relative flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2 cursor-pointer"
                    whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.5 }
                    }}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <Image
                            src="/MainLOGO.svg"
                            alt="Logo"
                            width={80}
                            height={50}
                            className="object-contain relative z-10"
                        />
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-8 items-center">
                    {menuItems.map(({ name, href }) => (
                        <motion.div key={name} className="relative">
                            <Link
                                href={href}
                                className="text-lg font-semibold relative z-10 transition-all duration-300"
                                onClick={() => setActivePage(name)}
                            >
                                <motion.span
                                    initial={{ scale: 1, y: 0, color: "#ffffff" }}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -2,
                                        color: "#F38400",
                                        transition: {
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10
                                        }
                                    }}
                                    animate={activePage === name ? {
                                        color: "#F38400",
                                        scale: 1.05,
                                        textShadow: "0 0 10px rgba(243, 132, 0, 0.5)"
                                    } : {
                                        scale: 1,
                                        y: 0,
                                        color: "#ffffff"
                                    }}
                                >
                                    {name}
                                </motion.span>
                            </Link>

                            {/* Active indicator */}
                            {activePage === name && (
                                <motion.div
                                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                                    layoutId="activeIndicator"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 30
                                    }}
                                />
                            )}

                            {/* Hover glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-orange-400/10 rounded-lg blur-md -z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            />
                        </motion.div>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {/* Search Button */}
                    <motion.button
                        onClick={() => setShowSearch(!showSearch)}
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Search size={20} className="text-orange-400" />
                    </motion.button>

                    {/* Search Input */}
                    <AnimatePresence>
                        {showSearch && (
                            <motion.input
                                initial={{ width: 0, opacity: 0, x: 20 }}
                                animate={{
                                    width: "auto",
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                exit={{ width: 0, opacity: 0, x: 20 }}
                                type="text"
                                placeholder="Search restaurants..."
                                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent backdrop-blur-sm"
                            />
                        )}
                    </AnimatePresence>

                    {/* Notifications */}
                    <div className="relative" ref={notificationRef}>
                        <motion.button
                            className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowNotificationPopup(!showNotificationPopup)}
                        >
                            <Bell size={20} className="text-orange-400" />
                            {getUnreadNotifications() > 0 && (
                                <motion.span
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            )}
                        </motion.button>

                        {/* Notification Popup */}
                        <AnimatePresence>
                            {showNotificationPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    className="absolute right-0 top-full mt-2 w-80 bg-black/95 backdrop-blur-xl border border-orange-500/20 rounded-xl shadow-2xl overflow-hidden"
                                >
                                    <div className="p-4 border-b border-orange-500/20">
                                        <h3 className="text-lg font-semibold text-white">Notifications</h3>
                                        <p className="text-sm text-gray-400">{getUnreadNotifications()} unread</p>
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {notifications.map((notification) => (
                                            <motion.div
                                                key={notification.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`p-4 border-b border-gray-800 hover:bg-white/5 cursor-pointer transition-colors ${notification.unread ? 'bg-orange-500/5' : ''
                                                    }`}
                                            >
                                                <div className="flex items-start gap-3">
                                                    {notification.unread && (
                                                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    )}
                                                    <div className="flex-1">
                                                        <h4 className="font-medium text-white">{notification.title}</h4>
                                                        <p className="text-sm text-gray-300 mt-1">{notification.message}</p>
                                                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="p-4 border-t border-orange-500/20">
                                        <button className="w-full py-2 text-center text-orange-400 hover:text-orange-300 transition-colors">
                                            View All Notifications
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Cart */}
                    <div className="relative" ref={cartRef}>
                        <motion.button
                            className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowCartPopup(!showCartPopup)}
                        >
                            <ShoppingCart size={20} className="text-orange-400" />
                            {getTotalItems() > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                    {getTotalItems()}
                                </span>
                            )}
                        </motion.button>

                        {/* Cart Popup */}
                        <AnimatePresence>
                            {showCartPopup && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    className="absolute right-0 top-full mt-2 w-96 bg-black/95 backdrop-blur-xl border border-orange-500/20 rounded-xl shadow-2xl overflow-hidden"
                                >
                                    <div className="p-4 border-b border-orange-500/20">
                                        <h3 className="text-lg font-semibold text-white">Shopping Cart</h3>
                                        <p className="text-sm text-gray-400">{getTotalItems()} items</p>
                                    </div>

                                    {cartItems.length === 0 ? (
                                        <div className="p-8 text-center">
                                            <ShoppingCart size={48} className="text-gray-600 mx-auto mb-4" />
                                            <p className="text-gray-400">Your cart is empty</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="max-h-80 overflow-y-auto">
                                                {cartItems.map((item) => (
                                                    <motion.div
                                                        key={item.id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="p-4 border-b border-gray-800 hover:bg-white/5"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                                                <span className="text-orange-400 font-bold">
                                                                    {item.name.charAt(0)}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <h4 className="font-medium text-white">{item.name}</h4>
                                                                <p className="text-sm text-gray-300">${item.price}</p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, -1)}
                                                                    className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center text-white"
                                                                >
                                                                    <Minus size={12} />
                                                                </button>
                                                                <span className="w-8 text-center text-white">{item.quantity}</span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, 1)}
                                                                    className="w-6 h-6 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center text-white"
                                                                >
                                                                    <Plus size={12} />
                                                                </button>
                                                                <button
                                                                    onClick={() => removeItem(item.id)}
                                                                    className="ml-2 p-1 text-red-400 hover:text-red-300"
                                                                >
                                                                    <Trash2 size={16} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <div className="p-4 border-t border-orange-500/20">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-lg font-semibold text-white">Total:</span>
                                                    <span className="text-lg font-bold text-orange-400">${getTotalPrice()}</span>
                                                </div>
                                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                                                    Checkout
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Login Button */}
                    <motion.button
                        className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-xl text-lg font-semibold relative overflow-hidden"
                        initial={{
                            scale: 1,
                            boxShadow: "0 4px 15px rgba(243, 132, 0, 0.3)"
                        }}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 8px 25px rgba(243, 132, 0, 0.5)",
                            backgroundColor: "#e07600",
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 10
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            <User size={18} />
                            Login
                        </span>
                    </motion.button>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </motion.div>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                staggerChildren: 0.1
                            }
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                            transition: { duration: 0.2 }
                        }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-orange-500/20 shadow-2xl"
                    >
                        {/* Mobile menu background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent"></div>

                        <div className="relative flex flex-col items-center gap-6 py-8">
                            {/* Mobile Search */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                className="w-full px-6"
                            >
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search restaurants..."
                                        className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-sm"
                                    />
                                </div>
                            </motion.div>

                            {/* Mobile Nav Items */}
                            {menuItems.map(({ name, href }) => (
                                <motion.div
                                    key={name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20
                                        }
                                    }}
                                    className="relative"
                                >
                                    <Link
                                        href={href}
                                        className={`text-xl font-semibold transition-all duration-300 ${activePage === name ? 'text-orange-400' : 'text-white hover:text-orange-400'
                                            }`}
                                        onClick={() => {
                                            setActivePage(name);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {name}
                                        </motion.span>
                                    </Link>

                                    {activePage === name && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                                            layoutId="mobileActiveIndicator"
                                        />
                                    )}
                                </motion.div>
                            ))}

                            {/* Mobile Actions */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                className="flex items-center gap-4 mt-4"
                            >
                                <motion.button
                                    className="p-3 bg-white/10 rounded-xl relative"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowNotificationPopup(!showNotificationPopup)}
                                >
                                    <Bell size={24} className="text-orange-400" />
                                    {getUnreadNotifications() > 0 && (
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                    )}
                                </motion.button>

                                <motion.button
                                    className="relative p-3 bg-white/10 rounded-xl"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowCartPopup(!showCartPopup)}
                                >
                                    <ShoppingCart size={24} className="text-orange-400" />
                                    {getTotalItems() > 0 && (
                                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                                            {getTotalItems()}
                                        </span>
                                    )}
                                </motion.button>
                            </motion.div>

                            {/* Mobile Login Button */}
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 20
                                    }
                                }}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold mt-2 flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(false)}
                            >
                                <User size={20} />
                                Login
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default NavBar;