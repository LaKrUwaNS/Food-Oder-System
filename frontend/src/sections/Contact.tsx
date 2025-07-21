import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Form */}
            <form
                action=""
                className="absolute bottom-[5%] left-[5%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] backdrop-blur-2xl border-2 border-[#F38400] bg-gray-500/30 p-6 md:p-8 rounded-2xl shadow-2xl space-y-5 transition-all duration-300 z-10"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-[#F38400]">Get in Touch</h2>

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F38400] transition"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 bg-white text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F38400] transition"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Enter your message"
                        className="w-full px-4 py-3 border bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F38400] transition resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#F38400] hover:bg-[#d77300] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
                >
                    Send Message
                </button>
            </form>

            {/* Image */}
            <div>
                <Image
                    src="/SERVICE/chef.png"
                    alt="Contact Us"
                    width={500}
                    height={300}
                    className="object-cover absolute right-0 bottom-0 max-w-[40%] hidden sm:block"
                />
            </div>
        </div>
    )
}

export default Contact
