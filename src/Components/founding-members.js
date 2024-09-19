// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Dr. Neelam Jangid", image: "/mentor/mentor-4.jpg", jobRole: "Director, Dr Jangid Hospital Sujangarh" },
//     { id: 2, name: "Dr. Satyanarayan Jangid", image: "/mentor/mentor-6.jpg", jobRole: "Gynecologist and Obstetrician" },
//     { id: 3, name: "Dr. Rohit Soni", image: "/mentor/mentor-2.jpg", jobRole: "Professor of Practice, School of Law Mody University of Science and Technology, Rajasthan" },
//     { id: 4, name: "Vivek Kumawat", image: "/mentor/mentor-7.jpg", jobRole: "B.Tech. (CE) M.Tech.(SE) Member of The Institution Of Engineers, India (M-1807018) Assistant Engineer Civil Rajasthan Vidyut Utpadan Nigam" },
//     { id: 5, name: "Shyam Sundar Kumawat", image: "/mentor/mentor-3.jpg", jobRole: "Ph.D., Rajasthan" },
//     { id: 6, name: "Dr. Daksh Jangid", image: "/mentor/mentor-5.jpg", jobRole: "MBBS MD Radio Diagnosis" }
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
//           Our Mentors
//         </Typography>
//         <Grid container spacing={2}>
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} md={4} key={member.id}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   marginBottom: "20px",
//                   flexDirection: "column", // Stack image and text vertically
//                   textAlign: "center" // Center text below image
//                 }}
//                 onClick={() => handleOpen(member)}
//               >
//                 <Box
//                   sx={{
//                     width: "150px",
//                     height: "150px",
//                     borderRadius: "50%",
//                     overflow: "hidden", // Ensure content is clipped to the circular shape
//                     boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.9)",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover", // Ensure image covers the circular area
//                     }}
//                   />
//                 </Box>
//                 <Typography variant="subtitle1">{member.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {member.jobRole}
//                 </Typography>
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
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: "8px",
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
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
//                   }}
//                 />
//               </Box>
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

// export default FoundingMembers;

// import React, { useState } from "react";
// import { Container, Typography, Box, Grid, Modal } from "@mui/material";

// const FoundingMembers = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Dr. Neelam Jangid", image: "/mentor/mentor-4.jpg", jobRole: "Director, Dr Jangid Hospital Sujangarh" },
//     { id: 2, name: "Dr. Satyanarayan Jangid", image: "/mentor/mentor-6.jpg", jobRole: "Gynecologist and Obstetrician" },
//     { id: 3, name: "Dr. Rohit Soni", image: "/mentor/mentor-2.jpg", jobRole: "Professor of Practice, School of Law Mody University of Science and Technology, Rajasthan" },
//     { id: 4, name: "Vivek Kumawat", image: "/mentor/mentor-7.jpg", jobRole: "B.Tech. (CE) M.Tech.(SE) Member of The Institution Of Engineers, India (M-1807018) Assistant Engineer Civil Rajasthan Vidyut Utpadan Nigam" },
//     { id: 5, name: "Shyam Sundar Kumawat", image: "/mentor/mentor-3.jpg", jobRole: "Ph.D., Rajasthan" },
//     { id: 6, name: "Dr. Daksh Jangid", image: "/mentor/mentor-5.jpg", jobRole: "MBBS MD Radio Diagnosis" }
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
//           Our Mentors
//         </Typography>
//         <Grid container spacing={2}>
//           {foundingMembers.map((member) => (
//             <Grid item xs={12} sm={6} md={4} key={member.id}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   cursor: "pointer",
//                   marginBottom: "20px",
//                   flexDirection: "column", // Stack image and text vertically
//                   textAlign: "center" // Center text below image
//                 }}
//                 onClick={() => handleOpen(member)}
//               >
//                 <Box
//                   sx={{
//                     width: "180px", // Size of the circular container
//                     height: "180px", // Size of the circular container
//                     borderRadius: "50%", // Circular shape
//                     overflow: "hidden", // Ensure content is clipped to the circular shape
//                     boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.9)",
//                     marginBottom: "10px",
//                     display: "flex", // Flexbox to center the image
//                     alignItems: "center",
//                     justifyContent: "center"
//                   }}
//                 >
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover", // Ensure image covers the circular area
//                       objectPosition: "center", // Center the image
//                       display: "block" // Remove any extra space below the image
//                     }}
//                   />
//                 </Box>
//                 <Typography variant="subtitle1">{member.name}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {member.jobRole}
//                 </Typography>
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
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//             borderRadius: "8px",
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
//               <Box
//                 sx={{
//                   width: "100%",
//                   height: "300px",
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   marginBottom: "20px",
//                 }}
//               >
//                 <img
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "contain", // Ensure image fits within the space
//                     objectPosition: "center", // Center the image
//                     display: "block" // Remove any extra space below the image
//                   }}
//                 />
//               </Box>
//               <Typography variant="h5" gutterBottom>
//                 {selectedMember.name}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" gutterBottom>
//                 {selectedMember.jobRole}
//               </Typography>
//             </>
//           )}
//         </Box>
//       </Modal>
//     </Container>
//   );
// };

// export default FoundingMembers;

import React, { useState, Suspense } from "react";
import { Container, Typography, Box, Grid, Modal, CircularProgress } from "@mui/material";

const FoundingMembers = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const foundingMembers = [
    { id: 1, name: "Dr. Neelam Jangid", image: "/mentor/mentor-4.jpg", jobRole: "Director, Dr Jangid Hospital Sujangarh", location: "Sujangarh", description: "Detailed description here" },
    { id: 2, name: "Dr. Satyanarayan Jangid", image: "/mentor/mentor-6.jpg", jobRole: "Gynecologist and Obstetrician", location: "Sujangarh", description: "Detailed description here" },
    { id: 3, name: "Dr. Rohit Soni", image: "/mentor/mentor-2.jpg", jobRole: "Professor of Practice, School of Law Mody University of Science and Technology, Rajasthan", location: "Rajasthan", description: "Detailed description here" },
    { id: 4, name: "Vivek Kumawat", image: "/mentor/mentor-7.jpg", jobRole: "B.Tech. (CE) M.Tech.(SE) Member of The Institution Of Engineers, India (M-1807018) Assistant Engineer Civil Rajasthan Vidyut Utpadan Nigam", location: "Rajasthan", description: "Detailed description here" },
    { id: 5, name: "Shyam Sundar Kumawat", image: "/mentor/mentor-3.jpg", jobRole: "Ph.D., Rajasthan", location: "Rajasthan", description: "Detailed description here" },
    { id: 6, name: "Dr. Daksh Jangid", image: "/mentor/mentor-5.jpg", jobRole: "MBBS MD Radio Diagnosis", location: "Sujangarh", description: "Detailed description here" }
  ];

  const handleOpen = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  // Assuming 'rows' is an array of arrays, each representing a row of members
  const rows = [
    foundingMembers.slice(0, 3), // First row
    foundingMembers.slice(3) // Second row
  ];

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
                        objectPosition: "top center", // Ensure the image is centered, focusing on the top
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

export default FoundingMembers;
