import React from "react";
import { Container, Typography, Box } from "@mui/material";

const ArchitectureCourse = () => {
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
          Architecture, Engineering & Construction
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
            src="architecture.jpg"
            alt="architecture"
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
            An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
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
         
          <Box className="grid-item" 
            sx={{
              backgroundColor: "#FFE4E1",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "16px",
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: "blue", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Subjects
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "8px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              AutoCAD Electrical 
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              AutoCAD Civil
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              3Ds Max (Max for Engineers)
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              STAAD Pro
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              5D BIM
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              5D BIM Using Navisworks
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              SketchUp
            </Typography>

            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              V-Ray
            </Typography>
          </Box>

         
        </Box>
      </Box>
    </Container>
  );
};

export default ArchitectureCourse;
