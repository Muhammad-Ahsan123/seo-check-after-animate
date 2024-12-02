import React from 'react';
import Image from 'next/image';

interface MarqueeImageProps {
    imageSrc: string; // Path relative to the public folder
}

function MarqueeImage({ imageSrc }: MarqueeImageProps) {
    return (
        <div className="px-0">
            <Image
                src={imageSrc} // Path relative to the public folder
                alt="Marquee Image"
                width={100} // Set the appropriate width (adjust as necessary)
                height={110} // Set the appropriate height (adjust as necessary)
                className="sm:h-16 md:h-16 lg:h-16 xl:h-20 h-17 px-1
                mx-12
                z-[1999]
                "
            />
        </div>
    );
}

export default MarqueeImage;
