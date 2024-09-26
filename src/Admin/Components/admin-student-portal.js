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
//     <div style={{ display: 'flex' }}>
//       <Sidebar />
//       <Container maxWidth="sm" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
//         <Header />
//         <Paper elevation={3} style={{ padding: '20px', marginTop: '90px' }}>
//           <Typography variant="h5" gutterBottom>
//             Admin Student Portal
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
//         <Footer />
//       </Container>
//     </div>
//   );
// };

// export default AdminStudentPortal;

import React, { useState } from 'react';
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
