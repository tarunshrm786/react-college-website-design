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
