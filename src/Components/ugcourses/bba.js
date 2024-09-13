import React from "react";
import { Container, Typography, Box } from "@mui/material";
//import { Montserrat } from '@fontsource/montserrat'; // Import Montserrat


const Bba = () => {

  const sampleData = {
    bannerImage: "bba.jpg",
    bannerText: " "
  };
  
  const { bannerImage, bannerText} = sampleData;

  return (
    <>


<Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={bannerImage}
          alt={bannerText}
          sx={{
            width: "100%",
            height: "300px",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "transparent", // Removed dim layer
            textAlign: "center",
            padding: 2,
            fontSize: { xs: "1rem", sm: "1.5rem" }, // Responsive font size
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          {bannerText}
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

