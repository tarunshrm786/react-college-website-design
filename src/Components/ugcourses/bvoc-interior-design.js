import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocInteriorDesign = () => {

  const sampleData = {
    bannerImage: "/courses/bvoc-interior-Designer.png",
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
    </>
  );
};

export default BvocInteriorDesign;
