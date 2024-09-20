// import React, { useState, useEffect } from "react";
// import { FaUserShield } from 'react-icons/fa';
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
// import './css/login.css';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AdminLogin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [captcha, setCaptcha] = useState("");
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [errors, setErrors] = useState({
//     username: "",
//     password: "",
//     captcha: "",
//   });
//   const [isMounted, setIsMounted] = useState(false);

//   // Initialize useNavigate
//   const navigate = useNavigate();

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

//     // Validate Username
//     if (!username) {
//       formIsValid = false;
//       errors.username = "Username is required.";
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
//       // Static login check
//       if (username === "admin" && password === "admin123") {
//         alert("Login successful!");
//         // Redirect to the admin home page
//         navigate('/admin-home'); // Adjust the route as necessary
//       } else {
//         alert("Invalid username or password.");
//       }
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
//         backgroundImage: `url('/banner-1.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         opacity: 0.9,
//         width: "100vw",
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
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//         }}
//       >
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <FaUserShield style={{ marginRight: '8px', height: '20px' }} />
//           <Typography
//             component="h1"
//             variant="h5"
//             sx={{ fontFamily: "Montserrat, sans-serif", color: 'inherit' }}
//           >
//             Admin Login
//           </Typography>
//         </Box>

//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             error={Boolean(errors.username)}
//             helperText={errors.username}
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

// export default AdminLogin;

import React, { useState, useEffect } from "react";
import { FaUserShield } from 'react-icons/fa';
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
import './css/login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    captcha: "",
  });
  const [isMounted, setIsMounted] = useState(false);

  // Initialize useNavigate
  const navigate = useNavigate();

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

    // Validate Username
    if (!username) {
      formIsValid = false;
      errors.username = "Username is required.";
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
      // Static login check
      if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        // Redirect to the admin home page
        navigate('/admin-home'); // Adjust the route as necessary
      } else {
        alert("Invalid username or password.");
      }
    }
  };

  const handleCaptchaRefresh = () => {
    setCaptcha(generateCaptcha());
    setCaptchaInput(""); // Reset the captcha input field
  };

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
        backgroundImage: `url('/banner-1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
        width: "100vw",
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
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FaUserShield style={{ marginRight: '8px', height: '20px' }} />
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif", color: 'inherit' }}
          >
            Admin Login
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(errors.username)}
            helperText={errors.username}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Field with Eye Icon */}
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
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
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
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

export default AdminLogin;
