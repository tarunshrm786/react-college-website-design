// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const MvocGraphicDesign = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
//                 Mvoc Graphic Design
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
//             The Design Entrepreneurship course curriculum is an amalgamation of a research and market intelligence-driven and hands-on approach, it is unique in the way it examines the fundamental understanding of the Design profession with the entrepreneurial thought process. This course focuses more on practical aspects of learning and proper implementation of an acquired set of skills and entrepreneurial mindset. The learner has options to choose a subject from the five skill electives offered – Fashion, Interior, Jewellery, Product and Design Communication. This course aims to inculcate entrepreneurial skills in the context of critical thinking about the environment, design eco-system, emerging trends, e-commerce, marketing, tools and techniques, and project management insights.
//      </Typography>

//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             The learner is coached to provide a controlling link between various components of a venture and to provide innovative design solutions which are user experience-centric. The course encourages learners to participate in a design entrepreneurial setup; apply knowledge and practical understanding of materials.
//      </Typography>

     
//      <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             Entrepreneurial skills are inculcated in learners through multiple industry interactions and internships along with design projects. Learners are supported by the institution and external agencies if they initiate their own enterprise or business.
//    </Typography>

     
//       </Box>
//     </Container>
//   );
// };

// export default MvocGraphicDesign;


import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MvocGraphicDesign = () => {
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
  //         src="/courses/graphic-design-MVOC.png" // Replace with your image path
  //         alt="Graphic Design"
  //         style={{
  //           width: "100vw", // Full width of the viewport
  //           height: "100%", // Full height of the container
  //           objectFit: "cover", // Ensures the image covers the container
  //           position: "absolute",
  //           top: "0",
  //           left: "0",
  //         }}
  //       />
  //       {/* Text Overlay on Image */}
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
  //           background: "transparent", // No background color
  //           borderRadius: "0", // Remove border radius if any
  //         }}
  //       >
  //         {/* Mvoc Graphic Design */}
  //       </Box>
  //     </Box>

  const sampleData = {
    bannerImage: "/courses/graphic-design-mvoc.png",
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
          {/* <Typography
            variant="h4"
            gutterBottom
            sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}
          >
            Mvoc Graphic Design
          </Typography> */}
          <Typography
            variant="body1"
            sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
          >
            The Design Entrepreneurship course curriculum is an amalgamation of a research and market intelligence-driven and hands-on approach, it is unique in the way it examines the fundamental understanding of the Design profession with the entrepreneurial thought process. This course focuses more on practical aspects of learning and proper implementation of an acquired set of skills and entrepreneurial mindset. The learner has options to choose a subject from the five skill electives offered – Fashion, Interior, Jewellery, Product and Design Communication. This course aims to inculcate entrepreneurial skills in the context of critical thinking about the environment, design eco-system, emerging trends, e-commerce, marketing, tools and techniques, and project management insights.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
          >
            The learner is coached to provide a controlling link between various components of a venture and to provide innovative design solutions which are user experience-centric. The course encourages learners to participate in a design entrepreneurial setup; apply knowledge and practical understanding of materials.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
          >
            Entrepreneurial skills are inculcated in learners through multiple industry interactions and internships along with design projects. Learners are supported by the institution and external agencies if they initiate their own enterprise or business.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MvocGraphicDesign;
