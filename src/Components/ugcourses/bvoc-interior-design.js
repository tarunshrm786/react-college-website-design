import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocInteriorDesign = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
                Bvoc Interior Design
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
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
          The Specialization in Interior & Space Design is a vocational qualification crafted for aspiring interior designers. This course about interior designing blends creative design principles with practical skills and industry insights, ensuring students' professional success in the field. Our interior and design courses, including interior decorating courses and interior decoration design courses, provide comprehensive training. The globally recognized HNC in Interior Design equips students to manage a range of projects, from residential to commercial, with a strategic and sustainable approach. Whether you seek an interior design class or an interior styling course our interior design course is ideal.
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
  );
};

export default BvocInteriorDesign;
