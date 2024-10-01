// import React, { useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia, Grid } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

// const AboutUs = () => {
//   const [bannerImage, setBannerImage] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     // Automatically create a preview URL
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setBannerImage(imageUrl);
//     }
//   };

//   const handleUpload = () => {
//     if (!selectedFile) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     setUploading(true);

//     setTimeout(() => {
//       alert('Banner uploaded successfully!');
//       setUploading(false);
//     }, 1000);
//   };

//   const handleDelete = () => {
//     setBannerImage(null);
//     setSelectedFile(null);
//     alert('Banner deleted successfully!');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />

//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Admin Panel - About Us Banner Management
//           </Typography>

//           {bannerImage && (
//             <Card sx={{ mb: 4, position: 'relative' }}>
//               <CardMedia component="img" height="400" image={bannerImage} alt="Uploaded Banner" />
//               <Button
//                 onClick={handleDelete}
//                 sx={{
//                   position: 'absolute',
//                   top: 10,
//                   right: 10,
//                   bgcolor: 'red',
//                   color: 'white',
//                   '&:hover': {
//                     bgcolor: 'darkred',
//                   },
//                 }}
//               >
//                 <DeleteIcon />
//               </Button>
//             </Card>
//           )}

//           {!bannerImage && (
//             <Typography variant="body1" sx={{ mb: 4 }}>
//               No banner uploaded yet.
//             </Typography>
//           )}

//           <Box sx={{ mb: 4 }}>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} sm="auto">
//                 <input
//                   accept="image/*"
//                   style={{ display: 'none' }}
//                   id="banner-upload"
//                   type="file"
//                   onChange={handleFileChange}
//                 />
//                 <label htmlFor="banner-upload">
//                   <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white' }}>
//                     Choose Banner
//                   </Button>
//                 </label>
//               </Grid>

//               {selectedFile && (
//                 <Grid item xs={12} sm>
//                   <Typography variant="body2">{selectedFile.name}</Typography>
//                 </Grid>
//               )}

//               <Grid item xs={12} sm="auto">
//                 <Button
//                   variant="contained"
//                   onClick={handleUpload}
//                   disabled={!selectedFile || uploading}
//                   sx={{ bgcolor: 'black', color: 'white' }}
//                 >
//                   {uploading ? 'Uploading...' : 'Upload Banner'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Box>

//       <Footer />
//     </Box>
//   );
// };

// export default AboutUs;

// import React, { useState, useEffect } from 'react';
// import { Button, Box, Typography, Card, CardMedia, Grid } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

// const AboutUs = () => {
//   const [bannerImage, setBannerImage] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     fetchBanner();
//   }, []);

//   const fetchBanner = async () => {
//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner'); // Direct API URL
//       if (!response.ok) {
//         throw new Error('Failed to fetch banner');
//       }
//       const data = await response.json();
//       if (data.banner) {
//         setBannerImage(`data:image/jpeg;base64,${data.banner}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     // Automatically create a preview URL
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setBannerImage(imageUrl);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     setUploading(true);
//     const formData = new FormData();
//     formData.append('banner', selectedFile);

//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/upload', { // Direct API URL
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to upload banner');
//       }
//       await fetchBanner(); // Refresh the banner
//       alert('Banner uploaded successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error uploading banner');
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = async () => {
//     setDeleting(true);
//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/delete', { // Direct API URL
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete banner');
//       }
//       setBannerImage(null);
//       setSelectedFile(null);
//       alert('Banner deleted successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Error deleting banner');
//     } finally {
//       setDeleting(false);
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Admin Panel - About Us Banner Management
//           </Typography>

//           {bannerImage && (
//             <Card sx={{ mb: 4, position: 'relative' }}>
//               <CardMedia component="img" height="400" image={bannerImage} alt="Uploaded Banner" />
//               <Button
//                 onClick={handleDelete}
//                 sx={{
//                   position: 'absolute',
//                   top: 10,
//                   right: 10,
//                   bgcolor: 'red',
//                   color: 'white',
//                   '&:hover': {
//                     bgcolor: 'darkred',
//                   },
//                 }}
//                 disabled={deleting}
//               >
//                 <DeleteIcon />
//               </Button>
//             </Card>
//           )}

//           {!bannerImage && (
//             <Typography variant="body1" sx={{ mb: 4 }}>
//               No banner uploaded yet.
//             </Typography>
//           )}

//           <Box sx={{ mb: 4 }}>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} sm="auto">
//                 <input
//                   accept="image/*"
//                   style={{ display: 'none' }}
//                   id="banner-upload"
//                   type="file"
//                   onChange={handleFileChange}
//                 />
//                 <label htmlFor="banner-upload">
//                   <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white' }}>
//                     Choose Banner
//                   </Button>
//                 </label>
//               </Grid>

//               {selectedFile && (
//                 <Grid item xs={12} sm>
//                   <Typography variant="body2">{selectedFile.name}</Typography>
//                 </Grid>
//               )}

//               <Grid item xs={12} sm="auto">
//                 <Button
//                   variant="contained"
//                   onClick={handleUpload}
//                   disabled={!selectedFile || uploading}
//                   sx={{ bgcolor: 'black', color: 'white' }}
//                 >
//                   {uploading ? 'Uploading...' : 'Upload Banner'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default AboutUs;

// import React, { useState, useEffect } from 'react';
// import { Button, Box, Typography, Card, CardMedia, Grid, Snackbar } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import DeleteIcon from '@mui/icons-material/Delete';

// const AboutUs = () => {
//   const [bannerImage, setBannerImage] = useState(null);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [deleting, setDeleting] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // Updated to match provided Snackbar
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   useEffect(() => {
//     fetchBanner();
//   }, []);

//   const fetchBanner = async () => {
//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner');
//       if (!response.ok) {
//         throw new Error('Failed to fetch banner');
//       }
//       const data = await response.json();
//       if (data.banner) {
//         setBannerImage(`data:image/jpeg;base64,${data.banner}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     // Check if the file is larger than 1 MB
//     if (file && file.size > 1024 * 1024) {
//       setSnackbarMessage('File size exceeds 1 MB. Please choose a smaller file.');
//       setOpenSnackbar(true); // Open Snackbar with the warning message
//       return;
//     }

//     setSelectedFile(file);
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setBannerImage(imageUrl);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     setUploading(true);
//     const formData = new FormData();
//     formData.append('banner', selectedFile);

//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/upload', {
//         method: 'POST',
//         body: formData,
//       });
//       if (!response.ok) {
//         throw new Error('Failed to upload banner');
//       }
//       await fetchBanner(); // Refresh the banner
//       setSnackbarMessage('Banner uploaded successfully!');
//       setOpenSnackbar(true); // Open success Snackbar
//     } catch (error) {
//       console.error(error);
//       setSnackbarMessage('Error uploading banner');
//       setOpenSnackbar(true); // Open error Snackbar
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDelete = async () => {
//     setDeleting(true);
//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/delete', {
//         method: 'DELETE',
//       });
//       if (!response.ok) {
//         throw new Error('Failed to delete banner');
//       }
//       setBannerImage(null);
//       setSelectedFile(null);
//       setSnackbarMessage('Banner deleted successfully!');
//       setOpenSnackbar(true); // Open success Snackbar
//     } catch (error) {
//       console.error(error);
//       setSnackbarMessage('Error deleting banner');
//       setOpenSnackbar(true); // Open error Snackbar
//     } finally {
//       setDeleting(false);
//     }
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Admin Panel - About Us Banner Management
//           </Typography>

//           {bannerImage && (
//             <Card sx={{ mb: 4, position: 'relative' }}>
//               <CardMedia component="img" height="400" image={bannerImage} alt="Uploaded Banner" />
//               <Button
//                 onClick={handleDelete}
//                 sx={{
//                   position: 'absolute',
//                   top: 10,
//                   right: 10,
//                   bgcolor: 'red',
//                   color: 'white',
//                   '&:hover': {
//                     bgcolor: 'darkred',
//                   },
//                 }}
//                 disabled={deleting || uploading} // Disable while uploading or deleting
//               >
//                 <DeleteIcon />
//               </Button>
//             </Card>
//           )}

//           {!bannerImage && (
//             <Typography variant="body1" sx={{ mb: 4 }}>
//               No banner uploaded yet.
//             </Typography>
//           )}

//           <Box sx={{ mb: 4 }}>
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} sm="auto">
//                 <input
//                   accept="image/*"
//                   style={{ display: 'none' }}
//                   id="banner-upload"
//                   type="file"
//                   onChange={handleFileChange}
//                 />
//                 <label htmlFor="banner-upload">
//                   <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white' }}>
//                     Choose Banner
//                   </Button>
//                 </label>
//               </Grid>

//               {selectedFile && (
//                 <Grid item xs={12} sm>
//                   <Typography variant="body2">{selectedFile.name}</Typography>
//                 </Grid>
//               )}

//               <Grid item xs={12} sm="auto">
//                 <Button
//                   variant="contained"
//                   onClick={handleUpload}
//                   disabled={!selectedFile || uploading}
//                   sx={{ bgcolor: 'black', color: 'white' }}
//                 >
//                   {uploading ? 'Uploading...' : 'Upload Banner'}
//                 </Button>
//               </Grid>
//             </Grid>
//           </Box>

//           {/* Success Snackbar */}
//           <Snackbar
//             open={openSnackbar}
//             autoHideDuration={6000}
//             onClose={() => setOpenSnackbar(false)}
//             message={snackbarMessage} // Use the snackbarMessage state for content
//           />
//         </Box>
//       </Box>
//       <Footer />
//     </Box>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Card, CardMedia, Grid, Snackbar } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import DeleteIcon from '@mui/icons-material/Delete';

const AboutUs = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false); 
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner');
      if (!response.ok) {
        throw new Error('Failed to fetch banner');
      }
      const data = await response.json();
      if (data.banner) {
        setBannerImage(`data:image/jpeg;base64,${data.banner}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.size > 1024 * 1024) {
      setSnackbarMessage('File size exceeds 1 MB. Please choose a smaller file.');
      setOpenSnackbar(true); 
      return;
    }

    setSelectedFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('banner', selectedFile);

    try {
      const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/upload', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload banner');
      }
      await fetchBanner(); 
      setSnackbarMessage('Banner uploaded successfully!');
      setOpenSnackbar(true); 
    } catch (error) {
      console.error(error);
      setSnackbarMessage('Error uploading banner');
      setOpenSnackbar(true); 
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/aboutus/aboutusbanner/delete', {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete banner');
      }
      setBannerImage(null);
      setSelectedFile(null);
      setSnackbarMessage('Banner deleted successfully!');
      setOpenSnackbar(true); 
    } catch (error) {
      console.error(error);
      setSnackbarMessage('Error deleting banner');
      setOpenSnackbar(true); 
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Admin Panel - About Us Banner Management
          </Typography>

          {bannerImage && (
            <Card sx={{ mb: 4, position: 'relative' }}>
              <CardMedia component="img" height="400" image={bannerImage} alt="Uploaded Banner" />
              {/* Conditionally render the delete button only when image is present */}
              {bannerImage && (
                <Button
                  onClick={handleDelete}
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    bgcolor: 'red',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'darkred',
                    },
                  }}
                  disabled={deleting || uploading}
                >
                  <DeleteIcon />
                </Button>
              )}
            </Card>
          )}

          {!bannerImage && (
            <Typography variant="body1" sx={{ mb: 4 }}>
              No banner uploaded yet.
            </Typography>
          )}

          <Box sx={{ mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm="auto">
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="banner-upload"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="banner-upload">
                  <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white' }}>
                    Choose Banner
                  </Button>
                </label>
              </Grid>

              {selectedFile && (
                <Grid item xs={12} sm>
                  <Typography variant="body2">{selectedFile.name}</Typography>
                </Grid>
              )}

              <Grid item xs={12} sm="auto">
                <Button
                  variant="contained"
                  onClick={handleUpload}
                  disabled={!selectedFile || uploading}
                  sx={{ bgcolor: 'black', color: 'white' }}
                >
                  {uploading ? 'Uploading...' : 'Upload Banner'}
                </Button>
              </Grid>
            </Grid>
          </Box>

          {/* Success Snackbar */}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            message={snackbarMessage} 
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutUs;
