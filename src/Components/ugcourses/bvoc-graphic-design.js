import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocGraphicDesign = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
                Bvoc Graphic Design
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
          A Bachelor of Vocation (B.Voc) in Graphic Design is a three-year course that teaches the tools, techniques, and principles of graphic design and visual communication. The course is designed to help students apply these principles to create functional and visually appealing designs.
        </Typography>

       
      </Box>
    </Container>
  );
};

export default BvocGraphicDesign;
