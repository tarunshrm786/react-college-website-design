// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box } from '@mui/material';
// import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
// import '../contactUs.css'; 

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     enquiryFor: '',
//     name: '',
//     email: '',
//     phone: '',
//     course: '',
//     budget: '',
//     duration: '',
//   });

//   const [errors, setErrors] = useState({
//     enquiryFor: '',
//     name: '',
//     email: '',
//     phone: '',
//     course: '',
//     budget: '',
//     duration: '',
//   });

//   const validateForm = () => {
//     let formIsValid = true;
//     const newErrors = {};

//     if (!formData.enquiryFor) {
//       formIsValid = false;
//       newErrors.enquiryFor = 'Please select an enquiry type';
//     }
//     if (!formData.name.trim()) {
//       formIsValid = false;
//       newErrors.name = 'Name is required';
//     }
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!formData.email.trim()) {
//       formIsValid = false;
//       newErrors.email = 'Email is required';
//     } else if (!emailPattern.test(formData.email)) {
//       formIsValid = false;
//       newErrors.email = 'Please enter a valid email';
//     }
//     const phonePattern = /^[0-9]{10}$/;
//     if (!formData.phone.trim()) {
//       formIsValid = false;
//       newErrors.phone = 'Phone number is required';
//     } else if (!phonePattern.test(formData.phone)) {
//       formIsValid = false;
//       newErrors.phone = 'Please enter a valid 10-digit phone number';
//     }
//     if (!formData.course) {
//       formIsValid = false;
//       newErrors.course = 'Please select a course';
//     }
//     if (!formData.budget) {
//       formIsValid = false;
//       newErrors.budget = 'Please select a budget';
//     }
//     if (!formData.duration) {
//       formIsValid = false;
//       newErrors.duration = 'Please select a course duration';
//     }

//     setErrors(newErrors);
//     return formIsValid;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log('Form submitted successfully:', formData);
//     } else {
//       console.log('Validation failed');
//     }
//   };

//   return (
//     <div className="contact-us-background">
//       <Container maxWidth="lg" sx={{ marginTop: '-40px' }}>
//         <Grid container spacing={4} mt={5} alignItems="stretch" >
//           {/* Left Side: Contact Form */}
//           <Grid item xs={12} md={6} >
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" height="100%">
//               <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                 Contact Us
//               </Typography>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
//                   {/* Enquiry for */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.enquiryFor}>
//                       <InputLabel id="enquiry-for-label">Enquiry for</InputLabel>
//                       <Select
//                         labelId="enquiry-for-label"
//                         name="enquiryFor"
//                         value={formData.enquiryFor}
//                         onChange={handleChange}
//                         label="Enquiry for"
//                         required
//                       >
//                         <MenuItem value="self">Self</MenuItem>
//                         <MenuItem value="friend">Friend</MenuItem>
//                         <MenuItem value="relative">Relative</MenuItem>
//                         <MenuItem value="query">Just a Query</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.enquiryFor}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Name */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="name"
//                       label="Name (as marksheet)"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.name}
//                       onChange={handleChange}
//                       error={!!errors.name}
//                       helperText={errors.name}
//                       required
//                     />
//                   </Grid>

//                   {/* Email */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="email"
//                       label="Email"
//                       type="email"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.email}
//                       onChange={handleChange}
//                       error={!!errors.email}
//                       helperText={errors.email}
//                       required
//                     />
//                   </Grid>

//                   {/* Phone */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="phone"
//                       label="Phone no."
//                       type="tel"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.phone}
//                       onChange={handleChange}
//                       error={!!errors.phone}
//                       helperText={errors.phone}
//                       required
//                     />
//                   </Grid>

//                   {/* Course */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.course}>
//                       <InputLabel id="course-label">Choose your course</InputLabel>
//                       <Select
//                         labelId="course-label"
//                         name="course"
//                         value={formData.course}
//                         onChange={handleChange}
//                         label="Choose your course"
//                         required
//                       >
//                         <MenuItem value="UG">UG</MenuItem>
//                         <MenuItem value="PG">PG</MenuItem>
//                         <MenuItem value="ProfessionalDiploma">Professional Diploma</MenuItem>
//                         <MenuItem value="AcademicDiploma">Academic Diploma</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.course}</Typography>
//                     </FormControl>
//                   </Grid>

               
//                   {/* Submit button */}
//                   <Grid item xs={12}>
//                     <Button 
//                       type="submit" 
//                       variant="contained" 
//                       fullWidth
//                       sx={{ backgroundColor: 'black', color: 'white'}}
//                     >
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>

        //   {/* Right Side: Map and Contact Details */}
          // <Grid item xs={12} md={6}>
          //   <Box
          //     p={3}
          //     boxShadow={3}
          //     borderRadius={2}
          //     bgcolor="rgba(249, 249, 249, 0.7)"
          //     height="100%"
          //   >
          //     {/* Reduced map height */}
          //     <iframe
          //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.41449949666!2d75.14450677456311!3d27.611676429706254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca24de881db71%3A0x3030d86063e67435!2sKhwaja%20Gharib%20Nawaz%20College%20of%20Nursing%2C%20Tala%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689070271687!5m2!1sen!2sin"
          //       width="100%"
          //       height="200px"  // Updated map height
          //       style={{ border: 0 }}
          //       allowFullScreen=""
          //       loading="lazy"
          //       referrerPolicy="no-referrer-when-downgrade"
          //       title="College Location"
          //     ></iframe>

          //     {/* Contact Details */}
          //     <Box mt={2}>
          //       <Typography variant="h6" align="center" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
          //         Contact Details
          //       </Typography>
          //       <Typography variant="body1" align="center" gutterBottom>
          //         National Academy Of Design, Sikar, Rajasthan, India <br />
          //         Email: contact@academydesign.edu.in <br />
          //         Phone: +91 12345 67890
          //       </Typography>

          //       {/* Social Media Icons */}
          //       <Box display="flex" justifyContent="center" mt={2}>
          //         <Facebook sx={{ color: '#3b5998', marginRight: '15px' }} />
          //         <Twitter sx={{ color: '#00acee', marginRight: '15px' }} />
          //         <Instagram sx={{ color: '#E1306C', marginRight: '15px' }} />
          //         <LinkedIn sx={{ color: '#0072b1' }} />
          //       </Box>
          //     </Box>
          //   </Box>
          // </Grid>
        // </Grid>
//       </Container>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, CircularProgress, Snackbar, Alert } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import '../contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    enquiryFor: '',
    name: '',
    email: '',
    phone: '',
    course: '',
    budget: '',
    duration: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' or 'error'

  // Function to validate form
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    if (!formData.enquiryFor) {
      formIsValid = false;
      newErrors.enquiryFor = 'Please select an enquiry type';
    }
    if (!formData.name.trim()) {
      formIsValid = false;
      newErrors.name = 'Name is required';
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Please enter a valid email';
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      formIsValid = false;
      newErrors.phone = 'Phone number is required';
    } else if (!phonePattern.test(formData.phone)) {
      formIsValid = false;
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.course) {
      formIsValid = false;
      newErrors.course = 'Please select a course';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Function to handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true); // Show loader

    // Example API URL (replace with your actual URL)
    const apiUrl = 'http://localhost:5000/api/contactus';

    // POST request using Promises
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setSnackbarMessage('Data sent successfully!');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setFormData({
          enquiryFor: '',
          name: '',
          email: '',
          phone: '',
          course: '',
          budget: '',
          duration: '',
        }); // Reset form
      })
      .catch((error) => {
        setLoading(false);
        setSnackbarMessage('Please try again later.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        console.error('There was an error!', error);
      });
  };

  // Function to close snackbar
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="contact-us-background">
      <Container maxWidth="lg" sx={{ marginTop: '-40px' }}>
        <Grid container spacing={4} mt={5} alignItems="stretch">
          {/* Left Side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" height="100%">
              <Typography variant="h4" align="center" gutterBottom sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* Enquiry for */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.enquiryFor}>
                      <InputLabel id="enquiry-for-label">Enquiry for</InputLabel>
                      <Select
                        labelId="enquiry-for-label"
                        name="enquiryFor"
                        value={formData.enquiryFor}
                        onChange={handleChange}
                        label="Enquiry for"
                        required
                      >
                        <MenuItem value="self">Self</MenuItem>
                        <MenuItem value="friend">Friend</MenuItem>
                        <MenuItem value="relative">Relative</MenuItem>
                        <MenuItem value="query">Just a Query</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.enquiryFor}</Typography>
                    </FormControl>
                  </Grid>

                  {/* Name */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="name"
                      label="Name (as marksheet)"
                      variant="outlined"
                      fullWidth
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      fullWidth
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      required
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="phone"
                      label="Phone no."
                      type="tel"
                      variant="outlined"
                      fullWidth
                      value={formData.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      required
                    />
                  </Grid>

                  {/* Course */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.course}>
                      <InputLabel id="course-label">Choose your course</InputLabel>
                      <Select
                        labelId="course-label"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        label="Choose your course"
                        required
                      >
                        <MenuItem value="UG">UG</MenuItem>
                        <MenuItem value="PG">PG</MenuItem>
                        <MenuItem value="ProfessionalDiploma">Professional Diploma</MenuItem>
                        <MenuItem value="AcademicDiploma">Academic Diploma</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.course}</Typography>
                    </FormControl>
                  </Grid>

                  {/* Submit button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{ backgroundColor: 'black', color: 'white' }}
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Submit'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          {/* Right Side: Map and Contact Details */}
          <Grid item xs={12} md={6}>
            <Box
              p={3}
              boxShadow={3}
              borderRadius={2}
              bgcolor="rgba(249, 249, 249, 0.7)"
              height="100%"
            >
              {/* Reduced map height */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.41449949666!2d75.14450677456311!3d27.611676429706254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca24de881db71%3A0x3030d86063f17d6b!2sKhwaja%20Gharib%20Nawaz%20College%20Of%20Nursing%20Sikar!5e0!3m2!1sen!2sin!4v1690102397896!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* <Box mt={3} textAlign="center"> */}
              <Box mt={2}>
                <Typography variant="h6" align="center" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Contact Details
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  National Academy Of Design, Sikar, Rajasthan, India <br />
                  Email: contact@academydesign.edu.in <br />
                  Phone: +91 12345 67890
                </Typography>

                {/* <Typography variant="h6">Follow Us</Typography> */}
                {/* <Box>
                  <Facebook className="social-icon" />
                  <Twitter className="social-icon" />
                  <Instagram className="social-icon" />
                  <LinkedIn className="social-icon" />
                </Box> */}
                <Box display="flex" justifyContent="center" mt={2}>
                  <Facebook sx={{ color: '#3b5998', marginRight: '15px' }} />
                  <Twitter sx={{ color: '#00acee', marginRight: '15px' }} />
                  <Instagram sx={{ color: '#E1306C', marginRight: '15px' }} />
                  <LinkedIn sx={{ color: '#0072b1' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
      </Container>

      {/* Snackbar for success and error messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;
