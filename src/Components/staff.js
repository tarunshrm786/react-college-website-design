// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Member 1", image: "img1.jpg", jobRole: "Job Role 1", description: "Description for Member 1" },
//     { id: 2, name: "Member 2", image: "img2.jpg", jobRole: "Job Role 2", description: "Description for Member 2" },
//     { id: 3, name: "Member 3", image: "img3.jpg", jobRole: "Job Role 3", description: "Description for Member 3" },
//     { id: 4, name: "Member 4", image: "img4.jpg", jobRole: "Job Role 4", description: "Description for Member 4" },
//     { id: 5, name: "Member 5", image: "imag5.jpg", jobRole: "Job Role 5", description: "Description for Member 5" },
//     { id: 6, name: "Member 6", image: "img6.jpg", jobRole: "Job Role 6", description: "Description for Member 6" },
//     { id: 7, name: "Member 7", image: "imag5.jpg", jobRole: "Job Role 7", description: "Description for Member 7" },
//     { id: 8, name: "Member 8", image: "img6.jpg", jobRole: "Job Role 8", description: "Description for Member 8" },
//     { id: 9, name: "Member 9", image: "img2.jpg", jobRole: "Job Role 9", description: "Description for Member 9" },
//     { id: 9, name: "Member 9", image: "img4.jpg", jobRole: "Job Role 9", description: "Description for Member 9" },
//   ];

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
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" , fontFamily: 'Montserrat, sans-serif'}}>
//           Our Team 
//         </Typography>
//         <Grid container spacing={2}>
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} key={member.id}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   marginBottom: "20px",
//                 }}
//                 onClick={() => handleOpen(member)}
//               >
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   style={{
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "0",
//                     boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.9)",
//                   }}
//                 />
//                 <Box sx={{ marginLeft: "20px", textAlign: "left" }}>
//                   <Typography variant="subtitle1">{member.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.jobRole}
//                   </Typography>
                 
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Modal for Image and Text */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "500px",
//             height: "500px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             animation: "slideUp 0.5s ease-in-out",
//             '@keyframes slideUp': {
//               '0%': {
//                 opacity: 0,
//                 transform: 'translateY(50%)',
//               },
//               '100%': {
//                 opacity: 1,
//                 transform: 'translateY(0)',
//               },
//             },
//           }}
//         >
//           {selectedMember && (
//             <>
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   marginBottom: "20px",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 2)",
//                 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 {selectedMember.jobRole}
//               </Typography>
//               <Typography variant="body1">{selectedMember.description}</Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default Staff;


// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Member 1", image: "img1.jpg", jobRole: "Job Role 1", description: "Description for Member 1" },
//     { id: 2, name: "Member 2", image: "img2.jpg", jobRole: "Job Role 2", description: "Description for Member 2" },
//     { id: 3, name: "Member 3", image: "img3.jpg", jobRole: "Job Role 3", description: "Description for Member 3" },
//     { id: 4, name: "Member 4", image: "img4.jpg", jobRole: "Job Role 4", description: "Description for Member 4" },
//     { id: 5, name: "Member 5", image: "imag5.jpg", jobRole: "Job Role 5", description: "Description for Member 5" },
//   ];

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
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}>
//           Our Team
//         </Typography>
//         <Grid container spacing={3}>
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} md={4} key={member.id}>
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
//                     '::before': {
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
//                     }
//                   }}
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       borderRadius: "50%",
//                       objectFit: "cover",
//                       position: "relative",
//                       zIndex: "0",
//                     }}
//                   />
//                 </Box>
//                 <Box sx={{ marginTop: "10px", textAlign: "center" }}>
//                   <Typography variant="subtitle1">{member.name}</Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     {member.jobRole}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>

//       {/* Modal for Image and Text */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "500px",
//             height: "500px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             animation: "slideUp 0.5s ease-in-out",
//             '@keyframes slideUp': {
//               '0%': {
//                 opacity: 0,
//                 transform: 'translateY(50%)',
//               },
//               '100%': {
//                 opacity: 1,
//                 transform: 'translateY(0)',
//               },
//             },
//           }}
//         >
//           {selectedMember && (
//             <>
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   marginBottom: "20px",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 {selectedMember.jobRole}
//               </Typography>
//               <Typography variant="body1">{selectedMember.description}</Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default Staff;


// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Member 1", image: "img1.jpg", jobRole: "Job Role 1", description: "Description for Member 1" },
//     { id: 2, name: "Member 2", image: "img2.jpg", jobRole: "Job Role 2", description: "Description for Member 2" },
//     { id: 3, name: "Member 3", image: "img3.jpg", jobRole: "Job Role 3", description: "Description for Member 3" },
//     { id: 4, name: "Member 4", image: "img4.jpg", jobRole: "Job Role 4", description: "Description for Member 4" },
//     { id: 5, name: "Member 5", image: "imag5.jpg", jobRole: "Job Role 5", description: "Description for Member 5" },
//   ];

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   // Split array into chunks of 3 for rows
//   const chunkArray = (arr, chunkSize) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const rows = chunkArray(foundingMembers, 3); // Split into rows of 3

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}>
//           Our Team
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
//                       }
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
//                   </Box>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         ))}
//       </Box>

//       {/* Modal for Image and Text */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "500px",
//             height: "500px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             animation: "slideUp 0.5s ease-in-out",
//             '@keyframes slideUp': {
//               '0%': {
//                 opacity: 0,
//                 transform: 'translateY(50%)',
//               },
//               '100%': {
//                 opacity: 1,
//                 transform: 'translateY(0)',
//               },
//             },
//           }}
//         >
//           {selectedMember && (
//             <>
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   marginBottom: "20px",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 {selectedMember.jobRole}
//               </Typography>
//               <Typography variant="body1">{selectedMember.description}</Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default Staff;


// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Updated founding members data with location field
//   const foundingMembers = [
//     { id: 1, name: "Shubham Jangir", image: "img1.jpg", jobRole: "MBA", description: "Description for Shubham Jangir", location: "Rajasthan" },
//     { id: 2, name: "Sangeeta Jangir", image: "img2.jpg", jobRole: "MBA Fashion Design", description: "Description for Sangeeta Jangir", location: "Rajasthan" },
//     { id: 3, name: "Mariya", image: "img3.jpg", jobRole: "MBA", description: "Description for Mariya", location: "Rajasthan" },
//     { id: 4, name: "AR. PRERNA", image: "img4.jpg", jobRole: "B.Arch", description: "Description for AR. PRERNA", location: "Jammu Kashmir" },
//     { id: 5, name: "Urmila Jangir", image: "imag5.jpg", jobRole: "Co-founder and CEO, MBA IT", description: "Description for Urmila Jangir", location: "Rajasthan" },
//   ];

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   // Split array into chunks of 3 for rows
//   const chunkArray = (arr, chunkSize) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const rows = chunkArray(foundingMembers, 3); // Split into rows of 3

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}>
//           Our Team
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
//                       }
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
//       </Box>

//       {/* Modal for Image and Text */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "500px",
//             height: "500px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             animation: "slideUp 0.5s ease-in-out",
//             '@keyframes slideUp': {
//               '0%': {
//                 opacity: 0,
//                 transform: 'translateY(50%)',
//               },
//               '100%': {
//                 opacity: 1,
//                 transform: 'translateY(0)',
//               },
//             },
//           }}
//         >
//           {selectedMember && (
//             <>
//               <img
//                 src={selectedMember.image}
//                 alt={selectedMember.name}
//                 style={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   marginBottom: "20px",
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                 }}
//               />
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 {selectedMember.jobRole}
//               </Typography>
//               <Typography variant="body1" gutterBottom>
//                 {selectedMember.description}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Location: {selectedMember.location}
//               </Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default Staff;

// import React, { useState, lazy, Suspense } from "react";
// import { Container, Typography, Box, Grid, CircularProgress } from "@mui/material";

// // Lazily load the Modal component
// const Modal = lazy(() => import("@mui/material/Modal"));

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Updated founding members data with location field
//   const foundingMembers = [
//     { id: 1, name: "Shubham Jangir", image: "/faculty/faculty-2.jpg", jobRole: "MBA", description: "Description for Shubham Jangir", location: "Rajasthan" },
//     { id: 2, name: "Sangeeta Jangir", image: "/faculty/faculty-1.jpg", jobRole: "MBA Fashion Design", description: "Description for Sangeeta Jangir", location: "Rajasthan" },
//     { id: 3, name: "Mariya", image: "/faculty/faculty-3.jpg", jobRole: "MBA", description: "Description for Mariya", location: "Rajasthan" },
//     { id: 4, name: "AR. PRERNA", image: "/faculty/faculty-4.jpg", jobRole: "B.Arch", description: "Description for AR. PRERNA", location: "Jammu Kashmir" },
//     { id: 5, name: "Urmila Jangir", image: "/faculty/faculty-5.jpg", jobRole: "Co-founder and CEO, MBA IT", description: "Description for Urmila Jangir", location: "Rajasthan" },
//   ];

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   // Split array into chunks of 3 for rows
//   const chunkArray = (arr, chunkSize) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const rows = chunkArray(foundingMembers, 3); // Split into rows of 3

//   return (
//     <Container>
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}
//         >
//           Our Team
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

//         {/* Modal for Image and Text */}
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
//                 height: "500px",
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
//                       height: "300px",
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

// export default Staff;


import React, { useState, lazy, Suspense } from "react";
import { Container, Typography, Box, Grid, CircularProgress } from "@mui/material";

// Lazily load the Modal component
const Modal = lazy(() => import("@mui/material/Modal"));

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const foundingMembers = [
    { id: 1, name: "Shubham Jangir", image: "/faculty/faculty-2.jpg", jobRole: "MBA", location: "Rajasthan" },
    { id: 2, name: "Sangeeta Jangir", image: "/faculty/faculty-1.jpg", jobRole: "MBA Fashion Design", location: "Rajasthan" },
    { id: 3, name: "Mariya", image: "/faculty/faculty-3.jpg", jobRole: "MBA", location: "Rajasthan" },
    { id: 4, name: "AR. PRERNA", image: "/faculty/faculty-4.jpg", jobRole: "B.Arch", location: "Jammu Kashmir" },
    { id: 5, name: "Urmila Jangir", image: "/faculty/faculty-5.jpg", jobRole: "Co-founder and CEO, MBA IT", location: "Rajasthan" },
  ];

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  const chunkArray = (arr, chunkSize) => {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const rows = chunkArray(foundingMembers, 3); // Split into rows of 3

  return (
    <Container>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginBottom: "30px", fontFamily: 'Montserrat, sans-serif' }}
        >
          Our Team
        </Typography>

        {rows.map((row, rowIndex) => (
          <Grid
            container
            spacing={3}
            key={rowIndex}
            justifyContent={row.length === 2 ? "center" : "flex-start"} // Center if 2 images in the row
          >
            {row.map((member) => (
              <Grid item xs={12} sm={6} md={4} key={member.id}>
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
    '::before': {
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
  <img
    src={member.image}
    alt={member.name}
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "top center",  // Ensure the image is centered, focusing on the top
      position: "relative",
      zIndex: "0",
    }}
  />
</Box>


                  <Box sx={{ marginTop: "10px", textAlign: "center" }}>
                    <Typography variant="subtitle1">{member.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.jobRole}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {member.location}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}

        <Suspense fallback={<CircularProgress />}>
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
                '@keyframes slideUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(50%)',
                  },
                  '100%': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                },
              }}
            >
              {selectedMember && (
                <>
                  <img
                    src={selectedMember.image}
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
                    {selectedMember.jobRole}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedMember.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: {selectedMember.location}
                  </Typography>
                </>
              )}
            </Box>
          </Modal>
        </Suspense>
      </Box>
    </Container>
  );
};

export default Staff;
