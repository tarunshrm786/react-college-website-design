// import React, { useState, useEffect } from 'react';
// import { Button, Box, Typography, Card, CardMedia, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// // Function to convert ArrayBuffer to Base64 string
// const arrayBufferToBase64 = (buffer) => {
//   let binary = '';
//   const bytes = new Uint8Array(buffer);
//   const len = bytes.byteLength;
//   for (let i = 0; i < len; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// };


// const Mentor = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');
//   const [successModal, setSuccessModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [deleteId, setDeleteId] = useState(null); // ID of the mentor to delete

//   useEffect(() => {
//     const fetchMentors = async () => {
//       try {
//         const response = await axios.get('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors');
//         const data = response.data.map((mentor) => {
//           // Convert binary image data to base64
//           const base64Image = `data:${mentor.image.contentType};base64,${arrayBufferToBase64(mentor.image.data.data)}`;
//           return { ...mentor, base64Image }; // Add the base64Image field to each mentor
//         });
//         setTeamMembers(data); // Update state with the processed data
//       } catch (error) {
//         console.error('Error fetching mentors:', error);
//       }
//     };

//     fetchMentors();
//   }, []);


//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     // Validate file type
//     if (file) {
//       const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//       if (!validTypes.includes(file.type)) {
//         alert('Please select a valid image file (JPG, JPEG, PNG).');
//         setSelectedFile(null);
//         return;
//       }
//       setSelectedFile(file);
//     }
//   };

//   const handleAddMember = async () => {
//     if (!selectedFile || !name || !post || !city) {
//       alert('Please fill all fields and select an image.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('post', post);
//     formData.append('city', city);
//     formData.append('image', selectedFile);

//     console.log('Sending data:', Array.from(formData.entries())); // Log FormData contents


//     try {
//       const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.text(); // Log the error response
//         console.error('Error response from server:', errorData);

//         throw new Error('Network response was not ok');
//       }

//       const newMember = await response.json();
//       setTeamMembers([...teamMembers, newMember]);

//       // Reset form fields
//       setSelectedFile(null);
//       setName('');
//       setPost('');
//       setCity('');

//       // Show success modal
//       setSuccessModal(true);
//     } catch (error) {
//       console.error('Error uploading mentor:', error);
//       alert('Failed to upload mentor data. Please try again.');
//     }
//   };

//   const handleDeleteMember = async () => {
//     try {
//       const response = await fetch(`https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors/${deleteId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete mentor');
//       }

//       // Update the teamMembers state
//       setTeamMembers((prevMembers) => prevMembers.filter((member) => member._id !== deleteId));

//       // Close delete modal
//       setDeleteModal(false);
//     } catch (error) {
//       console.error('Error deleting mentor:', error);
//       alert('Failed to delete mentor. Please try again.');
//     }
//   };

//   const handleOpenDeleteModal = (id) => {
//     setDeleteId(id);
//     setDeleteModal(true);
//   };

//   const handleCloseModal = () => {
//     setSuccessModal(false);
//     setDeleteModal(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />

//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Mentor Management
//           </Typography>

//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/jpeg, image/jpg, image/png"
//               style={{ display: 'none' }}
//               id="team-member-upload"
//               type="file"
//               onChange={handleFileChange}
//             />
//             <label htmlFor="team-member-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>
//                 Choose Image
//               </Button>
//             </label>

//             {selectedFile && (
//               <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>
//                 {selectedFile.name}
//               </Typography>
//             )}
//           </Box>

//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 variant="outlined"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="Post"
//                 variant="outlined"
//                 value={post}
//                 onChange={(e) => setPost(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 label="City"
//                 variant="outlined"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//               />
//             </Grid>
//           </Grid>

//           <Button
//             variant="contained"
//             onClick={handleAddMember}
//             sx={{ bgcolor: 'black', color: 'white' }}
//           >
//             Add Mentor
//           </Button>

//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: 100, height: 100 }}
//                   //image={member.imageUrl} // Ensure your API returns image URL
//                   image={member.base64Image}
//                   alt={member.name}
//                 />
//                 <Box sx={{ ml: 2, flexGrow: 1 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//                 <Button
//                   variant="contained"
//                   color="error"
//                   onClick={() => handleOpenDeleteModal(member._id)}
//                 >
//                   Delete
//                 </Button>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Footer />

//       {/* Success Modal */}
//       <Dialog
//         open={successModal}
//         onClose={handleCloseModal}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Success!"}
//         </DialogTitle>
//         <DialogContent>
//           <Typography>Your mentor has been successfully added!</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary" autoFocus>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Delete Confirmation Modal */}
//       <Dialog
//         open={deleteModal}
//         onClose={handleCloseModal}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">
//           {"Confirm Deletion"}
//         </DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete this mentor?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDeleteMember} color="error" autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Mentor;


import React, { useState, useEffect } from 'react';
import { Delete as DeleteIcon } from '@mui/icons-material'; 
import { Button, Box, Typography, Card, CardMedia, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import axios from 'axios';

// Function to convert ArrayBuffer to Base64 string
const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const Mentor = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null); // ID of the mentor to delete
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar state
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors');
        const data = response.data.map((mentor) => {
          // Convert binary image data to base64
          const base64Image = `data:${mentor.image.contentType};base64,${arrayBufferToBase64(mentor.image.data.data)}`;
          return { ...mentor, base64Image }; // Add the base64Image field to each mentor
        });
        setTeamMembers(data); // Update state with the processed data
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);
 

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    // Validate file type
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (JPG, JPEG, PNG).');
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleAddMember = async () => {
    if (!selectedFile || !name || !post || !city) {
      alert('Please fill all fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('post', post);
    formData.append('city', city);
    formData.append('image', selectedFile);

    try {
      const response = await fetch('https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.text(); // Log the error response
        console.error('Error response from server:', errorData);
        throw new Error('Network response was not ok');
      }

      const newMember = await response.json();
      setTeamMembers([...teamMembers, newMember]);

      // Reset form fields
      setSelectedFile(null);
      setName('');
      setPost('');
      setCity('');

      // Show success snackbar
      setSnackbarMessage('Mentor added successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error uploading mentor:', error);
      alert('Failed to upload mentor data. Please try again.');
    }
  };

  const handleDeleteMember = async () => {
    try {
      const response = await fetch(`https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/mentors/${deleteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete mentor');
      }

      // Update the teamMembers state
      setTeamMembers((prevMembers) => prevMembers.filter((member) => member._id !== deleteId));

      // Close delete modal
      setDeleteModal(false);
    } catch (error) {
      console.error('Error deleting mentor:', error);
      alert('Failed to delete mentor. Please try again.');
    }
  };

  const handleOpenDeleteModal = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const handleCloseModal = () => {
    setSuccessModal(false);
    setDeleteModal(false);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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
              accept="image/jpeg, image/jpg, image/png"
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
            {teamMembers.map((member) => (
              <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100 }}
                  image={member.base64Image}
                  alt={member.name}
                />
                <Box sx={{ ml: 2, flexGrow: 1 }}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body1">{member.post}</Typography>
                  <Typography variant="body2">{member.city}</Typography>
                </Box>
                <Button
                  //variant="contained"
                  sx={{ color: 'red' }}
                  onClick={() => handleOpenDeleteModal(member._id)}
                >
                     <DeleteIcon />
                </Button>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        autoHideDuration={3000} // Snackbar will close after 3 seconds
      />

      {/* Success Modal */}
      <Dialog
        open={successModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Success!"}
        </DialogTitle>
        <DialogContent>
          <Typography>Your mentor has been successfully added!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog
        open={deleteModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Deletion"}
        </DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this mentor?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteMember} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Mentor;
