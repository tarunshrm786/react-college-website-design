import React from "react";
import { Container, Typography, Box } from "@mui/material";

const McomCourse = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
        Master of Commerce
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
            Master of Commerce is a postgraduate master’s degree which is awarded after the successful completion of a two years program. The master’s degree covers the study of principles of accounting, economic theory, micro and macroeconomics, money and banking systems, knowledge about business, trade, and its characteristics and policies involved thus focusing on commerce, accounting, management, and economics related subjects.
   </Typography>

   <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
   The M. Com. course offers an opportunity for graduates to acquire theoretical as well as practical inputs in commerce. A Master’s graduate in commerce has the advantage of entering a career either in academics, research, or, alternatively, in other professional areas of commerce and finance such as taxation, consultancy, and financial services.
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
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              2 Years
            </Typography>
          </Box>

          <Box className="grid-item" 
          sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              Language
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              Eng./Hindi
            </Typography>
          </Box>

          <Box className="grid-item" 
          sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              Certificates
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              Degree
            </Typography>
          </Box>

          <Box className="grid-item" 
          sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}
          >
            <Typography variant="h6" sx={{ color: "blue" }}>
              Requirements
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
            B.Com Degree
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default McomCourse;
