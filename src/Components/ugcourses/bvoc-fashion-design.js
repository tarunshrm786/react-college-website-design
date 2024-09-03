import React from "react";
import { Container, Typography, Box } from "@mui/material";

const BvocFashionDesign = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
                Bvoc Fashion Design
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
          Art enables us to find ourselves. So Art is not a thing — it is a way of expression. The arts and humanities encompass a range of subjects that are all concerned with cultural expressions and how it has come to take the forms that exist today. Taking one of our qualifications or courses gives you the opportunity to explore human culture and its history, from the ancient civilizations of Greece and Rome through the Renaissance, to the art, history, literature, music, and religions of the twenty-first century. Arts education encompasses all the visual and performing arts delivered in a standards-based, sequential approach by a qualified instructor as part of the core curriculum. It is studied as an individual discipline as well as integrated into general subject matter teaching.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
          To promote Creative entrepreneurship and employability, NAD’s set up
          Social Design Business Incubator (hubIN) and started the
          CampusToCompany initiative which provides support to students to find
          the right professional opportunities. NAD facilitates the necessary
          mentoring and networking connections required to help foster the
          development of scalable business models based on transformational
          designs and innovative thinking and achieve commercial success through
          'start-up' enterprises.
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
          <Box className="grid-item">
            <Typography variant="h6" sx={{ color: "blue" }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              3 Years
            </Typography>
          </Box>

          <Box className="grid-item">
            <Typography variant="h6" sx={{ color: "blue" }}>
              Language
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              Eng./Hindi
            </Typography>
          </Box>

          <Box className="grid-item">
            <Typography variant="h6" sx={{ color: "blue" }}>
              Certificates
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              Degree
            </Typography>
          </Box>

          <Box className="grid-item">
            <Typography variant="h6" sx={{ color: "blue" }}>
              Subjects
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              Political Science
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px" }}>
              Hindi
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px" }}>
              History
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px" }}>
              Geography
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px" }}>
              Economics
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px" }}>
              English
            </Typography>
          </Box>

          <Box className="grid-item">
            <Typography variant="h6" sx={{ color: "blue" }}>
              Requirements
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px" }}>
              10+2 Certificate
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default BvocFashionDesign;
