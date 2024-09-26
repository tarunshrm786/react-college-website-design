// import React, { useState } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Paper,
//   Grid,
// } from '@mui/material';
// import Header from './header'; // Adjust the path as necessary
// import Footer from './footer'; // Adjust the path as necessary
// import Sidebar from './Sidebar'; // Adjust the path as necessary

// const AdminStudentPortal = () => {
//   const [studentId, setStudentId] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

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
//                 Student Portal
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
//       </Container>
//       <Footer style={{ marginTop: 'auto' }} /> {/* Footer fixed at the bottom */}
//     </div>
//   );
// };

// export default AdminStudentPortal;

import React, { useState, useEffect } from 'react'; // Import useEffect
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import Header from './header'; // Adjust the path as necessary
import Footer from './footer'; // Adjust the path as necessary
import Sidebar from './Sidebar'; // Adjust the path as necessary
import { fetchStudents } from '../../api/api'; // Adjust the path to your API file

const AdminStudentPortal = () => {
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      studentId,
      name,
      email,
      password,
    });
  };

  // Use useEffect to fetch students data on component mount
  useEffect(() => {
    const loadStudents = async () => {
      try {
        const students = await fetchStudents(); // Fetching students
        console.log('Fetched students:', students); // Log fetched data to console
      } catch (error) {
        console.error('Error fetching students:', error); // Handle error
      }
    };

    loadStudents(); // Call the fetch function
  }, []); // Empty dependency array to run only on mount

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sidebar />
      <Container
        maxWidth="sm"
        style={{ marginLeft: 'auto', marginRight: 'auto', flex: 1 }}
      >
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
                  style={{ backgroundColor: 'black', color: 'white' }} // Set button to black
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
      <Footer style={{ marginTop: 'auto' }} /> {/* Footer fixed at the bottom */}
    </div>
  );
};

export default AdminStudentPortal;
