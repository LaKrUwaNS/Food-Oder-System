// app/[city]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

type Restaurant = {
    id: number;
    name: string;
    cuisine: string;
    rating: number;
};

type CityData = {
    city: string;
    backgroundImage: string;
    restaurants: Restaurant[];
};

// Mock fetch function simulating API call
const fetchCityData = async (city: string): Promise<CityData> => {
    const data: Record<string, CityData> = {
        london: {
            city: 'London',
            backgroundImage:
                'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80',
            restaurants: [
                { id: 1, name: 'The Ledbury', cuisine: 'Modern European', rating: 4.7 },
                { id: 2, name: 'Dishoom', cuisine: 'Indian', rating: 4.6 },
                { id: 3, name: 'Sketch', cuisine: 'French', rating: 4.5 },
            ],
        },
        paris: {
            city: 'Paris',
            backgroundImage:
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80',
            restaurants: [
                { id: 1, name: 'Le Meurice', cuisine: 'French', rating: 4.8 },
                { id: 2, name: 'Septime', cuisine: 'Contemporary French', rating: 4.7 },
                { id: 3, name: 'L’Ambroisie', cuisine: 'French', rating: 4.6 },
            ],
        },
    };

    // simulate delay
    await new Promise((res) => setTimeout(res, 1000));

    return data[city.toLowerCase()] || {
        city: 'Unknown',
        backgroundImage: '',
        restaurants: [],
    };
};

interface PageProps {
    params: {
        city: string;
    };
}

const CityRestaurantsPage: React.FC<PageProps> = ({ params }) => {
    const [cityData, setCityData] = useState<CityData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchCityData(params.city).then((data) => {
            setCityData(data);
            setLoading(false);
        });
    }, [params.city]);

    if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;

    if (!cityData) return <p className="text-center mt-20 text-lg">No data found.</p>;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Large background image */}
            <div
                className="h-96 bg-center bg-cover flex items-center justify-center relative"
                style={{ backgroundImage: `url(${cityData.backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="relative text-white text-5xl font-bold drop-shadow-lg">{cityData.city}</h1>
            </div>

            {/* Restaurant list */}
            <section className="max-w-4xl mx-auto p-6">
                <h2 className="text-3xl font-semibold mb-6">Restaurants in {cityData.city}</h2>
                {cityData.restaurants.length === 0 ? (
                    <p>No restaurants available.</p>
                ) : (
                    <ul className="space-y-4">
                        {cityData.restaurants.map((restaurant) => (
                            <li
                                key={restaurant.id}
                                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
                            >
                                <h3 className="text-xl font-bold">{restaurant.name}</h3>
                                <p className="text-gray-600">Cuisine: {restaurant.cuisine}</p>
                                <p className="text-yellow-500 font-semibold">Rating: {restaurant.rating}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default CityRestaurantsPage;
