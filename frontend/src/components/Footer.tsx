"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <div className="relative w-fit">
                            <Image
                                src="/MainLOGO.svg"
                                alt="Lanka Eats Logo"
                                width={300}
                                height={300}
                                className="relative z-10"
                            />
                        </div>
                        <p className="text-gray-400">
                            Your favorite Sri Lankan dishes, delivered fresh and fast.
                        </p>
                    </div>


                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Company</h4>
                        <div className="space-y-2 text-gray-400">
                            <Link href="/about" className="block hover:text-orange-400 transition-colors">
                                About Us
                            </Link>
                            <Link href="/careers" className="block hover:text-orange-400 transition-colors">
                                Careers
                            </Link>
                            <Link href="/press" className="block hover:text-orange-400 transition-colors">
                                Press
                            </Link>
                            <Link href="/blog" className="block hover:text-orange-400 transition-colors">
                                Blog
                            </Link>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Support</h4>
                        <div className="space-y-2 text-gray-400">
                            <Link href="/help" className="block hover:text-orange-400 transition-colors">
                                Help Center
                            </Link>
                            <Link href="/contact" className="block hover:text-orange-400 transition-colors">
                                Contact Us
                            </Link>
                            <Link href="/safety" className="block hover:text-orange-400 transition-colors">
                                Safety
                            </Link>
                            <Link href="/terms" className="block hover:text-orange-400 transition-colors">
                                Terms
                            </Link>
                        </div>
                    </div>

                    {/* App Buttons */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Get the App</h4>
                        <div className="space-y-3">
                                <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    <Link href="/NotCreated">
                                        📱 Download iOS
                                    </Link>
                                </button>

                                <button className="w-full bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    <Link href="/NotCreated">
                                        🤖 Download Android
                                    </Link>
                                </button>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Lanka Eats. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
