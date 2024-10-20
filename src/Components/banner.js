import React, { useState, useEffect } from 'react';
import '../banner.css';

const Banner = () => {
    const [bannerText, setBannerText] = useState('');
    const [bannerImage, setBannerImage] = useState('');

    const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/homebanner'; // Your API URL

    // Fetch banner data on component mount
    useEffect(() => {
        const fetchBannerData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error('Failed to fetch banner data');

                const data = await response.json();

                // Assuming the response structure is similar to what you provided
                setBannerText(data.bannerText); // Set banner text

                // Ensure the base64 image string is correctly formatted
                setBannerImage(`data:image/jpeg;base64,${data.bannerImage}`); // Change to the appropriate image type if needed
            } catch (error) {
                console.error(error);
            }
        };

        fetchBannerData();
    }, []);

    return (
        <div className="banner">
            {/* Adding lazy loading to the banner image */}
            {bannerImage && (
                <img 
                    src={bannerImage} // Use the fetched base64 image
                    alt="Banner" 
                    className="banner-image" 
                    loading="lazy" 
                />
            )}
            <div className="banner-text">
                <h1>{bannerText || 'Loading...'}</h1> {/* Display loading text initially */}
                
            </div>
        </div>
    );
};

export default Banner;
