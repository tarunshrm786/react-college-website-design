// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const Bsc = () => {

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
//         Bachelor's of Science
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
//             src="bsc.jpg"
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
//           sx={{ marginTop: "20px", textAlign: "justify" }}
//         >
//             B.Sc. (Bachelor of Science) is a 2 years post-graduate degree program from the University of Rajasthan. This program is offered in a wide range of Specialized fields of Science such as Physics, Chemistry, Botany, Zoology, Mathematics, Biotechnology, Microbiology, Environmental Sciences, Food Sciences, Life Sciences, and so on. However, you will have the option to choose from Physics, Mathematics, Chemistry, Botany, and Zoology.
//       </Typography>

//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify" }}
//         >
//           A Bachelor’s of Science degree prepares students for scientific and professional competency. In their chosen specialization, the students gain advanced theoretical and practical knowledge. The program is offered as semester-based or yearly based depending on the University’s policy. 
//         </Typography>

      
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
//           <Box className="grid-item" sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}>
//             <Typography variant="h6" sx={{ color: "blue" }}>
//               Duration
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px" }}>
//               3 Years
//             </Typography>
//           </Box>

//           <Box className="grid-item" sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}>
//             <Typography variant="h6" sx={{ color: "blue" }}>
//               Language
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px" }}>
//               Eng./Hindi
//             </Typography>
//           </Box>

//           <Box className="grid-item" sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}>
//             <Typography variant="h6" sx={{ color: "blue" }}>
//               Certificates
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px" }}>
//               Degree
//             </Typography>
//           </Box>

//           <Box className="grid-item" sx={{
//             backgroundColor: "#FFE4E1",
//             borderRadius: "8px", // Optional: adds rounded corners for a softer look
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
//             padding: "16px", // Optional: adds padding inside the box for better spacing
//           }}>
//             <Typography variant="h6" sx={{ color: "blue" }}>
//               Subjects
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "8px" }}>
//             Chemistry
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "4px" }}>
//             Botany
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "4px" }}>
//             Zoology
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "4px" }}>
//             Maths
//             </Typography>
//             <Typography variant="body1" sx={{ marginTop: "4px" }}>
//               Physics
//             </Typography>
//           </Box>

//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Bsc;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

// Ensure you have imported the font in your project, e.g., via index.html or @import in CSS
// Example: <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
const sampleData = {
  bannerImage: "/courses/bsc.png",
  bannerText: " "
};

const { bannerImage, bannerText} = sampleData;

const Bsc = () => {
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
      <Box sx={{ textAlign: "center", margin: "20px 0", fontFamily: "'Montserrat', sans-serif" }}>
       
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
          B.Sc. (Bachelor of Science) is a 2 years post-graduate degree program from the University of Rajasthan. This program is offered in a wide range of Specialized fields of Science such as Physics, Chemistry, Botany, Zoology, Mathematics, Biotechnology, Microbiology, Environmental Sciences, Food Sciences, Life Sciences, and so on. However, you will have the option to choose from Physics, Mathematics, Chemistry, Botany, and Zoology.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
        >
          A Bachelor’s of Science degree prepares students for scientific and professional competency. In their chosen specialization, the students gain advanced theoretical and practical knowledge. The program is offered as semester-based or yearly based depending on the University’s policy. 
        </Typography>

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
            <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
              Duration
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
              3 Years
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
              Language
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
              Eng./Hindi
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
              Certificates
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
              Degree
            </Typography>
          </Box>

          <Box className="grid-item" sx={{
            backgroundColor: "#FFE4E1",
            borderRadius: "8px", // Optional: adds rounded corners for a softer look
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds a subtle 3D shadow
            padding: "16px", // Optional: adds padding inside the box for better spacing
          }}>
            <Typography variant="h6" sx={{ color: "blue", fontFamily: "'Montserrat', sans-serif" }}>
              Subjects
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "8px", fontFamily: "'Montserrat', sans-serif" }}>
              Chemistry
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px", fontFamily: "'Montserrat', sans-serif" }}>
              Botany
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px", fontFamily: "'Montserrat', sans-serif" }}>
              Zoology
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px", fontFamily: "'Montserrat', sans-serif" }}>
              Maths
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "4px", fontFamily: "'Montserrat', sans-serif" }}>
              Physics
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Bsc;
