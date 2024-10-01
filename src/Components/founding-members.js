// import React, { useState, Suspense } from "react";
// import { Container, Typography, Box, Grid, Modal, CircularProgress } from "@mui/material";

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Dr. Neelam Jangid", image: "/mentor/mentor-4.jpg", jobRole: "Director, Dr Jangid Hospital Sujangarh", location: "Sujangarh", description: "Detailed description here" },
//     { id: 2, name: "Dr. Satyanarayan Jangid", image: "/mentor/mentor-6.jpg", jobRole: "Gynecologist and Obstetrician", location: "Sujangarh", description: "Detailed description here" },
//     { id: 3, name: "Dr. Rohit Soni", image: "/mentor/mentor-2.jpg", jobRole: "Professor of Practice, School of Law Mody University of Science and Technology, Rajasthan", location: "Rajasthan", description: "Detailed description here" },
//     { id: 4, name: "Vivek Kumawat", image: "/mentor/mentor-7.jpg", jobRole: "B.Tech. (CE) M.Tech.(SE) Member of The Institution Of Engineers, India (M-1807018) Assistant Engineer Civil Rajasthan Vidyut Utpadan Nigam", location: "Rajasthan", description: "Detailed description here" },
//     { id: 5, name: "Dr. Daksh Jangid", image: "/mentor/mentor-3.jpg", jobRole: "MBBS MD Radio Diagnosis", location: "Sujangarh", description: "Detailed description here" },
//     { id: 6, name: "Shyam Sundar Kumawat", image: "/mentor/mentor-5.jpg", jobRole: "Ph.D., Rajasthan", location: "Rajasthan", description: "Detailed description here" }
//   ];

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   // Assuming 'rows' is an array of arrays, each representing a row of members
//   const rows = [
//     foundingMembers.slice(0, 3), // First row
//     foundingMembers.slice(3) // Second row
//   ];

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}
//         >
//           Our Mentor
//         </Typography>

//         {rows.map((row, rowIndex) => (
//           <Grid
//             container
//             spacing={3}
//             key={rowIndex}
//             justifyContent={row.length === 2 ? "center" : "flex-start"} // Center if 2 images in the row
//           >
//             {row.map((member) => (
//               <Grid item xs={12} sm={6} md={4} key={member.id}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     cursor: "pointer",
//                     position: "relative",
//                     marginBottom: "20px",
//                   }}
//                   onClick={() => handleOpen(member)}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       width: "150px",
//                       height: "150px",
//                       borderRadius: "50%",
//                       overflow: "hidden",
//                       border: "5px solid transparent",
//                       '::before': {
//                         content: '""',
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         borderBottom: "5px solid #FFD700", // Half-circle cut design
//                         borderRight: "5px solid #FFD700",
//                         zIndex: "1",
//                       },
//                     }}
//                   >
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         objectPosition: "top center", // Ensure the image is centered, focusing on the top
//                         position: "relative",
//                         zIndex: "0",
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                     <Typography variant="subtitle1">{member.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.jobRole}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.location}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         ))}

//         <Suspense fallback={<CircularProgress />}>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "500px",
//                 height: "600px",
//                 bgcolor: "background.paper",
//                 boxShadow: 24,
//                 p: 4,
//                 animation: "slideUp 0.5s ease-in-out",
//                 '@keyframes slideUp': {
//                   '0%': {
//                     opacity: 0,
//                     transform: 'translateY(50%)',
//                   },
//                   '100%': {
//                     opacity: 1,
//                     transform: 'translateY(0)',
//                   },
//                 },
//               }}
//             >
//               {selectedMember && (
//                 <>
//                   <img
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       borderRadius: "10px",
//                       marginBottom: "20px",
//                       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
//                   <Typography variant="h5" gutterBottom>
//                     {selectedMember.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" gutterBottom>
//                     {selectedMember.jobRole}
//                   </Typography>
//                   <Typography variant="body1" gutterBottom>
//                     {selectedMember.description}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Location: {selectedMember.location}
//                   </Typography>
//                 </>
//               )}
//             </Box>
//           </Modal>
//         </Suspense>
//       </Box>
//     </Container>
//   );
// };

// export default FoundingMembers;

// import React, { useState, useEffect, Suspense } from "react";
// import { Container, Typography, Box, Grid, Modal, CircularProgress } from "@mui/material";
// import { fetchMentors } from "../api/api"; // Import the fetchMentors function from your api file

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [foundingMembers, setFoundingMembers] = useState([]);

//   // // Fetching data from the API
//   // useEffect(() => {
//   //   const fetchMentorsData = async () => {
//   //     try {
//   //       const mentors = await fetchMentors(); // Fetch mentors using your API function
//   //       //console.log("Fetched mentors data: ", mentors); // For debugging
//   //       setFoundingMembers(mentors);
//   //     } catch (error) {
//   //       console.error("Error fetching data: ", error);
//   //     }
//   //   };

//   //   fetchMentorsData();
//   // }, []); // Empty dependency array to fetch data on component mount

//   // // Function to convert buffer data to Base64 string
//   // const convertBufferToBase64 = (buffer) => {
//   //   let binary = '';
//   //   const bytes = new Uint8Array(buffer.data);
//   //   bytes.forEach((byte) => {
//   //     binary += String.fromCharCode(byte);
//   //   });
//   //   return window.btoa(binary); // Convert binary to Base64
//   // };

//   useEffect(() => {
//     const fetchMentorsData = async () => {
//         try {
//             const mentors = await fetchMentors(); // Fetch mentors using your API function
//             // Assuming mentors is an array of mentor objects
//             console.log("Fetched mentors data: ", mentors); // For debugging

//             // Convert image buffers to Base64 strings
//             const mentorsWithImages = mentors.map((mentor) => ({
//                 ...mentor,
//                 image: convertBufferToBase64(mentor.image.data), // Convert image buffer to Base64
//             }));

//             setFoundingMembers(mentorsWithImages); // Update state with the modified mentors
//         } catch (error) {
//             console.error("Error fetching data: ", error);
//         }
//     };

//     fetchMentorsData();
// }, []); // Empty dependency array to fetch data on component mount

// // Function to convert buffer data to Base64 string
// const convertBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     bytes.forEach((byte) => {
//         binary += String.fromCharCode(byte);
//     });
//     return window.btoa(binary); // Convert binary to Base64
// };



//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//         >
//           Our Mentor
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} md={4} key={member._id}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   position: "relative",
//                   marginBottom: "20px",
//                 }}
//                 onClick={() => handleOpen(member)}
//               >
//                 <Box
//                   sx={{
//                     position: "relative",
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "50%",
//                     overflow: "hidden",
//                     border: "5px solid transparent",
//                     "::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: "0",
//                       left: "0",
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                       borderBottom: "5px solid #FFD700", // Half-circle cut design
//                       borderRight: "5px solid #FFD700",
//                       zIndex: "1",
//                     },
//                   }}
//                 >
//                   {/* Convert buffer data to Base64 and render the image */}
//                   <img
//                     src={`data:${member.image.contentType};base64,${convertBufferToBase64(member.image.data)}`}
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                       objectPosition: "top center",
//                       position: "relative",
//                       zIndex: "0",
//                     }}
//                   />
//                 </Box>

//                 <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                   <Typography variant="subtitle1">{member.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.post}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.city}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>

//         <Suspense fallback={<CircularProgress />}>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "500px",
//                 height: "600px",
//                 bgcolor: "background.paper",
//                 boxShadow: 24,
//                 p: 4,
//                 animation: "slideUp 0.5s ease-in-out",
//                 "@keyframes slideUp": {
//                   "0%": {
//                     opacity: 0,
//                     transform: "translateY(50%)",
//                   },
//                   "100%": {
//                     opacity: 1,
//                     transform: "translateY(0)",
//                   },
//                 },
//               }}
//             >
//               {selectedMember && (
//                 <>
//                   <img
//                     src={`data:${selectedMember.image.contentType};base64,${convertBufferToBase64(selectedMember.image.data)}`}
//                     alt={selectedMember.name}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       borderRadius: "10px",
//                       marginBottom: "20px",
//                       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
                
//                   <Typography variant="h5" gutterBottom>
//                     {selectedMember.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" gutterBottom>
//                     {selectedMember.post}
//                   </Typography>
//                   <Typography variant="body1" gutterBottom>
//                     {selectedMember.description || "No description available."}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Location: {selectedMember.city}
//                   </Typography>
//                 </>
//               )}
//             </Box>
//           </Modal>
//         </Suspense>
//       </Box>
//     </Container>
//   );
// };

// export default FoundingMembers;


// import React, { useState, useEffect, Suspense } from "react";
// import { Container, Typography, Box, Grid, Modal, CircularProgress } from "@mui/material";
// import { fetchMentors } from "../api/api"; // Import the fetchMentors function from your API file

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [foundingMembers, setFoundingMembers] = useState([]);

//   // Function to convert buffer data to Base64 string
//   const convertBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer.data); // Accessing the data array from the Buffer object
//     bytes.forEach((byte) => {
//       binary += String.fromCharCode(byte);
//     });
//     return window.btoa(binary); // Convert binary to Base64
//   };

//   // Fetching data from the API
//   useEffect(() => {
//     const fetchMentorsData = async () => {
//       try {
//         const mentors = await fetchMentors(); // Fetch mentors using your API function
//         console.log("Fetched mentors data: ", mentors); // For debugging

//         // Convert image buffers to Base64 strings
//         const mentorsWithImages = mentors.map((mentor) => ({
//           ...mentor,
//           image: convertBufferToBase64(mentor.image.data), // Convert image buffer to Base64
//         }));

//         setFoundingMembers(mentorsWithImages); // Update state with the modified mentors
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       }
//     };

//     fetchMentorsData();
//   }, []); // Empty dependency array to fetch data on component mount

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//         >
//           Our Mentor
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} md={4} key={member._id}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   position: "relative",
//                   marginBottom: "20px",
//                 }}
//                 onClick={() => handleOpen(member)}
//               >
//                 <Box
//                   sx={{
//                     position: "relative",
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "50%",
//                     overflow: "hidden",
//                     border: "5px solid transparent",
//                     "::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: "0",
//                       left: "0",
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                       borderBottom: "5px solid #FFD700", // Half-circle cut design
//                       borderRight: "5px solid #FFD700",
//                       zIndex: "1",
//                     },
//                   }}
//                 >
//                   {/* Render the image */}
//                   <img
//                     src={`data:image/png;base64,${member.image}`} // Use Base64 string directly
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                       objectPosition: "top center",
//                       position: "relative",
//                       zIndex: "0",
//                     }}
//                   />
//                 </Box>

//                 <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                   <Typography variant="subtitle1">{member.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.post}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.city}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>

//         <Suspense fallback={<CircularProgress />}>
//           <Modal
//             open={open}
//             onClose={handleClose}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 width: "500px",
//                 height: "600px",
//                 bgcolor: "background.paper",
//                 boxShadow: 24,
//                 p: 4,
//                 animation: "slideUp 0.5s ease-in-out",
//                 "@keyframes slideUp": {
//                   "0%": {
//                     opacity: 0,
//                     transform: "translateY(50%)",
//                   },
//                   "100%": {
//                     opacity: 1,
//                     transform: "translateY(0)",
//                   },
//                 },
//               }}
//             >
//               {selectedMember && (
//                 <>
//                   <img
//                     src={`data:image/png;base64,${selectedMember.image}`} // Use Base64 string directly
//                     alt={selectedMember.name}
//                     style={{
//                       width: "100%",
//                       height: "400px",
//                       borderRadius: "10px",
//                       marginBottom: "20px",
//                       boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                     }}
//                   />
                  
//                   <Typography variant="h5" gutterBottom>
//                     {selectedMember.name}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary" gutterBottom>
//                     {selectedMember.post}
//                   </Typography>
//                   <Typography variant="body1" gutterBottom>
//                     {selectedMember.description || "No description available."}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Location: {selectedMember.city}
//                   </Typography>
//                 </>
//               )}
//             </Box>
//           </Modal>
//         </Suspense>
//       </Box>
//     </Container>
//   );
// };

// export default FoundingMembers;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Modal,
//   CircularProgress,
// } from "@mui/material";
// import { fetchMentors } from "../api/api"; // Import the fetchMentors function from your API file

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [foundingMembers, setFoundingMembers] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetching data from the API
//   useEffect(() => {
//     const fetchMentorsData = async () => {
//       setLoading(true); // Set loading to true before fetching
//       try {
//         const mentors = await fetchMentors(); // Fetch mentors using your API function
//         console.log("Fetched mentors data: ", mentors); // For debugging
//         setFoundingMembers(mentors); // Update state with mentors data
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchMentorsData();
//   }, []); // Empty dependency array to fetch data on component mount

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//         >
//           Our Mentors
//         </Typography>

//         {loading ? ( // Display loading spinner while fetching
//           <CircularProgress />
//         ) : (
//           <Grid container spacing={3} justifyContent="center">
//             {foundingMembers.map((member) => (
//               <Grid item xs={12} sm={6} md={4} key={member._id}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     cursor: "pointer",
//                     position: "relative",
//                     marginBottom: "20px",
//                   }}
//                   onClick={() => handleOpen(member)}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       width: "150px",
//                       height: "150px",
//                       borderRadius: "50%",
//                       overflow: "hidden",
//                       border: "5px solid transparent",
//                       "::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         borderBottom: "5px solid #FFD700", // Half-circle cut design
//                         borderRight: "5px solid #FFD700",
//                         zIndex: "1",
//                       },
//                     }}
//                   >
//                     {/* Render the image */}
//                     <img
//                       src={`data:image/png;base64,${member.base64Image}`} // Use Base64 string directly
//                       alt={member.name}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         objectPosition: "top center",
//                         position: "relative",
//                         zIndex: "0",
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                     <Typography variant="subtitle1">{member.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.post}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.city}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         <Modal
//           open={open}
//           onClose={handleClose}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             sx={{
//               width: "500px",
//               height: "600px",
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               animation: "slideUp 0.5s ease-in-out",
//               "@keyframes slideUp": {
//                 "0%": {
//                   opacity: 0,
//                   transform: "translateY(50%)",
//                 },
//                 "100%": {
//                   opacity: 1,
//                   transform: "translateY(0)",
//                 },
//               },
//             }}
//           >
//             {selectedMember && (
//               <>
//                 <img
//                   src={`data:image/png;base64,${selectedMember.base64Image}`} // Use Base64 string directly
//                   alt={selectedMember.name}
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     borderRadius: "10px",
//                     marginBottom: "20px",
//                     boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//                 <Typography variant="h5" gutterBottom>
//                   {selectedMember.name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   {selectedMember.post}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {selectedMember.description || "No description available."}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Location: {selectedMember.city}
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </Modal>
//       </Box>
//     </Container>
//   );
// };

// export default FoundingMembers;

// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Modal,
//   CircularProgress,
// } from "@mui/material";
// import { fetchMentors } from "../api/api"; // Import the fetchMentors function from your API file

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [foundingMembers, setFoundingMembers] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state

//   // Fetching data from the API
//   useEffect(() => {
//     const fetchMentorsData = async () => {
//       setLoading(true); // Set loading to true before fetching
//       try {
//         const mentors = await fetchMentors(); // Fetch mentors using your API function
//         console.log("Fetched mentors data: ", mentors); // For debugging
//         setFoundingMembers(mentors); // Update state with mentors data
//       } catch (error) {
//         console.error("Error fetching data: ", error);
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     fetchMentorsData();
//   }, []); // Empty dependency array to fetch data on component mount

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
//         >
//           Our Mentors
//         </Typography>

//         {loading ? ( // Display loading spinner while fetching
//           <CircularProgress />
//         ) : foundingMembers.length === 0 ? ( // Check if no mentors found
//           <Typography variant="body1">No mentors available.</Typography>
//         ) : (
//           <Grid container spacing={3} justifyContent="center">
//             {foundingMembers.map((member) => (
//               <Grid item xs={12} sm={6} md={4} key={member._id}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     cursor: "pointer",
//                     position: "relative",
//                     marginBottom: "20px",
//                   }}
//                   onClick={() => handleOpen(member)}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       width: "150px",
//                       height: "150px",
//                       borderRadius: "50%",
//                       overflow: "hidden",
//                       border: "5px solid transparent",
//                       "::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: "0",
//                         left: "0",
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         borderBottom: "5px solid #FFD700", // Half-circle cut design
//                         borderRight: "5px solid #FFD700",
//                         zIndex: "1",
//                       },
//                     }}
//                   >
//                     {/* Render the image */}
//                     <img
//                       src={`data:image/png;base64,${member.base64Image}`} // Use Base64 string directly
//                       alt={member.name}
//                       style={{
//                         width: "100%",
//                         height: "100%",
//                         borderRadius: "50%",
//                         objectFit: "cover",
//                         objectPosition: "top center",
//                         position: "relative",
//                         zIndex: "0",
//                       }}
//                     />
//                   </Box>

//                   <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                     <Typography variant="subtitle1">{member.name}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.post}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       {member.city}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         )}

//         <Modal
//           open={open}
//           onClose={handleClose}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             sx={{
//               width: "500px",
//               height: "600px",
//               bgcolor: "background.paper",
//               boxShadow: 24,
//               p: 4,
//               animation: "slideUp 0.5s ease-in-out",
//               "@keyframes slideUp": {
//                 "0%": {
//                   opacity: 0,
//                   transform: "translateY(50%)",
//                 },
//                 "100%": {
//                   opacity: 1,
//                   transform: "translateY(0)",
//                 },
//               },
//             }}
//           >
//             {selectedMember && (
//               <>
//                 <img
//                   src={`data:image/png;base64,${selectedMember.base64Image}`} // Use Base64 string directly
//                   alt={selectedMember.name}
//                   style={{
//                     width: "100%",
//                     height: "400px",
//                     borderRadius: "10px",
//                     marginBottom: "20px",
//                     boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//                 <Typography variant="h5" gutterBottom>
//                   {selectedMember.name}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" gutterBottom>
//                   {selectedMember.post}
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                   {selectedMember.description || "No description available."}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   Location: {selectedMember.city}
//                 </Typography>
//               </>
//             )}
//           </Box>
//         </Modal>
//       </Box>
//     </Container>
//   );
// };

// export default FoundingMembers;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Modal,
  CircularProgress,
} from "@mui/material";
import { fetchMentors } from "../api/api"; // Import the fetchMentors function from your API file

const FoundingMembers = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [foundingMembers, setFoundingMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching data from the API
  useEffect(() => {
    const fetchMentorsData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const mentors = await fetchMentors(); // Fetch mentors using your API function
        console.log("Fetched mentors data: ", mentors); // For debugging
        setFoundingMembers(mentors); // Update state with mentors data
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchMentorsData();
  }, []); // Empty dependency array to fetch data on component mount

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginBottom: "30px", fontFamily: "Montserrat, sans-serif" }}
        >
          Our Mentors
        </Typography>

        {loading ? ( // Display loading spinner while fetching
          <CircularProgress />
        ) : foundingMembers.length === 0 ? ( // Check if no mentors found
          <Typography variant="body1">No mentors available.</Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {foundingMembers.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member._id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    position: "relative",
                    marginBottom: "20px",
                  }}
                  onClick={() => handleOpen(member)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "5px solid transparent",
                      "::before": {
                        content: '""',
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        borderBottom: "5px solid #FFD700", // Half-circle cut design
                        borderRight: "5px solid #FFD700",
                        zIndex: "1",
                      },
                    }}
                  >
                    {/* Render the image using base64 format */}
                    {/* <img
                      src={`data:image/png;base64,${member.base64Image}`} // Use Base64 string directly
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        position: "relative",
                        zIndex: "0",
                      }}
                    /> */}
                    {/* Render the image using base64 format */}
<img
  src={member.imageUrl || 'path/to/placeholder.jpg'} // Use imageUrl instead of base64Image
  alt={member.name}
  style={{
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top center",
    position: "relative",
    zIndex: "0",
  }}
/>


                  </Box>

                  <Box sx={{ marginTop: "10px", textAlign: "center" }}>
                    <Typography variant="subtitle1">{member.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.post}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.city}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "600px",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              animation: "slideUp 0.5s ease-in-out",
              "@keyframes slideUp": {
                "0%": {
                  opacity: 0,
                  transform: "translateY(50%)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              },
            }}
          >
            {selectedMember && (
              <>
                {/* <img
                  src={`data:image/png;base64,${selectedMember.imageUrl}`} // Use Base64 string directly
                  alt={selectedMember.name}
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  }}
                /> */}
                 <img
      src={selectedMember.imageUrl || 'path/to/placeholder.jpg'}  // Use imageUrl for the modal image
      alt={selectedMember.name}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
      }}
    />
   
                    <Typography variant="h5" gutterBottom>
                  {selectedMember.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {selectedMember.post}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {selectedMember.description || "No description available."}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Location: {selectedMember.city}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default FoundingMembers;
