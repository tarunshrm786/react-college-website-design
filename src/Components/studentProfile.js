// import React, { useEffect, useState } from "react";
// import { Box, Typography, Button, Container } from "@mui/material";
// import { FaUserGraduate } from "react-icons/fa";

// const StudentProfile = () => {
//   const [studentData, setStudentData] = useState(null);

//   useEffect(() => {
//     // Retrieve the student data from local storage
//     const storedData = localStorage.getItem("Student Data");
//     if (storedData) {
//       setStudentData(JSON.parse(storedData)); // Parse and set the student data
//     }
//   }, []);

//   // Function to log out the user (clear local storage and redirect)
//   const handleLogout = () => {
//     localStorage.removeItem("Student Data");
//     window.location.href = "/login"; // Redirect to the login page
//   };

//   if (!studentData) {
//     return (
//       <Container
//         maxWidth="md"
//         sx={{
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Typography variant="h6">Loading student data...</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md">
//       <Box
//         sx={{
//           mt: 4,
//           p: 3,
//           boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//           borderRadius: "10px",
//           backgroundColor: "white",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             mb: 2,
//             justifyContent: "center",
//           }}
//         >
//           <FaUserGraduate size={48} style={{ marginRight: "10px" }} />
//           <Typography variant="h5" sx={{ fontFamily: "Montserrat, sans-serif" }}>
//             Student Profile
//           </Typography>
//         </Box>

//         <Box sx={{ mt: 2 }}>
//           <Typography variant="h6">Student ID: {studentData.studentId}</Typography>
//           <Typography variant="h6">Name: {studentData.name}</Typography>
//           <Typography variant="h6">Email: {studentData.email}</Typography>
//           {/* Add any other relevant student data fields here */}
//         </Box>

//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{ mt: 3 }}
//           onClick={handleLogout}
//         >
//           Log Out
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default StudentProfile;

import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Directly retrieve the token from local storage
    console.log("Retrieved Token:", token);

    if (token) {
      setToken(token);
      navigate("/studentProfile");
    } else {
      console.log("No token found. Redirecting to login...");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove only the token
    navigate("/login");
  };

  if (!token) {
    return (
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Loading student data...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 4,
          p: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            justifyContent: "center",
          }}
        >
          <FaUserGraduate size={48} style={{ marginRight: "10px" }} />
          <Typography variant="h5" sx={{ fontFamily: "Montserrat, sans-serif" }}>
            Student Profile
          </Typography>
        </Box>

        <Typography variant="h6">Token: {token}</Typography> {/* Display the token or use it as needed */}

        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 3 }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Box>
    </Container>
  );
};

export default StudentProfile;
