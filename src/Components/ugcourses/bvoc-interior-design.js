import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocInteriorDesign = () => {
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
     Bachelor's of interior-design
   </Box>
 </Box>

    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
      
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
          The Specialization in Interior & Space Design is a vocational qualification crafted for aspiring interior designers. This course about interior designing blends creative design principles with practical skills and industry insights, ensuring students' professional success in the field. Our interior and design courses, including interior decorating courses and interior decoration design courses, provide comprehensive training. The globally recognized HNC in Interior Design equips students to manage a range of projects, from residential to commercial, with a strategic and sustainable approach. Whether you seek an interior design class or an interior styling course our interior design course is ideal.
        </Typography>

        {/* Enhanced DataGrid component with border radius and responsive design */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "40px",
            '& .grid-item': {
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              boxSizing: "border-box",
            },
          }}
        >
        
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default BvocInteriorDesign;
