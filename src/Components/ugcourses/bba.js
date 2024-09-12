import React from "react";
import { Container, Typography, Box } from "@mui/material";
//import { Montserrat } from '@fontsource/montserrat'; // Import Montserrat

const Bba = () => {
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
     src="/courses/BBA.png" // Replace with your image path
     alt="BBA"
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
     {/* Bachelor of Business Administration (BBA) Online Program */}
   </Box>
 </Box>

    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0", fontFamily: 'Montserrat, sans-serif' }}>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: 'Montserrat, sans-serif' }}
        >
          An online BBA (Bachelor of Business Administration) is an undergraduate degree program in business administration that is delivered entirely online. The program is designed to provide students with a strong foundation in business principles and practices, including management, accounting, finance, marketing, and more.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: 'Montserrat, sans-serif' }}
        >
          An online BBA is suitable for a range of individuals, including recent high school graduates looking to pursue a career in business, working professionals seeking to advance their careers or switch to a career in business, and entrepreneurs seeking to start or grow their businesses.
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
          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: 'Montserrat, sans-serif' }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: 'Montserrat, sans-serif' }}>
              3 Years
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Bba;

