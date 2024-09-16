// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const GraphicCourse = () => {
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
//           Graphic Design
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
//             Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs to optimize the user experience.
//      </Typography>

//       </Box>
//     </Container>
//   );
// };

// export default GraphicCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

// const GraphicCourse = () => {
//   return (
//     <>

//     {/* Full-Width Image Banner with Text */}
//     <Box
//    sx={{
//      width: "100vw", // Full width of the viewport
//      height: "500px", // Fixed height for the banner
//      position: "relative",
//      overflow: "hidden",
//    }}
//  >
//    <img
//       src="graphic-banner.png" // Replace with your image path
//     //  src="sample.jpg"
//      alt="Graphic"
//      style={{
//        width: "100vw", // Full width of the viewport
//        height: "100%", // Full height of the container
//        objectFit: "cover", // Ensures the image covers the container
//        position: "absolute",
//        top: "0",
//        left: "0",
//      }}
//    />
//    {/* Text Overlay on Image */}
//    <Box
//      sx={{
//        position: "absolute",
//        top: "50%",
//        left: "50%",
//        transform: "translate(-50%, -50%)",
//        color: "white", // Text color
//        textAlign: "center",
//        fontWeight: "bold", // Makes the text bold
//        fontSize: "2rem", // Adjust the size of the text
//        fontFamily: "'Montserrat', sans-serif",
//        padding: "10px 20px", // Optional: Adds some padding around the text
//        background: "transparent", // No background color
//        zIndex: "1", // Ensures the text is above the image
//      }}
//    >
//      Graphic Design
//    </Box>
//  </Box>

const sampleData = {
  bannerImage: "/graphic-banner.png",
  bannerText: " "
};

const { bannerImage, bannerText} = sampleData;

const GraphicCourse = () => {
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


      <Container sx={{ padding: "20px", maxWidth: "md" }}>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users’ specific needs and focus on the logic of displaying elements in interactive designs to optimize the user experience.
        </Typography>
      </Container>
    </>
  );
};

export default GraphicCourse;
