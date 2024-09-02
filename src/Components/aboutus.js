// import React from "react";
// import { Container, Typography, Box } from "@mui/material";
// import VisionMission from "./vision-mission";

// const AboutUs = () => {
//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom:"30px" }}>
//           About NAD
//         </Typography>
//         <img
//           src="banner-1.jpg"
//           alt="About Us"
//           style={{ width: "1150px", height: "500px",   borderRadius: "15px", boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)"}}
//         />
//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify" }}
//         >
//           Necessity is at the source of every creation, and NAD College of
//           Design & Business also started off with a deep necessity for a DESIGN
//           based education. NAD was set up in 2000 under the aegis of the NAD
//           Educational Society, to reform & transform the quality of education
//           for design aspirants across the globe. Spread across 80,000 sq feet in
//           the heart of the Pink City- Jaipur, NAD is equipped with cutting-edge
//           technology and online pedagogical infrastructure to offer students
//           premium education and learning experiences! The industry-oriented
//           emphasis on learning at NAD provides students with the means to grow
//           as sensitive, creative designers and practitioners of craft with clear
//           goals to contribute towards Indian culture and society through
//           synergizing traditional knowledge and skills with contemporary
//           methodologies.
//         </Typography>

//         <Typography
//           variant="body1"
//           sx={{ marginTop: "20px", textAlign: "justify" }}
//         >
//           To promote Creative entrepreneurship and employability, NAD’s set up
//           Social Design Business Incubator (hubIN) and started the
//           CampusToCompany initiative which provides support to students to find
//           the right professional opportunities. NAD facilitates the necessary
//           mentoring and networking connections required to help foster the
//           development of scalable business models based on transformational
//           designs and innovative thinking and achieve commercial success through
//           'start-up' enterprises.
//         </Typography>
//         <VisionMission />
//       </Box>
//     </Container>
//   );
// };

// export default AboutUs;

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import VisionMission from "./vision-mission";

const AboutUs = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
          About NAD
        </Typography>
        <Box
          sx={{
            display: "inline-block",
            overflow: "hidden",
            borderRadius: "15px",
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.9)",
            '&:hover img': {
              transform: "scale(1.05) translateY(-10px)",
            },
          }}
        >
          <img
            src="banner-1.jpg"
            alt="About Us"
            style={{
              width: "1150px",
              height: "500px",
              transition: "transform 0.3s ease",
              display: "block", // Ensures the image is treated as a block-level element, removing any inline spacing
              marginBottom: "0", // Ensures no margin at the bottom
              border: "none", // Removes any inherent border
              padding: "0", // Ensures no padding
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
          Necessity is at the source of every creation, and NAD College of
          Design & Business also started off with a deep necessity for a DESIGN
          based education. NAD was set up in 2000 under the aegis of the NAD
          Educational Society, to reform & transform the quality of education
          for design aspirants across the globe. Spread across 80,000 sq feet in
          the heart of the Pink City- Jaipur, NAD is equipped with cutting-edge
          technology and online pedagogical infrastructure to offer students
          premium education and learning experiences! The industry-oriented
          emphasis on learning at NAD provides students with the means to grow
          as sensitive, creative designers and practitioners of craft with clear
          goals to contribute towards Indian culture and society through
          synergizing traditional knowledge and skills with contemporary
          methodologies.
        </Typography>

        <Typography
          variant="body1"
          sx={{ marginTop: "20px", textAlign: "justify" }}
        >
          To promote Creative entrepreneurship and employability, NAD’s set up
          Social Design Business Incubator (hubIN) and started the
          CampusToCompany initiative which provides support to students to find
          the right professional opportunities. NAD facilitates the necessary
          mentoring and networking connections required to help foster the
          development of scalable business models based on transformational
          designs and innovative thinking and achieve commercial success through
          'start-up' enterprises.
        </Typography>
        <VisionMission />
      </Box>
    </Container>
  );
};

export default AboutUs;
