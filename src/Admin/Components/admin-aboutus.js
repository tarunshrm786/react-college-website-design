// import React, { useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia } from '@mui/material';
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
//             <input
//               accept="image/*"
//               style={{ display: 'none' }}
//               id="banner-upload"
//               type="file"
//               onChange={handleFileChange}
//             />
//             <label htmlFor="banner-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>
//                 Choose Banner
//               </Button>
//             </label>

//             {selectedFile && (
//               <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>
//                 {selectedFile.name}
//               </Typography>
//             )}

//             <Button
//               variant="contained"
//               onClick={handleUpload}
//               disabled={!selectedFile || uploading}
//               sx={{ bgcolor: 'black', color: 'white', mr: 2 }}
//             >
//               {uploading ? 'Uploading...' : 'Upload Banner'}
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       <Footer />
//     </Box>
//   );
// };

// export default AboutUs;

import React, { useState } from 'react';
import { Button, Box, Typography, Card, CardMedia, Grid } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import DeleteIcon from '@mui/icons-material/Delete'; // Import the delete icon

const AboutUs = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Automatically create a preview URL
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBannerImage(imageUrl);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    setTimeout(() => {
      alert('Banner uploaded successfully!');
      setUploading(false);
    }, 1000);
  };

  const handleDelete = () => {
    setBannerImage(null);
    setSelectedFile(null);
    alert('Banner deleted successfully!');
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
              >
                <DeleteIcon />
              </Button>
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
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutUs;
