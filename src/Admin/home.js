import React, { useState } from 'react';
import { Box, Container, Typography, CssBaseline, TextField, Button, IconButton, Divider } from '@mui/material';
import Header from '../Admin/Components/header';
import Sidebar from '../Admin/Components/Sidebar';
import Footer from '../Admin/Components/footer';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const UploadButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkgray',
  },
});

const Home = () => {
  const [open, setOpen] = useState(false);

  // State management for form inputs
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerText, setBannerText] = useState('');
  const [collaborators, setCollaborators] = useState([]);
  const [affiliations, setAffiliations] = useState([]);

  // Handlers for file inputs
  const handleFileChange = (event, setter) => {
    setter(event.target.files[0]);
  };

  const handleMultipleFilesChange = (event, setter) => {
    setter(Array.from(event.target.files));
  };

  const handleDeleteImage = (index, setter, array) => {
    setter(array.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    console.log('Saving data...');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Header onDrawerToggle={() => setOpen(!open)} />
      <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
        <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Home
            </Typography>
            <Divider sx={{ my: 2 }} />

            {/* Banner Section */}
            <Typography variant="h6" gutterBottom>
              Home Page Banner
            </Typography>
            <TextField
              fullWidth
              label="Text on Banner Image"
              value={bannerText}
              onChange={(e) => setBannerText(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadIcon />}
              sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
            >
              Upload Banner Image
              <input
                type="file"
                hidden
                onChange={(e) => handleFileChange(e, setBannerImage)}
              />
            </Button>
            {bannerImage && (
              <Box sx={{ position: 'relative', width: '100%', height: 'auto', mb: 2 }}>
                <img
                  src={URL.createObjectURL(bannerImage)}
                  alt="Banner"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
                <IconButton
                  sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
                  onClick={() => setBannerImage(null)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            {/* Our Collaborators Section */}
            <Typography variant="h6" gutterBottom>
              Our Collaborators
            </Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadIcon />}
              sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
            >
              Upload Collaborators
              <input
                type="file"
                multiple
                hidden
                onChange={(e) => handleMultipleFilesChange(e, setCollaborators)}
              />
            </Button>
            {collaborators.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {collaborators.map((file, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'relative',
                      width: '150px',
                      height: 'auto',
                      mb: 2,
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Collaborator ${index}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                    <IconButton
                      sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
                      onClick={() => handleDeleteImage(index, setCollaborators, collaborators)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            {/* Our Affiliations Section */}
            <Typography variant="h6" gutterBottom>
              Our Affiliations
            </Typography>
            <Button
              variant="contained"
              component="label"
              startIcon={<UploadIcon />}
              sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
            >
              Upload Affiliations
              <input
                type="file"
                multiple
                hidden
                onChange={(e) => handleMultipleFilesChange(e, setAffiliations)}
              />
            </Button>
            {affiliations.length > 0 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {affiliations.map((file, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'relative',
                      width: '150px',
                      height: 'auto',
                      mb: 2,
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Affiliation ${index}`}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover',
                      }}
                    />
                    <IconButton
                      sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
                      onClick={() => handleDeleteImage(index, setAffiliations, affiliations)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Save Changes
            </Button>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
