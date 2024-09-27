// import React, { useState, useEffect } from 'react'; // Import useEffect
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableSortLabel,
// } from '@mui/material';
// import Header from './header'; // Adjust the path as necessary
// import Footer from './footer'; // Adjust the path as necessary
// import Sidebar from './Sidebar'; // Adjust the path as necessary
// import { fetchStudents } from '../../api/api'; // Adjust the path to your API file

// const AdminStudentPortal = () => {
//   const [studentId, setStudentId] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [students, setStudents] = useState([]); // State for students

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({
//       studentId,
//       name,
//       email,
//       password,
//     });
//   };

//   // Use useEffect to fetch students data on component mount
//   useEffect(() => {
//     const loadStudents = async () => {
//       try {
//         const fetchedStudents = await fetchStudents(); // Fetching students
//         setStudents(fetchedStudents); // Set fetched students to state
//         console.log('Fetched students:', fetchedStudents); // Log fetched data to console
//       } catch (error) {
//         console.error('Error fetching students:', error); // Handle error
//       }
//     };

//     loadStudents(); // Call the fetch function
//   }, []); // Empty dependency array to run only on mount

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Sidebar />
//       <Container
//         maxWidth="sm"
//         style={{ marginLeft: 'auto', marginRight: 'auto', flex: 1 }}
//       >
//         <Header />
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '90px' }}>
//           <Typography variant="h5" gutterBottom>
//             Student Portal
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Student ID"
//                   variant="outlined"
//                   value={studentId}
//                   onChange={(e) => setStudentId(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   variant="outlined"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   style={{ backgroundColor: 'black', color: 'white' }} // Set button to black
//                   fullWidth
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>

//         {/* Responsive Table for displaying fetched students */}
             
// <Paper elevation={3} style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
//   <Typography variant="h6" gutterBottom>
//     Students List
//   </Typography>
//   <TableContainer>
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell><TableSortLabel>Student ID</TableSortLabel></TableCell>
//           <TableCell><TableSortLabel>Name</TableSortLabel></TableCell>
//           <TableCell><TableSortLabel>Email</TableSortLabel></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {students.map((student) => (
//           <TableRow key={student._id}>
//             <TableCell>{student.studentId}</TableCell> 
//             <TableCell>{student.name}</TableCell>
//             <TableCell>{student.email}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// </Paper>


//       </Container>
//       <Footer style={{ marginTop: 'auto' }} /> {/* Footer fixed at the bottom */}
//     </div>
//   );
// };

// export default AdminStudentPortal;


// import React, { useState, useEffect } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableSortLabel,
// } from '@mui/material';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import { fetchStudents, signup } from '../../api/api'; // Adjust the path to your API file
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

// const AdminStudentPortal = () => {
//   const [studentId, setStudentId] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(false); // State for loader

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading

//     try {
//       const userData = { studentId, name, email, password }; // Prepare user data
//       await signup(userData); // Call signup API
//       toast.success('Signup successful!', { position: 'top-center' }); // Show success toast
//       // Clear form fields after successful submission
//       setStudentId('');
//       setName('');
//       setEmail('');
//       setPassword('');
//       // Optionally, refetch the students to update the list
//       const fetchedStudents = await fetchStudents();
//       setStudents(fetchedStudents);
//     } catch (error) {
//       toast.error('Signup failed, please try again.', { position: 'top-center' }); // Show error toast
//       console.error('Signup error:', error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     const loadStudents = async () => {
//       try {
//         const fetchedStudents = await fetchStudents();
//         setStudents(fetchedStudents);
//       } catch (error) {
//         console.error('Error fetching students:', error);
//       }
//     };

//     loadStudents();
//   }, []);

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Sidebar />
//       <Container maxWidth="sm" style={{ marginLeft: 'auto', marginRight: 'auto', flex: 1 }}>
//         <Header />
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '90px' }}>
//           <Typography variant="h5" gutterBottom>
//             Student Portal
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Student ID"
//                   variant="outlined"
//                   value={studentId}
//                   onChange={(e) => setStudentId(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Name"
//                   variant="outlined"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Email"
//                   variant="outlined"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Password"
//                   variant="outlined"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   style={{ backgroundColor: 'black', color: 'white' }}
//                   fullWidth
//                   disabled={loading} // Disable button while loading
//                 >
//                   {loading ? 'Submitting...' : 'Submit'} {/* Change button text while loading */}
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Paper>

//         {/* Responsive Table for displaying fetched students */}
//         <Paper elevation={3} style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
//           <Typography variant="h6" gutterBottom>
//             Students List
//           </Typography>
//           <TableContainer>
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <TableCell><TableSortLabel>Student ID</TableSortLabel></TableCell>
//                   <TableCell><TableSortLabel>Name</TableSortLabel></TableCell>
//                   <TableCell><TableSortLabel>Email</TableSortLabel></TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {students.map((student) => (
//                   <TableRow key={student._id}>
//                     <TableCell>{student.studentId}</TableCell> 
//                     <TableCell>{student.name}</TableCell>
//                     <TableCell>{student.email}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>

//         <ToastContainer /> {/* Add ToastContainer to display notifications */}
//       </Container>
//       <Footer style={{ marginTop: 'auto' }} />
//     </div>
//   );
// };

// export default AdminStudentPortal;

import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Modal,
} from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import { fetchStudents, signup } from '../../api/api'; // Adjust the path to your API file

const AdminStudentPortal = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false); // State for loader
  const [openModal, setOpenModal] = useState(false); // State for modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const userData = { studentId, name, email, password }; // Prepare user data
      await signup(userData); // Call signup API
      
      // Clear form fields after successful submission
      setStudentId('');
      setName('');
      setEmail('');
      setPassword('');

      // Optionally, refetch the students to update the list
      const fetchedStudents = await fetchStudents();
      setStudents(fetchedStudents);

      // Open the modal after successful signup
      setOpenModal(true);
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const fetchedStudents = await fetchStudents();
        setStudents(fetchedStudents);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    loadStudents();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sidebar />
      <Container maxWidth="sm" style={{ marginLeft: 'auto', marginRight: 'auto', flex: 1 }}>
        <Header />
        <Paper elevation={3} style={{ padding: '20px', marginTop: '90px' }}>
          <Typography variant="h5" gutterBottom>
            Student Portal
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Student ID"
                  variant="outlined"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ backgroundColor: 'black', color: 'white' }}
                  fullWidth
                  disabled={loading} // Disable button while loading
                >
                  {loading ? 'Submitting...' : 'Submit'} {/* Change button text while loading */}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        {/* Responsive Table for displaying fetched students */}
        <Paper elevation={3} style={{ marginTop: '20px', padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Students List
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><TableSortLabel>Student ID</TableSortLabel></TableCell>
                  <TableCell><TableSortLabel>Name</TableSortLabel></TableCell>
                  <TableCell><TableSortLabel>Email</TableSortLabel></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>{student.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        
        {/* Modal for displaying success message */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="success-modal-title"
          aria-describedby="success-modal-description"
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            outline: 'none'
          }}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
              <Typography id="success-modal-title" variant="h6">
                Student Created Successfully!
              </Typography>
              <Typography id="success-modal-description" style={{ margin: '20px 0' }}>
                The student has been successfully registered.
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white' }} onClick={handleCloseModal}>
                Close
              </Button>
            </Paper>
          </div>
        </Modal>
      </Container>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default AdminStudentPortal;
