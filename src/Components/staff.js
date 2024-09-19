import React, { useState, lazy, Suspense } from "react";
import { Container, Typography, Box, Grid, CircularProgress } from "@mui/material";

// Lazily load the Modal component
const Modal = lazy(() => import("@mui/material/Modal"));

const Staff = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const foundingMembers = [
    { id: 1, name: "Shubham Jangir", jobRole: "MBA", location: "Rajasthan", image: "/faculty/faculty-2.jpg" },
    { id: 2, name: "Sangeeta Jangir", jobRole: "MBA Fashion Design", location: "Rajasthan", image: "/faculty/faculty-3.jpg" },
    { id: 3, name: "Mariya", jobRole: "MBA", location: "Rajasthan", image: "/faculty/faculty-1.jpg" },
    { id: 4, name: "AR. PRERNA", jobRole: "B.Arch", location: "Jammu Kashmir", image: "/faculty/faculty-5.jpg" },
    { id: 5, name: "Urmila Jangir", jobRole: "Co-founder and CEO, MBA IT", location: "Rajasthan", image: "/faculty/faculty-4.jpg" },
    { id: 6, name: "Vaithamaanidhi L", jobRole: "B.Arch and M.Plan", location: "Mysore", image: "/faculty/faculty-6.jpg" },
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
