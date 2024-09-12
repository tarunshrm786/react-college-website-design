// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const FashionCourse = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography 
//           variant="h4" 
//           gutterBottom 
//           sx={{ 
//             marginBottom: "30px", 
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//           Fashion Design
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
//           sx={{ 
//             marginTop: "20px", 
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//          Focusing primarily on fashion, fashion history and context, the overall course content emphasises the appreciation of context and meaning in the specific field of Fashion design, whilst providing key concepts of fashion evolution and design adaptation. Including theoretical and practical design aspects, the emphasis is placed on research and critical thinking, introducing students to the body of knowledge that supports achievement within a higher education learning environment. Learners are encouraged to record and analyse the key drivers which influence fashion globally, including ecological, environmental, ethical, technological and aesthetic factors.
//         </Typography>
        
//       </Box>
//     </Container>
//   );
// };

// export default  FashionCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const FashionCourse = () => {
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
     src="fashion-design.png" // Replace with your image path
     alt="Bachelor's of Arts"
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
     Fashion Design
   </Box>
 </Box>

      <Container sx={{ padding: "20px", maxWidth: "md" }}>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Focusing primarily on fashion, fashion history and context, the overall course content emphasises the appreciation of context and meaning in the specific field of Fashion design, whilst providing key concepts of fashion evolution and design adaptation. Including theoretical and practical design aspects, the emphasis is placed on research and critical thinking, introducing students to the body of knowledge that supports achievement within a higher education learning environment. Learners are encouraged to record and analyse the key drivers which influence fashion globally, including ecological, environmental, ethical, technological and aesthetic factors.
        </Typography>
      </Container>
   
    </>
  );
};

export default FashionCourse;
