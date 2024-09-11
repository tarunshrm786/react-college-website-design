import React from 'react';
import Slider from 'react-slick';
import '../services.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
    {
        title: 'Bachelor of Arts (B.A.)',
        //description: 'Comprehensive program covering various arts disciplines.',
        imgSrc: 'img1.jpg',
        carousel: 'carousel1.jpg' // Replace with actual image path or URL
    },
    {
        title: 'Bachelor of Commerce (B.Com)',
        //description: 'Detailed program focusing on commerce and business.',
        imgSrc: 'img2.jpg',
        carousel: 'carousel2.jpg' // Replace with actual image path or URL
    },
    {
        title: 'Master of Arts (M.A.)',
        // description: 'Advanced study in various arts disciplines.',
        imgSrc: 'img3.jpg',
        carousel: 'carousel3.jpg' // Replace with actual image path or URL
    },
    {
        title: 'Master of Commerce (M.Com)',
        //description: 'Advanced program focusing on commerce and business.',
        imgSrc: 'img4.jpg',
        carousel: 'carousel4.jpg' // Replace with actual image path or URL
    },
    {
        title: 'Architecture and Interior Design',
        //description: 'Program focused on architectural and interior design principles.',
        imgSrc: 'imag5.jpg',
        carousel: 'carousel5.jpg' // Replace with actual image path or URL
    },
    {
        title: 'Web Development and Design',
        //description: 'Comprehensive program covering web development and design techniques.',
        imgSrc: 'img6.jpg',
        carousel: 'carousel6.jpg' // Replace with actual image path or URL
    }
];


const Services = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,          // Enables automatic sliding
        autoplaySpeed: 3000,     // Time interval for automatic sliding (in milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="services">
            <h2>Our Courses</h2>
            <Slider {...settings}>
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        {/* Adding lazy loading for better performance */}
                        <img 
                            src={service.imgSrc} 
                            alt={service.title} 
                            className="service-image" 
                            loading="lazy"  // Lazy load image
                        />
                        <div className="service-info">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Services;
