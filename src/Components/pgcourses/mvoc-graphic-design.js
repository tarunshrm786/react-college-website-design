import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MvocGraphicDesign = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
                Mvoc Graphic Design
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
            The Design Entrepreneurship course curriculum is an amalgamation of a research and market intelligence-driven and hands-on approach, it is unique in the way it examines the fundamental understanding of the Design profession with the entrepreneurial thought process. This course focuses more on practical aspects of learning and proper implementation of an acquired set of skills and entrepreneurial mindset. The learner has options to choose a subject from the five skill electives offered – Fashion, Interior, Jewellery, Product and Design Communication. This course aims to inculcate entrepreneurial skills in the context of critical thinking about the environment, design eco-system, emerging trends, e-commerce, marketing, tools and techniques, and project management insights.
     </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            The learner is coached to provide a controlling link between various components of a venture and to provide innovative design solutions which are user experience-centric. The course encourages learners to participate in a design entrepreneurial setup; apply knowledge and practical understanding of materials.
     </Typography>

     
     <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            Entrepreneurial skills are inculcated in learners through multiple industry interactions and internships along with design projects. Learners are supported by the institution and external agencies if they initiate their own enterprise or business.
   </Typography>

     
      </Box>
    </Container>
  );
};

export default MvocGraphicDesign;
