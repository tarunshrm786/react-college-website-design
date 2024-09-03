import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Bba = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
        Bachelor of BusinessAdministration (BBA) Online Program
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
            src="bba.jpg"
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
            An online BBA (Bachelor of Business Administration) is an undergraduate degree program in business administration that is delivered entirely online. The program is designed to provide students with a strong foundation in business principles and practices, including management, accounting, finance, marketing, and more.
       </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
          An online BBA is suitable for a range of individuals, including recent high school graduates looking to pursue a career in business, working professionals seeking to advance their careers or switch to a career in business, and entrepreneurs seeking to start or grow their businesses.
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
          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue" }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              3 Years
            </Typography>
          </Box>
         
        </Box>
      </Box>
    </Container>
  );
};

export default Bba;
