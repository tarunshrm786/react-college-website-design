import React from "react";
import { Container, Typography, Box } from "@mui/material";

const FashionCourse = () => {
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
          Fashion Design
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
         Focusing primarily on fashion, fashion history and context, the overall course content emphasises the appreciation of context and meaning in the specific field of Fashion design, whilst providing key concepts of fashion evolution and design adaptation. Including theoretical and practical design aspects, the emphasis is placed on research and critical thinking, introducing students to the body of knowledge that supports achievement within a higher education learning environment. Learners are encouraged to record and analyse the key drivers which influence fashion globally, including ecological, environmental, ethical, technological and aesthetic factors.
        </Typography>
        
      </Box>
    </Container>
  );
};

export default  FashionCourse;
