// import React from "react";
// import { Container, Typography, Box } from "@mui/material";

// const Bacourse = () => {
//   return (
//     <>
//       {/* Full-Width Image Banner with Text */}
//       <Box
//         sx={{
//           width: "100vw", // Full width of the viewport
//           height: "400px", // Fixed height for the banner
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <img
//           src="ba.jpg" // Replace with your image path
//           alt="Bachelor's of Arts"
//           style={{
//             width: "100vw", // Full width of the viewport
//             height: "100%", // Full height of the container
//             objectFit: "cover", // Ensures the image covers the container
//             position: "absolute",
//             top: "0",
//             left: "0",
//           }}
//         />
//         {/* Text Overlay on Image */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "white", // Text color
//             textAlign: "center",
//             fontWeight: "bold", // Makes the text bold
//             fontSize: "2rem", // Adjust the size of the text
//             fontFamily: "'Montserrat', sans-serif",
//             padding: "10px 20px", // Optional: Adds some padding around the text
//             background: "transparent", // No background color
//             zIndex: "1", // Ensures the text is above the image
//           }}
//         >
//           Bachelor's of Arts
//         </Box>
//       </Box>

//       {/* Content Section */}
//       <Container>
//         <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//           <Typography
//             variant="body1"
//             sx={{
//               marginTop: "20px",
//               textAlign: "justify",
//               fontFamily: "'Montserrat', sans-serif",
//             }}
//           >
//             Art enables us to find ourselves. So Art is not a thing — it is a way of expression. The arts and humanities encompass a range of subjects that are all concerned with cultural expressions and how it has come to take the forms that exist today. Taking one of our qualifications or courses gives you the opportunity to explore human culture and its history, from the ancient civilizations of Greece and Rome through the Renaissance, to the art, history, literature, music, and religions of the twenty-first century. Arts education encompasses all the visual and performing arts delivered in a standards-based, sequential approach by a qualified instructor as part of the core curriculum. It is studied as an individual discipline as well as integrated into general subject matter teaching.
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               marginTop: "20px",
//               textAlign: "justify",
//               fontFamily: "'Montserrat', sans-serif",
//             }}
//           >
//             To promote Creative entrepreneurship and employability, NAD’s set up Social Design Business Incubator (hubIN) and started the CampusToCompany initiative which provides support to students to find the right professional opportunities. NAD facilitates the necessary mentoring and networking connections required to help foster the development of scalable business models based on transformational designs and innovative thinking and achieve commercial success through 'start-up' enterprises.
//           </Typography>

//           {/* Enhanced DataGrid component with border radius and responsive design */}
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "20px",
//               marginTop: "40px",
//               '& .grid-item': {
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//                 padding: "16px",
//                 boxSizing: "border-box",
//               },
//             }}
//           >
//             <Box
//               className="grid-item"
//               sx={{
//                 backgroundColor: "#FFE4E1",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//                 padding: "16px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "blue",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Duration
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "8px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 3 Years
//               </Typography>
//             </Box>

//             <Box
//               className="grid-item"
//               sx={{
//                 backgroundColor: "#FFE4E1",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//                 padding: "16px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "blue",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Language
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "8px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Eng./Hindi
//               </Typography>
//             </Box>

//             <Box
//               className="grid-item"
//               sx={{
//                 backgroundColor: "#FFE4E1",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//                 padding: "16px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "blue",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Certificates
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "8px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Degree
//               </Typography>
//             </Box>

//             <Box
//               className="grid-item"
//               sx={{
//                 backgroundColor: "#FFE4E1",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//                 padding: "16px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "blue",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Subjects
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "8px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Political Science
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "4px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Hindi
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "4px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 History
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "4px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Geography
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "4px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Economics
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "4px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 English
//               </Typography>
//             </Box>

//             <Box
//               className="grid-item"
//               sx={{
//                 backgroundColor: "#FFE4E1",
//                 borderRadius: "8px",
//                 boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
//                 padding: "16px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: "blue",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 Requirements
//               </Typography>
//               <Typography
//                 variant="body1"
//                 sx={{
//                   marginTop: "8px",
//                   fontFamily: "'Montserrat', sans-serif",
//                 }}
//               >
//                 10+2 Certificate
//               </Typography>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Bacourse;


import React from "react";
import { Container, Typography, Box } from "@mui/material";

const sampleData = {
  "bannerImage": "/courses/BA-POSTER.png",
  "bannerText": " ",
  "description": [
    "Art enables us to find ourselves. So Art is not a thing — it is a way of expression. The arts and humanities encompass a range of subjects that are all concerned with cultural expressions and how it has come to take the forms that exist today. Taking one of our qualifications or courses gives you the opportunity to explore human culture and its history, from the ancient civilizations of Greece and Rome through the Renaissance, to the art, history, literature, music, and religions of the twenty-first century. Arts education encompasses all the visual and performing arts delivered in a standards-based, sequential approach by a qualified instructor as part of the core curriculum. It is studied as an individual discipline as well as integrated into general subject matter teaching.",
    "To promote Creative entrepreneurship and employability, NAD’s set up Social Design Business Incubator (hubIN) and started the CampusToCompany initiative which provides support to students to find the right professional opportunities. NAD facilitates the necessary mentoring and networking connections required to help foster the development of scalable business models based on transformational designs and innovative thinking and achieve commercial success through 'start-up' enterprises."
  ],
  "gridItems": [
    { title: "Duration", content: "3 Years" },
    { title: "Language", content: "Eng./Hindi" },
    { title: "Certificates", content: "Degree" },
    { title: "Subjects", content: [
        "Political Science",
        "Hindi",
        "History",
        "Geography",
        "Economics",
        "English"
      ]
    },
    { title: "Requirements", content: "10+2 Certificate" }
  ]
};

const Bacourse = () => {
  const { bannerImage, bannerText, description, gridItems } = sampleData;

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
          src={bannerImage} // Use sample data for the image path
          alt={bannerText}
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
          {bannerText}
        </Box>
      </Box>

      {/* Content Section */}
      <Container>
        <Box sx={{ textAlign: "center", margin: "20px 0" }}>
          {description.map((para, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                marginTop: "20px",
                textAlign: "justify",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {para}
            </Typography>
          ))}

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
            {gridItems.map((item, index) => (
              <Box
                key={index}
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
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                {Array.isArray(item.content) ? (
                  item.content.map((content, idx) => (
                    <Typography
                      key={idx}
                      variant="body1"
                      sx={{
                        marginTop: "4px",
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {content}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      marginTop: "8px",
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    {item.content}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Bacourse;
