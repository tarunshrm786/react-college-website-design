import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Array of logo images (replace with your own logo URLs)
const logos = [
  { src: '/affiliation-img/1.png', alt: 'Logo 1' },
  { src: '/affiliation-img/2.png', alt: 'Logo 2' },
  { src: '/affiliation-img/4.jpg', alt: 'Logo 4' },
  { src: '/affiliation-img/5.png', alt: 'Logo 5' },
  { src: '/affiliation-img/6.png', alt: 'Logo 6' },
  { src: '/affiliation-img/7.png', alt: 'Logo 7' },
  { src: '/affiliation-img/8.png', alt: 'Logo 8' },
  { src: '/affiliation-img/9.png', alt: 'Logo 9' },
  { src: '/affiliation-img/10.jpg', alt: 'Logo 10' },
  { src: '/affiliation-img/11.png', alt: 'Logo 11' },
  { src: '/affiliation-img/12.jpg', alt: 'Logo 12' },
];

const Affiliation = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    lazyLoad: 'ondemand',
    centerMode: false, // Disabled for larger screens

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: false, // No center mode on tablets
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false, // Center mode off for mid-sized screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,  // Enable center mode on small screens
          centerPadding: '0px', // Center the image fully without extra padding
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: '100%',
        padding: '2rem',
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3,  fontFamily: 'Montserrat, sans-serif' }}>
        Our Affiliation
      </Typography>

      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 200, // Adjust as needed
              margin: '0 10px', // Spacing between cards
              backgroundColor: 'transparent', // Transparent background
              boxShadow: 'none', // No shadow for transparent background
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // Hide any overflow content
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px', // Padding around the image
                width: '100%', // Ensure the CardContent takes full width
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                style={{
                  maxHeight: '100px', // Fixed height for all logos
                  width: '100%', // Adjust to fit the container
                  objectFit: 'contain', // Ensure the image scales to fit container
                }}
              />
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Affiliation;
