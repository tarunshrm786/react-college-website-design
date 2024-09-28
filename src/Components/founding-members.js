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
    { id: 5, name: "Dr. Daksh Jangid", image: "/mentor/mentor-3.jpg", jobRole: "MBBS MD Radio Diagnosis", location: "Sujangarh", description: "Detailed description here" },
    { id: 6, name: "Shyam Sundar Kumawat", image: "/mentor/mentor-5.jpg", jobRole: "Ph.D., Rajasthan", location: "Rajasthan", description: "Detailed description here" }
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
          Our Mentor
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
