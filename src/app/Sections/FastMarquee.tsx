import React from "react";
import MarqueeImage from "../Sections/MarqueeImage";
import Marquee from "react-fast-marquee";

const FastMarquee = () => {
    const images = [
        "/fastone.png",
        "/googlecloudplatform_.png",
        "/hec2.jpg",
        "/ncai2.png",
        "/nic4.png",
        "/nividia.png",
        "/pasha7.png",
        "/pif-logo.png",
        "/shamsipng5.png",
    ];

    return (
        // <Marquee className="py-10 bg-gray-200 mb-24">
        <Marquee className="py-10 bg-gray-200 mb-12">
            {images.map((src, index) => (
                <MarqueeImage key={index} imageSrc={src} />
            ))}
        </Marquee>
    );
};

export default FastMarquee;
