import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocGraphicDesign = () => {
  return (
    <>

    {/* Full-Width Image Banner with Text */}
    <Box
   sx={{
     width: "100vw", // Full width of the viewport
     height: "500px", // Fixed height for the banner
     position: "relative",
     overflow: "hidden",
   }}
 >
   <img
     src="/courses/bvoc-graphic-design.png" // Replace with your image path
     alt="bvoc-graphic-design"
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
     {/* Bachelor's of AGraphic Designts */}
   </Box>
 </Box>
    
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
       

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
          A Bachelor of Vocation (B.Voc) in Graphic Design is a three-year course that teaches the tools, techniques, and principles of graphic design and visual communication. The course is designed to help students apply these principles to create functional and visually appealing designs.
        </Typography>

       
      </Box>
    </Container>
    </>
  );
};

export default BvocGraphicDesign;
