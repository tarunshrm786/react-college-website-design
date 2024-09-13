// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const MvocFashionDesign = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: "'Montserrat', sans-serif" }}>
//                 Mvoc Fashion Design
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
//             The Master in Fashion Design is a star program, fulfilling the dream of entering the world of fashion and handing out the keys of its main language.
//    </Typography>

//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             It is the personal expression of an expert creator who can think up an idea and transform it into a wearable cult piece wanted by those desiring change. If you are looking for a shortcut that will allow you to enter the behind-the-scenes world of the fashion panorama, this could be your first step.
//    </Typography>


//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             This program perfectly integrates the words contained in its title, Fashion and Design, into two main areas. The first area is based on research —a full immersion to acquire cultural and technical skills— while the second is practice-driven and aims to realize and present an impressive capsule collection.
//     </Typography>


//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "'Montserrat', sans-serif" }}
//         >
//             This intensive specialization program is run by teachers from the industry and special guests, granting unlimited access to the Design Lab, computer labs and the immense library. It also includes a starting toolkit and internship opportunities. The two main projects —the first involving the research of figurines and the second transforming those figurines into a capsule collection— can be presented as a high-quality personal portfolio.
//   </Typography>

//       </Box>
//     </Container>
//   );
// };

// export default MvocFashionDesign;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const MvocFashionDesign = () => {
  // return (
  //   <>
  //     {/* Full-Width Image Banner with Text */}
  //     <Box
  //       sx={{
  //         width: "100vw", // Full width of the viewport
  //         height: "450px", // Fixed height for the banner
  //         position: "relative",
  //         overflow: "hidden",
  //       }}
  //     >
  //       <img
  //         src="mvoc-fashion.png" // Replace with your image path
  //         alt="Mvoc Fashion Design"
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
  //           borderRadius: "8px", // Optional: Rounded corners for the background
  //         }}
  //       >
  //         Mvoc Fashion Design
  //       </Box>
  //     </Box>
  const sampleData = {
    bannerImage: "mvoc-fashion.png",
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
            The Master in Fashion Design is a star program, fulfilling the dream of entering the world of fashion and handing out the keys of its main language.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              textAlign: "justify",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            It is the personal expression of an expert creator who can think up an idea and transform it into a wearable cult piece wanted by those desiring change. If you are looking for a shortcut that will allow you to enter the behind-the-scenes world of the fashion panorama, this could be your first step.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              textAlign: "justify",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            This program perfectly integrates the words contained in its title, Fashion and Design, into two main areas. The first area is based on research—a full immersion to acquire cultural and technical skills—while the second is practice-driven and aims to realize and present an impressive capsule collection.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              textAlign: "justify",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            This intensive specialization program is run by teachers from the industry and special guests, granting unlimited access to the Design Lab, computer labs, and the immense library. It also includes a starting toolkit and internship opportunities. The two main projects—the first involving the research of figurines and the second transforming those figurines into a capsule collection—can be presented as a high-quality personal portfolio.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default MvocFashionDesign;
