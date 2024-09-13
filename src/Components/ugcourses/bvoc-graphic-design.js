import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocGraphicDesign = () => {

  const sampleData = {
    bannerImage: "/courses/bvoc-graphic-design.png",
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
