// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   CssBaseline,
//   Snackbar,
//   Alert,
//   IconButton,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material'; // Import the Delete icon
// import Header from '../../Admin/Components/header';
// import Sidebar from '../../Admin/Components/Sidebar';
// import Footer from '../../Admin/Components/footer';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [collaborators, setCollaborators] = useState([]);  // State to hold collaborator data
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   // API URL for fetching collaborator data
//   const API_URL = 'http://localhost:5000/api/collaborators';

//   useEffect(() => {
//     const fetchCollaborators = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch collaborators');
//         const data = await response.json();
//         setCollaborators(data);  // Store fetched data in state
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

//     fetchCollaborators();
//   }, []);

//   // Handle image deletion
//   const handleDeleteImage = async (collaboratorId, imageId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/collaborators/collaborators/${collaboratorId}/images/${imageId}`, {
//         method: 'DELETE',
//       });
      
//       if (!response.ok) throw new Error('Failed to delete image');

//       // Update the collaborators list after deletion
//       setCollaborators((prevCollaborators) =>
//         prevCollaborators.map((collaborator) =>
//           collaborator._id === collaboratorId
//             ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
//             : collaborator
//         )
//       );

//       // Show success message
//       setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     } catch (error) {
//       // Show error message
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };


//   // Snackbar close handler
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//              Our Collaborators
//             </Typography>

//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//               {/* Map through collaborators and display images */}
//               {collaborators.map((collaborator) => (
//                 <Box
//                   key={collaborator._id}
//                   sx={{ width: '150px', height: '150px', position: 'relative' }}
//                 >
//                   {/* Map through images of each collaborator */}
//                   {collaborator.images.map((image) => (
//                     <Box key={image.id} sx={{ position: 'relative' }}>
//                       <img
//                         src={`data:${image.imageData}`}  // Display base64 image
//                         alt={`Collaborator ${collaborator._id}`}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />

//                       {/* Delete Icon on the top-right corner of the image */}
//                       <IconButton
//                         aria-label="delete"
//                         size="small"
//                         onClick={() => handleDeleteImage(collaborator._id, image.id)}
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           right: 0,
//                           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                           color: 'white',
//                         }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Box>
//                   ))}
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

// export default Home;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   CssBaseline,
//   Snackbar,
//   Alert,
//   IconButton,
//   Button,
//   Grid,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';
// import Header from '../../Admin/Components/header';
// import Sidebar from '../../Admin/Components/Sidebar';
// import Footer from '../../Admin/Components/footer';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [collaborators, setCollaborators] = useState([]);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [selectedImages, setSelectedImages] = useState([]); // To hold selected images

//   const API_URL = 'http://localhost:5000/api/collaborators';

//   useEffect(() => {
//     const fetchCollaborators = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch collaborators');
//         const data = await response.json();
//         setCollaborators(data);
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

//     fetchCollaborators();
//   }, []);

  // // Handle image deletion
  // const handleDeleteImage = async (collaboratorId, imageId) => {
  //   try {
  //     const response = await fetch(`${API_URL}/${collaboratorId}/images/${imageId}`, {
  //       method: 'DELETE',
  //     });
  //     if (!response.ok) throw new Error('Failed to delete image');

  //     setCollaborators((prevCollaborators) =>
  //       prevCollaborators.map((collaborator) =>
  //         collaborator._id === collaboratorId
  //           ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
  //           : collaborator
  //       )
  //     );
  //     setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
  //   } catch (error) {
  //     setSnackbar({ open: true, message: error.message, severity: 'error' });
  //   }
  // };

//   // Handle image selection and size validation
//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     const validImages = files.filter((file) => file.size < 100 * 1024); // Check if size < 100 KB
//     if (validImages.length < files.length) {
//       setSnackbar({ open: true, message: 'Some images exceed 100 KB!', severity: 'warning' });
//     }
//     const imagePreviews = validImages.map((file) => URL.createObjectURL(file));
//     setSelectedImages((prev) => [...prev, ...imagePreviews]); // Store previews
//   };

//   // Handle image upload
//   const handleUploadImages = async () => {
//     const formData = new FormData();
//     selectedImages.forEach((image, index) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await fetch(`${API_URL}`, {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) throw new Error('Failed to upload images');
//       setSnackbar({ open: true, message: 'Images uploaded successfully!', severity: 'success' });
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Our Collaborators
//             </Typography>

//             {/* Image Upload Section */}
//             <Typography variant="h6" gutterBottom>
//               Upload Logos
//             </Typography>
//             <Button variant="contained" component="label">
//               Select Images
//               <input
//                 type="file"
//                 accept="image/*"
//                 hidden
//                 multiple
//                 onChange={handleImageChange}
//               />
//             </Button>
//             {selectedImages.length > 0 && (
//               <Box sx={{ mt: 2 }}>
//                 <Grid container spacing={2}>
//                   {selectedImages.map((image, index) => (
//                     <Grid item key={index} xs={4} md={2}>
//                       <img
//                         src={image}
//                         alt={`Selected ${index}`}
//                         style={{ width: '100%', borderRadius: '8px' }}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2 }}
//                   onClick={handleUploadImages}
//                 >
//                   Upload
//                 </Button>
//               </Box>
//             )}

//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 4 }}>
//               {/* Display Collaborator Images */}
//               {collaborators.map((collaborator) => (
//                 <Box
//                   key={collaborator._id}
//                   sx={{ width: '150px', height: '150px', position: 'relative' }}
//                 >
//                   {collaborator.images.map((image) => (
//                     <Box key={image.id} sx={{ position: 'relative' }}>
//                       <img
//                         src={`data:${image.imageData}`}
//                         alt={`Collaborator ${collaborator._id}`}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />
//                       <IconButton
//                         aria-label="delete"
//                         size="small"
//                         onClick={() => handleDeleteImage(collaborator._id, image.id)}
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           right: 0,
//                           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                           color: 'white',
//                         }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Box>
//                   ))}
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

// export default Home;


// //work........
// import React, { useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   CssBaseline,
//   Snackbar,
//   Alert,
//   Button,
//   IconButton,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';
// import Header from '../../Admin/Components/header';
// import Sidebar from '../../Admin/Components/Sidebar';
// import Footer from '../../Admin/Components/footer';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [selectedFiles, setSelectedFiles] = useState([]);  // State to hold selected files

//   // Snackbar close handler
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   // Handle file selection
//   const handleFileSelect = (event) => {
//     const files = Array.from(event.target.files); // Convert FileList to an array
//     const validFiles = files.filter((file) => file.size <= 100 * 1024); // Filter files smaller than 100KB

//     if (validFiles.length !== files.length) {
//       setSnackbar({
//         open: true,
//         message: 'Some files are larger than 100KB and will not be uploaded.',
//         severity: 'warning',
//       });
//     }

//     setSelectedFiles(validFiles);
//   };

//   // Handle image upload
//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       setSnackbar({
//         open: true,
//         message: 'Please select at least one image to upload.',
//         severity: 'warning',
//       });
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file) => {
//       formData.append('images', file);  // Append each selected file to formData
//     });

//     try {
//       const response = await fetch('http://localhost:5000/api/collaborators', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload images');
//       }

//       setSnackbar({
//         open: true,
//         message: 'Images uploaded successfully!',
//         severity: 'success',
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: error.message,
//         severity: 'error',
//       });
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Our Collaborators
//             </Typography>

//             {/* File upload section */}
//             <Box>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleFileSelect}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleUpload}
//                 sx={{ mt: 2 }}
//               >
//                 Upload Logos
//               </Button>
//             </Box>

//             {/* Display selected files as cards */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//               {selectedFiles.map((file, index) => (
//                 <Box key={index} sx={{ width: '100px', height: '100px', position: 'relative' }}>
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt={file.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => {
//                       const newFiles = selectedFiles.filter((_, i) => i !== index);
//                       setSelectedFiles(newFiles);
//                     }}
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

// export default Home;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   CssBaseline,
//   Snackbar,
//   Alert,
//   Button,
//   IconButton,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material'; 
// import Header from '../../Admin/Components/header';
// import Sidebar from '../../Admin/Components/Sidebar';
// import Footer from '../../Admin/Components/footer';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [collaborators, setCollaborators] = useState([]);  // State to hold collaborator data
//   const [selectedFiles, setSelectedFiles] = useState([]);  // State to hold selected files

//   const API_URL = 'http://localhost:5000/api/collaborators';

//   // Fetch collaborator data on component mount
//   useEffect(() => {
//     const fetchCollaborators = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch collaborators');
//         const data = await response.json();
//         setCollaborators(data);  // Store fetched data in state
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

//     fetchCollaborators();
//   }, []);


//     // Handle image deletion
//     const handleDeleteImage = async (collaboratorId, imageId) => {
//       try {
//         const response = await fetch(`${API_URL}/collaborators/${collaboratorId}/images/${imageId}`, {
//           method: 'DELETE',
//         });
//         if (!response.ok) throw new Error('Failed to delete image');
  
//         setCollaborators((prevCollaborators) =>
//           prevCollaborators.map((collaborator) =>
//             collaborator._id === collaboratorId
//               ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
//               : collaborator
//           )
//         );
//         setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

    

//   // Snackbar close handler
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   // Handle file selection
//   const handleFileSelect = (event) => {
//     const files = Array.from(event.target.files); // Convert FileList to an array
//     const validFiles = files.filter((file) => file.size <= 100 * 1024); // Filter files smaller than 100KB

//     if (validFiles.length !== files.length) {
//       setSnackbar({
//         open: true,
//         message: 'Some files are larger than 100KB and will not be uploaded.',
//         severity: 'warning',
//       });
//     }

//     setSelectedFiles(validFiles);
//   };

//   // Handle image upload
//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       setSnackbar({
//         open: true,
//         message: 'Please select at least one image to upload.',
//         severity: 'warning',
//       });
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file) => {
//       formData.append('images', file);  // Append each selected file to formData
//     });

//     try {
//       const response = await fetch(`${API_URL}`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload images');
//       }

//       setSnackbar({
//         open: true,
//         message: 'Images uploaded successfully!',
//         severity: 'success',
//       });

//       // Optionally, fetch the updated collaborators to reflect new uploads
//       const updatedCollaborators = await response.json();
//       setCollaborators(updatedCollaborators);
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: error.message,
//         severity: 'error',
//       });
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Our Collaborators
//             </Typography>

//             {/* Display collaborators' images */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//               {collaborators.map((collaborator) => (
//                 <Box
//                   key={collaborator._id}
//                   sx={{ width: '150px', height: '150px', position: 'relative' }}
//                 >
//                   {/* Map through images of each collaborator */}
//                   {collaborator.images.map((image) => (
//                     <Box key={image.id} sx={{ position: 'relative' }}>
//                       <img
//                         src={`data:${image.imageData}`}  // Display base64 image
//                         alt={`Collaborator ${collaborator._id}`}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />

//                       {/* Delete Icon on the top-right corner of the image */}
//                       <IconButton
//                         aria-label="delete"
//                         size="small"
//                         onClick={() => handleDeleteImage(collaborator._id, image.id)}
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           right: 0,
//                           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                           color: 'white',
//                         }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Box>
//                   ))}
//                 </Box>
//               ))}
//             </Box>

//             {/* File upload section */}
//             <Box mt={4}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleFileSelect}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleUpload}
//                 sx={{ mt: 2 }}
//               >
//                 Upload Logos
//               </Button>
//             </Box>

//             {/* Display selected files as small cards */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//               {selectedFiles.map((file, index) => (
//                 <Box key={index} sx={{ width: '100px', height: '100px', position: 'relative' }}>
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt={file.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => {
//                       const newFiles = selectedFiles.filter((_, i) => i !== index);
//                       setSelectedFiles(newFiles);
//                     }}
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

// export default Home;



// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   CssBaseline,
//   Snackbar,
//   Alert,
//   Button,
//   IconButton,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material'; 
// import Header from '../../Admin/Components/header';
// import Sidebar from '../../Admin/Components/Sidebar';
// import Footer from '../../Admin/Components/footer';

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
//   const [collaborators, setCollaborators] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);

//   const API_URL = 'http://localhost:5000/api/collaborators';

//   // Fetch collaborator data on component mount
//   useEffect(() => {
//     const fetchCollaborators = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch collaborators');
//         const data = await response.json();
//         setCollaborators(data);
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

//     fetchCollaborators();
//   }, []);

//   // Handle image deletion
//   const handleDeleteImage = async (collaboratorId, imageId) => {
//     try {
//       const response = await fetch(`${API_URL}/collaborators/${collaboratorId}/images/${imageId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete image');

//       const updatedCollaborators = collaborators.map((collaborator) => {
//         if (collaborator._id === collaboratorId) {
//           const newImages = collaborator.images.filter((img) => img.id !== imageId);

//           // Check if there are no images left, and delete the collaborator
//           if (newImages.length === 0) {
//             deleteCollaborator(collaboratorId); // Call to delete collaborator if images are empty
//             return null; // Return null to filter out collaborator from state
//           }

//           return { ...collaborator, images: newImages };
//         }
//         return collaborator;
//       });

//       // Filter out deleted collaborators
//       setCollaborators(updatedCollaborators.filter(Boolean));

//       setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   // Function to delete the entire collaborator entry
//   const deleteCollaborator = async (collaboratorId) => {
//     try {
//       const response = await fetch(`${API_URL}/collaborators/${collaboratorId}`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete collaborator');

//       // Optionally, you could show a snackbar notification here as well
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   }

//   // Snackbar close handler
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   // Handle file selection
//   const handleFileSelect = (event) => {
//     const files = Array.from(event.target.files);
//     const validFiles = files.filter((file) => file.size <= 100 * 1024);

//     if (validFiles.length !== files.length) {
//       setSnackbar({
//         open: true,
//         message: 'Some files are larger than 100KB and will not be uploaded.',
//         severity: 'warning',
//       });
//     }

//     setSelectedFiles(validFiles);
//   };

//   // Handle image upload
//   const handleUpload = async () => {
//     if (selectedFiles.length === 0) {
//       setSnackbar({
//         open: true,
//         message: 'Please select at least one image to upload.',
//         severity: 'warning',
//       });
//       return;
//     }

//     const formData = new FormData();
//     selectedFiles.forEach((file) => {
//       formData.append('images', file);
//     });

//     try {
//       const response = await fetch(`${API_URL}`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to upload images');
//       }

//       setSnackbar({
//         open: true,
//         message: 'Images uploaded successfully!',
//         severity: 'success',
//       });

//       const updatedCollaborators = await response.json();
//       setCollaborators(updatedCollaborators);
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: error.message,
//         severity: 'error',
//       });
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <CssBaseline />
//       <Header onDrawerToggle={() => setOpen(!open)} />
//       <Box sx={{ display: 'flex', flex: 1, pt: 8 }}>
//         <Sidebar open={open} onDrawerToggle={() => setOpen(!open)} />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Container>
//             <Typography variant="h4" gutterBottom>
//               Our Collaborators
//             </Typography>

//             {/* Display collaborators' images */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//               {collaborators.map((collaborator) => (
//                 <Box
//                   key={collaborator._id}
//                   sx={{ width: '150px', height: '150px', position: 'relative' }}
//                 >
//                   {/* Map through images of each collaborator */}
//                   {collaborator.images.map((image) => (
//                     <Box key={image.id} sx={{ position: 'relative' }}>
//                       <img
//                         src={`data:${image.imageData}`}
//                         alt={`Collaborator ${collaborator._id}`}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '8px',
//                         }}
//                       />

//                       {/* Delete Icon on the top-right corner of the image */}
//                       <IconButton
//                         aria-label="delete"
//                         size="small"
//                         onClick={() => handleDeleteImage(collaborator._id, image.id)}
//                         sx={{
//                           position: 'absolute',
//                           top: 0,
//                           right: 0,
//                           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                           color: 'white',
//                         }}
//                       >
//                         <DeleteIcon />
//                       </IconButton>
//                     </Box>
//                   ))}
//                 </Box>
//               ))}
//             </Box>

//             {/* File upload section */}
//             <Box mt={4}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 multiple
//                 onChange={handleFileSelect}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleUpload}
//                 sx={{ mt: 2 }}
//               >
//                 Upload Logos
//               </Button>
//             </Box>

//             {/* Display selected files as small cards */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
//               {selectedFiles.map((file, index) => (
//                 <Box key={index} sx={{ width: '100px', height: '100px', position: 'relative' }}>
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt={file.name}
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
//                   />
//                   <IconButton
//                     aria-label="delete"
//                     size="small"
//                     onClick={() => {
//                       const newFiles = selectedFiles.filter((_, i) => i !== index);
//                       setSelectedFiles(newFiles);
//                     }}
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

// export default Home;

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

const Home = () => {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [collaborators, setCollaborators] = useState([]);  // State to hold collaborator data
  const [selectedFiles, setSelectedFiles] = useState([]);  // State to hold selected files

  const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/collaborators';

  // Fetch collaborator data on component mount
  const fetchCollaborators = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch collaborators');
      const data = await response.json();
      setCollaborators(data);  // Store fetched data in state
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  useEffect(() => {
    fetchCollaborators(); // Call the function to fetch collaborators on mount
  }, []);

  // // Handle image deletion
  // const handleDeleteImage = async (collaboratorId, imageId) => {
  //   try {
  //     // Delete the image from the database
  //     const response = await fetch(`${API_URL}/collaborators/${collaboratorId}/images/${imageId}`, {
  //       method: 'DELETE',
  //     });

  //     if (!response.ok) throw new Error('Failed to delete image');

  //     // Update state to remove the deleted image
  //     const updatedCollaborators = collaborators.map((collaborator) =>
  //       collaborator._id === collaboratorId
  //         ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
  //         : collaborator
  //     );

  //     // Check if the collaborator has no images left
  //     const collaborator = updatedCollaborators.find((collab) => collab._id === collaboratorId);
  //     if (collaborator.images.length === 0) {
  //       // Delete the collaborator from the database
  //       const deleteResponse = await fetch(`${API_URL}/collaborators/${collaboratorId}`, {
  //         method: 'DELETE',
  //       });

  //       if (!deleteResponse.ok) throw new Error('Failed to delete collaborator');
  //     }

  //     // Update state with the new list of collaborators
  //     setCollaborators(updatedCollaborators.filter((collab) => collab.images.length > 0));

  //     setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
  //   } catch (error) {
  //     setSnackbar({ open: true, message: error.message, severity: 'error' });
  //   }
  // };

//   const handleDeleteImage = async (collaboratorId, imageId) => {
//     try {
//         // Delete the image from the database
//         const response = await fetch(`${API_URL}/${collaboratorId}/images/${imageId}`, {
//             method: 'DELETE',
//         });

//         if (!response.ok) throw new Error('Failed to delete image');

//         // Update state to remove the deleted image
//         const updatedCollaborators = collaborators.map((collaborator) =>
//             collaborator._id === collaboratorId
//                 ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
//                 : collaborator
//         );

//         // Check if the collaborator has no images left
//         const collaborator = updatedCollaborators.find((collab) => collab._id === collaboratorId);
//         if (collaborator && collaborator.images.length === 0) {
//             // Delete the collaborator from the database
//             const deleteResponse = await fetch(`${API_URL}/${collaboratorId}`, {
//                 method: 'DELETE',
//             });

//             if (!deleteResponse.ok) throw new Error('Failed to delete collaborator');
//         }

//         // Update state with the new list of collaborators
//         setCollaborators(updatedCollaborators.filter((collab) => collab.images.length > 0 || collab._id === collaboratorId));

//         setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
// };

const handleDeleteImage = async (collaboratorId, imageId) => {
  try {
      console.log(`Collaborator ID: ${collaboratorId}, Image ID: ${imageId}`); // Log IDs

      // Delete the image from the database
      const response = await fetch(`${API_URL}/collaborators/${collaboratorId}/images/${imageId}`, {
          method: 'DELETE',
      });

      if (!response.ok) {
          const errorData = await response.json(); // Get error details from the response
          console.error(errorData); // Log the error response for debugging
          throw new Error('Failed to delete image');
      }

      // If the collaborator is deleted, we can remove it from the state
      const responseData = await response.json();
      if (responseData.message.includes('Collaborator and all images deleted successfully')) {
          // Remove the collaborator from state if deleted
          setCollaborators((prev) => prev.filter((collab) => collab._id !== collaboratorId));
      } else {
          // Update state to remove the deleted image
          const updatedCollaborators = collaborators.map((collaborator) =>
              collaborator._id === collaboratorId
                  ? { ...collaborator, images: collaborator.images.filter((img) => img.id !== imageId) }
                  : collaborator
          );

          // Update state with the new list of collaborators
          setCollaborators(updatedCollaborators);
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

      // Optionally, fetch the updated collaborators to reflect new uploads
      fetchCollaborators();
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
              Our Collaborators
            </Typography>

            {/* Display collaborators' images */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {collaborators.map((collaborator) => (
                <Box
                  key={collaborator._id}
                  sx={{ width: '150px', height: '150px', position: 'relative' }}
                >
                  {/* Map through images of each collaborator */}
                  {collaborator.images.map((image) => (
                    <Box key={image.id} sx={{ position: 'relative' }}>
                      <img
                        src={`data:${image.imageData}`}  // Display base64 image
                        alt={`Collaborator ${collaborator._id}`}
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
                        onClick={() => handleDeleteImage(collaborator._id, image.id)}
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

export default Home;
