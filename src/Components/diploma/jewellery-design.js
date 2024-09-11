// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const JewelleryCourse = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography 
//           variant="h4" 
//           gutterBottom 
//           sx={{ 
//             marginBottom: "30px", 
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//           Jewellery Design
//         </Typography>
//         <Box
//           sx={{
//             display: "inline-block",
//             overflow: "hidden",
//             borderRadius: "15px",
//             boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
//             '&:hover img': {
//               transform: "scale(1.05) translateY(-10px)",
//             },
//           }}
//         >
//           <img
//             src="ba.jpg"
//             alt="Bachelor's of Arts"
//             style={{
//               width: "100%",
//               height: "400px",
//               objectFit: "cover",
//               transition: "transform 0.3s ease",
//             }}
//           />
//         </Box>
//         <Typography
//           variant="body1"
//           sx={{ 
//             marginTop: "20px", 
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//             Learning rendering for yellow and white metals, as well as faceted and cabochon gemstones and pearls
//             Illustrating rings and other pieces of jewellery.
//    </Typography>

//         <Typography
//           variant="body1"
//           sx={{ 
//             marginTop: "20px", 
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//           Learning about sources for jewellery design inspiration and developing motifs to create jewellery objects
// Rendering jewellery designs using drafting tools for display as a participant in the final class design exhibition
// Creating a portfolio of class projects and custom designs that is ready for presentation to potential clients and employers.
//         </Typography>

//       </Box>
//     </Container>
//   );
// };

// export default JewelleryCourse;


import React from "react";
import { Container, Typography, Box } from "@mui/material";

const JewelleryCourse = () => {
  return (
    <>

    {/* Full-Width Image Banner with Text */}
    <Box
   sx={{
     width: "100vw", // Full width of the viewport
     height: "400px", // Fixed height for the banner
     position: "relative",
     overflow: "hidden",
   }}
 >
   <img
     src="ba.jpg" // Replace with your image path
     alt="Bachelor's of Arts"
     style={{
       width: "100vw", // Full width of the viewport
       height: "100%", // Full height of the container
       objectFit: "cover", // Ensures the image covers the container
       position: "absolute",
       top: "0",
       left: "0",
     }}
   />
   {/* Text Overlay on Image */}
   <Box
     sx={{
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%)",
       color: "white", // Text color
       textAlign: "center",
       fontWeight: "bold", // Makes the text bold
       fontSize: "2rem", // Adjust the size of the text
       fontFamily: "'Montserrat', sans-serif",
       padding: "10px 20px", // Optional: Adds some padding around the text
       background: "transparent", // No background color
       zIndex: "1", // Ensures the text is above the image
     }}
   >
     Jewellery Design
   </Box>
 </Box>

      <Container sx={{ padding: "20px", maxWidth: "md" }}>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Learning rendering for yellow and white metals, as well as faceted and cabochon gemstones and pearls. Illustrating rings and other pieces of jewellery.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Learning about sources for jewellery design inspiration and developing motifs to create jewellery objects. Rendering jewellery designs using drafting tools for display as a participant in the final class design exhibition. Creating a portfolio of class projects and custom designs that is ready for presentation to potential clients and employers.
        </Typography>
      </Container>
    </>
  );
};

export default JewelleryCourse;
