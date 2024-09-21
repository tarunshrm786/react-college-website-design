import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';

const AdminContactus = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px' }}>

          <Typography variant="h4" sx={{ mb: 2 }}>
            Admin Panel - Contact Us Form Management
          </Typography>

        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AdminContactus;

// import React, { useState } from 'react';
// import {
//   Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer,
//   Paper, TablePagination, InputBase, TableFooter
// } from '@mui/material';
// import { SaveAlt as PdfIcon } from '@mui/icons-material';
// import { GrDocumentExcel as ExcelIcon } from 'react-icons/gr';
// import Header from './header';
// import Footer from './footer';
// import Sidebar from './Sidebar';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';

// // Mock data for 50 users
// const initialUserData = Array.from({ length: 50 }, (_, i) => ({
//   enquiryFor: `Course ${i + 1}`,
//   name: `User ${i + 1}`,
//   email: `user${i + 1}@example.com`,
//   phone: `123456789${i}`,
//   course: `Course ${i % 5}`,
//   budget: `$${(i + 1) * 100}`,
//   duration: `${i % 12 + 1} months`,
// }));

// const AdminContactus = () => {
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [page, setPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [userData, setUserData] = useState(initialUserData);

//   // Function to handle page change
//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Function to handle rows per page change
//   const handleRowsPerPageChange = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   // Function to handle search input
//   const handleSearch = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filteredData = initialUserData.filter((user) =>
//       user.name.toLowerCase().includes(query) ||
//       user.email.toLowerCase().includes(query) ||
//       user.course.toLowerCase().includes(query) ||
//       user.phone.includes(query)
//     );
//     setUserData(filteredData);
//   };

//   // Function to generate PDF
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const tableColumn = ['Enquiry For', 'Name', 'Email', 'Phone', 'Course', 'Budget', 'Duration'];
//     const tableRows = userData.map(user => [
//       user.enquiryFor,
//       user.name,
//       user.email,
//       user.phone,
//       user.course,
//       user.budget,
//       user.duration,
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//     });

//     doc.save('contact_form_data.pdf');
//   };

//   // Function to generate Excel sheet
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

//         <Box sx={{ flexGrow: 1, p: 4, marginTop: '55px', mx: { xs: 2, sm: 4, md: 6 } }}>
//           <Typography variant="h4" sx={{ mb: 2 }}>
//             Admin Panel - Contact Us Form Management
//           </Typography>

//           {/* Icons for PDF and Excel download */}
//           <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
//             <IconButton onClick={downloadPDF} color="primary" aria-label="Download as PDF">
//               <PdfIcon />
//             </IconButton>
//             <IconButton onClick={downloadExcel} color="primary" aria-label="Download as Excel">
//               <ExcelIcon size={24} />
//             </IconButton>

//             {/* Search Input */}
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

//           {/* Responsive Table with Horizontal Scroll */}
//           <TableContainer
//             component={Paper}
//             sx={{
//               overflowX: 'auto', // Enables horizontal scrolling
//               borderRadius: 2,
//               boxShadow: 2,
//               marginBottom: 4, // Adds space below the table
//             }}
//           >
//             <Table
//               sx={{
//                 minWidth: 650, // Ensures table doesn't collapse on small screens
//                 width: '100%',  // Forces table to fill the container
//                 border: '1px solid #ccc', // Adds border to table
//               }}
//               aria-label="contact form data"
//             >
//               <TableHead>
//                 <TableRow>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Enquiry For</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Name</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Email</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Phone</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Course</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Budget</TableCell>
//                   <TableCell sx={{ border: '1px solid #ccc' }}>Duration</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
//                   <TableRow key={index}>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.enquiryFor}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.phone}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.course}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.budget}</TableCell>
//                     <TableCell sx={{ border: '1px solid #ccc' }}>{user.duration}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>

//           {/* Table Pagination */}
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

//       <Footer />
//     </Box>
//   );
// };

// export default AdminContactus;
