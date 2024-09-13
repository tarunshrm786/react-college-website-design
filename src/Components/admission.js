// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
// import '../admission.css';
// const Admission = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: null,
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//     },
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: '',
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: '',
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
//     if (!formData.course) {
//       formIsValid = false;
//       newErrors.course = 'Please select a course';
//     }
//     if (!formData.budget) {
//       formIsValid = false;
//       newErrors.budget = 'Please select a budget';
//     }
//     if (!formData.examMode) {
//       formIsValid = false;
//       newErrors.examMode = 'Please select an exam mode';
//     }
//     if (!formData.universities.universityA && !formData.universities.universityB && !formData.universities.universityC) {
//       formIsValid = false;
//       newErrors.universities = 'Please select at least one university';
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

//   const handleUniversityChange = (e) => {
//     setFormData({ ...formData, universities: { ...formData.universities, [e.target.name]: e.target.checked } });
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
//       <Container maxWidth="lg" sx={{ marginBottom: '-40px', marginTop: '-40px' }}>
//         <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
    
//           <Grid item xs={10}>
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
//               <div className="text-container">
//   <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{fontFamily: 'Montserrat, sans-serif'}}>
//     Admission
//   </Typography>
//   <Typography variant="h4" align="center" gutterBottom className="admission-form" sx={{fontFamily: 'Montserrat, sans-serif'}}>
//     Form
//   </Typography>
// </div>

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
//                         <MenuItem value="Diploma">Diploma</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.course}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Budget */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.budget}>
//                       <InputLabel id="budget-label">Choose your budget</InputLabel>
//                       <Select
//                         labelId="budget-label"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleChange}
//                         label="Choose your budget"
//                         required
//                       >
//                         <MenuItem value="Below $500">Below $500</MenuItem>
//                         <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
//                         <MenuItem value="Above $1000">Above $1000</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.budget}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Exam Mode */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.examMode}>
//                       <InputLabel id="exam-mode-label">Mode of exam</InputLabel>
//                       <Select
//                         labelId="exam-mode-label"
//                         name="examMode"
//                         value={formData.examMode}
//                         onChange={handleChange}
//                         label="Mode of exam"
//                         required
//                       >
//                         <MenuItem value="Online">Online</MenuItem>
//                         <MenuItem value="Offline">Offline</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.examMode}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Universities */}
//                   {/* <Grid item xs={12}>
//                     <Typography variant="h6">Universities</Typography>
//                     <FormControlLabel
//                       control={<Checkbox name="universityA" checked={formData.universities.universityA} onChange={handleUniversityChange} />}
//                       label="University A"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox name="universityB" checked={formData.universities.universityB} onChange={handleUniversityChange} />}
//                       label="University B"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox name="universityC" checked={formData.universities.universityC} onChange={handleUniversityChange} />}
//                       label="University C"
//                     />
//                     <Typography variant="caption" color="error">{errors.universities}</Typography>
//                   </Grid> */}
//                                    <Grid item xs={12}>
//                      <Typography variant="h6" sx={{fontFamily: 'Montserrat, sans-serif'}}>University you like</Typography>
//                       <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityA} onChange={handleUniversityChange} name="universityA" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
//                       label="University A"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityB} onChange={handleUniversityChange} name="universityB" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
//                       label="University B"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityC} onChange={handleUniversityChange} name="universityC" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
//                       label="University C"
//                     />
//                     {errors.universities && (
//                       <Typography variant="caption" color="error">{errors.universities}</Typography>
//                     )}
//                   </Grid>

//                   {/* Submit Button */}
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" sx={{backgroundColor: 'black', color: 'white'}}>Submit</Button>
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

// export default Admission;


// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
// import '../admission.css';

// const Admission = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: null,
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//     },
//     selectedUniversity: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: '',
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: '',
//     selectedUniversity: '',
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
//     if (!formData.course) {
//       formIsValid = false;
//       newErrors.course = 'Please select a course';
//     }
//     if (!formData.budget) {
//       formIsValid = false;
//       newErrors.budget = 'Please select a budget';
//     }
//     if (!formData.examMode) {
//       formIsValid = false;
//       newErrors.examMode = 'Please select an exam mode';
//     }
//     if (!formData.universities.universityA && !formData.universities.universityB && !formData.universities.universityC) {
//       formIsValid = false;
//       newErrors.universities = 'Please select at least one university';
//     }
//     if (!formData.selectedUniversity) {
//       formIsValid = false;
//       newErrors.selectedUniversity = 'Please select a university';
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

//   const handleUniversityChange = (e) => {
//     setFormData({ ...formData, universities: { ...formData.universities, [e.target.name]: e.target.checked } });
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
//       <Container maxWidth="lg" sx={{ marginBottom: '-40px', marginTop: '-40px' }}>
//         <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
//           <Grid item xs={10}>
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
//               <div className="text-container">
//                 <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                   Admission
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

//                   {/* Universities */}
//                   <Grid item xs={12}>
//                     <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif' }}>Choose Your University</Typography>
//                     <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityA} onChange={handleUniversityChange} name="universityA" />}
//                       label="University A"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityB} onChange={handleUniversityChange} name="universityB" />}
//                       label="University B"
//                     />
//                     <FormControlLabel
//                       control={<Checkbox checked={formData.universities.universityC} onChange={handleUniversityChange} name="universityC" />}
//                       label="University C"
//                     />
//                     {errors.universities && (
//                       <Typography variant="caption" color="error">{errors.universities}</Typography>
//                     )}
//                   </Grid>

//                   {/* Select University Dropdown */}
//                   <Grid item xs={12}>
//                     <FormControl fullWidth error={!!errors.selectedUniversity}>
//                       <InputLabel id="select-university-label">Choose your university</InputLabel>
//                       <Select
//                         labelId="select-university-label"
//                         name="selectedUniversity"
//                         value={formData.selectedUniversity}
//                         onChange={handleChange}
//                         label="Choose your university"
//                         required
//                       >
//                         <MenuItem value="University A">University A</MenuItem>
//                         <MenuItem value="University B">University B</MenuItem>
//                         <MenuItem value="University C">University C</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.selectedUniversity}</Typography>
//                     </FormControl>
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
//                         <MenuItem value="Diploma">Diploma</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.course}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Budget */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.budget}>
//                       <InputLabel id="budget-label">Choose your budget</InputLabel>
//                       <Select
//                         labelId="budget-label"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleChange}
//                         label="Choose your budget"
//                         required
//                       >
//                         <MenuItem value="Below $500">Below $500</MenuItem>
//                         <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
//                         <MenuItem value="Above $1000">Above $1000</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.budget}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Submit Button */}
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" color="primary" fullWidth>
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

// export default Admission;

// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
// import '../admission.css';

// const universityData = {
//   universityA: {
//     name: "IIT Delhi",
//     courses: [
//       "BCA",
//       "MCA",
//       "BSC (PCM)",
//       "MSC (MATHS)",
//       "MA ENGLISH",
//     ],
//   },
//   universityB: {
//     name: "JNU",
//     courses: [
//       "BBA (RETAILING)",
//       "BCA",
//       "MCA",
//       "MA ENGLISH",
//       "MBA",
//     ],
//   },
//   universityC: {
//     name: "BHU",
//     courses: [
//       "BSC (CBZ)",
//       "MSC (MATHS)",
//       "BCA",
//       "MA ENGLISH",
//       "MCA",
//     ],
//   },
//   universityD: {
//     name: "Jaipur National University",
//     courses: [
//       "MBA",
//       "BBA (RETAILING)",
//       "BCA",
//       "MCA",
//       "BSC (PCM)",
//     ],
//   },
// };


// const Admission = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: null,
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//     },
//     selectedUniversity: '',
//     coursesForSelectedUniversity: [],
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: '',
//     course: '',
//     budget: '',
//     examMode: '',
//     universities: '',
//     selectedUniversity: '',
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
//     if (!formData.course) {
//       formIsValid = false;
//       newErrors.course = 'Please select a course';
//     }
//     if (!formData.budget) {
//       formIsValid = false;
//       newErrors.budget = 'Please select a budget';
//     }
//     if (!formData.examMode) {
//       formIsValid = false;
//       newErrors.examMode = 'Please select an exam mode';
//     }
//     if (!formData.universities.universityA && !formData.universities.universityB && !formData.universities.universityC) {
//       formIsValid = false;
//       newErrors.universities = 'Please select at least one university';
//     }
//     if (!formData.selectedUniversity) {
//       formIsValid = false;
//       newErrors.selectedUniversity = 'Please select a university';
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

//   const handleUniversityChange = (e) => {
//     const updatedUniversities = {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//       [e.target.name]: e.target.checked,
//     };

//     setFormData({
//       ...formData,
//       universities: updatedUniversities,
//       selectedUniversity: '',
//       coursesForSelectedUniversity: [],
//     });
//   };

//   const handleUniversitySelect = (e) => {
//     const selectedUniversity = e.target.value;
//     const courses = universityData[selectedUniversity].courses;

//     setFormData({
//       ...formData,
//       selectedUniversity,
//       coursesForSelectedUniversity: courses,
//       course: '', // Reset course selection when university changes
//     });
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
//       <Container maxWidth="lg" sx={{ marginBottom: '-10px', marginTop: '-40px' }}>
//         <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
//           <Grid item xs={10}>
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
//               <div className="text-container">
//                 <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                   Admission
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

//                   {/* Universities */}
//                   <Grid item xs={12}>
//                     <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif' }}>Choose Your University</Typography>
//                     {Object.keys(formData.universities).map((uni) => (
//                       <FormControlLabel
//                         key={uni}
//                         control={
//                           <Checkbox
//                             checked={formData.universities[uni]}
//                             onChange={handleUniversityChange}
//                             name={uni}
//                             sx={{
//                               backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent',
//                               '&:hover': { backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent' }
//                             }}
//                           />
//                         }
//                         label={universityData[uni].name}
//                       />
//                     ))}
//                     {errors.universities && (
//                       <Typography variant="caption" color="error">{errors.universities}</Typography>
//                     )}
//                   </Grid>

//                   {/* Select University Dropdown */}
//                   <Grid item xs={12}>
//                     <FormControl fullWidth error={!!errors.selectedUniversity}>
//                       <InputLabel id="select-university-label">Choose your university</InputLabel>
//                       <Select
//                         labelId="select-university-label"
//                         name="selectedUniversity"
//                         value={formData.selectedUniversity}
//                         onChange={handleUniversitySelect}
//                         label="Choose your university"
//                         required
//                       >
//                         {Object.keys(formData.universities)
//                           .filter((uni) => formData.universities[uni])
//                           .map((uni) => (
//                             <MenuItem key={uni} value={uni}>
//                               {universityData[uni].name}
//                             </MenuItem>
//                           ))}
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.selectedUniversity}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Courses Dropdown */}
//                   {formData.selectedUniversity && (
//                     <Grid item xs={12}>
//                       <FormControl fullWidth error={!!errors.course}>
//                         <InputLabel id="select-course-label">Choose your course</InputLabel>
//                         <Select
//                           labelId="select-course-label"
//                           name="course"
//                           value={formData.course}
//                           onChange={handleChange}
//                           label="Choose your course"
//                           required
//                         >
//                           {formData.coursesForSelectedUniversity.map((course, idx) => (
//                             <MenuItem key={idx} value={course}>
//                               {course}
//                             </MenuItem>
//                           ))}
//                         </Select>
//                         <Typography variant="caption" color="error">{errors.course}</Typography>
//                       </FormControl>
//                     </Grid>
//                   )}

//                   {/* Budget */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.budget}>
//                       <InputLabel id="select-budget-label">Select Budget</InputLabel>
//                       <Select
//                         labelId="select-budget-label"
//                         name="budget"
//                         value={formData.budget}
//                         onChange={handleChange}
//                         label="Select Budget"
//                         required
//                       >
//                         <MenuItem value="below-10L">Below 10L</MenuItem>
//                         <MenuItem value="10L-20L">10L - 20L</MenuItem>
//                         <MenuItem value="20L-30L">20L - 30L</MenuItem>
//                         <MenuItem value="above-30L">Above 30L</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.budget}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Exam Mode */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth error={!!errors.examMode}>
//                       <InputLabel id="select-exam-mode-label">Exam Mode</InputLabel>
//                       <Select
//                         labelId="select-exam-mode-label"
//                         name="examMode"
//                         value={formData.examMode}
//                         onChange={handleChange}
//                         label="Exam Mode"
//                         required
//                       >
//                         <MenuItem value="online">Online</MenuItem>
//                         <MenuItem value="offline">Offline</MenuItem>
//                       </Select>
//                       <Typography variant="caption" color="error">{errors.examMode}</Typography>
//                     </FormControl>
//                   </Grid>

//                   {/* Submit Button */}
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" fullWidth sx={{ color: 'white', backgroundColor: 'black'  }}>
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

// export default Admission;


// import React, { useState } from 'react';
// import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
// import '../admission.css';

// const universityData = {
//   universityA: {
//     name: "IIT Delhi",
//     courses: [
//       "BCA",
//       "MCA",
//       "BSC (PCM)",
//       "MSC (MATHS)",
//       "MA ENGLISH",
//     ],
//   },
//   universityB: {
//     name: "JNU",
//     courses: [
//       "BBA (RETAILING)",
//       "BCA",
//       "MCA",
//       "MA ENGLISH",
//       "MBA",
//     ],
//   },
//   universityC: {
//     name: "BHU",
//     courses: [
//       "BSC (CBZ)",
//       "MSC (MATHS)",
//       "BCA",
//       "MA ENGLISH",
//       "MCA",
//     ],
//   },
//   universityD: {
//     name: "Jaipur National University",
//         courses : [
//       "B.COM",
//       "BA",
//       "BBA (RETAILING)",
//       "BCA",
//       "BSC (PCM/CBZ)",
//       "MCA",
//       "MSC (MATHS)",
//       "MA ENGLISH",
//       "MBA"
//     ],
    

//   },
// };

// const Admission = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: null,
//     course: '',
//     specialization: '',
//     budget: '',
//     examMode: '',
//     universities: {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//       universityD: false,
//     },
//     selectedUniversity: '',
//     coursesForSelectedUniversity: [],
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     document: '',
//     course: '',
//     specialization: '',
//     budget: '',
//     examMode: '',
//     universities: '',
//     selectedUniversity: '',
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
//     if (!formData.course) {
//       formIsValid = false;
//       newErrors.course = 'Please select a course';
//     }
//     if (!formData.specialization) {
//       formIsValid = false;
//       newErrors.specialization = 'Please select a specialization';
//     }
//     if (!formData.budget) {
//       formIsValid = false;
//       newErrors.budget = 'Please select a budget';
//     }
//     if (!formData.examMode) {
//       formIsValid = false;
//       newErrors.examMode = 'Please select an exam mode';
//     }
//     if (!Object.values(formData.universities).some(val => val)) {
//       formIsValid = false;
//       newErrors.universities = 'Please select at least one university';
//     }
//     if (!formData.selectedUniversity) {
//       formIsValid = false;
//       newErrors.selectedUniversity = 'Please select a university';
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

//   const handleUniversityChange = (e) => {
//     const updatedUniversities = {
//       universityA: false,
//       universityB: false,
//       universityC: false,
//       universityD: false,
//       [e.target.name]: e.target.checked,
//     };

//     setFormData({
//       ...formData,
//       universities: updatedUniversities,
//       selectedUniversity: '',
//       coursesForSelectedUniversity: [],
//       course: '',
//       specialization: ''
//     });
//   };

//   const handleUniversitySelect = (e) => {
//     const selectedUniversity = e.target.value;
//     const courses = universityData[selectedUniversity].courses;

//     setFormData({
//       ...formData,
//       selectedUniversity,
//       coursesForSelectedUniversity: courses,
//       course: '', // Reset course selection when university changes
//       specialization: '' // Reset specialization when university changes
//     });
//   };

//   const handleCourseSelect = (e) => {
//     setFormData({
//       ...formData,
//       course: e.target.value,
//     });
//   };

//   const handleSpecializationSelect = (e) => {
//     setFormData({
//       ...formData,
//       specialization: e.target.value,
//     });
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
//       <Container maxWidth="lg" sx={{ marginBottom: '-10px', marginTop: '-40px' }}>
//         <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
//           <Grid item xs={10}>
//             <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
//               <div className="text-container">
//                 <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
//                   Admission
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

//                   {/* Universities */}
//                   <Grid item xs={12}>
//                     <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif' }}>Choose Your University</Typography>
//                     {Object.keys(formData.universities).map((uni) => (
//                       <FormControlLabel
//                         key={uni}
//                         control={
//                           <Checkbox
//                             checked={formData.universities[uni]}
//                             onChange={handleUniversityChange}
//                             name={uni}
//                             sx={{
//                               backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent',
//                               '&:hover': { backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent' },
//                             }}
//                           />
//                         }
//                         label={universityData[uni].name}
//                       />
//                     ))}
//                     {errors.universities && <Typography color="error">{errors.universities}</Typography>}
//                   </Grid>

// {Object.values(formData.universities).some(val => val) && (
//   <Grid item xs={12} md={6}>
//     <FormControl fullWidth variant="outlined">
//       <InputLabel id="university-label">Select University</InputLabel>
//       <Select
//         labelId="university-label"
//         value={formData.selectedUniversity}
//         onChange={handleUniversitySelect}
//         name="selectedUniversity"
//         error={!!errors.selectedUniversity}
//         label="Select University"
//         sx={{
//           '& .MuiSelect-select': {
//             padding: '16px 14px', // Ensure padding to avoid overlap with label
//           },
//           '& .MuiInputLabel-root': {
//             top: '-8px', // Adjust label position to avoid overlap
//             backgroundColor: 'white', // Ensure label background is white to cover select field
//             padding: '0 4px', // Add padding to prevent label from overlapping with border
//           },
//         }}
//       >
//         {Object.keys(universityData).map((key) => (
//           formData.universities[key] && (
//             <MenuItem key={key} value={key}>{universityData[key].name}</MenuItem>
//           )
//         ))}
//       </Select>
//       {errors.selectedUniversity && <Typography color="error">{errors.selectedUniversity}</Typography>}
//     </FormControl>
//   </Grid>
// )}


//                   {/* Courses */}
// {formData.selectedUniversity && (
//   <Grid item xs={12} md={6}>
//     <FormControl fullWidth variant="outlined">
//       <InputLabel id="course-label">Select Course</InputLabel>
//       <Select
//         labelId="course-label"
//         value={formData.course}
//         onChange={handleCourseSelect}
//         name="course"
//         error={!!errors.course}
//         label="Select Course"
//         sx={{
//           '& .MuiSelect-select': {
//             padding: '16px 14px', // Ensure padding to avoid overlap with label
//           },
//           '& .MuiInputLabel-root': {
//             top: '-8px', // Adjust label position to avoid overlap
//             backgroundColor: 'white', // Ensure label background is white to cover select field
//             padding: '0 4px', // Add padding to prevent label from overlapping with border
//           },
//         }}
//       >
//         {formData.coursesForSelectedUniversity.map((course, index) => (
//           <MenuItem key={index} value={course}>{course}</MenuItem>
//         ))}
//       </Select>
//       {errors.course && <Typography color="error">{errors.course}</Typography>}
//     </FormControl>
//   </Grid>
// )}


//                   {/* Specialization */}
// {formData.course && (
//   <Grid item xs={12} md={6}>
//     <FormControl fullWidth variant="outlined">
//       <InputLabel id="specialization-label">Select Specialization</InputLabel>
//       <Select
//         labelId="specialization-label"
//         value={formData.specialization}
//         onChange={handleSpecializationSelect}
//         name="specialization"
//         error={!!errors.specialization}
//         label="Select Specialization"
//         sx={{
//           '& .MuiSelect-select': {
//             padding: '16px 14px', // Ensure padding to avoid overlap with label
//           },
//           '& .MuiInputLabel-root': {
//             top: '-8px', // Adjust label position to avoid overlap
//             backgroundColor: 'white', // Ensure label background is white to cover select field
//             padding: '0 4px', // Add padding to prevent label from overlapping with border
//           },
//         }}
//       >
//         {/* Example specializations */}
//         <MenuItem value="Specialization1">Specialization 1</MenuItem>
//         <MenuItem value="Specialization2">Specialization 2</MenuItem>
//         <MenuItem value="Specialization3">Specialization 3</MenuItem>
//       </Select>
//       {errors.specialization && <Typography color="error">{errors.specialization}</Typography>}
//     </FormControl>
//   </Grid>
// )}


//                   {/* Budget */}
//                   <Grid item xs={12} md={6}>
//                     <TextField
//                       name="budget"
//                       label="Budget"
//                       variant="outlined"
//                       fullWidth
//                       value={formData.budget}
//                       onChange={handleChange}
//                       error={!!errors.budget}
//                       helperText={errors.budget}
//                       required
//                     />
//                   </Grid>

//                   {/* Exam Mode */}
//                   <Grid item xs={12} md={6}>
//                     <FormControl fullWidth>
//                       <InputLabel>Exam Mode</InputLabel>
//                       <Select
//                         value={formData.examMode}
//                         onChange={handleChange}
//                         name="examMode"
//                         error={!!errors.examMode}
//                         required
//                       >
//                         <MenuItem value="Online">Online</MenuItem>
//                         <MenuItem value="Offline">Offline</MenuItem>
//                       </Select>
//                       {errors.examMode && <Typography color="error">{errors.examMode}</Typography>}
//                     </FormControl>
//                   </Grid>

//                   {/* Submit Button */}
//                   <Grid item xs={12}>
//                     <Button type="submit" variant="contained" fullWidth sx={{ color: 'white', backgroundColor: 'black' }}>
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

// export default Admission;


import React, { useState } from 'react';
import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
import '../admission.css';

const universityData = {
  universityA: {
    name: "IIT Delhi",
    courses: [
      "BCA",
      "MCA",
      "BSC (PCM)",
      "MSC (MATHS)",
      "MA ENGLISH",
    ],
  },
  universityB: {
    name: "JNU",
    courses: [
      "BBA (RETAILING)",
      "BCA",
      "MCA",
      "MA ENGLISH",
      "MBA",
    ],
  },
  universityC: {
    name: "BHU",
    courses: [
      "BSC (CBZ)",
      "MSC (MATHS)",
      "BCA",
      "MA ENGLISH",
      "MCA",
    ],
  },
  universityD: {
    name: "Jaipur National University",
    courses: [
      "B.COM",
      "BA",
      "BBA (RETAILING)",
      "BCA",
      "BSC (PCM/CBZ)",
      "MCA",
      "MSC (MATHS)",
      "MA ENGLISH",
      "MBA"
    ],
  },
};

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: null,
    course: '',
    specialization: '',
    budget: '',
    examMode: '',
    universities: {
      universityA: false,
      universityB: false,
      universityC: false,
      universityD: false,
    },
    selectedUniversity: '', // No default selected university
    coursesForSelectedUniversity: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    document: '',
    course: '',
    specialization: '',
    budget: '',
    examMode: '',
    universities: '',
    selectedUniversity: '',
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
    if (!formData.course) {
      formIsValid = false;
      newErrors.course = 'Please select a course';
    }
    if (!formData.specialization) {
      formIsValid = false;
      newErrors.specialization = 'Please select a specialization';
    }
    if (!formData.budget) {
      formIsValid = false;
      newErrors.budget = 'Please select a budget';
    }
    if (!formData.examMode) {
      formIsValid = false;
      newErrors.examMode = 'Please select an exam mode';
    }
    if (!Object.values(formData.universities).some(val => val)) {
      formIsValid = false;
      newErrors.universities = 'Please select at least one university';
    }
    if (!formData.selectedUniversity) {
      formIsValid = false;
      newErrors.selectedUniversity = 'Please select a university';
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

  const handleUniversityChange = (e) => {
    const university = e.target.name;

    const updatedUniversities = {
      universityA: false,
      universityB: false,
      universityC: false,
      universityD: false,
    };

    updatedUniversities[university] = e.target.checked;

    setFormData({
      ...formData,
      universities: updatedUniversities,
      selectedUniversity: e.target.checked ? university : '',
      coursesForSelectedUniversity: e.target.checked ? universityData[university].courses : [],
      course: '', // Reset course selection
      specialization: '' // Reset specialization
    });
  };

  const handleCourseSelect = (e) => {
    setFormData({
      ...formData,
      course: e.target.value,
    });
  };

  const handleSpecializationSelect = (e) => {
    setFormData({
      ...formData,
      specialization: e.target.value,
    });
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
      <Container maxWidth="lg" sx={{ marginBottom: '-10px', marginTop: '-40px' }}>
        <Grid container spacing={4} mt={5} alignItems="center" justifyContent="center">
          <Grid item xs={10}>
            <Box p={3} boxShadow={3} borderRadius={2} bgcolor="rgba(249, 249, 249, 0.7)" sx={{ position: 'relative', marginBottom: '30px' }}>
              <div className="text-container">
                <Typography variant="h4" align="center" gutterBottom className="admission-title" sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Admission
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

                  {/* Universities */}
                  <Grid item xs={12}>
                    <Typography variant="h6" sx={{ fontFamily: 'Montserrat, sans-serif' }}>Choose Your University</Typography>
                    {Object.keys(universityData).map((uni) => (
                      <FormControlLabel
                        key={uni}
                        control={
                          <Checkbox
                            checked={formData.universities[uni]}
                            onChange={handleUniversityChange}
                            name={uni}
                            sx={{
                              backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent',
                              '&:hover': { backgroundColor: formData.universities[uni] ? 'darkpink' : 'transparent' },
                            }}
                          />
                        }
                        label={universityData[uni].name}
                      />
                    ))}
                    {errors.universities && <Typography color="error">{errors.universities}</Typography>}
                  </Grid>

                  {/* Course */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.course}>
                      <InputLabel>Course</InputLabel>
                      <Select
                        name="course"
                        value={formData.course}
                        onChange={handleCourseSelect}
                        label="Course"
                        disabled={!formData.selectedUniversity} // Disable if no university is selected
                      >
                        {formData.coursesForSelectedUniversity.map((course, index) => (
                          <MenuItem key={index} value={course}>
                            {course}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.course && <Typography color="error">{errors.course}</Typography>}
                    </FormControl>
                  </Grid>

                  {/* Specialization */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.specialization}>
                      <InputLabel>Specialization</InputLabel>
                      <Select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleSpecializationSelect}
                        label="Specialization"
                      >
                        {/* Add your specializations here */}
                        <MenuItem value="Specialization 1">Specialization 1</MenuItem>
                        <MenuItem value="Specialization 2">Specialization 2</MenuItem>
                      </Select>
                      {errors.specialization && <Typography color="error">{errors.specialization}</Typography>}
                    </FormControl>
                  </Grid>

                  {/* Budget */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.budget}>
                      <InputLabel>Budget</InputLabel>
                      <Select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        label="Budget"
                      >
                        <MenuItem value="Below 5 Lakhs">Below 5 Lakhs</MenuItem>
                        <MenuItem value="5 - 10 Lakhs">5 - 10 Lakhs</MenuItem>
                        <MenuItem value="10 - 20 Lakhs">10 - 20 Lakhs</MenuItem>
                        <MenuItem value="Above 20 Lakhs">Above 20 Lakhs</MenuItem>
                      </Select>
                      {errors.budget && <Typography color="error">{errors.budget}</Typography>}
                    </FormControl>
                  </Grid>

                  {/* Exam Mode */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" error={!!errors.examMode}>
                      <InputLabel>Exam Mode</InputLabel>
                      <Select
                        name="examMode"
                        value={formData.examMode}
                        onChange={handleChange}
                        label="Exam Mode"
                      >
                        <MenuItem value="Online">Online</MenuItem>
                        <MenuItem value="Offline">Offline</MenuItem>
                      </Select>
                      {errors.examMode && <Typography color="error">{errors.examMode}</Typography>}
                    </FormControl>
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

export default Admission;
