import React from 'react';
import Slider from 'react-slick';
import '../services.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const servicesData = [
    {
        title: 'Bachelor of Science in Computer Science',
        description: 'Comprehensive program',
        imgSrc: 'img6.jpg'
    },
    {
        title: 'Bachelor of Business Administration',
        description: 'Comprehensive program covering of Business.',
        imgSrc: 'img2.jpg'
    },
    {
        title: 'Bachelor of Arts in Psychology',
        description: 'Comprehensive program covering of Psychology.',
        imgSrc: 'img4.jpg'
    },
    {
        title: 'Bachelor of Business Administration',
        description: 'Comprehensive program.',
        imgSrc: 'img6.jpg'
    },
    {
        title: 'Bachelor of Arts in Math',
        description: 'Comprehensive program covering of Math.',
        imgSrc: 'img7.jpg'
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
                        <img src={service.imgSrc} alt={service.title} className="service-image" />
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
