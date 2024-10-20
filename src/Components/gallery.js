// import React from 'react';
// import { Grid, Typography, Container, Card, CardMedia, CardContent, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import '../gallery.css';

// const images = [
//   { url: '/img1.jpg', title: 'Text 1' },
//   { url: '/img2.jpg', title: 'Text 2' },
//   { url: '/img4.jpg', title: 'Text 3' },
//   { url: '/imag5.jpg', title: 'Text 4' },
//   { url: '/img6.jpg', title: 'Text 5' },
//   { url: '/img7.jpg', title: 'Text 6' },
//   { url: '/img1.jpg', title: 'Text 1' },
//   { url: '/img2.jpg', title: 'Text 2' },
//   { url: '/img4.jpg', title: 'Text 3' },
//   { url: '/imag5.jpg', title: 'Text 4' },
//   { url: '/img6.jpg', title: 'Text 5' },
//   { url: '/img7.jpg', title: 'Text 6' },
// ];

// const Gallery = () => {
//   const cardAnimation = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   const textAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 2.1, ease: 'easeOut' } },
//   };

//   return (
//     <Container sx={{ mt: 8, mb: 8 }}>
//       <Box
//         sx={{
//           border: '3px solid #3f51b5',  // Gallery border
//           borderRadius: '16px',         // Rounded corners
//           padding: '20px',           // Padding inside the border
//         }}
//       >
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={textAnimation}
//         >
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ color: '#3f51b5', fontWeight: 'bold', mb: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}
//           >
//             Our Gallery
//           </Typography>
//         </motion.div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={textAnimation}
//         >
//           <Typography
//             variant="h7"
//             align="center"
//             gutterBottom
//             sx={{ fontFamily: 'Montserrat, sans-serif'}}
//           >
//             Sample text. Click to select the text box. Click again or double click to start editing the text.  Quam quisque id diam vel quam elementum pulvinar etiam. Viverra accumsan in nisl nis.
//           </Typography>

//           </motion.div>
        
//         <Grid container spacing={4} sx={{marginTop: '10px'}}>
//           {images.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 whileHover="hover"
//                 variants={cardAnimation}
//               >
//                 <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
//                   <CardMedia sx={{ height: 250 }}> {/* Set a fixed height */}
//                     <img
//                       src={image.url}
//                       alt={image.title}
//                       loading="lazy"  // Lazy loading enabled
//                       style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                     />
//                   </CardMedia>

//                   <CardContent sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
//                     <Typography
//                       variant="h6"
//                       sx={{ color: '#3f51b5', fontWeight: 'bold', letterSpacing: 1 }}
//                     >
//                       {image.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Gallery;


// import React, { useState, useEffect } from 'react';
// import { Grid, Typography, Container, Card, CardMedia, CardContent, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import '../gallery.css';

// const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/gallery'; // Replace with your actual API URL

// const Gallery = () => {
//   const [images, setImages] = useState([]);

//   // Fetch images from the API
//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(API_URL);
        
//         if (!response.ok) throw new Error('Failed to fetch image data');
        
//         const data = await response.json();
//         console.log("------------", data);

//         // Assuming the API returns an array of objects with "imageUrl" and "title" fields
//         setImages(data);  // Adjust the response handling based on your actual API structure
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const cardAnimation = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   const textAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 2.1, ease: 'easeOut' } },
//   };

//   return (
//     <Container sx={{ mt: 8, mb: 8 }}>
//       <Box
//         sx={{
//           border: '3px solid #3f51b5',
//           borderRadius: '16px',
//           padding: '20px',
//         }}
//       >
//         <motion.div initial="hidden" animate="visible" variants={textAnimation}>
//           <Typography
//             variant="h4"
//             align="center"
//             gutterBottom
//             sx={{ color: '#3f51b5', fontWeight: 'bold', mb: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}
//           >
//             Our Gallery
//           </Typography>
//         </motion.div>

//         <motion.div initial="hidden" animate="visible" variants={textAnimation}>
//           <Typography variant="h7" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif'}}>
//             Sample text. Click to select the text box. Click again or double click to start editing the text.
//           </Typography>
//         </motion.div>

//         <Grid container spacing={4} sx={{marginTop: '10px'}}>
//           {images.length > 0 ? (
//             images.map((image, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <motion.div initial="hidden" animate="visible" whileHover="hover" variants={cardAnimation}>
//                   <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
//                     <CardMedia sx={{ height: 250 }}>
//                       <img
//                         src={image.imageUrl} // Assuming your API returns "imageUrl"
//                         alt={image.title}     // Assuming your API returns "title"
//                         loading="lazy"
//                         style={{ objectFit: 'cover', width: '100%', height: '100%' }}
//                       />
//                     </CardMedia>

//                     <CardContent sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
//                       <Typography
//                         variant="h6"
//                         sx={{ color: '#3f51b5', fontWeight: 'bold', letterSpacing: 1 }}
//                       >
//                         {image.title}
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" align="center" sx={{ color: 'red' }}>
//               No images available.
//             </Typography>
//           )}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Card, CardMedia, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../gallery.css';

const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/gallery';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.1, ease: 'easeOut' } },
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch image data');

        const data = await response.json();
        // Assuming the first object contains the array of images
        const fetchedImages = data[0]?.images.map(image => ({
          url: `data:${image.imageData}`, // Format the base64 string properly
          id: image.id,
        }));

        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <Box
        sx={{
          border: '3px solid #3f51b5',  // Gallery border
          borderRadius: '16px',         // Rounded corners
          padding: '20px',              // Padding inside the border
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={textAnimation}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: '#3f51b5', fontWeight: 'bold', mb: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif' }}
          >
            Our Gallery
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ marginTop: '10px' }}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <motion.div initial="hidden" animate="visible" whileHover="hover" variants={cardAnimation}>
                <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                  <CardMedia sx={{ height: 250 }}> {/* Set a fixed height */}
                    <img
                      src={image.url}
                      alt={`Image ${index + 1}`}
                      loading="lazy"  // Lazy loading enabled
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </CardMedia>

                  <CardContent sx={{ backgroundColor: '#f5f5f5', textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ color: '#3f51b5', fontWeight: 'bold', letterSpacing: 1 }}
                    >
                      Image {index + 1}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Gallery;
