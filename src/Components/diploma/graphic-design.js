import React from "react";
import { Container, Typography, Box } from "@mui/material";

const GraphicCourse = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            marginBottom: "30px", 
            fontFamily: 'Montserrat, sans-serif' 
          }}
        >
          Graphic Design
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
          sx={{ 
            marginTop: "20px", 
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif' 
          }}
        >
            Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs to optimize the user experience.
     </Typography>

      </Box>
    </Container>
  );
};

export default GraphicCourse;
