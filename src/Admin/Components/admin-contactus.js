// import React, { useState, useEffect } from 'react';
// import {
//   Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer,
//   Paper, TablePagination, InputBase, CircularProgress, Snackbar, Alert
// } from '@mui/material';
// import { SaveAlt as PdfIcon } from '@mui/icons-material';
// import { GrDocumentExcel as ExcelIcon } from 'react-icons/gr';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';
// import axios from 'axios';

// const AdminContactus = () => {
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [page, setPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);

//   // Fetch data when component mounts using useEffect
//   useEffect(() => {
//     const fetchData = () => {
//       setLoading(true); // Start loading
//       axios.get('http://localhost:5000/api/contactus')
//         .then((response) => {
//           setUserData(response.data); // Set the fetched data
//           setLoading(false); // Stop loading
//         })
//         .catch((error) => {
//           console.error('Error fetching data:', error);
//           setLoading(false); // Stop loading in case of error
//         });
//     };

//     fetchData(); // Call the fetch function
//   }, []); // Empty dependency array ensures this runs only once when the component mounts

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleSearch = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filteredData = userData.filter((user) =>
//       user.name.toLowerCase().includes(query) ||
//       user.email.toLowerCase().includes(query) ||
//       user.course.toLowerCase().includes(query) ||
//       user.phone.includes(query)
//     );
//     if (filteredData.length === 0) {
//       setSnackbarOpen(true); // Show Snackbar when no results are found
//     }
//     setUserData(filteredData);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const tableColumn = ['Enquiry For', 'Name', 'Email', 'Phone', 'Course', 'Budget', 'Duration'];
//     const tableRows = userData.map(user => [
//       user.enquiryFor || '',
//       user.name,
//       user.email,
//       user.phone,
//       user.course,
//       user.budget || '',
//       user.duration || '',
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//     });

//     doc.save('contact_form_data.pdf');
//   };

//   const downloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(userData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Form Data');
//     XLSX.writeFile(workbook, 'contact_form_data.xlsx');
//   };

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header />
//       <Box sx={{ display: 'flex', flexGrow: 1 }}>
//         <Sidebar />

//         <Box
//           sx={{
//             flexGrow: 1,
//             p: 4,
//             marginTop: '55px',
//             mx: { xs: 2, sm: 4, md: 6 },
//             overflowX: 'hidden', // Prevent horizontal scrolling
//             '@media (max-width: 600px)': {
//               mx: 0, // Remove extra margins for small screens
//             },
//           }}
//         >
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Contact Us Form Management
//           </Typography>

//           <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={downloadPDF} color="primary" aria-label="Download as PDF">
//               <PdfIcon />
//             </IconButton>
//             <IconButton onClick={downloadExcel} color="primary" aria-label="Download as Excel">
//               <ExcelIcon size={24} />
//             </IconButton>

//             <InputBase
//               placeholder="Search users..."
//               value={searchQuery}
//               onChange={handleSearch}
//               sx={{
//                 ml: 2,
//                 px: 1,
//                 py: 0.5,
//                 border: '1px solid #ccc',
//                 borderRadius: '4px',
//                 width: '300px',
//               }}
//             />
//           </Box>

//           {/* Loader */}
//           {loading ? (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
//               <CircularProgress />
//             </Box>
//           ) : (
//             <TableContainer
//               component={Paper}
//               sx={{
//                 overflowX: 'auto',
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 marginBottom: 4,
//                 width: '100%', // Ensure full width
//                 '@media (max-width: 600px)': {
//                   width: '100%', // Full width for small screens
//                   minWidth: 'auto', // Avoid fixed minWidth on small screens
//                 },
//               }}
//             >
//               <Table
//                 sx={{
//                   minWidth: 650,
//                   width: '100%',
//                   border: '1px solid #ccc',
//                   '@media (max-width: 600px)': {
//                     minWidth: '100%', // Let it shrink for small screens
//                   },
//                 }}
//                 aria-label="contact form data"
//               >
//                 <TableHead>
//                   <TableRow>
//                     <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Name</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Email</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Phone</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Course</TableCell>
//                   </TableRow>
//                 </TableHead>

//                 <TableBody>
//                   {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
//                     <TableRow key={index}>
//                       <TableCell sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
//                       <TableCell sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
//                       <TableCell sx={{ border: '1px solid #ccc' }}>{user.phone}</TableCell>
//                       <TableCell sx={{ border: '1px solid #ccc' }}>{user.course}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           )}

//           <TablePagination
//             rowsPerPageOptions={[10, 25, 50]}
//             component="div"
//             count={userData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handlePageChange}
//             onRowsPerPageChange={handleRowsPerPageChange}
//           />
//         </Box>
//       </Box>

//       <Footer sx={{ marginBottom: 0 }} />

//       {/* Snackbar for no search results */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={3000}
//         onClose={() => setSnackbarOpen(false)}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       >
//         <Alert onClose={() => setSnackbarOpen(false)} severity="info">
//           No results found!
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default AdminContactus;

import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer,
  Paper, TablePagination, InputBase, CircularProgress, Snackbar, Alert
} from '@mui/material';
import { SaveAlt as PdfIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { GrDocumentExcel as ExcelIcon } from 'react-icons/gr';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import axios from 'axios';

const AdminContactus = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

  // Fetch data when component mounts using useEffect
  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios.get('http://localhost:5000/api/contactus')
        .then((response) => {
          setUserData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredData = userData.filter((user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.course.toLowerCase().includes(query) ||
      user.phone.includes(query)
    );
    if (filteredData.length === 0) {
      setSnackbarOpen(true);
      setSnackbarMessage('No results found!');
      setSnackbarSeverity('info');
    }
    setUserData(filteredData);
  };

  // Handle Delete API call
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/contactus/${id}`)
      .then((response) => {
        setUserData((prevData) => prevData.filter((user) => user._id !== id)); // Filter out deleted record
        setSnackbarOpen(true);
        setSnackbarMessage('Record deleted successfully!');
        setSnackbarSeverity('success');
      })
      .catch((error) => {
        console.error('Error deleting record:', error);
        setSnackbarOpen(true);
        setSnackbarMessage('Failed to delete the record!');
        setSnackbarSeverity('error');
      });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Enquiry For', 'Name', 'Email', 'Phone', 'Course', 'Budget', 'Duration'];
    const tableRows = userData.map(user => [
      user.enquiryFor || '',
      user.name,
      user.email,
      user.phone,
      user.course,
      user.budget || '',
      user.duration || '',
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('contact_form_data.pdf');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Form Data');
    XLSX.writeFile(workbook, 'contact_form_data.xlsx');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />

        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            marginTop: '55px',
            mx: { xs: 2, sm: 4, md: 6 },
            overflowX: 'hidden',
            '@media (max-width: 600px)': {
              mx: 0,
            },
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Contact Us Form Management
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={downloadPDF} color="primary" aria-label="Download as PDF">
              <PdfIcon />
            </IconButton>
            <IconButton onClick={downloadExcel} color="primary" aria-label="Download as Excel">
              <ExcelIcon size={24} />
            </IconButton>

            <InputBase
              placeholder="Search users..."
              value={searchQuery}
              onChange={handleSearch}
              sx={{
                ml: 2,
                px: 1,
                py: 0.5,
                border: '1px solid #ccc',
                borderRadius: '4px',
                width: '300px',
              }}
            />
          </Box>

          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
              <CircularProgress />
            </Box>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                overflowX: 'auto',
                borderRadius: 2,
                boxShadow: 2,
                marginBottom: 4,
                width: '100%',
                '@media (max-width: 600px)': {
                  width: '100%',
                  minWidth: 'auto',
                },
              }}
            >
              <Table
                sx={{
                  minWidth: 650,
                  width: '100%',
                  border: '1px solid #ccc',
                  '@media (max-width: 600px)': {
                    minWidth: '100%',
                  },
                }}
                aria-label="contact form data"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Name</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Email</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Phone</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Course</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Actions</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.phone}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>{user.course}</TableCell>
                      <TableCell sx={{ border: '1px solid #ccc' }}>
                        <IconButton
                          color="error"
                          onClick={() => handleDelete(user._id)}
                          aria-label="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </Box>
      </Box>

      <Footer sx={{ marginBottom: 0 }} />

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminContactus;
