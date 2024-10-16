import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  CssBaseline,
  Snackbar,
  Alert,
  Button,
  IconButton,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material'; 
import Header from '../../Admin/Components/header';
import Sidebar from '../../Admin/Components/Sidebar';
import Footer from '../../Admin/Components/footer';

const Affiliation = () => {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [affiliations, setAffiliations] = useState([]);  // State to hold affiliation data
  const [selectedFiles, setSelectedFiles] = useState([]);  // State to hold selected files

  const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/affiliation'; // Updated API URL

  // Fetch affiliation data on component mount
  const fetchAffiliations = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch affiliations');
      const data = await response.json();
      setAffiliations(data);  // Store fetched data in state
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  useEffect(() => {
    fetchAffiliations(); // Call the function to fetch affiliations on mount
  }, []);

  const handleDeleteImage = async (affiliationId, imageId) => {
    try {
      console.log(`Affiliation ID: ${affiliationId}, Image ID: ${imageId}`); // Log IDs

      // Delete the image from the database
      const response = await fetch(`${API_URL}/affiliations/${affiliationId}/images/${imageId}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          const errorData = await response.json(); // Get error details from the response
          console.error(errorData); // Log the error response for debugging
          throw new Error('Failed to delete image');
      }

      // If the affiliation is deleted, we can remove it from the state
      const responseData = await response.json();
      if (responseData.message.includes('Affiliation and all images deleted successfully')) {
          // Remove the affiliation from state if deleted
          setAffiliations((prev) => prev.filter((aff) => aff._id !== affiliationId));
      } else {
          // Update state to remove the deleted image
          const updatedAffiliations = affiliations.map((affiliation) =>
              affiliation._id === affiliationId
                  ? { ...affiliation, images: affiliation.images.filter((img) => img.id !== imageId) }
                  : affiliation
          );

          // Update state with the new list of affiliations
          setAffiliations(updatedAffiliations);
      }

      // Show success message
      setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
    } catch (error) {
      // Handle error and show snackbar message
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Snackbar close handler
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to an array
    const validFiles = files.filter((file) => file.size <= 100 * 1024); // Filter files smaller than 100KB

    if (validFiles.length !== files.length) {
      setSnackbar({
        open: true,
        message: 'Some files are larger than 100KB and will not be uploaded.',
        severity: 'warning',
      });
    }

    setSelectedFiles(validFiles);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setSnackbar({
        open: true,
        message: 'Please select at least one image to upload.',
        severity: 'warning',
      });
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('images', file);  // Append each selected file to formData
    });

    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload images');
      }

      setSnackbar({
        open: true,
        message: 'Images uploaded successfully!',
        severity: 'success',
      });

      // Optionally, fetch the updated affiliations to reflect new uploads
      fetchAffiliations();
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: 'error',
      });
    }
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
              Our Affiliations
            </Typography>

            {/* Display affiliations' images */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {affiliations.map((affiliation) => (
                <Box
                  key={affiliation._id}
                  sx={{ width: '150px', height: '150px', position: 'relative' }}
                >
                  {/* Map through images of each affiliation */}
                  {affiliation.images.map((image) => (
                    <Box key={image.id} sx={{ position: 'relative' }}>
                      <img
                        src={`data:${image.imageData}`}  // Display base64 image
                        alt={`Affiliation ${affiliation._id}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />

                      {/* Delete Icon on the top-right corner of the image */}
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => handleDeleteImage(affiliation._id, image.id)}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          color: 'white',
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>

            {/* File upload section */}
            <Box mt={4}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileSelect}
              />
              <Button
                variant="contained"
                onClick={handleUpload}
                sx={{ mt: 2, backgroundColor: 'black' }}
              >
                Upload Logos
              </Button>
            </Box>

            {/* Display selected files as small cards */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {selectedFiles.map((file, index) => (
                <Box key={index} sx={{ width: '100px', height: '100px', position: 'relative' }}>
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => {
                      const newFiles = selectedFiles.filter((_, i) => i !== index);
                      setSelectedFiles(newFiles);
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>

            {/* Snackbar for notifications */}
            <Snackbar
              open={snackbar.open}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
                {snackbar.message}
              </Alert>
            </Snackbar>
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Affiliation;
