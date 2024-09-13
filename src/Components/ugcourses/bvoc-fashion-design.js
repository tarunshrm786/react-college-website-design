import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocFashionDesign = () => {

  const sampleData = {
    bannerImage: "/courses/bvoc-fashion-design.png",
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
         Fashion has become an important part of people’s life. The world of fashion could gain more popularity with the wide spread use of social media. According to a recent survey, more than 5 lakh students opt for a career in fashion designing every year in India. A career in this profession has various job opportunities.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
          Let us have a look at some important aspects such as eligibility for fashion designing courses, what does a fashion designer do, the kind of scope it offers, types of courses available in India and a few related skills which will help those who are interested in this profession.
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

export default BvocFashionDesign;
