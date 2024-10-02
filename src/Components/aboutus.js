// import React from "react";
// import { Container, Typography, Box } from "@mui/material";
// import VisionMission from "./vision-mission";

// const AboutUs = () => {
//   return (
//     <>
//       {/* Full-width banner image */}
//       <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
//         <img
//           src="banner-1.jpg"
//           alt="About Us"
//           style={{
//             width: "100%", // Make the image span the full width
//             height: "500px", // Maintain the aspect ratio
//             display: "block", // Ensure the image is block-level
//             margin: "0", // Remove default margin
//             border: "none", // Remove any border
//             padding: "0", // Remove any padding
//           }}
//         />
//       </Box>

//       <Container sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "20px" }}>
//         <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//           >
//             About NAD
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
//           >
//             Necessity is at the source of every creation, and NAD College of Design & Business also started off with a deep necessity for a DESIGN-based education. NAD was set up in 2000 under the aegis of the NAD Educational Society, to reform & transform the quality of education for design aspirants across the globe. Spread across 80,000 sq feet in the heart of the Pink City- Jaipur, NAD is equipped with cutting-edge technology and online pedagogical infrastructure to offer students premium education and learning experiences! The industry-oriented emphasis on learning at NAD provides students with the means to grow as sensitive, creative designers and practitioners of craft with clear goals to contribute towards Indian culture and society through synergizing traditional knowledge and skills with contemporary methodologies.
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
//           >
//             To promote Creative entrepreneurship and employability, NAD’s set up Social Design Business Incubator (hubIN) and started the CampusToCompany initiative which provides support to students to find the right professional opportunities. NAD facilitates the necessary mentoring and networking connections required to help foster the development of scalable business models based on transformational designs and innovative thinking and achieve commercial success through 'start-up' enterprises.
//           </Typography>

//           <VisionMission />
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default AboutUs;

// import React, { useEffect, useState } from "react";
// import { Container, Typography, Box, CircularProgress } from "@mui/material";
// import VisionMission from "./vision-mission";

// const AboutUs = () => {
//   const [imageData, setImageData] = useState(null); // State to hold the image data
//   const [loading, setLoading] = useState(true); // State to manage loading effect

//   // Function to fetch image data from your API
//   const fetchImageData = async () => {
//     try {
//       const response = await fetch("https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner"); // Replace with your API URL
//       const data = await response.json();

//       console.log("------------>", data);

//       // Assuming your API returns the image data in a field named 'image'
//       if (data.imageUrl) {
//         setImageData(data.imageUrl); // Set image data from the API response
//       }
//     } catch (error) {
//       console.error("Error fetching image data:", error);
//     } finally {
//       setLoading(false); // Set loading to false after the fetch is complete
//     }
//   };

//   // Use effect to fetch the image data on component mount
//   useEffect(() => {
//     fetchImageData();
//   }, []);

//   return (
//     <>
//       {/* Full-width banner image */}
//       <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
//         {loading ? (
//           <Box
//             sx={{
//               width: "100%",
//               height: "500px",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <CircularProgress /> {/* Loading spinner */}
//           </Box>
//         ) : (
//           <img
//             src={imageData} // Use the fetched base64 string as the source
//             alt="About Us"
//             style={{
//               width: "100%", // Make the image span the full width
//               height: "500px", // Maintain the aspect ratio
//               display: "block", // Ensure the image is block-level
//               margin: "0", // Remove default margin
//               border: "none", // Remove any border
//               padding: "0", // Remove any padding
//             }}
//           />
//         )}
//       </Box>

//       <Container sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "20px" }}>
//         <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//           <Typography
//             variant="h4"
//             gutterBottom
//             sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//           >
//             About NAD
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
//           >
//             Necessity is at the source of every creation, and NAD College of Design & Business also started off with a deep necessity for a DESIGN-based education. NAD was set up in 2000 under the aegis of the NAD Educational Society, to reform & transform the quality of education for design aspirants across the globe. Spread across 80,000 sq feet in the heart of the Pink City- Jaipur, NAD is equipped with cutting-edge technology and online pedagogical infrastructure to offer students premium education and learning experiences! The industry-oriented emphasis on learning at NAD provides students with the means to grow as sensitive, creative designers and practitioners of craft with clear goals to contribute towards Indian culture and society through synergizing traditional knowledge and skills with contemporary methodologies.
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
//           >
//             To promote Creative entrepreneurship and employability, NAD’s set up Social Design Business Incubator (hubIN) and started the CampusToCompany initiative which provides support to students to find the right professional opportunities. NAD facilitates the necessary mentoring and networking connections required to help foster the development of scalable business models based on transformational designs and innovative thinking and achieve commercial success through 'start-up' enterprises.
//           </Typography>

//           <VisionMission />
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default AboutUs;

import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import VisionMission from "./vision-mission";

const AboutUs = () => {
  const [imageData, setImageData] = useState(null); // State to hold the image data
  const [loading, setLoading] = useState(true); // State to manage loading effect

  // Function to fetch image data from your API
  const fetchImageData = async () => {
    try {
      const response = await fetch("https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner"); // Replace with your API URL
      const data = await response.json();

      console.log("------------>", data);

      // Access the banner field from the API response
      if (data.banner) {
        // Prepend "data:image/jpeg;base64," if your image is in JPEG format
        setImageData(`data:image/jpeg;base64,${data.banner}`); // Set image data from the API response
      }
    } catch (error) {
      console.error("Error fetching image data:", error);
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete
    }
  };

  // Use effect to fetch the image data on component mount
  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <>
      {/* Full-width banner image */}
      <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
        {loading ? (
          <Box
            sx={{
              width: "100%",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress /> {/* Loading spinner */}
          </Box>
        ) : (
          <img
            src={imageData} // Use the fetched base64 string as the source
            alt="About Us"
            style={{
              width: "100%", // Make the image span the full width
              height: "500px", // Maintain the aspect ratio
              display: "block", // Ensure the image is block-level
              margin: "0", // Remove default margin
              border: "none", // Remove any border
              padding: "0", // Remove any padding
            }}
          />
        )}
      </Box>

      <Container sx={{ fontFamily: "Montserrat, sans-serif", marginTop: "20px" }}>
        <Box sx={{ textAlign: "center", margin: "20px 0" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
          >
            About NAD
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
          >
            Necessity is at the source of every creation, and NAD College of Design & Business also started off with a deep necessity for a DESIGN-based education. NAD was set up in 2000 under the aegis of the NAD Educational Society, to reform & transform the quality of education for design aspirants across the globe. Spread across 80,000 sq feet in the heart of the Pink City- Jaipur, NAD is equipped with cutting-edge technology and online pedagogical infrastructure to offer students premium education and learning experiences! The industry-oriented emphasis on learning at NAD provides students with the means to grow as sensitive, creative designers and practitioners of craft with clear goals to contribute towards Indian culture and society through synergizing traditional knowledge and skills with contemporary methodologies.
          </Typography>

          <Typography
            variant="body1"
            sx={{ marginTop: "20px", textAlign: "justify", fontFamily: "Montserrat, sans-serif" }}
          >
            To promote Creative entrepreneurship and employability, NAD’s set up Social Design Business Incubator (hubIN) and started the CampusToCompany initiative which provides support to students to find the right professional opportunities. NAD facilitates the necessary mentoring and networking connections required to help foster the development of scalable business models based on transformational designs and innovative thinking and achieve commercial success through 'start-up' enterprises.
          </Typography>

          <VisionMission />
        </Box>
      </Container>
    </>
  );
};

export default AboutUs;
