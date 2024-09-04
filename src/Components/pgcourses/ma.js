import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Macourse = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
        Master of Arts
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
            Art enables us to find ourselves. So Art is not a thing — it is a way of expression. The arts and humanities encompasses a range of subjects that are all concerned with cultural expressions and how it has come to take the forms that exist today. Taking one of our qualifications or courses gives you the opportunity to explore human culture and its history, from the ancient civilizations of Greece and Rome through the Renaissance, to the art, history, literature, music and religions of the twenty-first century. Arts education encompasses all the visual and performing arts delivered in a standards-based, sequential approach by a qualified instructor as part of the core curriculum. It is studied as an individual discipline as well as integrated into general subject matter teaching.
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
            B.A. Degree
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Macourse;
