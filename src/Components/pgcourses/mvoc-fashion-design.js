import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MvocFashionDesign = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
                Mvoc Fashion Design
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
            '&:hover img': {
              transform: "scale(1.05) translateY(-10px)",
            },
          }}
        >
          <img
            src="ba.jpg"
            alt="Bachelor's of Arts"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            The Master in Fashion Design is a star program, fulfilling the dream of entering the world of fashion and handing out the keys of its main language.
   </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            It is the personal expression of an expert creator who can think up an idea and transform it into a wearable cult piece wanted by those desiring change. If you are looking for a shortcut that will allow you to enter the behind-the-scenes world of the fashion panorama, this could be your first step.
   </Typography>


        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            This program perfectly integrates the words contained in its title, Fashion and Design, into two main areas. The first area is based on research —a full immersion to acquire cultural and technical skills— while the second is practice-driven and aims to realize and present an impressive capsule collection.
    </Typography>


        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            This intensive specialization program is run by teachers from the industry and special guests, granting unlimited access to the Design Lab, computer labs and the immense library. It also includes a starting toolkit and internship opportunities. The two main projects —the first involving the research of figurines and the second transforming those figurines into a capsule collection— can be presented as a high-quality personal portfolio.
  </Typography>

      </Box>
    </Container>
  );
};

export default MvocFashionDesign;
