// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const McomCourse = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
//         Master of Commerce
//         </Typography>
//         <Box
//           sx={{
//             display: "inline-block",
//             overflow: "hidden",
//             borderRadius: "15px",
//             boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
//             '&:hover img': {
//               transform: "scale(1.05) translateY(-10px)",
//             },
//           }}
//         >
//           <img
//             src="ba.jpg"
//             alt="Bachelor's of Arts"
//             style={{
//               width: "100%",
//               height: "400px",
//               objectFit: "cover",
//               transition: "transform 0.3s ease",
//             }}
//           />
//         </Box>
  //       <Typography
  //         variant="body1"
  //         sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
  //       >
  //           Master of Commerce is a postgraduate master’s degree which is awarded after the successful completion of a two years program. The master’s degree covers the study of principles of accounting, economic theory, micro and macroeconomics, money and banking systems, knowledge about business, trade, and its characteristics and policies involved thus focusing on commerce, accounting, management, and economics related subjects.
  //  </Typography>

  //  <Typography
  //         variant="body1"
  //         sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
  //       >
  //  The M. Com. course offers an opportunity for graduates to acquire theoretical as well as practical inputs in commerce. A Master’s graduate in commerce has the advantage of entering a career either in academics, research, or, alternatively, in other professional areas of commerce and finance such as taxation, consultancy, and financial services.
  //  </Typography>

//         {/* Enhanced DataGrid component with border radius and responsive design */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             marginTop: "40px",
//             '& .grid-item': {
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "16px",
//               boxSizing: "border-box",
//             },
//           }}
//         >

//           <Box className="grid-item" 
//            sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}
//           >
//             <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
//               Duration
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
//               2 Years
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//           sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}
//           >
//             <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
//               Language
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
//               Eng./Hindi
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//           sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}
//           >
//             <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
//               Certificates
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
//               Degree
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//           sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}
//           >
//             <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
//               Requirements
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
//             B.Com Degree
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default McomCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const McomCourse = () => {
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
          src="/courses/MCOM.png"
          alt="Master of Commerce"
          style={{
            width: "100vw", // Full width of the viewport
            height: "100%", // Full height of the container
            objectFit: "cover", // Ensures the image covers the container
            position: "absolute",
            top: "0",
            left: "0",
          }}
        />
        {/* Text Overlay on Image without Background */}
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
          }}
        >
          {/* Master of Commerce (M.Com) */}
        </Box>
      </Box>

      {/* Content Section */}
      <Container>
        <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
            Master of Commerce is a postgraduate master’s degree which is awarded after the successful completion of a two years program. The master’s degree covers the study of principles of accounting, economic theory, micro and macroeconomics, money and banking systems, knowledge about business, trade, and its characteristics and policies involved thus focusing on commerce, accounting, management, and economics related subjects.
   </Typography>

   <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
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
            }}
          >
            {/* Grid Items */}
            <Box
              className="grid-item"
              sx={{
                backgroundColor: "#FFE4E1",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}
              >
                Duration
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}
              >
                2 Years
              </Typography>
            </Box>

            <Box
              className="grid-item"
              sx={{
                backgroundColor: "#FFE4E1",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}
              >
                Language
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}
              >
                Eng./Hindi
              </Typography>
            </Box>

            <Box
              className="grid-item"
              sx={{
                backgroundColor: "#FFE4E1",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}
              >
                Certificates
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}
              >
                Degree
              </Typography>
            </Box>

            <Box
              className="grid-item"
              sx={{
                backgroundColor: "#FFE4E1",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                padding: "16px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}
              >
                Requirements
              </Typography>
              <Typography
                variant="body1"
                sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}
              >
                B.Com Degree
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default McomCourse;
