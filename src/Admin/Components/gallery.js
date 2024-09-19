// src/pages/Gallery.js
import React, { useState } from 'react';
import { Box, Container, Typography, Button, Input, IconButton } from '@mui/material';
import Header from '../Components/header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/footer';
import DeleteIcon from '@mui/icons-material/Delete';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [ugOpen, setUgOpen] = useState(false);
  const [pgOpen, setPgOpen] = useState(false);
  const [diplomaOpen, setDiplomaOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    // Update selected files and create image previews
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);

    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
  };

  const handleRemoveImage = (index) => {
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
    setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleUpload = () => {
    // Placeholder for upload logic
    alert('Upload functionality not implemented');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onDrawerToggle={() => setOpen(!open)} />
      <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
        <Sidebar
          open={open}
          onDrawerToggle={() => setOpen(!open)}
          aboutOpen={aboutOpen}
          onAboutToggle={() => setAboutOpen(!aboutOpen)}
          coursesOpen={coursesOpen}
          onCoursesToggle={() => setCoursesOpen(!coursesOpen)}
          ugOpen={ugOpen}
          onUgToggle={() => setUgOpen(!ugOpen)}
          pgOpen={pgOpen}
          onPgToggle={() => setPgOpen(!pgOpen)}
          diplomaOpen={diplomaOpen}
          onDiplomaToggle={() => setDiplomaOpen(!diplomaOpen)}
        />
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Container>
            <Typography paragraph>
              Welcome to the Gallery page. Here you can view and manage the gallery items.
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6">Upload Images</Typography>
              <Input
                type="file"
                inputProps={{ multiple: true }}
                onChange={handleFileChange}
                sx={{ mb: 2 }}
              />
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
              >
                Upload
              </Button> */}
              <Button
  variant="contained"
  onClick={handleUpload}
  sx={{ 
    backgroundColor: 'black',
    color: 'white',
  }}
>
  Upload
</Button>

            </Box>
            <Typography paragraph>
              <Typography variant="body1">
                Uploaded images:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                {imagePreviews.map((preview, index) => (
                  <Box key={index} sx={{ position: 'relative', width: 150, height: 150 }}>
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <IconButton
                      onClick={() => handleRemoveImage(index)}
                      sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Typography>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Gallery;
