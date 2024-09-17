// import React, { useState } from 'react';
// import '../career.css'; // Import the CSS file for styling

// const Career = () => {
//   const [formData, setFormData] = useState({
//     appliedFor: '',
//     name: '',
//     gender: '',
//     experience: '',
//     highestQualification: '',
//     expectedSalary: '',
//     email: '',
//     mobileNo: '',
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., send data to server)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="career-container">
//       <h1>Career Opportunities</h1>
//       <form onSubmit={handleSubmit} className="career-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="appliedFor">Applied for*</label>
//             <input
//               type="text"
//               id="appliedFor"
//               name="appliedFor"
//               value={formData.appliedFor}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="name">Name*</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Gender*</label>
//             <div>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   checked={formData.gender === 'Male'}
//                   onChange={handleChange}
//                   required
//                 />
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   checked={formData.gender === 'Female'}
//                   onChange={handleChange}
//                   required
//                 />
//                 Female
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Other"
//                   checked={formData.gender === 'Other'}
//                   onChange={handleChange}
//                   required
//                 />
//                 Other
//               </label>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="experience">Experience*</label>
//             <input
//               type="text"
//               id="experience"
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="highestQualification">Highest Qualification*</label>
//             <input
//               type="text"
//               id="highestQualification"
//               name="highestQualification"
//               value={formData.highestQualification}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="expectedSalary">Expected Salary*</label>
//             <input
//               type="text"
//               id="expectedSalary"
//               name="expectedSalary"
//               value={formData.expectedSalary}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="email">Email*</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="mobileNo">Mobile No*</label>
//             <input
//               type="text"
//               id="mobileNo"
//               name="mobileNo"
//               value={formData.mobileNo}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label htmlFor="resume">Upload Resume*</label>
//           <input
//             type="file"
//             id="resume"
//             name="resume"
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Career;


// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box } from '@mui/material';
// import '../career.css';

// const Career = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: null,
//     gender: '',
//     experience: '',
//     qualification: '',
//     salary: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: '',
//     gender: '',
//     experience: '',
//     qualification: '',
//     salary: '',
//   });

//   const validateForm = () => {
//     let formIsValid = true;
//     const newErrors = {};

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
//     if (!formData.document) {
//       formIsValid = false;
//       newErrors.document = 'Please upload a document';
//     }
//     if (!formData.gender) {
//       formIsValid = false;
//       newErrors.gender = 'Please select your gender';
//     }
//     if (!formData.experience) {
//       formIsValid = false;
//       newErrors.experience = 'Please enter your experience';
//     }
//     if (!formData.qualification) {
//       formIsValid = false;
//       newErrors.qualification = 'Please enter your highest qualification';
//     }
//     if (!formData.salary) {
//       formIsValid = false;
//       newErrors.salary = 'Please enter your expected salary';
//     }

//     setErrors(newErrors);
//     return formIsValid;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, document: e.target.files[0] });
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
//     <div className="admission-form-background" style={{ position: 'relative' }}>
//       {/* <Container maxWidth="lg" sx={{ marginBottom: '-10px', marginTop: '-40px' }}>
//         */}
//         <Container 
//   maxWidth="lg" 
//   sx={{
//     // paddingTop: { xs: '20px', sm: '40px', md: '60px' }, 
//     paddingTop: { xs: '5px', sm: '10px', md: '10px' },
//     paddingBottom: { xs: '20px', sm: '40px', md: '60px' },
//     display: 'flex', 
//     alignItems: 'center', 
//     justifyContent: 'center',
//     minHeight: '100vh'}}>
//         <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
//           <Grid item xs={10}>
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
//               <div className="text-container">
//                 <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                   Career
//                 </Typography>
//                 <Typography variant="h4" align="center" gutterBottom className="admission-form" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                   Form
//                 </Typography>
//               </div>

//               <div className="smoke-effect"></div>
//               <form onSubmit={handleSubmit}>
//                 <Grid container spacing={3}>
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

//                   {/* Document Upload */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="document"
//                       type="file"
//                       variant="outlined"
//                       fullWidth
//                       onChange={handleFileChange}
//                       error={!!errors.document}
//                       helperText={errors.document}
//                       required
//                     />
//                   </Grid>

//                   {/* Gender */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth variant="outlined" error={!!errors.gender}>
//                       <InputLabel>Gender</InputLabel>
//                       <Select
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                         label="Gender"
//                       >
//                         <MenuItem value="Male">Male</MenuItem>
//                         <MenuItem value="Female">Female</MenuItem>
//                         <MenuItem value="Other">Other</MenuItem>
//                       </Select>
//                       {errors.gender && <Typography color="error">{errors.gender}</Typography>}
//                     </FormControl>
//                   </Grid>

//                   {/* Experience */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="experience"
//                       label="Experience"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.experience}
//                       onChange={handleChange}
//                       error={!!errors.experience}
//                       helperText={errors.experience}
//                       required
//                     />
//                   </Grid>

//                   {/* Highest Qualification */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="qualification"
//                       label="Highest Qualification"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.qualification}
//                       onChange={handleChange}
//                       error={!!errors.qualification}
//                       helperText={errors.qualification}
//                       required
//                     />
//                   </Grid>

//                   {/* Expected Salary */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="salary"
//                       label="Expected Salary"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.salary}
//                       onChange={handleChange}
//                       error={!!errors.salary}
//                       helperText={errors.salary}
//                       required
//                     />
//                   </Grid>

//                   {/* Submit */}
//                   <Grid item xs={12}>
//                     <Button variant="contained" type="submit" sx={{ backgroundColor: 'black' }}>
//                       Submit
//                     </Button>
//                   </Grid>
//                 </Grid>
//               </form>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Career;

import React, { useState } from 'react';
import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box } from '@mui/material';
import '../career.css';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: null,
    gender: '',
    experience: '',
    qualification: '',
    salary: '',
    appliedFor: '', // New field
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    document: '',
    gender: '',
    experience: '',
    qualification: '',
    salary: '',
    appliedFor: '', // New field
  });

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

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
    if (!formData.document) {
      formIsValid = false;
      newErrors.document = 'Please upload a document';
    }
    if (!formData.gender) {
      formIsValid = false;
      newErrors.gender = 'Please select your gender';
    }
    if (!formData.experience) {
      formIsValid = false;
      newErrors.experience = 'Please enter your experience';
    }
    if (!formData.qualification) {
      formIsValid = false;
      newErrors.qualification = 'Please enter your highest qualification';
    }
    if (!formData.salary) {
      formIsValid = false;
      newErrors.salary = 'Please enter your expected salary';
    }
    if (!formData.appliedFor) {
      formIsValid = false;
      newErrors.appliedFor = 'Please select the position you are applying for';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
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
    <div className="admission-form-background" style={{ position: 'relative' }}>
      <Container 
        maxWidth="lg" 
        sx={{
          paddingTop: { xs: '5px', sm: '10px', md: '10px' },
          paddingBottom: { xs: '20px', sm: '40px', md: '60px' },
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          minHeight: '100vh'
        }}
      >
        <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
              <div className="text-container">
                <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Career
                </Typography>
                <Typography variant="h4" align="center" gutterBottom className="admission-form" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Form
                </Typography>
              </div>

              <div className="smoke-effect"></div>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
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

                  {/* Document Upload */}
                  <Grid item xs={12} md={6}>
                    
                    <TextField
                      name="document"
                      type="file"
                      variant="outlined"
                      fullWidth
                      onChange={handleFileChange}
                      error={!!errors.document}
                      helperText={errors.document}
                      required
                    />
                  </Grid>

                  {/* Gender */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.gender}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        label="Gender"
                      >
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>
                      {errors.gender && <Typography color="error">{errors.gender}</Typography>}
                    </FormControl>
                  </Grid>

                  {/* Applied for */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.appliedFor}>
                      <InputLabel>Applied for*</InputLabel>
                      <Select
                        name="appliedFor"
                        value={formData.appliedFor}
                        onChange={handleChange}
                        label="Applied for*"
                        required
                      >
                        <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                        <MenuItem value="Product Manager">Product Manager</MenuItem>
                        <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
                        {/* Add more roles as needed */}
                      </Select>
                      {errors.appliedFor && <Typography color="error">{errors.appliedFor}</Typography>}
                    </FormControl>
                  </Grid>

                  {/* Experience */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="experience"
                      label="Experience"
                      variant="outlined"
                      fullWidth
                      value={formData.experience}
                      onChange={handleChange}
                      error={!!errors.experience}
                      helperText={errors.experience}
                      required
                    />
                  </Grid>

                  {/* Highest Qualification */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="qualification"
                      label="Highest Qualification"
                      variant="outlined"
                      fullWidth
                      value={formData.qualification}
                      onChange={handleChange}
                      error={!!errors.qualification}
                      helperText={errors.qualification}
                      required
                    />
                  </Grid>

                  {/* Expected Salary */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      name="salary"
                      label="Expected Salary"
                      variant="outlined"
                      fullWidth
                      value={formData.salary}
                      onChange={handleChange}
                      error={!!errors.salary}
                      helperText={errors.salary}
                      required
                    />
                  </Grid>

                  {/* Submit */}
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit" sx={{ backgroundColor: 'black' }}>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Career;
