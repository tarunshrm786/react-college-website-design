// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const ArchitectureCourse = () => {
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
//           Architecture, Engineering & Construction
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
//             src="architecture.jpg"
//             alt="architecture"
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
//             An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
//        </Typography>

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
//               Subjects
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "8px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               AutoCAD Electrical 
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               AutoCAD Civil
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               3Ds Max (Max for Engineers)
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               STAAD Pro
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               5D BIM
//             </Typography>
//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               5D BIM Using Navisworks
//             </Typography>

//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               SketchUp
//             </Typography>

//             <Typography 
//               variant="body1" 
//               sx={{ 
//                 marginTop: "4px", 
//                 fontFamily: 'Montserrat, sans-serif' 
//               }}
//             >
//               V-Ray
//             </Typography>
//           </Box>

         
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ArchitectureCourse;


// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const ArchitectureCourse = () => {
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
//           Architecture, Engineering & Construction
//         </Typography>
//         <Box
//           sx={{
//             width: "100%",
//             height: "400px",
//             position: "relative",
//             overflow: "hidden",
//             borderRadius: "15px",
//             boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
//             backgroundImage: "url('architecture.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             '&:hover': {
//               '&:before': {
//                 content: '""',
//                 position: "absolute",
//                 top: "0",
//                 left: "0",
//                 width: "100%",
//                 height: "100%",
//                 background: "rgba(0, 0, 0, 0.3)", // Dark overlay on hover
//                 transition: "background 0.3s ease",
//               },
//             },
//           }}
//         >
//           {/* Optional overlay content */}
//           <Box
//             sx={{
//               position: "absolute",
//               bottom: "10px",
//               left: "10px",
//               color: "white",
//               fontSize: "1.2rem",
//               background: "rgba(0, 0, 0, 0.5)",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             Architecture & Design
//           </Box>
//         </Box>
//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif'
//           }}
//         >
//           An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
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
//               Subjects
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               AutoCAD Electrical
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               AutoCAD Civil
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               3Ds Max (Max for Engineers)
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               STAAD Pro
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               5D BIM
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               5D BIM Using Navisworks
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               SketchUp
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               V-Ray
//             </Typography>
//           </Box>

//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ArchitectureCourse;


// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const ArchitectureCourse = () => {
//   return (
//     <Container disableGutters maxWidth={false} sx={{ padding: 0 }}>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           height: "400px",
//           overflow: "hidden",
//           backgroundImage: "url('architecture.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           borderRadius: "15px",
//           boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           color: "white",
//           '&:hover': {
//             '&:before': {
//               content: '""',
//               position: "absolute",
//               top: "0",
//               left: "0",
//               width: "100%",
//               height: "100%",
//               background: "rgba(0, 0, 0, 0.3)", // Dark overlay on hover
//               transition: "background 0.3s ease",
//             },
//           },
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             zIndex: 1,
//             fontFamily: 'Montserrat, sans-serif',
//             fontWeight: 'bold',
//             textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
//             margin: "0",
//           }}
//         >
//           Architecture, Engineering & Construction
//         </Typography>
//       </Box>

//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif'
//           }}
//         >
//           An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
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
//               Subjects
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               AutoCAD Electrical
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               AutoCAD Civil
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               3Ds Max (Max for Engineers)
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               STAAD Pro
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               5D BIM
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               5D BIM Using Navisworks
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               SketchUp
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif'
//               }}
//             >
//               V-Ray
//             </Typography>
//           </Box>

//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ArchitectureCourse;


import React from "react";
import { Container, Typography, Box } from "@mui/material";

const ArchitectureCourse = () => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px",
          backgroundImage: "url('architecture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 'bold',
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            margin: 0,
            zIndex: 1,
          }}
        >
          Architecture, Engineering & Construction
        </Typography>
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
          An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
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
              sx={{
                color: "blue",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Subjects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "8px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              AutoCAD Electrical
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              AutoCAD Civil
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              3Ds Max (Max for Engineers)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              STAAD Pro
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              5D BIM
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              5D BIM Using Navisworks
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              SketchUp
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginTop: "4px",
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              V-Ray
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ArchitectureCourse;
