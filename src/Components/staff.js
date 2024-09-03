
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
//       {/* New Section with Square Images */}
//       <Box sx={{ textAlign: "center", margin: "20px 0" }}>
//         <Typography variant="h4" gutterBottom>
//           Staff Members
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
//                     borderRadius: "0", // Square shape
//                     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
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
//       <Modal open={open} onClose={handleClose}>
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             width: "500px",
//             height: "500px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
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
//                   boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
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


import React, { useState } from "react";
import { Container, Typography, Box, Grid, Modal } from "@mui/material";

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const foundingMembers = [
    { id: 1, name: "Member 1", image: "img1.jpg", jobRole: "Job Role 1", description: "Description for Member 1" },
    { id: 2, name: "Member 2", image: "img2.jpg", jobRole: "Job Role 2", description: "Description for Member 2" },
    { id: 3, name: "Member 3", image: "img3.jpg", jobRole: "Job Role 3", description: "Description for Member 3" },
    { id: 4, name: "Member 4", image: "img4.jpg", jobRole: "Job Role 4", description: "Description for Member 4" },
    { id: 5, name: "Member 5", image: "imag5.jpg", jobRole: "Job Role 5", description: "Description for Member 5" },
    { id: 6, name: "Member 6", image: "img6.jpg", jobRole: "Job Role 6", description: "Description for Member 6" },
    { id: 7, name: "Member 7", image: "imag5.jpg", jobRole: "Job Role 7", description: "Description for Member 7" },
    { id: 8, name: "Member 8", image: "img6.jpg", jobRole: "Job Role 8", description: "Description for Member 8" },
    { id: 9, name: "Member 9", image: "img2.jpg", jobRole: "Job Role 9", description: "Description for Member 9" },
    { id: 9, name: "Member 9", image: "img4.jpg", jobRole: "Job Role 9", description: "Description for Member 9" },
  ];

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
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "30px" }}>
          Our Faculty 
        </Typography>
        <Grid container spacing={2}>
          {foundingMembers.map((member) => (
            <Grid item xs={12} sm={6} key={member.id}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginBottom: "20px",
                }}
                onClick={() => handleOpen(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "0",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.9)",
                  }}
                />
                <Box sx={{ marginLeft: "20px", textAlign: "left" }}>
                  <Typography variant="subtitle1">{member.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {member.jobRole}
                  </Typography>
                 
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Modal for Image and Text */}
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
            height: "500px",
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
                  height: "300px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 2)",
                }}
              />
              <Typography variant="h5" gutterBottom>
                {selectedMember.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {selectedMember.jobRole}
              </Typography>
              <Typography variant="body1">{selectedMember.description}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default Staff;
