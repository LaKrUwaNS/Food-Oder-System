import React from "react";

interface LocationTagProps {
    name: string;
}

const LocationTag: React.FC<LocationTagProps> = ({ name }) => {

    return (
            <div className="inline-block bg-black text-white cursor-pointer text-sm font-semibold px-4 py-1 rounded-full border border-white whitespace-nowrap transition-transform duration-200 transform hover:scale-105">
                {name}
            </div>
    );
};

export default LocationTag;
