import React, { useState } from 'react';
import { Container, TextField, MenuItem, FormControl, Select, InputLabel, Button, Typography, Grid, Box, Checkbox, FormControlLabel } from '@mui/material';
import '../admission.css'; // Add custom styles here if needed

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    document: null,
    course: '',
    budget: '',
    examMode: '',
    universities: {
      universityA: false,
      universityB: false,
      universityC: false,
    },
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    document: '',
    course: '',
    budget: '',
    examMode: '',
    universities: '',
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
    if (!formData.budget) {
      formIsValid = false;
      newErrors.budget = 'Please select a budget';
    }
    if (!formData.examMode) {
      formIsValid = false;
      newErrors.examMode = 'Please select an exam mode';
    }
    if (!formData.universities.universityA && !formData.universities.universityB && !formData.universities.universityC) {
      formIsValid = false;
      newErrors.universities = 'Please select at least one university';
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
    setFormData({ ...formData, universities: { ...formData.universities, [e.target.name]: e.target.checked } });
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
    <div className="admission-form-background">
      <Container maxWidth="lg" sx={{marginBottom: '30px'}}>
        <Grid container spacing={4} mt={5}>
          {/* Admission Form */}
          <Grid item xs={12}>
            <Box p={3} boxShadow={3} borderRadius={2} bgcolor="#f9f9f9">
              <Typography variant="h4" align="center" gutterBottom>
                Admission Form
              </Typography>
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
                        <MenuItem value="Diploma">Diploma</MenuItem>
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

                  {/* Exam Mode */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth error={!!errors.examMode}>
                      <InputLabel id="examMode-label">Exam Mode</InputLabel>
                      <Select
                        labelId="examMode-label"
                        name="examMode"
                        value={formData.examMode}
                        onChange={handleChange}
                        label="Exam Mode"
                        required
                      >
                        <MenuItem value="Online">Online</MenuItem>
                        <MenuItem value="Offline">Offline</MenuItem>
                      </Select>
                      <Typography variant="caption" color="error">{errors.examMode}</Typography>
                    </FormControl>
                  </Grid>

                  {/* University Preference */}
                  <Grid item xs={12}>
                    <Typography variant="h6">University you like</Typography>
                    {/* <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityA} onChange={handleUniversityChange} name="universityA" />}
                      label="University A"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityB} onChange={handleUniversityChange} name="universityB" />}
                      label="University B"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityC} onChange={handleUniversityChange} name="universityC" />}
                      label="University C"
                    />
                    {errors.universities && (
                      <Typography variant="caption" color="error">{errors.universities}</Typography>
                    )} */}
                     <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityA} onChange={handleUniversityChange} name="universityA" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
                      label="University A"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityB} onChange={handleUniversityChange} name="universityB" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
                      label="University B"
                    />
                    <FormControlLabel
                      control={<Checkbox checked={formData.universities.universityC} onChange={handleUniversityChange} name="universityC" sx={{ color: 'pink', '&.Mui-checked': { color: 'pink' } }} />}
                      label="University C"
                    />
                    {errors.universities && (
                      <Typography variant="caption" color="error">{errors.universities}</Typography>
                    )}
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
        </Grid>
      </Container>
    </div>
  );
};

export default Admission;
