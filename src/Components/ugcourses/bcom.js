import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Bcom = () => {

  const sampleData = {
    bannerImage: "/courses/bcom.png",
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



