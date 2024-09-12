import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Bcom = () => {
  return (
    <>

         {/* Full-Width Image Banner with Text */}
         <Box
        sx={{
          width: "100vw", // Full width of the viewport
          height: "500px", // Fixed height for the banner
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="/courses/bcom.png" // Replace with your image path
          alt="bcom"
          style={{
            width: "100vw", // Full width of the viewport
            height: "100%", // Full height of the container
            objectFit: "cover", // Ensures the image covers the container
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
        {/* Text Overlay on Image */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white", // Text color
            textAlign: "center",
            fontWeight: "bold", // Makes the text bold
            fontSize: "2rem", // Adjust the size of the text
            fontFamily: "'Montserrat', sans-serif",
            padding: "10px 20px", // Optional: Adds some padding around the text
            background: "transparent", // No background color
            zIndex: "1", // Ensures the text is above the image
          }}
        >
          {/* Bachelor's of Arts */}
        </Box>
      </Box>

    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0", fontFamily: 'Montserrat, sans-serif' }}>
      
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: 'Montserrat, sans-serif'}}
        >
          Bachelor's of Commerce is a postgraduate Bachelor’s degree which is awarded after the successful completion of a two years program. The Bachelor’s degree covers the study of principles of accounting, economic theory, micro and macroeconomics, money and banking systems, knowledge about business, trade, and its characteristics and policies involved thus focusing on commerce, accounting, management, and economics related subjects.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: 'Montserrat, sans-serif'}}
        >
          The B. Com. course offers an opportunity for graduates to acquire theoretical as well as practical inputs in commerce. A Bachelor’s graduate in commerce has the advantage of entering a career either in academics, research, or, alternatively, in other professional areas of commerce and finance such as taxation, consultancy, and financial services.
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
            <Typography variant="h6" sx={{ color: "blue", fontFamily: 'Montserrat, sans-serif' }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: 'Montserrat, sans-serif' }}>
              3 Years
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: 'Montserrat, sans-serif' }}>
              Language
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: 'Montserrat, sans-serif' }}>
              Eng./Hindi
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: 'Montserrat, sans-serif'}}>
              Certificates
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: 'Montserrat, sans-serif' }}>
              Degree
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: 'Montserrat, sans-serif' }}>
              Subjects
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: 'Montserrat, sans-serif'}}>
              All Subjects
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
     </>
  );
};

export default Bcom;


