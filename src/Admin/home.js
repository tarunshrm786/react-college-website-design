// import React, { useState } from 'react';
// import { Box, Container, Typography, CssBaseline, TextField, Button, IconButton, Divider } from '@mui/material';
// import Header from '../Admin/Components/header';
// import Sidebar from '../Admin/Components/Sidebar';
// import Footer from '../Admin/Components/footer';
// import UploadIcon from '@mui/icons-material/Upload';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles';

// const UploadButton = styled(Button)({
//   backgroundColor: 'black',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'darkgray',
//   },
// });

// const Home = () => {
//   const [open, setOpen] = useState(false);

//   // State management for form inputs
//   const [bannerImage, setBannerImage] = useState(null);
//   const [bannerText, setBannerText] = useState('');
//   const [collaborators, setCollaborators] = useState([]);
//   const [affiliations, setAffiliations] = useState([]);

//   // Handlers for file inputs
//   const handleFileChange = (event, setter) => {
//     setter(event.target.files[0]);
//   };

//   const handleMultipleFilesChange = (event, setter) => {
//     setter(Array.from(event.target.files));
//   };

//   const handleDeleteImage = (index, setter, array) => {
//     setter(array.filter((_, i) => i !== index));
//   };

//   const handleSave = () => {
//     console.log('Saving data...');
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
//               Home
//             </Typography>
//             <Divider sx={{ my: 2 }} />

//             {/* Banner Section */}
//             <Typography variant="h6" gutterBottom>
//               Home Page Banner
//             </Typography>
//             <TextField
//               fullWidth
//               label="Text on Banner Image"
//               value={bannerText}
//               onChange={(e) => setBannerText(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//               sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
//             >
//               Upload Banner Image
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setBannerImage)}
//               />
//             </Button>
//             {bannerImage && (
//               <Box sx={{ position: 'relative', width: '100%', height: 'auto', mb: 2 }}>
//                 <img
//                   src={URL.createObjectURL(bannerImage)}
//                   alt="Banner"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     maxHeight: '400px',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                   }}
//                 />
//                 <IconButton
//                   sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                   onClick={() => setBannerImage(null)}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Box>
//             )}

//             <Divider sx={{ my: 2 }} />

//             {/* Our Collaborators Section */}
//             <Typography variant="h6" gutterBottom>
//               Our Collaborators
//             </Typography>
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//               sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
//             >
//               Upload Collaborators
//               <input
//                 type="file"
//                 multiple
//                 hidden
//                 onChange={(e) => handleMultipleFilesChange(e, setCollaborators)}
//               />
//             </Button>
//             {collaborators.length > 0 && (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                 {collaborators.map((file, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       position: 'relative',
//                       width: '150px',
//                       height: 'auto',
//                       mb: 2,
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <img
//                       src={URL.createObjectURL(file)}
//                       alt={`Collaborator ${index}`}
//                       style={{
//                         width: '100%',
//                         height: 'auto',
//                         borderRadius: '8px',
//                         objectFit: 'cover',
//                       }}
//                     />
//                     <IconButton
//                       sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                       onClick={() => handleDeleteImage(index, setCollaborators, collaborators)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </Box>
//                 ))}
//               </Box>
//             )}

//             <Divider sx={{ my: 2 }} />

//             {/* Our Affiliations Section */}
//             <Typography variant="h6" gutterBottom>
//               Our Affiliations
//             </Typography>
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//               sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
//             >
//               Upload Affiliations
//               <input
//                 type="file"
//                 multiple
//                 hidden
//                 onChange={(e) => handleMultipleFilesChange(e, setAffiliations)}
//               />
//             </Button>
//             {affiliations.length > 0 && (
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                 {affiliations.map((file, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       position: 'relative',
//                       width: '150px',
//                       height: 'auto',
//                       mb: 2,
//                       borderRadius: '8px',
//                       overflow: 'hidden',
//                     }}
//                   >
//                     <img
//                       src={URL.createObjectURL(file)}
//                       alt={`Affiliation ${index}`}
//                       style={{
//                         width: '100%',
//                         height: 'auto',
//                         borderRadius: '8px',
//                         objectFit: 'cover',
//                       }}
//                     />
//                     <IconButton
//                       sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                       onClick={() => handleDeleteImage(index, setAffiliations, affiliations)}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </Box>
//                 ))}
//               </Box>
//             )}

//             <Divider sx={{ my: 2 }} />

//             <Button
//               variant="contained"
//               onClick={handleSave}
//               sx={{ backgroundColor: 'black', color: 'white' }}
//             >
//               Save Changes
//             </Button>
//           </Container>
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import { Box, Container, Typography, CssBaseline, TextField, Button, IconButton, Divider } from '@mui/material';
// import Header from '../Admin/Components/header';
// import Sidebar from '../Admin/Components/Sidebar';
// import Footer from '../Admin/Components/footer';
// import UploadIcon from '@mui/icons-material/Upload';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles';

// const UploadButton = styled(Button)( {
//   backgroundColor: 'black',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'darkgray',
//   },
// });

// const Home = () => {
//   const [open, setOpen] = useState(false);

//   // State management for form inputs
//   const [bannerImage, setBannerImage] = useState(null);
//   const [bannerText, setBannerText] = useState('');

//   // Handlers for file inputs
//   const handleFileChange = (event, setter) => {
//     setter(event.target.files[0]);
//   };

//   const handleDeleteImage = () => {
//     setBannerImage(null);
//   };

//   const handleSave = () => {
//     console.log('Saving data...');
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
//               Home
//             </Typography>
//             <Divider sx={{ my: 2 }} />

//             {/* Banner Section */}
//             <Typography variant="h6" gutterBottom>
//               Home Page Banner
//             </Typography>
//             <TextField
//               fullWidth
//               label="Text on Banner Image"
//               value={bannerText}
//               onChange={(e) => setBannerText(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//               sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
//             >
//               Upload Banner Image
//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleFileChange(e, setBannerImage)}
//               />
//             </Button>
//             {bannerImage && (
//               <Box sx={{ position: 'relative', width: '100%', height: 'auto', mb: 2 }}>
//                 <img
//                   src={URL.createObjectURL(bannerImage)}
//                   alt="Banner"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     maxHeight: '400px',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                   }}
//                 />
//                 <IconButton
//                   sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                   onClick={handleDeleteImage}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Box>
//             )}

//             <Divider sx={{ my: 2 }} />

//             <Button
//               variant="contained"
//               onClick={handleSave}
//               sx={{ backgroundColor: 'black', color: 'white' }}
//             >
//               Save Changes
//             </Button>
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
//   TextField,
//   Button,
//   IconButton,
//   Divider,
//   Snackbar,
//   Alert,
// } from '@mui/material';
// import Header from '../Admin/Components/header';
// import Sidebar from '../Admin/Components/Sidebar';
// import Footer from '../Admin/Components/footer';
// import UploadIcon from '@mui/icons-material/Upload';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles';

// const UploadButton = styled(Button)({
//   backgroundColor: 'black',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: 'darkgray',
//   },
// });

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [bannerImage, setBannerImage] = useState(null);
//   const [bannerText, setBannerText] = useState('');
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   const API_URL = 'http://localhost:5000/api/homebanner';

//   // Fetch existing banner data on component mount
//   useEffect(() => {
//     const fetchBanner = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) throw new Error('Failed to fetch data');
//         const data = await response.json();
//         if (data.bannerImage) {
//           setBannerImage(data.bannerImage); // Assuming the response contains the banner image
//           setBannerText(data.bannerText); // Assuming the response contains the banner text
//         }
//       } catch (error) {
//         setSnackbar({ open: true, message: error.message, severity: 'error' });
//       }
//     };

//     fetchBanner();
//   }, []);

//   // Function to handle file upload
//   const handleFileChange = (event) => {
//     setBannerImage(event.target.files[0]);
//   };

//   // Function to handle image deletion
//   const handleDeleteImage = async () => {
//     try {
//       const response = await fetch(`${API_URL}/delete`, {
//         method: 'DELETE',
//       });
//       if (!response.ok) throw new Error('Failed to delete image');

//       setBannerImage(null); // Clear the local state
//       setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
//     } catch (error) {
//       setSnackbar({ open: true, message: error.message, severity: 'error' });
//     }
//   };

//   // Function to save the banner
//   const handleSave = async () => {
//     const formData = new FormData();
//     formData.append('bannerImage', bannerImage);
//     formData.append('bannerText', bannerText);

//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) throw new Error('Failed to save data');

//       setSnackbar({ open: true, message: 'Banner saved successfully!', severity: 'success' });
//     } catch (error) {
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
//               Home
//             </Typography>
//             <Divider sx={{ my: 2 }} />

//             {/* Banner Section */}
//             <Typography variant="h6" gutterBottom>
//               Home Page Banner
//             </Typography>
//             <TextField
//               fullWidth
//               label="Text on Banner Image"
//               value={bannerText}
//               onChange={(e) => setBannerText(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               variant="contained"
//               component="label"
//               startIcon={<UploadIcon />}
//               sx={{ mb: 2, backgroundColor: 'black', color: 'white' }}
//             >
//               Upload Banner Image
//               <input
//                 type="file"
//                 hidden
//                 onChange={handleFileChange}
//               />
//             </Button>
//             {bannerImage && (
//               <Box sx={{ position: 'relative', width: '100%', height: 'auto', mb: 2 }}>
//                 <img
//                   src={URL.createObjectURL(bannerImage)}
//                   alt="Banner"
//                   style={{
//                     width: '100%',
//                     height: 'auto',
//                     maxHeight: '400px',
//                     objectFit: 'cover',
//                     borderRadius: '8px',
//                   }}
//                 />
//                 <IconButton
//                   sx={{ position: 'absolute', top: 0, right: 0, color: 'red' }}
//                   onClick={handleDeleteImage}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </Box>
//             )}

//             <Divider sx={{ my: 2 }} />

//             <Button
//               variant="contained"
//               onClick={handleSave}
//               sx={{ backgroundColor: 'black', color: 'white' }}
//             >
//               Save Changes
//             </Button>

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
  TextField,
  Button,
  IconButton,
  Divider,
  Snackbar,
  Alert,
} from '@mui/material';
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
  const [bannerImage, setBannerImage] = useState(null); // For base64 image display
  const [bannerFile, setBannerFile] = useState(null);   // For the actual file upload
  const [bannerText, setBannerText] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const API_URL = 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/homebanner';

  // Fetch existing banner data on component mount
  // useEffect(() => {
  //   const fetchBanner = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw new Error('Failed to display data');
  //       const data = await response.json();
        
  //       // Assume the response contains bannerImage in base64 format
  //       if (data.bannerImage) {
  //         setBannerImage(data.bannerImage); // Set the base64 string directly
  //         setBannerText(data.bannerText); // Assuming the response contains the banner text
  //       }
  //     } catch (error) {
  //       setSnackbar({ open: true, message: error.message, severity: 'error' });
  //     }
  //   };

  //   fetchBanner();
  // }, []);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to display data');
        const data = await response.json();
        
        // Check if bannerImage is received and format is available
        if (data.bannerImage) {
          const imageFormat = 'jpeg'; // or 'png', depending on the image format you're using
          
          // Add the appropriate prefix for base64 image string
          const base64Image = `data:image/${imageFormat};base64,${data.bannerImage}`;
          
          setBannerImage(base64Image); // Set the base64 string with the correct prefix
          setBannerText(data.bannerText); // Assuming the response contains the banner text
        }
      } catch (error) {
        setSnackbar({ open: true, message: error.message, severity: 'error' });
      }
    };
  
    fetchBanner();
  }, []);

  
  // Function to handle file upload and display the image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBannerFile(file); // Store the file for later upload

      // Convert the file to a base64 string for preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result); // This will be a base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image deletion
  const handleDeleteImage = async () => {
    try {
      const response = await fetch(`${API_URL}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete image');

      setBannerImage(null); // Clear the local state
      setBannerFile(null); // Clear the file
      setSnackbar({ open: true, message: 'Image deleted successfully!', severity: 'success' });
   
      // Set timeout to reload the page after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      window.location.reload(); // Full page reload after 3 seconds
    }, 3000);
   
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Function to save the banner (upload image + text)
  const handleSave = async () => {
    const formData = new FormData();
    formData.append('bannerImage', bannerFile);  // Use the actual file for the API
    formData.append('bannerText', bannerText);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to save data');

      setSnackbar({ open: true, message: 'Banner saved successfully!', severity: 'success' });
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    }
  };

  // Snackbar close handler
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
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
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
            {bannerImage && (
              <Box sx={{ position: 'relative', width: '100%', height: 'auto', mb: 2 }}>
                {/* Display the image, bannerImage is now a base64 string */}
                <img
                  src={bannerImage} // Now this is a valid base64 URL for preview
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
                  onClick={handleDeleteImage}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}

            <Divider sx={{ my: 2 }} />

            <Button
              variant="contained"
              onClick={handleSave}
              sx={{ backgroundColor: 'black', color: 'white' }}
            >
              Save
            </Button>

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


