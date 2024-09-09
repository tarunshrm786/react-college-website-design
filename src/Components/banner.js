import React from 'react';
import '../banner.css';

const Banner = () => {
    return (
        <div className="banner">
            {/* Adding lazy loading to the banner image */}
            <img src="banner-1.jpg" alt="Banner" className="banner-image" loading="lazy" />
            <div className="banner-text">
                <h1>Welcome To National Academy of Design</h1>
                <p>A World-class Education Is Applicable For Building The Future</p>
            </div>
        </div>
    );
}

export default Banner;
