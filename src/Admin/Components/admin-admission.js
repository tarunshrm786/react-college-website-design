import React, { useState } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, IconButton, TableContainer,
  Paper, TablePagination, InputBase
} from '@mui/material';
import { SaveAlt as PdfIcon } from '@mui/icons-material';
import { GrDocumentExcel as ExcelIcon } from 'react-icons/gr';
import Header from './header';
import Footer from './footer';
import Sidebar from './Sidebar';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Updated initial user data for the Admission Form
const initialUserData = Array.from({ length: 50 }, (_, i) => ({
  name: `Student ${i + 1}`,
  email: `student${i + 1}@example.com`,
  phone: `123456789${i}`,
  university: ['IIT Delhi', 'JNU', 'BHU', 'Jaipur National University'][i % 4],
  course: `Course ${i + 1}`,
  specialization: `Specialization ${i % 3 + 1}`,
  budget: `$${(i + 1) * 1000}`,
  examMode: i % 2 === 0 ? 'Online' : 'Offline',
}));

const AdminAdmission = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [userData, setUserData] = useState(initialUserData);

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
    const filteredData = initialUserData.filter((user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.university.toLowerCase().includes(query) ||
      user.phone.includes(query)
    );
    setUserData(filteredData);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Name', 'Email', 'Phone', 'University', 'Course', 'Specialization', 'Budget', 'Exam Mode'];
    const tableRows = userData.map(user => [
      user.name,
      user.email,
      user.phone,
      user.university,
      user.course,
      user.specialization,
      user.budget,
      user.examMode,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });

    doc.save('admission_data.pdf');
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(userData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Admission Data');
    XLSX.writeFile(workbook, 'admission_data.xlsx');
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
            Admission Form Management
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={downloadPDF} color="primary" aria-label="Download as PDF">
              <PdfIcon />
            </IconButton>
            <IconButton onClick={downloadExcel} color="primary" aria-label="Download as Excel">
              <ExcelIcon size={24} />
            </IconButton>

            <InputBase
              placeholder="Search students..."
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

          {/* Responsive Table */}
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
              aria-label="admission form data"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Name</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Email</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Phone</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>University</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Course</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Specialization</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Budget</TableCell>
                  <TableCell sx={{ border: '1px solid #ccc', backgroundColor: 'lightgrey' }}>Exam Mode</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {userData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.name}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.email}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.phone}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.university}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.course}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.specialization}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.budget}</TableCell>
                    <TableCell sx={{ border: '1px solid #ccc' }}>{user.examMode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

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
    </Box>
  );
};

export default AdminAdmission;
