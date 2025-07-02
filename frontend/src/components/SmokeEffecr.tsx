'use client';

import React from 'react';

const TransparentSmoke: React.FC<{
    src?: string;
    width?: number;
}> = ({
    src = '/Video/Smoke.mp4',
    width = 300
}) => {
        return (
            <div className="pointer-events-none absolute inset-0 z-10 flex justify-center items-end overflow-hidden">
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width={width}
                    className="object-contain"
                    style={{ filter: 'brightness(1.2)', opacity: 0.9 }}
                />
            </div>
        );
    };

export default TransparentSmoke;
