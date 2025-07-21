// app/[city]/page.jsx
import React from 'react';

const CityPage = ({ params }: { params: { city: string } }) => {
    const { city } = params;

    const cityFormatted = city.charAt(0).toUpperCase() + city.slice(1);

    return (
        <section  className="w-full h-screen p-6 text-center overflow-hidden ">
            <h1 className="text-3xl font-bold mb-4">Welcome to {cityFormatted}</h1>
            <p className="text-gray-700">We provide services in {cityFormatted} city.</p>
        </section>
    );
};

export default CityPage;
