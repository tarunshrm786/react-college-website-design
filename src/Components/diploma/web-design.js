// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const WebdesignCourse = () => {
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
//           Web development and design
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
//             src="webdesign.jpg"
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
//             A Web Designing course focuses on the creation of visually appealing, user-friendly, and functional websites. It encompasses both the aesthetic aspects of design and the technical skills required to bring those designs to life on the web. Here’s an overview of what a Web Designing course might cover:
//    </Typography>

//         <Typography
//           variant="body1"
//           sx={{ 
//             marginTop: "20px", 
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif' 
//           }}
//         >
//           Design Principles for the Web: Understanding how layout, color, typography, and imagery impact user experience on websites.
// HTML/CSS: Learning the fundamental languages for structuring and styling web content.
// Responsive Design: Designing websites that adapt and function seamlessly across various devices and screen sizes.
// UI/UX Design: Creating interfaces that are intuitive, easy to navigate, and provide an optimal user experience.
// Web Design Software: Familiarizing with tools like Adobe XD, Sketch, or Figma for wireframing, prototyping, and designing web layouts.
// Basic Coding and Scripting: Introduction to JavaScript or other scripting languages to add interactivity and functionality to web designs.
//         </Typography>

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
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography 
//               variant="h6" 
//               sx={{ 
//                 color: "blue", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Duration
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "8px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               2 Years
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography 
//               variant="h6" 
//               sx={{ 
//                 color: "blue", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Language
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "8px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Eng./Hindi
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography 
//               variant="h6" 
//               sx={{ 
//                 color: "blue", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Diploma
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "8px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Degree
//             </Typography>
//           </Box>

//           <Box className="grid-item" 
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography 
//               variant="h6" 
//               sx={{ 
//                 color: "blue", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Courses Available
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "8px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Diploma in Web Designing
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Advanced Diploma in Web Designing
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Masters Diploma in Web Designing
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               Professional Diploma in Web Designing
//             </Typography>
           
//           </Box>

//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default WebdesignCourse;


// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const WebdesignCourse = () => {
//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           height: "400px",
//           backgroundImage: "url('webdesign.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           color: "white",
//           marginBottom: "40px",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             fontFamily: 'Montserrat, sans-serif',
//             fontWeight: 'bold',
//             textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//             margin: 0,
//             zIndex: 1,
//           }}
//         >
//           Web Development and Design
//         </Typography>
//       </Box>

//       <Container sx={{ padding: "20px", maxWidth: "md" }}>
//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif',
//           }}
//         >
//           A Web Designing course focuses on the creation of visually appealing, user-friendly, and functional websites. It encompasses both the aesthetic aspects of design and the technical skills required to bring those designs to life on the web. Here’s an overview of what a Web Designing course might cover:
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif',
//           }}
//         >
//           Design Principles for the Web: Understanding how layout, color, typography, and imagery impact user experience on websites.
//           HTML/CSS: Learning the fundamental languages for structuring and styling web content.
//           Responsive Design: Designing websites that adapt and function seamlessly across various devices and screen sizes.
//           UI/UX Design: Creating interfaces that are intuitive, easy to navigate, and provide an optimal user experience.
//           Web Design Software: Familiarizing with tools like Adobe XD, Sketch, or Figma for wireframing, prototyping, and designing web layouts.
//           Basic Coding and Scripting: Introduction to JavaScript or other scripting languages to add interactivity and functionality to web designs.
//         </Typography>

//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             marginTop: "40px",
//           }}
//         >
//           <Box
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "blue",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Duration
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               2 Years
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "blue",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Language
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Eng./Hindi
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "blue",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Diploma
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Degree
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               backgroundColor: "#FFE4E1",
//               borderRadius: "8px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//               padding: "16px",
//             }}
//           >
//             <Typography
//               variant="h6"
//               sx={{
//                 color: "blue",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Courses Available
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Diploma in Web Designing
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Advanced Diploma in Web Designing
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Masters Diploma in Web Designing
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               Professional Diploma in Web Designing
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default WebdesignCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

// const WebdesignCourse = () => {
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
//      src="/courses/web-design-development.png" // Replace with your image path
//      alt="web-design-development"
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
//      {/* Web development & design */}
//    </Box>
//  </Box>
const sampleData = {
  bannerImage: "/courses/web-design-development.png",
  bannerText: " "
};

const { bannerImage, bannerText} = sampleData;

const WebdesignCourse = () => {
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
          A Web Designing course focuses on the creation of visually appealing, user-friendly, and functional websites. It encompasses both the aesthetic aspects of design and the technical skills required to bring those designs to life on the web. Here’s an overview of what a Web Designing course might cover:
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Design Principles for the Web: Understanding how layout, color, typography, and imagery impact user experience on websites.
          HTML/CSS: Learning the fundamental languages for structuring and styling web content.
          Responsive Design: Designing websites that adapt and function seamlessly across various devices and screen sizes.
          UI/UX Design: Creating interfaces that are intuitive, easy to navigate, and provide an optimal user experience.
          Web Design Software: Familiarizing with tools like Adobe XD, Sketch, or Figma for wireframing, prototyping, and designing web layouts.
          Basic Coding and Scripting: Introduction to JavaScript or other scripting languages to add interactivity and functionality to web designs.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#FFE4E1",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "blue",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Duration
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              2 Years
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFE4E1",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "blue",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Language
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Eng./Hindi
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFE4E1",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "blue",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Diploma
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Degree
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#FFE4E1",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
              padding: "16px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "blue",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Courses Available
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Diploma in Web Designing
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Advanced Diploma in Web Designing
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Masters Diploma in Web Designing
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Professional Diploma in Web Designing
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default WebdesignCourse;
