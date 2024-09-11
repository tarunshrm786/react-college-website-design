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


// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const ArchitectureCourse = () => {
//   return (
//     <>

//     {/* Full-Width Image Banner with Text */}
//     <Box
//    sx={{
//      width: "100vw", // Full width of the viewport
//      height: "400px", // Fixed height for the banner
//      position: "relative",
//      overflow: "hidden",
//    }}
//  >
//    <img
//      src="ba.jpg" // Replace with your image path
//      alt="Bachelor's of Arts"
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
//      Architecture and interior design
//    </Box>
//  </Box>


//       <Container sx={{ padding: "20px", maxWidth: "md" }}>
//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif',
//           }}
//         >
//           An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:
//         </Typography>


//         <Typography
//           variant="body1"
//           sx={{
//             marginTop: "20px",
//             textAlign: "justify",
//             fontFamily: 'Montserrat, sans-serif',
//           }}
//         >
//         The field of Interior Design is rapidly evolving in today's modern world, merging creative interests with practical needs to enhance and contribute to business growth. It offers immense career prospects for interior designers, especially for students with innate creativity and technical proficiency.
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
//           <Box
//             className="grid-item"
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
//               Subjects
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "8px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               AutoCAD Electrical
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               AutoCAD Civil
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               3Ds Max (Max for Engineers)
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               STAAD Pro
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               5D BIM
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               5D BIM Using Navisworks
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               SketchUp
//             </Typography>
//             <Typography
//               variant="body1"
//               sx={{
//                 marginTop: "4px",
//                 fontFamily: 'Montserrat, sans-serif',
//               }}
//             >
//               V-Ray
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
 
//     </>
//   );
// };

// export default ArchitectureCourse;

import React from "react";
import { Container, Typography, Box } from "@mui/material";

const sampleData = {
  "architectureCourse": {
    "description": "An Architecture & Design course is an immersive exploration into the realms of architectural theory, design principles, and the practical skills needed to create functional and aesthetically pleasing structures. It’s a multidisciplinary field that merges creativity, technical expertise, and critical thinking. Here’s an overview of what this course might encompass:",
    "subjects": [
      "AutoCAD Electrical",
      "AutoCAD Civil",
      "3Ds Max (Max for Engineers)",
      "STAAD Pro",
      "5D BIM",
      "5D BIM Using Navisworks",
      "Revit Architecture",
      "SketchUp",
      "V-Ray"
    ]
  },
  "interiorDesignCourse": {
    "description": "The field of Interior Design is rapidly evolving in today's modern world, merging creative interests with practical needs to enhance and contribute to business growth. It offers immense career prospects for interior designers, especially for students with innate creativity and technical proficiency. National academy of design a diverse range of Interior Design courses, empowering students to translate their creative ideas into innovative designs for various types of structures, including homes, retail spaces, hotels, offices, museums, public spaces, and entertainment venues. The Interior Design course at national academy of design encompasses a comprehensive set of modules, including:",
    "modules": [
      "Fundamentals of interior design",
      "Manual creative work training",
      "Extensive project work utilizing software, complemented by lectures and seminars.",
      "Proficiency in CAD software for interior design.",
      "Knowledge acquisition in digital visualization, enabling students to digitally model and conceptualize interior spaces."
    ]
  }
};

const ArchitectureCourse = () => {
  const { architectureCourse, interiorDesignCourse } = sampleData;

  return (
    <>
      {/* Full-Width Image Banner with Text */}
      <Box
        sx={{
          width: "100vw", // Full width of the viewport
          height: "400px", // Fixed height for the banner
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="architecture.jpg" // Replace with your image path
          alt="Architecture and Interior Design"
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
          Architecture and Interior Design
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
          {architectureCourse.description}
        </Typography>

        {/* Subjects Section */}
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
            {architectureCourse.subjects.map((subject, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  marginTop: "4px",
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {subject}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Interior Design Course Details */}
        <Typography
          variant="body1"
          sx={{
            marginTop: "40px",
            textAlign: "justify",
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          {interiorDesignCourse.description}
        </Typography>

        {/* Modules Section */}
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
              Modules
            </Typography>
            {interiorDesignCourse.modules.map((module, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  marginTop: "4px",
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {module}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ArchitectureCourse;
