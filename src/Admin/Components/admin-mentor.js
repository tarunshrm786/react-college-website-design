import React, { useState } from 'react';
import { Button, Box, Typography, Card, CardMedia, TextField, Grid } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';

const Mentor = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleAddMember = () => {
    if (!selectedFile || !name || !post || !city) {
      alert('Please fill all fields and select an image.');
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);
    const newMember = { name, post, city, imageUrl };
    setTeamMembers([...teamMembers, newMember]);
    
    // Reset form fields
    setSelectedFile(null);
    setName('');
    setPost('');
    setCity('');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Mentor Management
          </Typography>

          <Box sx={{ mb: 4 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="team-member-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="team-member-upload">
              <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>
                Choose Image
              </Button>
            </label>

            {selectedFile && (
              <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>
                {selectedFile.name}
              </Typography>
            )}
          </Box>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Post"
                variant="outlined"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            onClick={handleAddMember}
            sx={{ bgcolor: 'black', color: 'white' }}
          >
            Add Mentor
          </Button>

          <Box sx={{ mt: 4 }}>
            {teamMembers.map((member, index) => (
              <Card key={index} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100 }}
                  image={member.imageUrl}
                  alt={member.name}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body1">{member.post}</Typography>
                  <Typography variant="body2">{member.city}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default Mentor;
