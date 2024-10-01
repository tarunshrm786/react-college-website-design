// import React, { useState, lazy, Suspense } from "react";
// import { Container, Typography, Box, Grid, CircularProgress } from "@mui/material";

// // Lazily load the Modal component
// const Modal = lazy(() => import("@mui/material/Modal"));

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);

//   const foundingMembers = [
//     { id: 1, name: "Shubham Jangir", jobRole: "MBA", location: "Rajasthan", image: "/faculty/faculty-2.jpg" },
//     { id: 2, name: "Sangeeta Jangir", jobRole: "MBA Fashion Design", location: "Rajasthan", image: "/faculty/faculty-3.jpg" },
//     { id: 3, name: "Mariya", jobRole: "MBA", location: "Rajasthan", image: "/faculty/faculty-1.jpg" },
//     { id: 4, name: "AR. PRERNA", jobRole: "B.Arch", location: "Jammu Kashmir", image: "/faculty/faculty-5.jpg" },
//     { id: 5, name: "Urmila Jangir", jobRole: "Co-founder and CEO, MBA IT", location: "Rajasthan", image: "/faculty/faculty-4.jpg" },
//     { id: 6, name: "Vaithamaanidhi L", jobRole: "B.Arch and M.Plan", location: "Mysore", image: "/faculty/faculty-6.jpg" },
//   ];

  
//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

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
      
//                    <Box
//   sx={{
//     position: "relative",
//     width: "150px",
//     height: "150px",
//     borderRadius: "50%",
//     overflow: "hidden",
//     border: "5px solid transparent",
//     '::before': {
//       content: '""',
//       position: "absolute",
//       top: "0",
//       left: "0",
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       borderBottom: "5px solid #FFD700", // Half-circle cut design
//       borderRight: "5px solid #FFD700",
//       zIndex: "1",
      
//     },
//   }}
// >
//   <img
//     src={member.image}
//     alt={member.name}
//     style={{
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       objectFit: "cover",
//       objectPosition: "top center",  // Ensure the image is centered, focusing on the top
//       position: "relative",
//       zIndex: "0",
//     }}
//   />
// </Box>


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

// export default Staff;

// import React, { useState, useEffect, lazy, Suspense } from "react";
// import { Container, Typography, Box, Grid, CircularProgress } from "@mui/material";

// // Lazily load the Modal component
// const Modal = lazy(() => import("@mui/material/Modal"));

// const Staff = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchTeamMembers = async () => {
//       try {
//         const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams'); // Replace with your actual API endpoint
//         const data = await response.json();
//         setTeamMembers(data);
//       } catch (error) {
//         console.error("Error fetching team members:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeamMembers();
//   }, []);

//   const handleOpen = (member) => {
//     setSelectedMember(member);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedMember(null);
//   };

//   const chunkArray = (arr, chunkSize) => {
//     let result = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       result.push(arr.slice(i, i + chunkSize));
//     }
//     return result;
//   };

//   const rows = chunkArray(teamMembers, 3); // Split into rows of 3

//   if (loading) {
//     return <CircularProgress />;
//   }

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
//             justifyContent={row.length === 2 ? "center" : "flex-start"}
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
//                         borderBottom: "5px solid #FFD700",
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
//                         objectPosition: "top center",
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

// export default Staff;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Modal,
  CircularProgress,
} from "@mui/material";
import { fetchTeams } from "../api/api"; // Import the fetchMentors function from your API file

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetching data from the API
  useEffect(() => {
    const fetchTeamsData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const mentors = await fetchTeams(); // Fetch mentors using your API function
        console.log("Fetched teams data: ", mentors); // For debugging
        setTeamMembers(mentors); // Update state with mentors data
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTeamsData();
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
          Our Teams
        </Typography>

        {loading ? ( // Display loading spinner while fetching
          <CircularProgress />
        ) : teamMembers.length === 0 ? ( // Check if no mentors found
          <Typography variant="body1">No mentors available.</Typography>
        ) : (
          <Grid container spacing={3} justifyContent="center">
            {teamMembers.map((member) => (
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

export default Staff;
