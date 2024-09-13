// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const MscCourse = () => {
//   return (
//     <Container>
      
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
//         Master of Science
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
        
//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             M.Sc. (Master of Science) is a 2 years post-graduate degree program. This program is offered in a wide range of Specialized fields of Science such as Physics, Chemistry, Botany, Zoology, Mathematics, Biotechnology, Microbiology, Environmental Sciences, Food Sciences, Life Sciences, and so on. However, you will have an option to choose from Physics, Mathematics, Chemistry, Botany, and Zoology.
//   </Typography>

//    <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif"}}
//         >
//             A Master of Science degree prepares students for scientific and professional competency. In their chosen specialization, the students gain advanced theoretical and practical knowledge. The program is offered as semester-based or yearly based depending on the University’s policy.
//   </Typography>

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
//             B.Sc. Degree
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default MscCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MscCourse = () => {
  // return (
  //   <>
  //     {/* Full-Width Image Banner with Text */}
  //     <Box
  //       sx={{
  //         width: "100vw", // Full width of the viewport
  //         height: "500px", // Fixed height for the banner
  //         position: "relative",
  //         overflow: "hidden",
  //       }}
  //     >
  //       <img
  //         src="/courses/Msc.png"
  //         alt="Master of Science"
  //         style={{
  //           width: "100vw", // Full width of the viewport
  //           height: "100%", // Full height of the container
  //           objectFit: "cover", // Ensures the image covers the container
  //           position: "absolute",
  //           top: "0",
  //           left: "0",
  //         }}
  //       />
  //       {/* Text Overlay on Image without Background */}
  //       <Box
  //         sx={{
  //           position: "absolute",
  //           top: "50%",
  //           left: "50%",
  //           transform: "translate(-50%, -50%)",
  //           color: "white", // Text color
  //           textAlign: "center",
  //           fontWeight: "bold", // Makes the text bold
  //           fontSize: "2rem", // Adjust the size of the text
  //           fontFamily: "'Montserrat', sans-serif",
  //           padding: "10px 20px", // Optional: Adds some padding around the text
  //         }}
  //       >
  //         {/* Master of Science (M.Sc.) */}
  //       </Box>
  //     </Box>

  const sampleData = {
    bannerImage: "/courses/Msc.png",
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

      {/* Content Section */}
      <Container>
        <Box sx={{ textAlign: "center", margin: "20px 0" }}>
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              textAlign: "justify",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            M.Sc. (Master of Science) is a 2 years post-graduate degree program.
            This program is offered in a wide range of Specialized fields of Science such
            as Physics, Chemistry, Botany, Zoology, Mathematics, Biotechnology, Microbiology,
            Environmental Sciences, and more. You can choose from Physics, Mathematics, Chemistry, Botany, and Zoology.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              textAlign: "justify",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            A Master of Science degree prepares students for scientific and professional competency.
            Students gain advanced theoretical and practical knowledge in their chosen specialization.
            The program can be semester-based or yearly-based depending on the university's policy.
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
                B.Sc. Degree
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MscCourse;
