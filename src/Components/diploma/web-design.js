import React from "react";
import { Container, Typography, Box } from "@mui/material";

const WebdesignCourse = () => {
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
          Web development and design
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
            src="webdesign.jpg"
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
            A Web Designing course focuses on the creation of visually appealing, user-friendly, and functional websites. It encompasses both the aesthetic aspects of design and the technical skills required to bring those designs to life on the web. Here’s an overview of what a Web Designing course might cover:
   </Typography>

        <Typography
          variant="body1"
          sx={{ 
            marginTop: "20px", 
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif' 
          }}
        >
          Design Principles for the Web: Understanding how layout, color, typography, and imagery impact user experience on websites.
HTML/CSS: Learning the fundamental languages for structuring and styling web content.
Responsive Design: Designing websites that adapt and function seamlessly across various devices and screen sizes.
UI/UX Design: Creating interfaces that are intuitive, easy to navigate, and provide an optimal user experience.
Web Design Software: Familiarizing with tools like Adobe XD, Sketch, or Figma for wireframing, prototyping, and designing web layouts.
Basic Coding and Scripting: Introduction to JavaScript or other scripting languages to add interactivity and functionality to web designs.
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
              Duration
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "8px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              2 Years
            </Typography>
          </Box>

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
              Language
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "8px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Eng./Hindi
            </Typography>
          </Box>

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
              Diploma
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "8px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Degree
            </Typography>
          </Box>

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
              Courses Available
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "8px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Diploma in Web Designing
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Advanced Diploma in Web Designing
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Masters Diploma in Web Designing
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: "4px", 
                fontFamily: 'Montserrat, sans-serif' 
              }}
            >
              Professional Diploma in Web Designing
            </Typography>
           
          </Box>

        </Box>
      </Box>
    </Container>
  );
};

export default WebdesignCourse;
