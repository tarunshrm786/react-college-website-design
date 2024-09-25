import React, { useState } from 'react';
import { Button, Box, Typography, Card, CardMedia, TextField, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';

const AdminPlacement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [studentImage, setStudentImage] = useState(null);
  const [studentName, setStudentName] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [studentPackage, setStudentPackage] = useState('');

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleAddMember = () => {
    if (!studentImage || !studentName || !companyLogo || !studentPackage) {
      alert('Please fill all fields and select images.');
      return;
    }

    const studentImageUrl = URL.createObjectURL(studentImage);
    const companyLogoUrl = URL.createObjectURL(companyLogo);
    const newMember = { studentName, studentPackage, studentImageUrl, companyLogoUrl };
    setTeamMembers([...teamMembers, newMember]);

    // Reset form fields
    setStudentImage(null);
    setStudentName('');
    setCompanyLogo(null);
    setStudentPackage('');
  };

  const handleDeleteMember = (index) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(updatedMembers);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Placement Management
          </Typography>

          <Box sx={{ mb: 4 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="student-image-upload"
              type="file"
              onChange={(e) => handleFileChange(e, setStudentImage)}
            />
            <label htmlFor="student-image-upload">
              <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>
                Choose Student Image
              </Button>
            </label>

            {studentImage && (
              <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>
                {studentImage.name}
              </Typography>
            )}
          </Box>

          <Box sx={{ mb: 4 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="company-logo-upload"
              type="file"
              onChange={(e) => handleFileChange(e, setCompanyLogo)}
            />
            <label htmlFor="company-logo-upload">
              <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>
                Choose Company Logo
              </Button>
            </label>

            {companyLogo && (
              <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>
                {companyLogo.name}
              </Typography>
            )}
          </Box>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Student Name"
                variant="outlined"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Student Package (e.g., 7 LPA)"
                variant="outlined"
                value={studentPackage}
                onChange={(e) => setStudentPackage(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={handleAddMember}
            sx={{ bgcolor: 'black', color: 'white' }}
          >
            Add Student
          </Button>

          <Box sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Card key={index} sx={{ mb: 2, display: 'flex', alignItems: 'center', position: 'relative' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100 }}
                  image={member.studentImageUrl}
                  alt={member.studentName}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{member.studentName}</Typography>
                  <Typography variant="body1">{member.studentPackage}</Typography>
                  <CardMedia
                    component="img"
                    sx={{ width: 50, height: 50, marginTop: 1 }}
                    image={member.companyLogoUrl}
                    alt="Company Logo"
                  />
                </Box>
                <IconButton 
                  onClick={() => handleDeleteMember(index)} 
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <DeleteIcon />
                </IconButton>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AdminPlacement;
