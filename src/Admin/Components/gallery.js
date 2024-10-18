// // src/pages/Gallery.js
// import React, { useState } from 'react';
// import { Box, Container, Typography, Button, Input, IconButton } from '@mui/material';
// import Header from '../Components/header';
// import Sidebar from '../Components/Sidebar';
// import Footer from '../Components/footer';
// import DeleteIcon from '@mui/icons-material/Delete';

// const Gallery = () => {
//   const [open, setOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const [coursesOpen, setCoursesOpen] = useState(false);
//   const [ugOpen, setUgOpen] = useState(false);
//   const [pgOpen, setPgOpen] = useState(false);
//   const [diplomaOpen, setDiplomaOpen] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);

//     // Update selected files and create image previews
//     setSelectedFiles(prevFiles => [...prevFiles, ...files]);

//     const previews = files.map(file => URL.createObjectURL(file));
//     setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
//   };

//   const handleRemoveImage = (index) => {
//     setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
//     setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
//   };

//   const handleUpload = () => {
//     // Placeholder for upload logic
//     alert('Upload functionality not implemented');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar
//           open={open}
//           onDrawerToggle={() => setOpen(!open)}
//           aboutOpen={aboutOpen}
//           onAboutToggle={() => setAboutOpen(!aboutOpen)}
//           coursesOpen={coursesOpen}
//           onCoursesToggle={() => setCoursesOpen(!coursesOpen)}
//           ugOpen={ugOpen}
//           onUgToggle={() => setUgOpen(!ugOpen)}
//           pgOpen={pgOpen}
//           onPgToggle={() => setPgOpen(!pgOpen)}
//           diplomaOpen={diplomaOpen}
//           onDiplomaToggle={() => setDiplomaOpen(!diplomaOpen)}
//         />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography paragraph>
//               Welcome to the Gallery page. Here you can view and manage the gallery items.
//             </Typography>
//             <Box sx={{ mb: 4 }}>
//               <Typography variant="h6">Upload Images</Typography>
//               <Input
//                 type="file"
//                 inputProps={{ multiple: true }}
//                 onChange={handleFileChange}
//                 sx={{ mb: 2 }}
//               />
             
//               <Button
//   variant="contained"
//   onClick={handleUpload}
//   sx={{ 
//     backgroundColor: 'black',
//     color: 'white',
//   }}
// >
//   Upload
// </Button>

//             </Box>
//             <Typography paragraph>
//               <Typography variant="body1">
//                 Uploaded images:
//               </Typography>
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//                 {imagePreviews.map((preview, index) => (
//                   <Box key={index} sx={{ position: 'relative', width: 150, height: 150 }}>
//                     <img
//                       src={preview}
//                       alt={`Preview ${index}`}
//                       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                     />
//                     <IconButton
//                       onClick={() => handleRemoveImage(index)}
//                       sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </Box>
//                 ))}
//               </Box>
//             </Typography>
//           </Container>
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Gallery;

// // src/pages/Gallery.js
// import React, { useState, useEffect } from 'react';
// import { Box, Container, Typography, Button, Input, IconButton, Snackbar, Alert } from '@mui/material';
// import Header from '../Components/header';
// import Sidebar from '../Components/Sidebar';
// import Footer from '../Components/footer';
// import DeleteIcon from '@mui/icons-material/Delete';

// const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/gallery'; // Replace with your actual API endpoint

// const Gallery = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [galleryImages, setGalleryImages] = useState([]);  // State for gallery images fetched from the API
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   // Fetch gallery images from API
//   const fetchGalleryImages = async () => {
//     try {
//       const response = await fetch(API_URL);
//       if (!response.ok) throw new Error('Failed to fetch gallery images');
//       const data = await response.json();
//       setGalleryImages(data);  // Set the fetched images
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   // Fetch gallery images on component mount
//   useEffect(() => {
//     fetchGalleryImages();
//   }, []);

//   // Handle file selection and preview
//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(prevFiles => [...prevFiles, ...files]);
//     const previews = files.map(file => URL.createObjectURL(file));
//     setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
//   };

//   // Handle image upload
//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       setSnackbar({ open: true, message: 'Please select images to upload', severity: 'warning' });
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach(file => {
//       formData.append('images', file);  // Append each selected file
//     });

//     try {
//       const response = await fetch(`${API_URL}/`, {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) throw new Error('Failed to upload images');
      
//       setSnackbar({ open: true, message: 'Images uploaded successfully!', severity: 'success' });
//       fetchGalleryImages();  // Refresh the gallery after upload
//       setSelectedFiles([]);  // Clear selected files
//       setImagePreviews([]);  // Clear previews
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   // Handle image deletion// Handle image deletion
// const handleRemoveImage = async (galleryId, imageId) => {
//   try {
//     // Construct the correct API URL with both galleryId and imageId
//     const response = await fetch(`${API_URL}/galleries/${galleryId}/images/${imageId}`, {
//       method: 'DELETE',
//     });
    
//     if (!response.ok) throw new Error('Failed to delete image');
    
//     // Show success message and remove the image from the gallery
//     setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     setGalleryImages(prevImages => prevImages.filter(image => image.id !== imageId));  // Remove the deleted image from the state
//   } catch (error) {
//     // Show error message in case of failure
//     setSnackbar({ open: true, message: error.message, severity: 'error' });
//   }
// };



//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Gallery
//             </Typography>

//             {/* Display gallery images */}
//             <Typography variant="h6">Uploaded Images:</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//               {galleryImages.map((image) => (
//                 <Box key={image.id} sx={{ position: 'relative', width: '150px', height: '150px' }}>
//                   <img
//                     src={image.url}
//                     alt={image.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   {/* <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => handleRemoveImage(image.id)}
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                       color: 'white',
//                     }}
//                   >
//                     <DeleteIcon />
//                   </IconButton> */}
//                   <IconButton
//   aria-label="delete"
//   size="small"
//   onClick={() => handleRemoveImage(galleryId, image.id)}  // Ensure galleryId is passed along with imageId
//   sx={{
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: 'white',
//   }}
// >
//   <DeleteIcon />
// </IconButton>

//                 </Box>
//               ))}
//             </Box>

//             {/* File upload section */}
//             <Box mt={4}>
//               <Typography variant="h6">Upload Images</Typography>
//               <Input
//                 type="file"
//                 inputProps={{ multiple: true }}
//                 onChange={handleFileChange}
//                 sx={{ mb: 2 }}
//               />
//               <Button variant="contained" onClick={handleUpload} sx={{ backgroundColor: 'black', mt: 2 }}>
//                 Upload
//               </Button>
//             </Box>

//             {/* Image preview before uploading */}
//             <Typography variant="h6">Selected Images:</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//               {imagePreviews.map((preview, index) => (
//                 <Box key={index} sx={{ position: 'relative', width: '150px', height: '150px' }}>
//                   <img
//                     src={preview}
//                     alt={`Selected ${index}`}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => handleRemoveImage(index)}
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                       color: 'white',
//                     }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               ))}
//             </Box>

//             {/* Snackbar for notifications */}
//             <Snackbar
//               open={snackbar.open}
//               autoHideDuration={6000}
//               onClose={handleSnackbarClose}
//               anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//             >
//               <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
//                 {snackbar.message}
//               </Alert>
//             </Snackbar>
//           </Container>
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Gallery;


// src/pages/Gallery.js
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Input, IconButton, Snackbar, Alert } from '@mui/material';
import Header from '../Components/header';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/footer';
import DeleteIcon from '@mui/icons-material/Delete';

const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/gallery'; // Replace with your actual API endpoint

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);  // State for gallery images fetched from the API
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Fetch gallery images from API
  const fetchGalleryImages = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch gallery images');
      const data = await response.json();
      setGalleryImages(data);  // Set the fetched images
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Fetch gallery images on component mount
  useEffect(() => {
    fetchGalleryImages();
  }, []);

  // Handle file selection and preview
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prevFiles => [...prevFiles, ...files]);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prevPreviews => [...prevPreviews, ...previews]);
  };

  // Handle image upload
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setSnackbar({ open: true, message: 'Please select images to upload', severity: 'warning' });
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append('images', file);  // Append each selected file
    });

    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to upload images');
      
      setSnackbar({ open: true, message: 'Images uploaded successfully!', severity: 'success' });
      fetchGalleryImages();  // Refresh the gallery after upload
      setSelectedFiles([]);  // Clear selected files
      setImagePreviews([]);  // Clear previews
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Handle image deletion
  const handleRemoveImage = async (galleryId, imageId) => {
    try {
      // Construct the correct API URL with both galleryId and imageId
      const response = await fetch(`${API_URL}/galleries/${galleryId}/images/${imageId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete image');
      
      // Show success message and remove the image from the gallery
      setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
      setGalleryImages(prevImages => prevImages.filter(image => image.id !== imageId));  // Remove the deleted image from the state
    } catch (error) {
      // Show error message in case of failure
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Handle image deletion
  const handleDeleteImage = async (galleryId, imageId) => {
    try {
      console.log(`Gallery ID: ${galleryId}, Image ID: ${imageId}`); // Log IDs for debugging

      // Delete the image from the database
      const response = await fetch(`${API_URL}/galleries/${galleryId}/images/${imageId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get error details from the response
        console.error(errorData); // Log the error response for debugging
        throw new Error('Failed to delete image');
      }

      // Parse response and handle success
      const responseData = await response.json();
      if (responseData.message.includes('Gallery and all images deleted successfully')) {
        // Remove the gallery from state if the entire gallery was deleted
        setGalleryImages((prev) => prev.filter((gallery) => gallery._id !== galleryId));
      } else {
        // Update state to remove the deleted image
        const updatedGalleries = galleryImages.map((gallery) =>
          gallery._id === galleryId
            ? { ...gallery, images: gallery.images.filter((img) => img.id !== imageId) }
            : gallery
        );

        // Update state with the new list of galleries and images
        setGalleryImages(updatedGalleries);
      }

      // Show success message
      setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
    } catch (error) {
      // Handle error and show snackbar message
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };


  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onDrawerToggle={() => setOpen(!open)} />
      <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
        <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Container>
            <Typography variant="h4" gutterBottom>
              Gallery
            </Typography>

            {/* Display gallery images
            // <Typography variant="h6">Uploaded Images:</Typography>
            // <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
            //   {galleryImages.map((image) => (
            //     <Box key={image.id} sx={{ position: 'relative', width: '150px', height: '150px' }}>
            //       <img
            //         src={image.url}
            //         alt={image.name}
            //         style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
            //       />
            //       <IconButton
            //         aria-label="delete"
            //         size="small"
            //         onClick={() => handleRemoveImage(image.galleryId, image.id)}  // Ensure galleryId is passed along with imageId
            //         sx={{
            //           position: 'absolute',
            //           top: 0,
            //           right: 0,
            //           backgroundColor: 'rgba(0, 0, 0, 0.5)',
            //           color: 'white',
            //         }}
            //       >
            //         <DeleteIcon />
            //       </IconButton>
            //     </Box>
            //   ))}
            // </Box> */}

            {/* Display gallery images */}
<Typography variant="h6">Uploaded Images:</Typography>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
  {galleryImages.map((gallery) =>
    gallery.images.map((image) => ( // Iterate through images in each gallery
      <Box key={image.id} sx={{ position: 'relative', width: '150px', height: '150px' }}>
        <img
          src={`data:${image.imageData}`} // Assuming imageData is in base64 format
          alt={image.id}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => handleDeleteImage(gallery._id, image.id)} // Pass galleryId and imageId
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
    ))
  )}
</Box>


            {/* File upload section */}
            <Box mt={4}>
              <Typography variant="h6">Upload Images</Typography>
              <Input
                type="file"
                inputProps={{ multiple: true }}
                onChange={handleFileChange}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" onClick={handleUpload} sx={{ backgroundColor: 'black', mt: 2 }}>
                Upload
              </Button>
            </Box>

            {/* Image preview before uploading */}
            <Typography variant="h6">Selected Images:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
              {imagePreviews.map((preview, index) => (
                <Box key={index} sx={{ position: 'relative', width: '150px', height: '150px' }}>
                  <img
                    src={preview}
                    alt={`Selected ${index}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={() => handleRemoveImage(index)}
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

export default Gallery;


// //work......
// import React, { useState, useEffect } from 'react';
// import { Box, IconButton, Snackbar } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

// // Define API base URL
// const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/gallery';

// const Gallery = () => {
//   const [galleryImages, setGalleryImages] = useState([]); // State to hold galleries and images
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' }); // Snackbar for notifications

//   // Fetch galleries and images when component mounts
//   useEffect(() => {
//     fetchGalleryImages();
//   }, []);

//   // Fetch galleries and their images
//   const fetchGalleryImages = async () => {
//     try {
//       const response = await fetch(`${API_URL}/`);
//       const data = await response.json();
//       setGalleryImages(data); // Assuming the response contains the gallery array with images
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to fetch galleries', severity: 'error' });
//     }
//   };

//   // Handle image deletion (logic based on the provided one)
//   const handleDeleteImage = async (galleryId, imageId) => {
//     try {
//       console.log(`Gallery ID: ${galleryId}, Image ID: ${imageId}`); // Log IDs for debug

//       // Delete the image from the database
//       const response = await fetch(`${API_URL}/galleries/${galleryId}/images/${imageId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Get error details from the response
//         console.error(errorData); // Log the error response for debugging
//         throw new Error('Failed to delete image');
//       }

//       // Parse response and handle success
//       const responseData = await response.json();
//       if (responseData.message.includes('Gallery and all images deleted successfully')) {
//         // Remove the gallery from state if the entire gallery was deleted
//         setGalleryImages((prev) => prev.filter((gallery) => gallery._id !== galleryId));
//       } else {
//         // Update state to remove the deleted image
//         const updatedGalleries = galleryImages.map((gallery) =>
//           gallery._id === galleryId
//             ? { ...gallery, images: gallery.images.filter((img) => img.id !== imageId) }
//             : gallery
//         );

//         // Update state with the new list of galleries and images
//         setGalleryImages(updatedGalleries);
//       }

//       // Show success message
//       setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     } catch (error) {
//       // Handle error and show snackbar message
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   // Close the snackbar
//   const handleCloseSnackbar = () => {
//     setSnackbar({ open: false, message: '', severity: '' });
//   };

//   return (
//     <div>
//       <h1>Gallery</h1>
//       <Box display="flex" flexWrap="wrap" gap={2}>
//         {galleryImages.length > 0 ? (
//           galleryImages.map((gallery) => (
//             <Box key={gallery._id} sx={{ position: 'relative', width: '150px', height: '150px' }}>
//               {gallery.images.map((image) => (
//                 <Box key={image.id} sx={{ position: 'relative', width: '150px', height: '150px' }}>
//                   <img
//                     src={`data:${image.imageData}`}
//                     alt={image.id}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   {/* Delete Icon on the top-right corner of the image */}
//                   <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => handleDeleteImage(gallery._id, image.id)}
//                     sx={{
//                       position: 'absolute',
//                       top: 0,
//                       right: 0,
//                       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                       color: 'white',
//                     }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </Box>
//               ))}
//             </Box>
//           ))
//         ) : (
//           <p>No images available</p>
//         )}
//       </Box>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={3000}
//         onClose={handleCloseSnackbar}
//         message={snackbar.message}
//         severity={snackbar.severity}
//       />
//     </div>
//   );
// };

// export default Gallery;

