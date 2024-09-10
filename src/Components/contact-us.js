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
//     <Container maxWidth="lg" sx={{ marginTop: '-40px' }}>
//       <Grid container spacing={4} mt={5}>
//         {/* Left Side: Contact Form */}
//         <Grid item xs={12} md={6}>
//           {/* <Box p={3} boxShadow={3} borderRadius={2} bgcolor="#f9f9f9"> */}
//           <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)">
//             <Typography variant="h4" align="center" gutterBottom sx={{fontFamily: 'Montserrat, sans-serif'}}>
//               Contact Us
//             </Typography>
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 {/* Enquiry for */}
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth error={!!errors.enquiryFor}>
//                     <InputLabel id="enquiry-for-label">Enquiry for</InputLabel>
//                     <Select
//                       labelId="enquiry-for-label"
//                       name="enquiryFor"
//                       value={formData.enquiryFor}
//                       onChange={handleChange}
//                       label="Enquiry for"
//                       required
//                     >
//                       <MenuItem value="self">Self</MenuItem>
//                       <MenuItem value="friend">Friend</MenuItem>
//                       <MenuItem value="relative">Relative</MenuItem>
//                       <MenuItem value="query">Just a Query</MenuItem>
//                     </Select>
//                     <Typography variant="caption" color="error">{errors.enquiryFor}</Typography>
//                   </FormControl>
//                 </Grid>

//                 {/* Name */}
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     name="name"
//                     label="Name (as marksheet)"
//                     variant="outlined"
//                     fullWidth
//                     value={formData.name}
//                     onChange={handleChange}
//                     error={!!errors.name}
//                     helperText={errors.name}
//                     required
//                   />
//                 </Grid>

//                 {/* Email */}
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     name="email"
//                     label="Email"
//                     type="email"
//                     variant="outlined"
//                     fullWidth
//                     value={formData.email}
//                     onChange={handleChange}
//                     error={!!errors.email}
//                     helperText={errors.email}
//                     required
//                   />
//                 </Grid>

//                 {/* Phone */}
//                 <Grid item xs={12} md={6}>
//                   <TextField
//                     name="phone"
//                     label="Phone no."
//                     type="tel"
//                     variant="outlined"
//                     fullWidth
//                     value={formData.phone}
//                     onChange={handleChange}
//                     error={!!errors.phone}
//                     helperText={errors.phone}
//                     required
//                   />
//                 </Grid>

//                 {/* Course */}
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth error={!!errors.course}>
//                     <InputLabel id="course-label">Choose your course</InputLabel>
//                     <Select
//                       labelId="course-label"
//                       name="course"
//                       value={formData.course}
//                       onChange={handleChange}
//                       label="Choose your course"
//                       required
//                     >
//                       <MenuItem value="Course A">Course A</MenuItem>
//                       <MenuItem value="Course B">Course B</MenuItem>
//                       <MenuItem value="Course C">Course C</MenuItem>
//                     </Select>
//                     <Typography variant="caption" color="error">{errors.course}</Typography>
//                   </FormControl>
//                 </Grid>

//                 {/* Budget */}
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth error={!!errors.budget}>
//                     <InputLabel id="budget-label">Choose your budget</InputLabel>
//                     <Select
//                       labelId="budget-label"
//                       name="budget"
//                       value={formData.budget}
//                       onChange={handleChange}
//                       label="Choose your budget"
//                       required
//                     >
//                       <MenuItem value="Below $500">Below $500</MenuItem>
//                       <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
//                       <MenuItem value="Above $1000">Above $1000</MenuItem>
//                     </Select>
//                     <Typography variant="caption" color="error">{errors.budget}</Typography>
//                   </FormControl>
//                 </Grid>

//                 {/* Duration */}
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth error={!!errors.duration}>
//                     <InputLabel id="duration-label">Time duration for course</InputLabel>
//                     <Select
//                       labelId="duration-label"
//                       name="duration"
//                       value={formData.duration}
//                       onChange={handleChange}
//                       label="Time duration for course"
//                       required
//                     >
//                       <MenuItem value="1 Month">1 Month</MenuItem>
//                       <MenuItem value="3 Months">3 Months</MenuItem>
//                       <MenuItem value="6 Months">6 Months</MenuItem>
//                       <MenuItem value="1 Year">1 Year</MenuItem>
//                     </Select>
//                     <Typography variant="caption" color="error">{errors.duration}</Typography>
//                   </FormControl>
//                 </Grid>

//                 {/* Submit button */}
//                 <Grid item xs={12}>
//                   <Button 
//                     type="submit" 
//                     variant="contained" 
//                     fullWidth
//                     sx={{ backgroundColor: 'black', color: 'white'}}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>

//         {/* Right Side: Map and Contact Details */}
//         <Grid item xs={12} md={6}>
//           <Box
//           p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)"
//           sx={{ marginBottom: '20px' }}
//           >
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.41449949666!2d75.14450677456311!3d27.611676429706254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca55de1463785%3A0xfb9c65d2f6a4f15!2sNational%20Academy%20of%20Design!5e0!3m2!1sen!2sin!4v1725516203148!5m2!1sen!2sin" 
//               width="100%"
//               height="300"
//               allowFullScreen=""
//               loading="lazy"
//               title="Google Map"
//               style={{ border: 0 }}
//             ></iframe>

//             <Box mt={2}>
//               <Typography variant="h6" sx={{fontFamily: 'Montserrat, sans-serif'}}>Contact Information</Typography>
//               <Typography sx={{fontFamily: 'Montserrat, sans-serif'}}>Phone: +1 (555) 123-4567</Typography>
//               <Typography sx={{fontFamily: 'Montserrat, sans-serif'}}>Email: contact@company.com</Typography>
//               <Typography sx={{fontFamily: 'Montserrat, sans-serif'}}>Address: 1600 Amphitheatre Parkway, Mountain View, CA</Typography>
//             </Box>

//             <Box mt={2}>
//               <Typography variant="h6" sx={{fontFamily: 'Montserrat, sans-serif'}}>Follow Us</Typography>
//               <Box display="flex" justifyContent="center" sx={{ marginY: 2 }}>
//   <Facebook sx={{ fontSize: 30, mx: 1, color: '#3b5998' }} />
//   <Twitter sx={{ fontSize: 30, mx: 1, color: '#1da1f2' }} />
//   <Instagram sx={{ fontSize: 30, mx: 1, color: '#e1306c' }} />
//   <LinkedIn sx={{ fontSize: 30, mx: 1, color: '#0077b5' }} />
// </Box>

//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box } from '@mui/material';
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

  const [errors, setErrors] = useState({
    enquiryFor: '',
    name: '',
    email: '',
    phone: '',
    course: '',
    budget: '',
    duration: '',
  });

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
    if (!formData.budget) {
      formIsValid = false;
      newErrors.budget = 'Please select a budget';
    }
    if (!formData.duration) {
      formIsValid = false;
      newErrors.duration = 'Please select a course duration';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className="contact-us-background">
      <Container maxWidth="lg" sx={{ marginTop: '-40px' }}>
        <Grid container spacing={4} mt={5} alignItems="stretch" >
          {/* Left Side: Contact Form */}
          <Grid item xs={12} md={6} >
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
                        <MenuItem value="Course A">Course A</MenuItem>
                        <MenuItem value="Course B">Course B</MenuItem>
                        <MenuItem value="Course C">Course C</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.course}</Typography>
                    </FormControl>
                  </Grid>

                  {/* Budget */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.budget}>
                      <InputLabel id="budget-label">Choose your budget</InputLabel>
                      <Select
                        labelId="budget-label"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        label="Choose your budget"
                        required
                      >
                        <MenuItem value="Below $500">Below $500</MenuItem>
                        <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
                        <MenuItem value="Above $1000">Above $1000</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.budget}</Typography>
                    </FormControl>
                  </Grid>

                  {/* Duration */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.duration}>
                      <InputLabel id="duration-label">Time duration for course</InputLabel>
                      <Select
                        labelId="duration-label"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        label="Time duration for course"
                        required
                      >
                        <MenuItem value="1 Month">1 Month</MenuItem>
                        <MenuItem value="3 Months">3 Months</MenuItem>
                        <MenuItem value="6 Months">6 Months</MenuItem>
                        <MenuItem value="1 Year">1 Year</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.duration}</Typography>
                    </FormControl>
                  </Grid>

                  {/* Submit button */}
                  <Grid item xs={12}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      fullWidth
                      sx={{ backgroundColor: 'black', color: 'white'}}
                    >
                      Submit
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.41449949666!2d75.14450677456311!3d27.611676429706254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca24de881db71%3A0x3030d86063e67435!2sKhwaja%20Gharib%20Nawaz%20College%20of%20Nursing%2C%20Tala%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689070271687!5m2!1sen!2sin"
                width="100%"
                height="200px"  // Updated map height
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              ></iframe>

              {/* Contact Details */}
              <Box mt={2}>
                <Typography variant="h6" align="center" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Contact Details
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  Khwaja Gharib Nawaz College of Nursing, Tala, Rajasthan, India <br />
                  Email: contact@kgncollege.edu.in <br />
                  Phone: +91 12345 67890
                </Typography>

                {/* Social Media Icons */}
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
    </div>
  );
};

export default ContactUs;
