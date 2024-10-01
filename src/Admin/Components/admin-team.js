// import React, { useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia, TextField, Grid } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleAddMember = () => {
//     if (!selectedFile || !name || !post || !city) {
//       alert('Please fill all fields and select an image.');
//       return;
//     }

//     const imageUrl = URL.createObjectURL(selectedFile);
//     const newMember = { name, post, city, imageUrl };
//     setTeamMembers([...teamMembers, newMember]);
    
//     // Reset form fields
//     setSelectedFile(null);
//     setName('');
//     setPost('');
//     setCity('');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />

//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Team Management
//           </Typography>

//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/*"
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
//             Add Team Member
//           </Button>

//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member, index) => (
//               <Card key={index} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: 100, height: 100 }}
//                   image={member.imageUrl}
//                   alt={member.name}
//                 />
//                 <Box sx={{ ml: 2 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Footer />
//     </Box>
//   );
// };

// export default Team;

// import React, { useEffect, useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import axios from 'axios';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';

// const API_ENDPOINTS = {
//   GET_MENTORS: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   ADD_MENTOR: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   DELETE_MENTOR: (id) => `https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams/${id}`,
// };

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);

//   // Fetch team members from the API
//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
//       const mentors = response.data.map((mentor) => ({
//         ...mentor,
//         imageUrl: `data:${mentor.image.contentType};base64,${arrayBufferToBase64(mentor.image.data.data)}`,
//       }));
//       setTeamMembers(mentors);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   // Utility function to convert ArrayBuffer to Base64
//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return window.btoa(binary);
//   };

//   // Add a team member
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

//     try {
//       await axios.post(API_ENDPOINTS.ADD_MENTOR, formData);
//       fetchMentors(); // Refresh the list after adding
//       resetForm();
//     } catch (error) {
//       console.error('Error adding team member:', error);
//     }
//   };

//   // Handle deletion of a team member
//   const handleDeleteMember = async () => {
//     try {
//       await axios.delete(API_ENDPOINTS.DELETE_MENTOR(memberToDelete._id));
//       setOpenDeleteModal(false);
//       fetchMentors(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting team member:', error);
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setSelectedFile(null);
//     setName('');
//     setPost('');
//     setCity('');
//   };

//   // Open delete confirmation modal
//   const handleOpenDeleteModal = (member) => {
//     setMemberToDelete(member);
//     setOpenDeleteModal(true);
//   };

//   // Close delete confirmation modal
//   const handleCloseDeleteModal = () => {
//     setOpenDeleteModal(false);
//     setMemberToDelete(null);
//   };

//   // Fetch mentors on component mount
//   useEffect(() => {
//     fetchMentors();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>Team Management</Typography>
//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/*"
//               style={{ display: 'none' }}
//               id="team-member-upload"
//               type="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <label htmlFor="team-member-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>Choose Image</Button>
//             </label>
//             {selectedFile && <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>{selectedFile.name}</Typography>}
//           </Box>
//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Post" variant="outlined" value={post} onChange={(e) => setPost(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
//             </Grid>
//           </Grid>
//           <Button variant="contained" onClick={handleAddMember} sx={{ bgcolor: 'black', color: 'white' }}>Add Team Member</Button>
//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia component="img" sx={{ width: 100, height: 100 }} image={member.imageUrl} alt={member.name} />
//                 <Box sx={{ ml: 2 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                   <Button variant="outlined" color="error" onClick={() => handleOpenDeleteModal(member)}>Delete</Button>
//                 </Box>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//       <Footer />

//       {/* Delete Confirmation Modal */}
//       <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
//         <DialogTitle>Delete Team Member</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete {memberToDelete?.name}?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDeleteModal} color="primary">Cancel</Button>
//           <Button onClick={handleDeleteMember} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Team;

// import React, { useEffect, useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material'; // Import the delete icon
// import axios from 'axios';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';

// const API_ENDPOINTS = {
//   GET_MENTORS: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   ADD_MENTOR: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   DELETE_MENTOR: (id) => `https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams/${id}`,
// };

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false); // State for snackbar

//   // Fetch team members from the API
//   const fetchMentors = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINTS.GET_MENTORS);
//       const mentors = response.data.map((mentor) => ({
//         ...mentor,
//         imageUrl: `data:${mentor.image.contentType};base64,${arrayBufferToBase64(mentor.image.data.data)}`,
//       }));
//       setTeamMembers(mentors);
//     } catch (error) {
//       console.error('Error fetching mentors:', error);
//     }
//   };

//   // Utility function to convert ArrayBuffer to Base64
//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return window.btoa(binary);
//   };

//   // Add a team member
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

//     try {
//       await axios.post(API_ENDPOINTS.ADD_MENTOR, formData);
//       fetchMentors(); // Refresh the list after adding
//       resetForm();
//       setOpenSnackbar(true); // Open snackbar on successful addition
//     } catch (error) {
//       console.error('Error adding team member:', error);
//     }
//   };

//   // Handle deletion of a team member
//   const handleDeleteMember = async () => {
//     try {
//       await axios.delete(API_ENDPOINTS.DELETE_MENTOR(memberToDelete._id));
//       setOpenDeleteModal(false);
//       fetchMentors(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting team member:', error);
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setSelectedFile(null);
//     setName('');
//     setPost('');
//     setCity('');
//   };

//   // Open delete confirmation modal
//   const handleOpenDeleteModal = (member) => {
//     setMemberToDelete(member);
//     setOpenDeleteModal(true);
//   };

//   // Close delete confirmation modal
//   const handleCloseDeleteModal = () => {
//     setOpenDeleteModal(false);
//     setMemberToDelete(null);
//   };

//   // Fetch mentors on component mount
//   useEffect(() => {
//     fetchMentors();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>Team Management</Typography>
//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/*"
//               style={{ display: 'none' }}
//               id="team-member-upload"
//               type="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <label htmlFor="team-member-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>Choose Image</Button>
//             </label>
//             {selectedFile && <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>{selectedFile.name}</Typography>}
//           </Box>
//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Post" variant="outlined" value={post} onChange={(e) => setPost(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
//             </Grid>
//           </Grid>
//           <Button variant="contained" onClick={handleAddMember} sx={{ bgcolor: 'black', color: 'white' }}>Add Team Member</Button>
//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia component="img" sx={{ width: 100, height: 100 }} image={member.imageUrl} alt={member.name} />
//                 <Box sx={{ ml: 2, flexGrow: 1 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//                 <Button onClick={() => handleOpenDeleteModal(member)} sx={{ color: 'red' }}>
//                   <DeleteIcon />
//                 </Button>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//       <Footer />

//       {/* Delete Confirmation Modal */}
//       <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
//         <DialogTitle>Delete Team Member</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete {memberToDelete?.name}?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDeleteModal} color="primary">Cancel</Button>
//           <Button onClick={handleDeleteMember} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Snackbar */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message="Team member added successfully!"
//       />
//     </Box>
//   );
// };

// export default Team;

// import React, { useEffect, useState } from 'react';
// import { Button, Box, Typography, Card, CardMedia, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';
// import axios from 'axios';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';

// const API_ENDPOINTS = {
//   GET_TEAMS: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   ADD_TEAM_MEMBER: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   DELETE_TEAM_MEMBER: (id) => `https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams/${id}`,
// };

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   // Fetch team members from the API
//   const fetchTeamMembers = async () => {
//     try {
//       const response = await axios.get(API_ENDPOINTS.GET_TEAMS);
//       console.log('Team Dta comi......', response);
//       const members = response.data.map((member) => ({
//         ...member,
//         imageUrl: `data:${member.image.contentType};base64,${arrayBufferToBase64(member.image.data.data)}`,
//       }));
//       setTeamMembers(members);
//     } catch (error) {
//       console.error('Error fetching team members:', error);
//     }
//   };

//   // Utility function to convert ArrayBuffer to Base64
//   const arrayBufferToBase64 = (buffer) => {
//     let binary = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//       binary += String.fromCharCode(bytes[i]);
//     }
//     return window.btoa(binary);
//   };

//   // Add a team member
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

//     try {
//       await axios.post(API_ENDPOINTS.ADD_TEAM_MEMBER, formData);
//       fetchTeamMembers(); // Refresh the list after adding
//       resetForm();
//       setOpenSnackbar(true); // Open snackbar on successful addition
//     } catch (error) {
//       console.error('Error adding team member:', error);
//     }
//   };

//   // Handle deletion of a team member
//   const handleDeleteMember = async () => {
//     try {
//       await axios.delete(API_ENDPOINTS.DELETE_TEAM_MEMBER(memberToDelete._id));
//       setOpenDeleteModal(false);
//       fetchTeamMembers(); // Refresh the list after deletion
//     } catch (error) {
//       console.error('Error deleting team member:', error);
//     }
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setSelectedFile(null);
//     setName('');
//     setPost('');
//     setCity('');
//   };

//   // Open delete confirmation modal
//   const handleOpenDeleteModal = (member) => {
//     setMemberToDelete(member);
//     setOpenDeleteModal(true);
//   };

//   // Close delete confirmation modal
//   const handleCloseDeleteModal = () => {
//     setOpenDeleteModal(false);
//     setMemberToDelete(null);
//   };

//   // Fetch team members on component mount
//   useEffect(() => {
//     fetchTeamMembers();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>Team Management</Typography>
//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/*"
//               style={{ display: 'none' }}
//               id="team-member-upload"
//               type="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <label htmlFor="team-member-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>Choose Image</Button>
//             </label>
//             {selectedFile && <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>{selectedFile.name}</Typography>}
//           </Box>
//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Post" variant="outlined" value={post} onChange={(e) => setPost(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
//             </Grid>
//           </Grid>
//           <Button variant="contained" onClick={handleAddMember} sx={{ bgcolor: 'black', color: 'white' }}>Add Team Member</Button>
//           {/* <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia component="img" sx={{ width: 100, height: 100 }} image={member.imageUrl} alt={member.name} />
//                 <Box sx={{ ml: 2, flexGrow: 1 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//                 <Button onClick={() => handleOpenDeleteModal(member)} sx={{ color: 'red' }}>
//                   <DeleteIcon />
//                 </Button>
//               </Card>
//             ))}
//           </Box> */}

//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: 100, height: 100 }}
//                   image={member.imageUrl}
//                   alt={member.name}
//                 />
//                 <Box sx={{ ml: 2, flexGrow: 1 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//                 <Button
//                   //variant="contained"
//                   sx={{ color: 'red' }}
//                   onClick={() => handleOpenDeleteModal(member._id)}
//                 >
//                      <DeleteIcon />
//                 </Button>
//               </Card>
//             ))}
//           </Box>


//         </Box>
//       </Box>
//       <Footer />

//       {/* Delete Confirmation Modal */}
//       <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
//         <DialogTitle>Delete Team Member</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete {memberToDelete?.name}?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDeleteModal} color="primary">Cancel</Button>
//           <Button onClick={handleDeleteMember} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Snackbar */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message="Team member added successfully!"
//       />
//     </Box>
//   );
// };

// export default Team;


// import React, { useEffect, useState } from 'react';
// import {
//   Button,
//   Box,
//   Typography,
//   Card,
//   CardMedia,
//   TextField,
//   Grid,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Snackbar,
// } from '@mui/material';
// import { Delete as DeleteIcon } from '@mui/icons-material';
// import { fetchTeams } from '../../api/api'; // Adjust the import path as necessary
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import axios from 'axios';

// const API_ENDPOINTS = {
//   ADD_TEAM_MEMBER: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
//   DELETE_TEAM_MEMBER: (id) => `https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams/${id}`,
// };

// const Team = () => {
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [name, setName] = useState('');
//   const [post, setPost] = useState('');
//   const [city, setCity] = useState('');
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const [memberToDelete, setMemberToDelete] = useState(null);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [snackbar, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   // Fetch team members from the API using the fetchTeams function
//   const fetchTeamMembers = async () => {
//     try {
//       const members = await fetchTeams();
//       setTeamMembers(members);
//     } catch (error) {
//       console.error('Error fetching team members:', error);
//     }
//   };

//   // Add a team member
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

//     try {
//       await axios.post(API_ENDPOINTS.ADD_TEAM_MEMBER, formData);
//       fetchTeamMembers(); // Refresh the list after adding
//       resetForm();
//       setOpenSnackbar(true); // Open snackbar on successful addition
//     } catch (error) {
//       console.error('Error adding team member:', error);
//     }
//   };

//   // // Handle deletion of a team member
//   // const handleDeleteMember = async () => {
//   //   try {
//   //     await axios.delete(API_ENDPOINTS.DELETE_TEAM_MEMBER(memberToDelete._id));
//   //     setOpenDeleteModal(false);
//   //     fetchTeamMembers(); // Refresh the list after deletion
//   //   } catch (error) {
//   //     console.error('Error deleting team member:', error);
//   //   }
//   // };

//   const handleDeleteMember = async () => {
//     try {
//       await axios.delete(API_ENDPOINTS.DELETE_TEAM_MEMBER(memberToDelete._id));
//       setOpenDeleteModal(false);
//       fetchTeamMembers(); // Refresh the list after deletion
      
//       // Set Snackbar message and open it
//       setSnackbarMessage('Team deleted successfully!');
//       setSnackbarOpen(true);

//     } catch (error) {
//       console.error('Error deleting team member:', error);
//       // Optionally, set an error message
//       setSnackbarMessage('Failed to delete team member. Please try again.');
//       setSnackbarOpen(true);
//     }
//   };

  
//   // Reset form fields
//   const resetForm = () => {
//     setSelectedFile(null);
//     setName('');
//     setPost('');
//     setCity('');
//   };

//   // Open delete confirmation modal
//   const handleOpenDeleteModal = (member) => {
//     setMemberToDelete(member);
//     setOpenDeleteModal(true);
//   };

//   // Close delete confirmation modal
//   const handleCloseDeleteModal = () => {
//     setOpenDeleteModal(false);
//     setMemberToDelete(null);
//   };

//   // Fetch team members on component mount
//   useEffect(() => {
//     fetchTeamMembers();
//   }, []);

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />
//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>Team Management</Typography>
//           <Box sx={{ mb: 4 }}>
//             <input
//               accept="image/*"
//               style={{ display: 'none' }}
//               id="team-member-upload"
//               type="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <label htmlFor="team-member-upload">
//               <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>Choose Image</Button>
//             </label>
//             {selectedFile && <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>{selectedFile.name}</Typography>}
//           </Box>
//           <Grid container spacing={2} sx={{ mb: 4 }}>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="Post" variant="outlined" value={post} onChange={(e) => setPost(e.target.value)} />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
//             </Grid>
//           </Grid>
//           <Button variant="contained" onClick={handleAddMember} sx={{ bgcolor: 'black', color: 'white' }}>Add Team Member</Button>

//           <Box sx={{ mt: 4 }}>
//             {teamMembers.map((member) => (
//               <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: 100, height: 100 }}
//                   image={member.imageUrl} // Use base64Image from the fetched data
//                   alt={member.name}
//                 />
//                 <Box sx={{ ml: 2, flexGrow: 1 }}>
//                   <Typography variant="h6">{member.name}</Typography>
//                   <Typography variant="body1">{member.post}</Typography>
//                   <Typography variant="body2">{member.city}</Typography>
//                 </Box>
//                 <Button
//                   sx={{ color: 'red' }}
//                   onClick={() => handleOpenDeleteModal(member)}
//                 >
//                   <DeleteIcon />
//                 </Button>
//               </Card>
//             ))}
//           </Box>

//         </Box>
//       </Box>
//       <Footer />

      

//       {/* Delete Confirmation Modal */}
//       <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
//         <DialogTitle>Delete Team Member</DialogTitle>
//         <DialogContent>
//           <Typography>Are you sure you want to delete {memberToDelete?.name}?</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDeleteModal} color="primary">Cancel</Button>
//           <Button onClick={handleDeleteMember} color="error">Delete</Button>
//         </DialogActions>
//       </Dialog>

//       {/* Success Snackbar */}
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={() => setOpenSnackbar(false)}
//         message="Team member added successfully!"
//       />
//     </Box>
//   );
// };

// export default Team;


import React, { useEffect, useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Card,
  CardMedia,
  TextField,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { fetchTeams } from '../../api/api'; // Adjust the import path as necessary
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import axios from 'axios';

const API_ENDPOINTS = {
  ADD_TEAM_MEMBER: 'https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams',
  DELETE_TEAM_MEMBER: (id) => `https://nad-api-tarunshrm768gmailcoms-projects.vercel.app/api/teams/${id}`,
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // Fetch team members from the API using the fetchTeams function
  const fetchTeamMembers = async () => {
    try {
      const members = await fetchTeams();
      setTeamMembers(members);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  // Add a team member
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
      await axios.post(API_ENDPOINTS.ADD_TEAM_MEMBER, formData);
      fetchTeamMembers(); // Refresh the list after adding
      resetForm();
      setSnackbarMessage('Team member added successfully!');
      setOpenSnackbar(true); // Open snackbar on successful addition
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };

  // Handle deletion of a team member
  const handleDeleteMember = async () => {
    try {
      await axios.delete(API_ENDPOINTS.DELETE_TEAM_MEMBER(memberToDelete._id));
      setOpenDeleteModal(false);
      fetchTeamMembers(); // Refresh the list after deletion
      setSnackbarMessage('Team member deleted successfully!'); // Update snackbar message
      setOpenSnackbar(true); // Open snackbar on successful deletion
    } catch (error) {
      console.error('Error deleting team member:', error);
      setSnackbarMessage('Failed to delete team member. Please try again.'); // Update snackbar message
      setOpenSnackbar(true); // Open snackbar on error
    }
  };

  // Reset form fields
  const resetForm = () => {
    setSelectedFile(null);
    setName('');
    setPost('');
    setCity('');
  };

  // Open delete confirmation modal
  const handleOpenDeleteModal = (member) => {
    setMemberToDelete(member);
    setOpenDeleteModal(true);
  };

  // Close delete confirmation modal
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setMemberToDelete(null);
  };

  // Fetch team members on component mount
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>
          <Typography variant="h4" sx={{ mb: 2 }}>Team Management</Typography>
          <Box sx={{ mb: 4 }}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="team-member-upload"
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <label htmlFor="team-member-upload">
              <Button variant="contained" component="span" sx={{ bgcolor: 'black', color: 'white', mr: 2 }}>Choose Image</Button>
            </label>
            {selectedFile && <Typography variant="body2" sx={{ display: 'inline', mr: 2 }}>{selectedFile.name}</Typography>}
          </Box>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Post" variant="outlined" value={post} onChange={(e) => setPost(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="City" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)} />
            </Grid>
          </Grid>
          <Button variant="contained" onClick={handleAddMember} sx={{ bgcolor: 'black', color: 'white' }}>Add Team Member</Button>

          <Box sx={{ mt: 4 }}>
            {teamMembers.map((member) => (
              <Card key={member._id} sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100 }}
                  image={member.imageUrl} // Use base64Image from the fetched data
                  alt={member.name}
                />
                <Box sx={{ ml: 2, flexGrow: 1 }}>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body1">{member.post}</Typography>
                  <Typography variant="body2">{member.city}</Typography>
                </Box>
                <Button
                  sx={{ color: 'red' }}
                  onClick={() => handleOpenDeleteModal(member)}
                >
                  <DeleteIcon />
                </Button>
              </Card>
            ))}
          </Box>

        </Box>
      </Box>
      <Footer />

      {/* Delete Confirmation Modal */}
      <Dialog open={openDeleteModal} onClose={handleCloseDeleteModal}>
        <DialogTitle>Delete Team Member</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete {memberToDelete?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteModal} color="primary">Cancel</Button>
          <Button onClick={handleDeleteMember} color="error">Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage} // Use the snackbarMessage state for content
      />
    </Box>
  );
};

export default Team;
