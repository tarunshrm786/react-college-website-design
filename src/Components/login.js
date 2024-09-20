// import React, { useState, useEffect } from "react";
// import { FaUserGraduate } from 'react-icons/fa';
// import {
//   Container,
//   TextField,
//   Button,
//   Box,
//   Typography,
//   IconButton,
//   InputAdornment,
// } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import LockIcon from "@mui/icons-material/Lock";
// import SecurityIcon from "@mui/icons-material/Security";
// import '../login.css';

// const LoginForm = () => {
//   const [studentId, setStudentId] = useState("");
//   const [password, setPassword] = useState("");
//   const [captcha, setCaptcha] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [errors, setErrors] = useState({
//     studentId: "",
//     password: "",
//     captcha: "",
//   });
//   const [isMounted, setIsMounted] = useState(false);

//   // Function to generate random captcha (4 digits)
//   const generateCaptcha = () => {
//     return Math.floor(1000 + Math.random() * 9000).toString();
//   };

//   // UseEffect to set captcha on component mount
//   useEffect(() => {
//     setCaptcha(generateCaptcha());
//     setIsMounted(true);
//   }, []);

//   const validateForm = () => {
//     let formIsValid = true;
//     let errors = {};

//     // Validate Student ID (must be 12 digits)
//     if (!studentId) {
//       formIsValid = false;
//       errors.studentId = "Student ID is required.";
//     } else if (!/^\d{12}$/.test(studentId)) {
//       formIsValid = false;
//       errors.studentId = "Student ID must be exactly 12 digits.";
//     }

//     // Validate password
//     if (!password) {
//       formIsValid = false;
//       errors.password = "Password is required.";
//     } else if (password.length < 6) {
//       formIsValid = false;
//       errors.password = "Password must be at least 6 characters long.";
//     }

//     // Validate captcha
//     if (captcha !== captchaInput) {
//       formIsValid = false;
//       errors.captcha = "Captcha is incorrect.";
//     }

//     setErrors(errors);
//     return formIsValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       alert("Form submitted!");
//       // You can add your login logic here (API calls, authentication, etc.)
//     }
//   };

//   const handleCaptchaRefresh = () => {
//     setCaptcha(generateCaptcha());
//     setCaptchaInput(""); // Reset the captcha input field
//   };

//   return (
//     <Container
//       maxWidth={false}
//       disableGutters
//       sx={{
//         position: "relative",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: `url('/banner-1.jpg')`, // Replace with your image path
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: 0.9, // Controls overall opacity
//         width: "100vw", // Full width of the viewport
//       }}
//     >
//       <Box
//         className={isMounted ? "animate-form" : ""}
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           marginTop: 8,
//           marginBottom: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//           padding: "20px",
//           borderRadius: "10px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent to show bg through
//         }}
//       >
//         {/* <Typography
//           component="h1"
//           variant="h5"
//           sx={{ fontFamily: "Montserrat, sans-serif" }}
//         >
//           Login
//         </Typography> */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Flexbox for row alignment */}
//           <FaUserGraduate style={{ marginRight: '8px', height: '20px' }} /> {/* Student icon */}
//           <Typography
//             component="h1"
//             variant="h5"
//             sx={{ fontFamily: "Montserrat, sans-serif", color: 'inherit' }} // Maintain default color
//           >
//             Login
//           </Typography>
//         </Box>

//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="studentId"
//             label="Student ID"
//             name="studentId"
//             autoComplete="studentId"
//             autoFocus
//             value={studentId}
//             onChange={(e) => setStudentId(e.target.value)}
//             error={Boolean(errors.studentId)}
//             helperText={errors.studentId}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <AccountCircle />
//                 </InputAdornment>
//               ),
//             }}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={Boolean(errors.password)}
//             helperText={errors.password}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LockIcon />
//                 </InputAdornment>
//               ),
//             }}
//           />

//           {/* Captcha Section */}
//           <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
//             <TextField
//               variant="outlined"
//               label="Captcha"
//               value={captchaInput}
//               onChange={(e) => setCaptchaInput(e.target.value)}
//               error={Boolean(errors.captcha)}
//               helperText={errors.captcha}
//               sx={{ flexGrow: 1 }}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SecurityIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Typography sx={{ ml: 2, fontSize: "20px" }}>{captcha}</Typography>
//             <IconButton onClick={handleCaptchaRefresh} sx={{ ml: 1 }}>
//               <RefreshIcon />
//             </IconButton>
//           </Box>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               mb: 2,
//               backgroundColor: "black",
//               fontFamily: "Montserrat, sans-serif",
//             }}
//           >
//             Sign In
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default LoginForm;


import React, { useState, useEffect } from "react";
import { FaUserGraduate } from 'react-icons/fa';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import '../login.css';

const LoginForm = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({
    studentId: "",
    password: "",
    captcha: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  // Function to generate random captcha (4 digits)
  const generateCaptcha = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  // UseEffect to set captcha on component mount
  useEffect(() => {
    setCaptcha(generateCaptcha());
    setIsMounted(true);
  }, []);

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Validate Student ID (must be 12 digits)
    if (!studentId) {
      formIsValid = false;
      errors.studentId = "Student ID is required.";
    } else if (!/^\d{12}$/.test(studentId)) {
      formIsValid = false;
      errors.studentId = "Student ID must be exactly 12 digits.";
    }

    // Validate password
    if (!password) {
      formIsValid = false;
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      formIsValid = false;
      errors.password = "Password must be at least 6 characters long.";
    }

    // Validate captcha
    if (captcha !== captchaInput) {
      formIsValid = false;
      errors.captcha = "Captcha is incorrect.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted!");
      // You can add your login logic here (API calls, authentication, etc.)
    }
  };

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput(""); // Reset the captcha input field
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword); // Toggle password visibility
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('/banner-1.jpg')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9, // Controls overall opacity
        width: "100vw", // Full width of the viewport
      }}
    >
      <Box
        className={isMounted ? "animate-form" : ""}
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent to show bg through
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Flexbox for row alignment */}
          <FaUserGraduate style={{ marginRight: '8px', height: '20px' }} /> {/* Student icon */}
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", color: 'inherit' }} // Maintain default color
          >
            Login
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="studentId"
            label="Student ID"
            name="studentId"
            autoComplete="studentId"
            autoFocus
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            error={Boolean(errors.studentId)}
            helperText={errors.studentId}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"} // Toggle between text and password
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Captcha Section */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <TextField
              variant="outlined"
              label="Captcha"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              error={Boolean(errors.captcha)}
              helperText={errors.captcha}
              sx={{ flexGrow: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SecurityIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Typography sx={{ ml: 2, fontSize: "20px" }}>{captcha}</Typography>
            <IconButton onClick={handleCaptchaRefresh} sx={{ ml: 1 }}>
              <RefreshIcon />
            </IconButton>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "black",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
